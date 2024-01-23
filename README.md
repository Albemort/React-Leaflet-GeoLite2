# Project Documentation: React-Leaflet-GeoLite2

## Overview

This project is a web application built using React and Leaflet to display location markers on a map. It leverages the MaxMind GeoIP2 library to obtain location data based on the client's IP address.

## Features

- **Map Display:** Utilizes the `react-leaflet` library to render an interactive map.
- **Location Markers:** Displays location markers on the map representing the geographical locations obtained from the MaxMind GeoIP2 library.
- **IP Address Retrieval:** Retrieves the client's IP address using the [ipify](https://www.ipify.org/) API.
- **Server-Side GeoIP:** Implements a server-side API (`/api/get_location`) to fetch detailed location information based on the client's IP address using MaxMind GeoIP2.

## Project Structure

The project is structured as follows:

- **Client-side (`/src`):**
  - `App.jsx`: React component managing the overall application structure.
  - `LocationList.jsx`: React component rendering a list of `LocationMarker` components.
  - `LocationMarker.jsx`: React component representing a location marker on the map.

- **Server-side (`/server`):**
  - `index.js`: Express server handling API requests and utilizing the MaxMind GeoIP2 library.

## Dependencies

Check `package.json` files.

## Setup

1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: `npm install` (both in the root and `server` directory)
3. Run the development server: `npm start`

## Usage

1. Open the application in your web browser.
2. The map will be centered on Finland, and location markers will be displayed based on the client's IP address.

## Configuration

- **GeoIP2 Database:**
  - The GeoIP2 database file (`GeoLite2-City.mmdb`) should be placed in the `server/data` directory. Not included in this repository.

- **Server Configuration:**
  - The server runs on `http://localhost:3001` by default. Update the `base_url` in the client-side code if the server URL changes.
