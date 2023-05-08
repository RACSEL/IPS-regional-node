# IPS Broadcast 


## Requirements

```
Node ~v18.14.0
Npm ~v9.3.1
```

## Configutation

First create a `config.json` file. We can copy the existing `./config/config.sample.json` file using:

```bash
$ cp ./config/config.sample.json ./config/config.json
```

Then you can change any of the values in the configuration file such as database credentials.

Once the configuration file is correctly set, we can install the project dependencies using:

```bash
$ npm install
```

### Database helpers

This project uses sequelize as its ORM. The `sequelize-cli` is use to apply certain operation in the database. 
The one available in the `package.json` script are:  

```bash
$ npm run migrate  # Apply database migrations 
$ npm run revert   # Undo migrations 
$ npm run seed     # Seed with starting data
$ npm run unseed   # Remove all data from database
```

For more information you can check [sequelize documentation](https://sequelize.org/docs/v6/other-topics/migrations/).

### Run

To run this project there are two options:

```bash
$ npm run dev      # Runs the API with hot reload and also runs table migrations
$ npm run start    # Runs only the API
```
