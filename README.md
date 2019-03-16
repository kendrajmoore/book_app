<p align="center">
    <img src="static/logo.png"
         width="300" />
</p>

# Storytime

*Storytime is an application to make audiobooks. *

This a class project based on my personal desire to create audio books for my daughter.

## Goal of Storytime
Parents that have to be away from their kids (such as military deploymnets) 
need a way to create audiobook

### Documentation
To learn more about Storytime visit our [documentation site](https://jasmines-co.github.io/best_website_ever/)

## Built With
* [Node](https://nodejs.org/en/) - Node
* [MongoDB](https://www.mongodb.com/) - Document based database
* [Next.js](https://nextjs.org/) - React framework for rendering server side apps

## API Integrations
* [Flipbook](https://github.com/joerez/flipbook-library) - Flipbook API created by Joe Rezendes


## File Structure 
```
root/
|
|-- pages/              
|        |--index.js
|        |--about.js
|        |--team.js
|
|-- routes/               
        |-- users.js
        |-- books.js
|
|-- models/                     
      |-- Book.js
      |-- User.js
|
|
|-- static/ 
      |--favicon/
            |-- favicon-small.png
      |-- images/
      
|-- config/                     
|     |-- dev.js
      |-- index.js
      |-- prod.js
      
|
|-- styles/                 
      |-- main.scss/
|
|-- env files                 
|-- server.js                
|-- next.config.js            
|-- env.config.js 
|-- .babelrc.js
|-- README.md
|-- misc
```

### Try it yourself
To begin using the project:

* clone it
* rename `.env.example` to `.env` 
* change the example keys in `.env` to your own
* start your database
* start the app

#### Example
```
$ git clone git@github.com:jasmines-co/best_website_ever.git
$ cd best_website_ever
$ npm install
$ cp .env.example .env
$ mongod
$ npm run dev
```

## Deploy it yourself
To deploy to Heroku:

```
git clone https://github.com/kendrajmoore/book_app.git
mongod
npm run dev
git add .
git commit -m 'deploying to heroku'
heroku create my-cool-app-name
git remote -v
heroku ps:scale web=1
heroku addons:create mongolab:sandbox
git push heroku master
```

## Live Version 
Live version - https://storytime-kjm.herokuapp.com/

## Developers
### Kendra Moore
 
