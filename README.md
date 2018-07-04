[Motivation](#motivation) | [Specification](#specification) | [Approach](#approach) |  [Installation](#installation) | [How to use?](#how-to-use) | [Tests](#tests) | [Further work](#further-work) | [Technologies](#technologies)

# Hyper Cat

Hyper Cat is a 2D, side-scrolling, platform game. Hyper Cat is hungry and is on the hunt for a mouse to eat! The goal of the game is to jump between platforms to catch a delicious mouse. It has been developed using vanilla Javascript.

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

![class diagram](https://i.imgur.com/yGWKT0k.png)

### Approach

We set out to build the project using the XP values and agile methodology we have learnt at makers over the past 10 weeks. We broke up our project into 2 day sprints. At the beginning of each sprint a planning meeting was held. In this meeting our goals for the coming sprint were discussed and decided, these were posted as issues on a kanban style storyboard. Each issue would have a user story and acceptance criteria for the developer.

Each morning began with a brief standup meeting to discuss what each developer had been doing, what they would be doing moving forwards, and if they had any blockers. After the planning meeting the team split into two pairs, which rotated daily, and began working on our backlog of tasks. At the end of each day a retrospective was held to reflect and communicate on our work, and how we could improve.

After deciding on our project, we decided on an MVP. Our MVP was to have a player and a platform rendered on the DOM, with the player colliding with the platform. From our MVP we decided on new features using the agile methodology described.

![MVP](https://i.imgur.com/r3EqrR5.gif)

*MVP Achieved!*

We followed a TDD approach with a goal of achieving at least 90% code coverage. The project was designed following an object-oriented approach, attempting to stick to the single responsibility principle as far as possible, while keeping our code readable and extendable. We used polymorphism within the game design, for example our bodies all have a draw method which game calls. This made it easy to add new bodies, with different behaviour, into the game.


## Testimonials

Charlene Chetcuti "I feel like I could play this game forever"
Ben Furber "It's the best thing I've ever seen..."
Igor Ryabchuk "The rectangular nature of those rectangles is fascinating"
Zoe Kavanagh "Very challenging"

### Installation

This application has been designed to be built with Maven to simplify the build process and include all necessary dependencies. If you do not have Maven installed it is recommended you do so by following the guidelines [here](http://maven.apache.org/). To get started please follow the subsequent steps.

* Clone the repository ```$ git clone https://github.com/williampowell92/gilded_rose```
* Navigate to the top level of the directory using the command line  ```$ cd <repo name>```

<!-- ### How to use?

The app does not have a interface so the source code must be changed between runs to alter the output.

An example use of the application can be found in the TexttestFixture.java file.

![TexttestFixture](https://i.imgur.com/ni8HGgy.png)

Once you are ready to run the app then:
* Compile the app ```$ mvn package```
* Run the app ```$ java -cp target/gilded-rose-kata-0.0.1-SNAPSHOT.jar com.gildedrose.ExampleRun```

If you are using an IDE such as Intellij then you can open the repository in the IDE and use the
inbuilt run commands.

### Tests

Testing was carried out using JUnit 4.0. Tests can be run from the project home directory as follows:

```
mvn test
```

### Further work

- Add an interface to allow the user to interact with the application.

### Technologies

This application was built using Java, Maven and JUnit 4. --->
