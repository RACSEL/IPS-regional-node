# IPS Broadcast 

IPS Broadcast server to manage a network of trusted FHIR servers and performs searchs among them.

## Requirements

```
Node ~v18.14.0
Npm ~v9.3.1
```

## Configutation

Install the project dependencies using:

```bash
$ npm install
```

### Run

To run this project there are two options:

```bash
$ npm run dev      # Runs the API with hot reload and also runs table migrations
$ npm run start    # Runs only the API
```

## Deployment

Use `docker compose up` to deploy the server

## Usage

This server has 4 endpoints, all of them are GET requests:

- `/trusted-parties` view the list of trusted parties (countries) that are part of the broadcast
- `/trusted-parties/status` check the status of the FHIR servers of the trusted parties
- `/fhir/List` broadcast a FHIR ITI-66 request to all of the FHIR servers
- `/fhir/DocumentReference` broadcast a FHIR ITI-67 request to all of the FHIR servers

## Updating trusted parties

To add, remove or change one of the trusted parties configuration you can simply edit the `trusted-parties.json` file in the root of the repository.

Once it is modify, re-deploy the server either by re-building the container of docker `docker compose up --build` or by running the app again `npm run start`.