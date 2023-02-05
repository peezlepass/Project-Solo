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

First thing you will want to do is register a user to see all the fun stuff!

Simply enter any name, birthday in the format DD-MM, email and a password. Make sure the password is at least 8 characters long, otherwise Sequelize will stop you from continuing.

<p align="center">
<img width="640" alt="Screenshot1" src="https://user-images.githubusercontent.com/104982744/216817537-6d9c0fb6-cd84-4255-91e0-4292924f3ac1.png">
</p>

Be real and don’t put impossible dates, like the 30th of February. If you do, the system will alert you in pink.

After you enter, the system will greet you with your horoscope sign.

Now you may see all the constellation on the page. At first they will be blurry, waiting for you to hover your cursor over them. As you do this, the constellation will animate. Each one with their own colour.

<p align="center">
  <img width="640" alt="Gif1" src="https://user-images.githubusercontent.com/104982744/216818323-a71c97ae-8f11-4386-b81b-282fc597f942.gif">
</p>

You can click on the constellation to reveal the daily horoscope for this star sign, as well as share this text on Twitter.

<p align="center">
  <img width="640" alt="Gif2" src="https://user-images.githubusercontent.com/104982744/216819435-885f0812-e494-4d9d-98c6-03cb77a7dfd0.gif">
</p>

And for the final part: Click on “Play me”! Enjoy some animated star dancing backed by some cool music!

<p align="center">
  <img width="640" alt="Gif3" src="https://user-images.githubusercontent.com/104982744/216819436-bf4a7701-802a-439a-93fd-f9832502f16f.gif">
</p>

## Tools used

I used the [unofficial astrlogy.com API](https://ohmanda.com/api/horoscope/) for horoscope data. 

Technology-wise it is a Node app running Express and React, Tailwind for styling and Sequelize/Postgres for database.
