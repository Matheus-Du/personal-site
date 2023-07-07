FROM python:3.8-alpine

WORKDIR /app

COPY requirements.txt /app
RUN pip3 install -r requirements.txt

COPY app.py /app

EXPOSE 5000

CMD ["flask", "run", "--debug", "--host", "0.0.0.0", "--port", "5000"]
