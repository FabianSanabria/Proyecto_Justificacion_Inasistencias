FROM python:3.10.10-slim-buster
ENV PYTHONUNBUFFERED 1
WORKDIR /backend
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt
COPY . .
RUN python ./manage.py migrate
RUN python ./manage.py loaddata carreras.json
EXPOSE 8000
CMD ["python3","manage.py","runserver","0.0.0.0:8000"]
