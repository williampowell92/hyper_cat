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
### Approach

We set out to build the project using the XP values and agile methodology we have learnt at makers over the past 10 weeks.  We broke up our timeframes into 2 day sprints, listing all our goals which were broken down as small as possible and listed in a kanban style storyboard with user stories and acceptance criteria.


- agile methodologies - 2 day sprint, daily standup/planning meetings, daily retros, kanban
- TDD
- MVC
- XP values - coding, testing, listening and designing.  Communication, simplicity, feedback, coverage and respect.

![class diagram](https://i.imgur.com/Eb75w0t.png)


The class diagram above was created at the start of the project to give an overarching plan. A suite of feature tests was developed as a first step to ensure that the functionality of the program did not change through the refactoring process. A test driven approach was then followed in the creation of the new item types. Once these were completed, the old functionality was switched out for the new functionality before deleting the old functionality. The new design was then tested against the old feature tests to ensure the program still worked in the desired way.

Once the above had been completed, a new item type "Conjured Item" was created to add the additional functionality.

##Testimonials

Charlene "I feel like I could play this game forever" July 2018
Ben Furber "It's the best thing I've ever seen..." July 2018
Igor "The rectangular nature of those rectangles is fascinating"
Zoe "Very challenging"

<!--### Installation

This application has been designed to be built with Maven to simplify the build process and include all necessary dependencies. If you do not have Maven installed it is recommended you do so by following the guidelines [here](http://maven.apache.org/). To get started please follow the subsequent steps.

* Clone the repository ```$ git clone https://github.com/williampowell92/gilded_rose```
* Navigate to the top level of the directory using the command line  ```$ cd <repo name>```

### How to use?

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
