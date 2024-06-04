# Use an official Python runtime as a parent image
FROM python:3.9

# Set environment variables
ENV PYTHONUNBUFFERED 1

# Set the working directory in the container
WORKDIR /code

# Install system dependencies
RUN apt-get update \
    && apt-get install -y default-libmysqlclient-dev \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Copy the current directory contents into the container at /code
COPY . /code/

# Install Python dependencies
RUN pip install --upgrade pip
RUN pip install -r requirements.txt
RUN pip install mysqlclient

CMD ["python3", "manage.py", "runserver", "0.0.0.0:8000"]