# Intermediate Javascript Assessments

### Without using Google answer the following:

1. What is the difference between .map() and .filter()?

Map cycles through an array and modifies each element, returning the mutated data in a new array.

Filter cycles though an array and uses specified criteria to select only certain elements, returning them in a new array.



2. Why would you use object destructuring?

Destructuring is used to reassign long/chained variable names such as this.that.and.the.other in React, in order to reduce typing and improve readability.



3. What is the difference between var, let, and const?

These are all variable prefixes.

Var is the most general-purpose, and can be local or global scope depending on whether declared inside or outside a function, respectively.

Let was more recently introduced to be local scope only, and should only be used for one-time function declarations.

Const is a permanent global variable declaration and should return an error if ever attempted to reassign in the same application.



4. Why is testing important?

Testing is designed to confirm proper syntax and logic flow, and is important to verify that small functions give predicted outcomes, avoiding hidden bugs in large applications.



5. What is a higher order function?

A function that takes in or returns another function.



6. What is the difference between a class and an object?

Objects are 'things' with properties and behavior. Classes are 'blueprints' with modifiable parameters to build unlimited new objects.



7. What did you learn during the group project this week? Please include any additional feedback you may have.

For the group project this week I'll be referencing Tic Tac Toe, I think that's the last time we worked beyond pairs.

Most importantly, aside from actual coding execution, were following the teamwork guidelines. Like many of the students, I've had a predilection for solo work, but I've seen better overall results from setting timers, taking breaks and keeping everyone engaged/accountable to the team project. (who knew!? =)



### HTML/CSS Review questions: First, try to answer each question on your own then Google the answer to further your knowledge.

1. How do you link a CSS file to your HTML page?

Me: In the header of the HTML page, place the appropriate style tags and link to CSS, something like: <style class= ''><a href= 'www.csslink.whatev'></style>

Google: Place the CSS filepath link in your HTML header, the CSS file should live in the root directory (the highest folder of your page structure).

   * Below is the header of my functioning side project I began in JumpStart (good.at.stuff is the actual folder and file on my machine)


<!doctype html>
<html lang="en">

<head>

    <!-- required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- bootstrap css -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <!-- good.at.stuff css -->
    <link type="text/css" rel="stylesheet" href="good.at.stuff.css"/>

    <title>good.at.stuff</title>

    </head>
    <body>

    ...
    ...
    ...
    ...
    ...

    </body>

</html>



2. What is the difference between a div and a span?

Me: A div is a divider tag that book-ends a block of code, to encapsulate sections and also to reference with an 'id' for CSS styling. Not sure about span.

Google: div and a span are used to group together a chunk of HTML and hook some information onto that chunk, most commonly with the attributes class and id to associate the element with a class or id CSS selector. The difference between span and div is that a span element is in-line and usually used for a small chunk of HTML inside a line (such as inside a paragraph) whereas a div (division) element is block-line (equivalent to having a line-break before and after it) and used to group larger chunks of code.



3. What is a CSS class? When should you use an id instead of a class?

Me: I believe classes are used to identify separate but related segments of code that can be referred to with identical styling throughout an application, whereas an id would be more specific to a particular instance with a specific purpose. (fingers crossed)

Google: In the CSS, a class selector is a name preceded by a full stop (.tagname) and an ID selector is a name preceded by a hash character (#tagname). The difference between an ID and a class is that an ID can be used to identify one element, whereas a class can be used to identify more than one. (nailed it!)



4. Name 5 semantic HTML tags.

Me: text, color, font, size, style

Google: <div> <span> <strong> <h1> <q> ... (oops!)

https://www.lifewire.com/why-use-semantic-html-3468271



5. What are three options for creating responsive design?

Me: 'manual' inline styling, 'proper' linked parallel HTML/CSS files, and ... (eesh)

Google: Responsive web design is an approach to web design that makes web pages render well on a variety of devices and window or screen sizes. (ah cool!)

Fluid Grids - Using a flexible grid to create the website layout that will dynamically resize to any width
Fluid Images - Makes media (images, etc) scalable, changing the size of the media as the size of the viewport changes
Media Queries - Media queries allow designers to specify different styles for specific browser and device circumstances





### Stretch: The following questions are potential interview questions. First, try to answer each question on your own then Google the answer to further your knowledge.

1. What is front end development? Can you identify any tools/skills that are uniquely required of front end developers?

Me: Front end development is focused on user-facing design and functionality, usually involving a combination of HTML, CSS, and JS(react). The goal is to construct a highly appealing application (or digital 'home'), with a foundation of sturdy steel and bricks (html), a beautiful front yard and layout (css), and intelligent lightning-fast utilities such as electricity that warm the home and power smart devices like the one I'm using right now (js).

Google: Front-end web development is the practice of converting data to graphical interface for user to view and interact with data through digital interaction using HTML, CSS and JavaScript.



2. What is block scope in JavaScript?

Me: Block scope is the immediate functionality we're focused on, and it's range of effect throughout an application. Whether it be defining local or global variables, or tracking the logic flow in React components, it's important to know the boundaries of our creations ... lest we invoke the zombie apocalypse.

Google: Block scope is the area within if, switch conditions or for and while loops. Generally speaking, whenever you see {curly brackets}, it is a block. In ES6, const and let keywords allow developers to declare variables in the block scope, which means those variables exist only within the corresponding block.



3. How would you explain the idea of "inheritance" in object oriented programming?

Me: If I'm understanding correctly, object oriented programming refers to json which refers to React parent/child relationships? That means that child components can only receive information from the parents, not send it back. So the parents embed props, kind of like nerves in appendages, in order to send signals back.

However I now think you're asking about class inheritance like the racecar challenge. In this case, 'child' classes extend from the 'parent' by inheriting their properties and adding new ones, as well as behaviors. In which case 'vehicle' extends down to truck and roadster, which both extend to new brand types.

Google: In object-oriented programming, inheritance is the concept that when a class of objects is defined, any subclass that is defined can inherit the definitions of one or more general classes.
