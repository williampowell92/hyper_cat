[How to play](#how-to-use) | [Testimonials](#testimonials) | [Motivation](#motivation) | [Class Diagram](#class-diagram) |  [Approach](#approach) | [Tests](#tests) | [Further work](#further-work) | [Technologies](#technologies)

# Hyper Cat

Hyper Cat is a 2D, side-scrolling, platform game. Hyper Cat is hungry and is on the hunt for a mouse to eat! The goal of the game is to jump between platforms to catch a delicious mouse. It has been developed using vanilla Javascript - no game engines or frameworks. Hyper Cat is a Makers Academy final project developed by a team of 4 people: Siobhan Goggins, Oliver Harris, Roxana Pirvu, and William Powell.

### How to play

The game can be played at:

https://hyper-cat.herokuapp.com/

### Testimonials

Charlene Chetcuti "I feel like I could play this game forever"

Ben Furber "It's the best thing I've ever seen..."

Igor Ryabchuk "The rectangular nature of those rectangles is fascinating"

Zoe Kavanagh "Very challenging"

### Motivation

This project has been created for our final project as junior developers at Maker's Academy. We decided to create a game with vanilla Javascript because we wanted to understand not just how a specific framework worked, but how the basics of game design worked, including:

- Rendering
- Physics
- Collision
- Animation
- User input

### Class Diagram

![class diagram](https://i.imgur.com/OhKgutX.png)

### Approach

We set out to build the project using the XP values and agile methodology we have learnt at makers over the past 10 weeks. We broke up our project into 2 day sprints. At the beginning of each sprint a planning meeting was held. In this meeting our goals for the coming sprint were discussed and decided, these were posted as issues on a kanban style waffleboard. Each issue would have a user story and acceptance criteria for the developer.

Each morning began with a brief standup meeting to discuss what each developer had been doing, what they would be doing moving forwards, and if they had any blockers. After the planning meeting the team split into two pairs, which rotated daily, and began working on our backlog of tasks. At the end of each day a retrospective was held to reflect and communicate on our work, and how we could improve.

After deciding on our project, we decided on an MVP. Our MVP was to have a player and a platform rendered on the DOM, with the player colliding with the platform. From our MVP we decided on new features using the agile methodology described.

![MVP](https://i.imgur.com/r3EqrR5.gif)

*MVP Achieved!*

We followed a TDD approach with a goal of achieving at least 90% code coverage. The project was designed following an object-oriented approach, attempting to stick to the single responsibility principle as far as possible, while keeping our code readable and extendable. We used polymorphism within the game design, for example our bodies all have a draw method which game calls. This made it easy to add new bodies, with different behaviour, into the game.

Continuous deployment was set up using Travis and Heroku, so that any change to the master branch was automatically deployed.

### Screenshots

![Intro Screen](https://i.imgur.com/if9rUaP.png)

![Demo](https://i.imgur.com/hPUPKNF.gif)

![Win Screen](https://i.imgur.com/03fcM7y.png)

![Lose Screen]()

### Tests

Testing was carried out using Jasmine and Karma with Istanbul for code coverage.

### Further work

- Refactor Physics out of Player class
- Move sound from Index to Game class
- Create parent class for bodies to inherit from
- Patrolling enemy dogs
- Traps to kill the player
- Timer and high scores
- Moving platforms
- Additional decoration
- Additional levels

### Technologies

This application was built using Javascript, HTML and CSS. Jasmine, Karma and Istanbul were used for testing. It was served on an express server and deployed using Travis and Heroku.
