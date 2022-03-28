import React from 'react';
import MenuBar from './MenuBar';
import './SplashPage.css';

function SplashPage() {
  return (
    <div className="sp-container">
      <MenuBar />
      <div className="sp-questions">
        <div className="sp-title">Frontend Questions</div>
        <div className="tk-que">
          1. Using any modern UI library, framework like React, Vue, etc. of
          your choice create a basic reusable component that displays Name,
          Email, Phone Number in a list view. The values for these fields: Name,
          Email and Phone Number should be passed as a prop to the component.
        </div>
        <div className="tk-que">
          2. Refer to the figure below: Create a parent component showing number
          10 in the display. Create a child component maybe a button, which is
          inside this parent component and when user clicks on the button the
          number will be increased by 5 so new number 15 will be displayed in
          the parent component. You can extend this functionality on answer of
          question #1. Please use any library, framework you wish to solve this
          problem.
        </div>
        <div className="tk-que">
          3. Shown below is a dashboard having multiple widgets in it with
          varying height. Make the dashboard widgets responsive in such a way
          that for screen width larger than 1000px there will be 3 columns and
          for width less than 1000px the widgets will be arranged in 2 columns
          as presented in the figure.
        </div>
        <div className="tk-que">
          4. Create a simple portfolio website of yourself as a SPA (Single Page
          Application) using any modern UI library, framework of your choice.
        </div>
        <div className="tk-que">
          5. Show an example of how you can protect a route from the client
          side. For example I have a website named mywebsite.com and it has a
          special webpage under /special route. I want this webpage to be only
          shown to authorized users. How can I achieve this using guarded
          routes? Hint: You can use navigation guards in Vue.js and route guards
          in Angular or React.js
        </div>
        <div className="tk-que">
          6. What is the output when I execute both the functions? Are they
          same/different? If yes/no then why?
        </div>
        <div className="tk-que">
          7. Assume that there are three buttons in a webpage with ids: button0,
          button1, button2. What will be the output of the following function
          for each button if the buttons are clicked.
        </div>
        <div className="tk-que">
          8. Consider the following dataset representing sales of Sanitizer
          produced by a company in the last 7 days. Show this dataset with the
          help of any visualization library in JS of your choice.
        </div>
        <div className="tk-que">
          9. What is the difference between Server Side Rendering and Static
          Site Generation? When would you prefer SSG over SSR? 10. Create a
          simple webpage that shows the data fetched from an API response. You
          can use this dummy API endpoint
          (https://jsonplaceholder.typicode.com/users) to fetch the list of
          users and only show the name and email in a list view in your webpage.
          Please feel free to use any HTTP client of your choice. Some popular
          ones are axios, fetch, etc.
        </div>
      </div>
    </div>
  );
}

export default SplashPage;
