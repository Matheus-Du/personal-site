# A Complete Guide to Building and Deploying a Website on Your Home Server

Taking the plunge from a cloud hosting provider such as Heroku to hosting your website on a home server can be daunting. From configuring your router to setting up a reverse proxy, there is a plethora of strange terms and new concepts to learn. With this guide, I'm hoping to provide an overview of the process and a rough roadmap to follow.

&nbsp;

## Prologue: Why host on a home server?

With the huge selection of cloud-based hosting providers available today, you might be questioning why a self-hosted solution would ever be useful. While it's true that self-hosting is not for everyone (or every website), there are a few advantages to consider:
1. **Cost**: If you already have a home server, hosting your website on it is essentially free. Even if you don't, a second-hand PC can be purchased for well under $100 thanks to COVID making office PCs essentially obsolete. This will be more than sufficient for hosting a small website or personal blog. Comparing this one-time fee to the monthly costs and variable pricing of a cloud hosting provider, the savings can be significant.
2. **Control**: With a self-hosted solution, you have complete control over your website and anything else you choose to host on your server. You can install whatever software you want, and configure it however you want. The usefulness of having this level of control may vary depending on your use case, but it's important to consider.
3. **Learning**: If you're interested in learning more about networking or server administration, self-hosting is a great way to get hands-on experience. You'll gain a better understanding of DNS, SSL/TLS, and other important networking concepts. Having an essentially wide-open playground to experiment in means the learning opportunities are endless.

## Part 1: Setting up your server

### Hardware

The first step is to choose a server to host your website on. If you already have a home server, you can skip this step. If not, you can choose to build your own PC or pick up a second-hand office PC for under $100. Whatever you choose, make sure your server is capable of running 24/7 and has enough storage for your website and any other files you want to host. You'll also likely want a machine with at least 8GB of RAM and an SSD for better performance and reliability. Your server should (obviously) also be able to connect to the internet/your local network via ethernet or WiFi.

### Operating System

