# Hex-to-RGB REST API

## Description

This project implements a JavaScript library that converts hexadecimal color values into RGB values. An Express REST API uses the library to provide the conversion through an HTTP request.

The project includes unit tests for the conversion function and integration tests for the REST API.

## Technologies

- JavaScript
- Node.js
- Express
- Mocha
- Chai
- Supertest

## Installation

Clone the repository and navigate to the project directory. Install the dependencies:

```bash
npm install
```

## Running the API

Start the server:

```bash
node src/server.js
```

The API runs at `http://localhost:3000`.

## API Usage

Send a GET request to:

`http://localhost:3000/api/hex-to-rgb?hex=%23FF8000`

Example response:

```json
{
  "hex": "#FF8000",
  "rgb": {
    "r": 255,
    "g": 128,
    "b": 0
  }
}
```

Valid input returns HTTP 200. Invalid or missing input returns HTTP 400.

## Running the Tests

Run all unit and integration tests:

```bash
npm test
```

The test suite checks valid color conversion, invalid input, missing input, HTTP status codes, and API response data.