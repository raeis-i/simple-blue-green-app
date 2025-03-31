# Simple Blue-Green Deployment App

This is a simple Dockerized application designed to demonstrate the **Blue-Green Deployment** strategy. The app runs a web server that displays a **blue** or **green** version of the page, depending on the value of the `PAGE_COLOR` environment variable. This allows you to easily test the concept of blue-green deployment, where you have two identical environments (blue and green) and can switch between them without downtime.

## Features:

- **Blue-Green Deployment**: Easily switch between the blue and green versions of the application.
- **Simple Node.js App**: A lightweight Node.js-based app with no external dependencies.
- **Dockerized**: Runs inside a Docker container, making it easy to deploy and test in any environment.

## How to Use

### Running the App

To run the app with the **blue version** of the page(blue is default):

```bash
docker run -p 8080:8080  samraeisi/simple-blue-green-app:v1

docker run -p 8080:8080 -e PAGE_COLOR=blue samraeisi/simple-blue-green-app:v1
```

To run the app with the **green version** of the page:

```bash
docker run -p 8080:8080 -e PAGE_COLOR=green samraeisi/simple-blue-green-app:v1
```

### Building the Docker Image

If you want to build the Docker image locally, follow these steps:

```bash
git clone https://github.com/raeis-i/simple-blue-green-app.git
cd simple-blue-green-app
```

Build Docker image

```bash
docker build -t simple-blue-green-app:v1 .
```

To run the app with the blue version of the page:

```bash
docker run -p 8080:8080 -e PAGE_COLOR=blue simple-blue-green-app:v1
```

To run the app with the green version of the page:

```bash
docker run -p 8080:8080 -e PAGE_COLOR=green simple-blue-green-app:v1
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
