[Motivation](#motivation) | [Specification](#specification) | [Approach](#approach) |  [Installation](#installation) | [How to use?](#how-to-use) | [Tests](#tests) | [Further work](#further-work) | [Technologies](#technologies)

# Hyper Cat

Hyper Cat is a 2D, side-scrolling, platform game. Hyper Cat is hungry and is on the hunt for a mouse to eat! The goal of the game is to jump between platforms to catch a delicious mouse. It has been developed using vanilla Javascript - no game engines or frameworks.

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

<!-- ### Specification



#### Requirements






This tech test is based on Terry Hughes' which can be found [here](https://github.com/NotMyself/GildedRose). This was translated into Java by Emily Bache, the translated version can be found [here](https://github.com/emilybache/GildedRose-Refactoring-Kata).

* All items have a SellIn value which denotes the number of days to sell the item.
* All items have a Quality value which denotes how valuable the item is.
* At the end of each day SellIn and Quality are reduced by one.
* Once the sell by date has passed, Quality degrades twice as fast.
* The Quality of an item is never negative.
* "Aged Brie" increases in Quality the older it gets, rather than decreasing.
* The Quality of an item is never more than 50.
* "Sulfuras", a legendary item, SellIn and Quality values never change.
* "Backstage passes", like "Aged Brie", increase in Quality as it's SellIn approaches, as follows:
  * More than 10 days from the show, increases by one per day.
  * 10 or less days from the show, increases by two per day.
  * 5 or less days from the show, increases by three per day.
  * Reduces to zero after the show.
* "Conjured Items" degrade in Quality twice as fast as normal items.

#### Acceptance Criteria

* Given the legacy code refactor it in such a way that adding the "Conjured Item" is easy.
* The aim is to practice good design.
* Anything may be changed apart from the "Item" class.
-->
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

### Tests

Testing was carried out using Jasmine and Karma with Istanbul for code coverage.

Testing was carried out using JUnit 4.0. Tests can be run from the project home directory as follows:

### Further work

- Refactor Physics out of Player class
- Move sound from Index to Game class
- Create parent class for bodies to inherit from
- Patrolling enemy dogs
- Traps to kill the player
- Timer and high scores
- Moving platforms
- Additional decoration

### Technologies

This application was built using Javascript, HTML and CSS. Jasmine, Karma and Istanbul were used for testing. It was served on an express server and deployed using Travis and Heroku.
