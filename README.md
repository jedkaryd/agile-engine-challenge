# Agile Engine Challenge
Rest API built in Node.js as a middleware to handle images from `http://interview.agileengine.com`.

## Requirements
For development, you will need Node.js (NVM installation recommended).

## Install
  $ git clone https://github.com/jedkaryd/agile-engine-challenge.git
  $ cd agile-engine-challenge
  $ npm install

## Running the project
  $ npm start

## Getting Started
  The API will be available on Port 3000 (`localhost:3000/`), change this configuration if you want to on `server.js` file.
  Hit the following endpoints to handle information:

  ### List all images

  This endpoint receives an optional parameter: `page` that allows to get paginated info, if not provided, the endpoint will return the first page.

  GET `localhost:3000/images`
  GET `localhost:3000/images?page=3`

  ### Retrieve an image

  This endpoint receives an `id` parameter and retrieves the image that matches with this id, if exists.
  GET `localhost:3000/images/12345`
