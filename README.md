# Project Solo

Project Solo is a web app for viewing your daily horoscope with the ability to share them via Twitter and enjoy a fun visualisation.

## Running locally

Install node_modules, set up your environment and create a database.

```
npm i
cp .env.example .env
# Edit .env for your needs
npx sequelize db:create
npx sequelize db:migrate
```

To run the server:

```
npm run dev
```

Now visit http://localhost:3000/ to see your horoscope for the day.

## How to use

Register an account, providing your name, email, password and date of birth.

Hover over some constellations on the main page to see them animate and click on them to read a horoscope and share it.

You can also push a play button to enjoy some colourful animation.

## Tools used

I used the [unofficial astrlogy.com API](https://ohmanda.com/api/horoscope/) for horoscope data. 

Technology-wise it is a Node app running Express and React, Tailwind for styling and Sequelize/Postgres for database.