Once you have your server, you'll need to install an operating system. I'll be using Ubuntu Server in this tutorial as it's well-supported and popular, so plenty of documentation can be found online. You can download the latest version from the [Ubuntu website](https://ubuntu.com/download/server). Once you've downloaded the ISO, you'll need to create a bootable USB drive. If you're using Windows, you can use [Rufus](https://rufus.ie/) to do this. If you're using macOS, you can use [Etcher](https://www.balena.io/etcher/). Plug your bootable USB into your server and boot from it in the BIOS. Check out the [Ubuntu server install guide](https://ubuntu.com/server/docs/installation) for detailed instructions on how to complete the installation.

### SSH

SSH (Secure SHell) is a way to access your server remotely from another PC. SSH should be enabled by default on Ubuntu Server, but you can check by running the following command on your server:
```bash
sudo systemctl status ssh
```
If SSH is not enabled, you can enable it by running `sudo systemctl enable ssh`. If you're using Linux or MacOS, you can then connect to your server by running `ssh <username>@<ip_address>` from another PC (replace `<ip_address>` with the local IP of your server).  You'll be prompted to enter your password, and then you'll be connected to your server. 

For this to work, you'll need to be on the same local network as your PC (check out the end of this blog for info on SSHing from outside networks). 

If you're using Windows, you can use [PuTTY](https://www.putty.org/) to SSH into your server, but you really should be using [WSL](https://learn.microsoft.com/en-us/windows/wsl/install) if you aren't already.

&nbsp;

## Part 2: Docker and Containerization

Now that we have a basic home server up-and-running, we can start to think about how we're going to host our website. While we could configure Nginx and our site without Docker, containerizing your site allows for easy deployment and management.

### Docker

[Docker](https://www.docker.com/) is a program that allows you to run single applications in individual containers. Each container is isolated from the rest of the system and has its own filesystem and network, allowing us to run multiple applications on the same server without having to worry about unintended interactions between programs. Docker can be difficult to understand at first, but it's extremely useful once you understand the basics. There are plenty of [great tutorials](https://docker-curriculum.com/) and [textbooks](https://www.manning.com/books/docker-in-action-second-edition) available if you want to learn more. For now, I'll assume you have a basic understand of Docker and know how to build and run containers from images.

If you're just getting started with Docker, I recommend checking out [portainer](https://www.portainer.io/), which can be run as a Docker container and provides a web UI for managing your containers. It's not necessary, but it makes managing and viewing your containers much easier.

### Containerizing our website

If you're just looking to host a static website, we can easily create a Dockerfile to build a container for our site. Check out the [Dockerfile](https://github.com/Matheus-Du/personal-site/blob/main/frontend/Dockerfile.prod) for this site for an example, or [this tutorial](https://mherman.org/blog/dockerizing-a-react-app/) if you want a full step-by-step walkthrough. We can then build and run our container with the following commands from the root directory of our project (where our Dockerfile is located):
```bash
docker build -t <image_name> \
    -f Dockerfile.prod .
docker run -d -p 3000:80 -u root \
    --restart=unless-stopped \
    <image_name>
```
Let's take a quick look at what these commands will do:
- `docker build -t <image_name> -f Dockerfile.prod .`: This command will build a Docker image from our Dockerfile. The `-t` flag allows us to specify a name for our image, and the `-f` flag allows us to specify the name of our Dockerfile. The `.` at the end of the command tells Docker to look for the Dockerfile in the current directory.
- `docker run -d -p 3000:80 -u root --restart=unless-stopped <image_name>`: This command will run our Docker image as a container. The `-rm` flag tells Docker to remove the container once it's stopped. The `-d` flag tells Docker to run the container in the background. The `-p` flag tells Docker to map port 3000 on our server to port 80 in our container. The `-u` flag tells Docker to run the container as root, which is necessary since we're changing the container `USER` in the Dockerfile (unless you're executing the `docker run` command as root). The `--restart=unless-stopped` flag tells Docker to restart the container if it crashes or is stopped. The `<image_name>` at the end of the command specifies which image to run.

The result should be that your static site can now be viewed from port 3000 on your server. If everything is working correctly, you should be able to navigate to `<server_local_ip>:3000` from your PC and see your site.

If you're planning on hosting a dynamic site, the containerization process is more complex and requires more advanced knowledge of Docker and Docker compose. For the sake of brevity, I won't cover this process, but there are plenty of [excellent tutorials](https://siddharth-lakhara.medium.com/dockerizing-a-full-stack-js-app-ceb99411996e) available online.

&nbsp;
## Part 3: Domains, DNS, and SSL/TLS

With our site now running on our server as a Docker container, we can start to think about how we're going to serve it to the public via the internet. Right now, the only people who can access our site are people on our local network. To make our site accessible to the public, we'll need to setup a custom domain and configure our DNS.

### Domains

The first thing every good website needs is a good domain name. If you already have a domain name, you can skip this step. If not, you'll need to purchase one from a domain registrar. I've previously used [Google Domains](https://domains.google/), but you'll likely have to find another option as Google Domains is [being acquired by Squarespace](https://www.prnewswire.com/news-releases/squarespace-enters-definitive-agreement-to-acquire-google-domains-assets-301852507.html) sometime in the future. [Namecheap](https://www.namecheap.com/) seems to be the least-expensive registrar I can find, but any legitimate registrar should work.

### Cloudflare

One of the big security issues with self-hosting a website is that anybody can view what IP address the domain redirects to. This means that, without some intermediary, anybody who knows about your website can also know your home IP address.

To avoid this, we'll use [Cloudflare](https://www.cloudflare.com/) as an intermediary. Cloudflare is a CDN (Content Delivery Network) that provides a variety of services, including DNS management, SSL/TLS certificates, and DDoS protection. The important feature for us is that Cloudflare also acts as a proxy, meaning all requests to your site will go through Cloudflare before reaching your server, hiding our home IP address from the outside world.

To get started, create a free account and add your site to the list of websites associated with your account. Cloudflare will then scan your DNS records and import them. You'll then need to change your nameservers to point to Cloudflare. This can be done by going to your domain registrar and changing the nameservers to the ones provided by Cloudflare. Once you've done this, you should see a green checkmark next to your domain in Cloudflare. This means that Cloudflare is now managing your DNS records. There's no need to worry about what this means yet, but we'll cover DNS records in the next section.

With Cloudflare setup, you can take a deeper look at the other features it provides from the dashboard. For now, we'll just focus on using Cloudflare for DNS resolution and SSL/TLS certificates, but you can also configure Cloudflare for many other purposes.

### DNS Resolution

After setting up Cloudflare, you'll be able to view your existing DNS records under the `DNS` tab on the left of the dashboard. On your first time visiting this page, you'll likely see a few DNS records that Cloudflare imported from your domain registrar. These records are used to point your domain to your public IP address. For now, the only record you need is a single `A` record with your domain name as the `Name` and your home IP address as the `IPv4 address` (if you don't know your public IP, just google "my ip"). Make sure that each DNS record is `proxied`, as this will hide your IP from people connecting to your site. You can delete any other records that Cloudflare imported. All this does is tell cloudflare to route any requests to your domain to your home IP address.

With DNS setup, your domain will now redirect to your home IP address. However, if you try to access your site, you'll likely get a 502 error. This is because we haven't configured our server to handle requests from Cloudflare yet. We'll cover this in Part 4, but first, there's one last thing we need to do in Cloudflare.

### SSL/TLS Certificates

If you have a website in the modern age, you'll need to have an SSL/TLS certificate. SSL/TLS certificates are used to encrypt traffic between your server and the client, preventing other people from intercepting and reading your traffic. SSL/TLS certificates are also used to verify that the server the client is connecting to is the correct server. Without an SSL/TLS certificate, your site will be marked as insecure by most browsers (this is the difference between http and https).

Cloudflare provides SSL/TLS certificates for all domains that use Cloudflare's nameservers. These certs are free, long-lasting (up to 15 years), and trusted by all browsers. To enable SSL/TLS certificates, go to the `SSL/TLS` tab on the left of the dashboard and select `Full (strict)` under the `Encryption mode` dropdown. This will enable SSL/TLS certificates for your site. You can also enable `Always use HTTPS` to force all traffic to your site to use HTTPS.

Within the `SSL/TLS` dropdown, navigate to the `Origin Server` page and create an Origin Certificate. List the hostnames you want the certificate to cover (your domain and any/all subdomains) and select `RSA` as the key type. Once you've created the certificate, Cloudflare will provide you with a private key and a certificate as `.pem` files. Save these onto your PC, and store a backup of them somewhere safe (archiving with a password using 7zip and storing the archive in the cloud is one secure option). We'll need these files in a minute when we configure our reverse proxy.

&nbsp;
## Putting Everything Together

With our website up and running on our local network and our domain pointing to our home IP address, the only thing left is to connect the two ends together. To do this, we'll need to cover two topics: port forwarding and reverse proxies.

### Port Forwarding

Port forwarding is the process of forwarding requests from a specific port on your router to a specific port on your home server. Incoming requests from the internet will be sent to your router through ports 443 (for secure web traffic) and 80 (for insecure web traffic). When our router recieves these requests, we'll need to tell it to send these requests to our server.

Setting up port forwarding is relatively easy, but the process varies depending on your router and ISP. To get started, find your ISPs instructions for port forwarding for your router, then forward ports 80 and 443 to your server's local IP address. If you need more info, [this guide](https://www.noip.com/support/knowledgebase/general-port-forwarding-guide/) provides a good overview of the process.

However, forwarding these ports still won't allow us to access our site from the internet since our server has no idea where to send the incoming requests. This is where reverse proxies come in.

### Reverse Proxies

A reverse proxy is a [web server](https://www.techtarget.com/whatis/definition/Web-server) that redirects incoming requests to other servers depending on what DNS record the request is for. At first this might seem unnecessary since we only have one server, but recall that Docker containers essentially act as their own independent systems. This means that we can run multiple containers on the same server, and use a reverse proxy to redirect requests to the correct container based on the DNS record.

It's possible to configure a web server from scratch using a systemd service or Docker image such as [Nginx](https://www.nginx.com/) or [Apache hhtpd](https://httpd.apache.org/), but the easiest way to get started is by using [Nginx proxy manager](https://nginxproxymanager.com/). This is an easy-to-use web UI for managing reverse proxies that can be run as a Docker container. To get started, take a look at the [Nginx proxy manager docs](https://nginxproxymanager.com/guide/#quick-setup) for setup instructions. Once you've setup the container on your home server, you can access the web UI by navigating to `<server_local_ip>:81` from your PC. You'll be prompted to create an admin account, after which you'll be redirected to the web UI.

The first thing we need to do is add our Cloudflare SSL cert to the proxy manager. Navigate to the `SSL Certificates` tab, then `Add SSL Certificate`. Select `Custom`, then add a name as well as your private key and certificate files that we downloaded from Cloudflare. Once you've done this, click `Save` and then `Apply Changes`. You should now see your SSL certificate listed under the `SSL Certificates` tab.

To setup our default domain, we need to create a new proxy host. Click on the `Proxy Hosts` tab on the dashboard, and then `Add Proxy Host`. Enter your `Domain Names`, in this case your default domain (i.e. `matheusdu.dev`), and then enter your server's local IP address as the `Forward Hostname/IP`. For the `Forward Port`, enter the port that your website's docker container is forwarded to (in our case, 3000). Navigate to the `SSL` section and select your SSL certificate from the dropdown. Enable the `Force SSL` and `HTTP/2 Support` options. Finally, click `Save`. Now your default domain should be pointing to the Docker container running your website.

With Nginx proxy manager, we've now pointed our domain to our Docker container without exposing any ports to the internet besides ports 443 and 80, both of which are protected by our Cloudflare CDN.

### The Fruits of Our Labor

After setting up our reverse proxy, we have finished the connection between our domain and our website running on our home server. If everything is working correctly, you should now be able to navigate to your domain and see your website. Congratulations, you've successfully setup a website on your home server!

&nbsp;
## Part 4: Addendum and Next Steps

### Indexing and SEO

Somewhat surprisingly, having your site be accessible via search is not a given. Google can take anywhere from weeks to months to index your site, and any changes made afterwards (e.g. a new blog post) can take just as long to be indexed. If you want your site to be indexed by search engines quickly, you'll need to submit your site to the search engine. For Google, you can use [Google search console](https://search.google.com/search-console/welcome). You'll need to verify that you own the domain by adding a TXT record to your DNS records via Cloudflare. Once you've done this, you can submit your site to Google for indexing. This process can take a few days, but once it's done, your site should be indexed by Google.

As for SEO, check out [lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) for a great tool for analyzing your site's SEO. Lighthouse will also rate your site's performance and You can also check out [this guide](https://www.searchenginejournal.com/seo-guide/) for a more in-depth look at SEO.

### SSH from outside networks

Setting up SSH to allow connections outside of the network is, at first glance, a trivial topic. All you'd need to do is forward port 22 from your home server and then connect to the server using your public IP address.

**Don't do this.** Allowing anyone on the internet to connect to your server via SSH is a terrible idea. Within a few minutes of opening any ports to the internet, you'll notice a significant increase in the number of people trying to connect to port 22 from all kinds of seedy locales. If you allow connections to port 22, it's only a matter of time before someone gains access to your server and does something malicious.

Instead of this, we'll need to use a Virtual Private Network (VPN) to connect to our home network from outside networks. This allows us to open only one port - the one used by the VPN - and then connect to our server through the VPN. This is far more secure and can be setup to run from your home server. Additionally, it provides a level of security when connecting to public networks, as you can route all your traffic through your home network, preventing anyone on the public network from intercepting your traffic.

Setting up a custom VPN is outside the scope of this article, but I recommend using OpenVPN as it's free and open-source. There are plenty of [tutorials](https://openvpn.net/community-resources/how-to/) for setting up a VPN, but I recommend [this script](https://www.cyberciti.biz/faq/howto-setup-openvpn-server-on-ubuntu-linux-14-04-or-16-04-lts/) for a quick and easy setup.

### Subdomains

If you want to host multiple sites on your home server, you can use subdomains to route requests to different containers. For example, you could have `blog.matheusdu.dev` route to a Docker container running a blog, and `matheusdu.dev` route to a container running a portfolio site. To do this, you'll need use Nginx proxy manager and create a new proxy host for each subdomain. The process is the same as creating a proxy host for your default domain, but you'll need to create a new proxy host for each subdomain you want to use. Just remember to create a new DNS record for each subdomain on Cloudflare.

### Some More Ideas

Now that you have a website running on your home server, you can start to think about what else you can do with it. Here are a few ideas to get you started:
- Host a [Wordpress](https://wordpress.org/download/) blog or other CMS at a blog subdomain
- Setup a file server for sharing files with friends and family using something like [Nextcloud](https://nextcloud.com/)
- Host a [Minecraft](https://minecraft.fandom.com/wiki/Tutorials/Setting_up_a_server#Docker) server for you and your friends
- Setup [Plex](https://hub.docker.com/r/linuxserver/plex) to stream your media library to any device with an internet connection
- Configure a [Bittorrent](https://hub.docker.com/r/linuxserver/qbittorrent) client to download torrents directly to your server (and then stream them on any device for free with Plex)

There are plenty of other things you can do with a home server, but these are just a few ideas to get you started. With a home server, you can host whatever you want, so get creative (just don't get your IP banned from Cloudflare).