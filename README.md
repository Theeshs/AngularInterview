# AngularInterview

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Overview

    1. Task 1 : Runnable with `ng serve`
        You can run this application with ng serve or npm start
    
    2. Task 2 : A landing page with full page image and a single button to proceed.

        For the landing page I have added a background Image and centered button. 
        To check the landing page related codes please check the component `landing-page`.
        When you click the button which has added there, it will leads you to the route which consit the table
        that showing the JSON data.

        I was not able to read data from the JSON file. So I have added a file called `example.ts` and exported data as example
    
    3. Task 3 : A Navigation Bar that uses Angular Animations 
        There is a component called Demo. The app layout have build inside that component.
        It's has a navigation bar with a button. When clicks the button It will open the
        side bar for you. In side bar there are two nav links.

    4. Task 4 :  A second route that displays the [example json](example.json) in a table with filtering and sorting capabilities
        go to the route `http://localhost:4200/demo/json-with-table` or,
        open the side nav and take the page 1 tab.

        This will leads you to a table. Which you can see the data of JSON file and
        on that table you are able to filter and Sort data
    
    5. Task 5:  A third route that displays a styled `<div>` of default text which is replaced with a custom text that demonstrates your use of directives
        To see the this task open the `http://localhost:4200/demo/styled-div` route or In side bar go to the page 2 tab.

        There is a div which has added some styles. In that div there is a paragraph. That paragraph is changing by every 2 secodns randomly. For that directives
        have used