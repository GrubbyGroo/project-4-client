[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Connected Sites

-   Back-End Repo: <https://github.com/DiGregorioC/project-4-api>
-   Deployed Site: <https://digregorioc.github.io/project-4-client/>
-   Heroku Site: <https://protected-chamber-86780.herokuapp.com/>

# Photo of Application

![Imgur](https://i.imgur.com/oDxWoC7.png)

# Technologies Used

-   Ajax
-   Atom
    -   open-source text and source code editor
-   CSS
-   Curl
-   HTML
-   Javascript
-   JSon
-   Material-Ui
-   MDBootstrap
-   React
-   SCSS

# Installation Instructions

-   Fork and clone this repository.
-   Install dependencies using npm install.
-   Git add and git commit your initial changes.
-   View changes live by running local server npm start.

### About the Front-End

  The front-end of this website is a single page application(SPA) that presents the user with a welcome page that displays a series of categories that a user can click on to randomly generate a drawing prompt of that category. This is usable without login. If a user registers/ logs in, they are able to contribute to the database, and can also see any added prompt they have contributed. Users are able to edit and delete any prompt they contributed.

# Development Process

  This project was my third experince creating a full-stack website, with a backend and front end built by myself, but my first time building a front-end in react.

  I was able to take a lot of what I have learned from my past projects to create this application, an implement improvements based on past feedback.

  As this was my first time building a react application from the ground up, using express, node.js, mongoDB, and mongoose my was to make sure the calls to my api, the api itself, and the database were running correctly first, before I went too deep into building the front end. After having been able to CRUD my database, I then began to build the same calls but now incorporating ownership. Following that, I started to build out some basic components on the front-end to be able to make sure that the information I was accessing from the API was coming through correctly and displaying the way I would loke. I hit a few roadblocks as I moved deeper into desiging more components, mainly around using hooks, and passing props from a parent to a child. I knew going in
  that these could cause the most trouble, but with the help of documentation, reviwing our lessions, experimentation, some instructor help, and reviewing
  past tickets from prior engineers, I was able to move past these issues. Once I were able to finally was able to CRUD through the front end, my final goal was to work on making sure the proper messaging appeared for the users, and then working on the UI design for the site.

  As my web page progressed and problems were encountered, I found that utilizing past issues, in the project's issue queue, documentation, google, brainstorming with fellow developers, and even just taking a step back, helped me to push through many of the problems.

  I learned a lot about how to work with React by the end of this project, and plan to continue implementing more features as I progress.

### Reflections

  Looking back on the project, I am able to take away several reflections and learnings that I believe will help  with my future endeavors.

-   I found that we hit a big road block when it came to passing props, and utilizing hooks. I've learned a lot while working through these, and I feel I will be more prepared next time I hit similar issues.

-   I have seen a large improvement on my comfort, understanding, and coding skill since my last project. I know that the learning path is never ending, but I am proud of the improvements in my abilities since last project.

    # Future Goals

     As I continue to work on and update this project, I have the below goals I would like to accomplish:

-   Refactoring code to produce more DRY code, and reduce repeition
-   Working on improving modularity, and the better usage of components
-   Implement a practice timer, to allow users to draw for a set period of   time, and have an alert go off upon time end
-   Allow users to upload their drawings so they have a central place to see their works, and watch their progress

# Project User Stories and Wireframes

-   As a User I want to be able to see random prompts
-   As a User I want to be able to select a practice timer for the random prompt
-   As a User I want to add my own prompts
-   As a User I want to edit my added prompt
-   As a User I want to be able to deleted my added prompts
-   As a User I want to be able to see all of my added prompts

    ## WireFrame

    ![Website Photo](https://i.imgur.com/iumUNGN.png)
    ![Website Photo](https://i.imgur.com/jjJdOlW.png)
    ![Website Photo](https://i.imgur.com/J8VOTHj.png)
