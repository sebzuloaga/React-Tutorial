# React-Tutorial Introduction to JSX & React

In this tutorial you will learn how to get started with React JS. React is a framework that allows us to create websites that are built on the basis of reusable components. Traditional websites are built on the basis of adding all of the code to be rendered onto the single file. However React JS will separate your code onto different components and thus different files. 

There are many advantages to React JS, but here are a couple of them:

1. Components are reusable 
2. Components are easy to maintain than traditional static websites
3. React JS allows for better performance based on rendering chamnges only when necessary
4. It can lead you on to React Native development



## Structure of this Tutorial

Through this tutorial, you will be creating a small weather application that pulls information from a weather API and then displays the coming forecast. During week 10 you will be creating static components, and then in week 11 we will load dynamic information via an API. 

In this tutorial you will be doing the following things:

1. **Setting up React** 
2. **The React folder structure**
3. **Creating the App and your first component**
4. **Organising your files**
5. **Creating the rest of the Components**
6. **Replacing static information**
7. **Getting User Input**
8. **Making an OpenWeather API call**
9. **Connecting the user input to the API call**



## Setting up React

Getting started with React takes a little bit longer than your traditional website. For the purpose of this tuturial, we are going to use create-react-app. Create-react-app is a method supported by React to get started with a single page application template. Usually getting started with create-react-app is quite easy, **BUT** *if you are in one of the lab computers you will require to do a couple of additional steps*.



### Working with your own devices

1. Create a new folder called "React" somewhere in your device where you want to work. 

2. Drag and drop this folder onto Visual Studio Code. 

3. On Visual Studio, open up a terminal and make sure that you are currently on the "react" directory you created before. 

4. **NOTE**: you will need to have Node and npm installed in your device. If you need to get Node you can go to this link https://nodejs.org/en/download/ and if you need to install npm you can run this command on your Visual Studio terminal after downloading Node: npm install npm@latest -g

5. On the terminal type and enter the following: *npm init react-app* **give-your-project-a-name-here**. If this does not work, then try: *create-react-app* **give-your-project-a-name-here**.  

6. If step 5 ran without an error, you will see that the terminal will tell you that it is creating the files. Once it is done you should see in Visual Studio a folder structure like the following image: 

![alt text](https://github.com/sebzuloaga/React-Tutorial/blob/master/images/folder_structure.png "Folder Structure")

7. To make sure that everything is working fine, go to the terminal in Visual Studio Code and type and enter the following command: npm start. This command will start a development server so that you can see the resulting application as you are coding. Whenever you save any changes in your code, your localhost:3000 will update to show your progress.



### Working with the lab computers

1.	Run “Windows” key + R

2.	Type cmd to open up the command prompt

3.	Make sure you can see your username on the command line

4.	Make a new directory from here by typing and entering: mkdir react

5.	navigate to that directory by using the command: **cd name_of_directory**

6.	When you are inside the directory, type the following command: *npm init react-app* **give-your-project-a-name-here**

7. If step 6 ran without an error, you will see that the terminal will tell you that it is creating the files. Once it is done you should be able to navigate to the folder that has your user files and see the new project that you have created. Drah and drop your folder onto Visual Studio Code. You should now see a folder structure on Visual Studio Code like the image above.  

8. To make sure that everything is working fine, go to the terminal in Visual Studio Code and type and enter the following command: npm start. This command will start a development server so that you can see the resulting application as you are coding. Whenever you save any changes in your code, your localhost:3000 will update to show your progress.



## The React Folder structure

* public: this folder contains all the files that are ready to be deployed. In summary, the files in the public folder will be the files that create the final build of the application.
* src: this folder contains all the files during the development. You will be mostly coding and creating files on the src folder.

In your src folder, delete "App.test.js" and "logo.svg". Then go to "App.js", "App.css", "index.js", and "index.css" and delete the contents of these file. We do this in order to really start with a blank project. Also, go to the public folder to index.html and delete the link tag with a href="favico.ico".

For each component that we create, we will make a new subfolder on the "src" folder. 

# Part 1: Creating a static application

## Creating your app and your first component.



### Your App component

Usually the App component is the first one that you will create as the application that will hold all other components. Follow these steps to create your first component:

1. Inside of the "src" folder, create a new subfolder called "App". Move "App.css" and "App.js" to this folder. 

2. Open "App.js" and inside of it the first thing we need to do is add all of our import statements. First, in order for us to use react we need to import the react modules and code:

``` javascript
import React from 'react';
```

3. We also need to import the relevant css from "App.css" which is in the same directory as "App.js":


``` javascript
import './App.css;
```

4. In order to create a component in React, we have to extend the class "Component": 

```javascript

class extends React.Component {
  render() {
  return (
  
  )
}

```

In here. the render function allows us to render the code for the client,a nd the return statement tells us what will be displayed. 

5. Inside of the return function, we will be writing JSX which is HTML-like statements that allow us to write HTML and javascript together which React can make use of. Update your return statement to display the following (and also add the new variable called "text" before the render statement): 

```javascript
const text = "The following application has the forecast for the next five days";

class App extends React.Component {

  render() {
  return (
    <div className="weatherApp">
      <h1>This is my weather App</h1>
      <p>{text}</p>
    </div>
  )
}
```

6. After the creation of our class App, we need to make suer that we export it. We need to export it because we will be rendering our App component somewhere else and thus it will be imported into another module. Whenever a module / component will be imported onto another, the module being imported must have an export statement inside of it. Add the following code after the creation og the App class: 

```javascript
export default App;
```


### Rules of JSX

Did you notice something interesting about the code we wrote inside of the "return ()" statement? While the code looks mostly like HTML, this is JSX which is an XML-like notation for ECMAscript (which is the basis for JavaScript). JSX has some rules to it:

1. Each component is only allowed one root element, meaning that one tag should containt all other tags. For example, the following code would not work because the component does not have only one root element and instead has two <div> tags containing all other tags:
  
```javascript

  return (
    <div className="weatherApp">
      <h1>This is my weather App</h1>
      <p>{text}</p>
    </div>
    <div>
      <p>This is a second paragraph</p>
    </div>
  )
```

2. If you want to give a tag a "class" attribute for the purposes of HTML, then you cannot use the work class on JSX. This is because the word "class" is a reserved JavaScript keyword, and so we need to use "className". For example, the following JSX creates a figure with the class "logo". 

```javascript

  return (
    <figure>
      <img className="logo" src="url.jpg" alt="logo" />
    </figure>
  )
```

3. All tags on JSX must be closed either though an opening and closing tag, or via a self closing tag. 

4. Javascript can be injected into JSX. In order to inject JavaScript onto out components through JSX, we used the {curly braces}. Anything inside { } will be read as JavaScript. For example, in the JSX below we have referenced our variable "text" inside of curly braces. Therefore, the string saved to the variable "text" will be placed inside of the <p> tag. 
  
  ```javascript

const text = "The following application has the forecast for the next five days";
  
class App extends React.Component {

  render() {
  return (
    <div className="weatherApp">
      <h1>This is my weather App</h1>
      <p>{text}</p>
    </div>
  )
}
```

There are many more intricate things about JSX, but the 4 syntax considerations above are the ones we will be using the most. Always remember these rules as they are a basic concept of writing React JS.



### Displaying your App

We have created the first component of the application, but we have not yet rendered it. Rendering means that we are telling React JS that somethings needs to be displyed. We will be working on this on the index.js file in your "src" folder

1. In the index.js file, you will need to import React, ReactDOM, index.css, App.js, and the Service Worker. 

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import * as serviceWorker from './serviceWorker';
```

We have already seen some of these imports such as React and importing a stylesheet. However, we have some new ones like importing ReactDOM or our App component. The ReactDOM contains the modules and functionality needed for us to render elements. In addition to this, we are also importing our App component so that we can reference it and use it. Don't worry to much about the service worker here.

2. Let's get React to render our App component. Add the following code after all of your imports:

```javascript
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
```

The ReactDOM.render() is the one that gets React to display something. It takes two parameters. The first parameter is the content that will be displayed, the second parameter is the location of where the content will be displayed. In the example above, we are saying "Hey React, render my App component and place it within the HTML tag that has an id 'root'". index.js will be looking for the id='root' inside of the index.html file in the "public" folder. Notice here how we create our App element by using JSX syntax in which the name of our component is used as a tag "<App />".

3. Finally just for performance concerns, add the following line at the end of index.js:

```javascript
serviceWorker.unregister();
```

4. Add the following CSS onto your index.css:

```css
* {
  margin: 0;
  padding: 0;
}

body{
    background-color: seashell;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
```

If your development environment started by the command 'npm start' is still running, then have a look and check if your application is rendering well. If there are any errors. you will need to check your code before moving forward.



## Divide components and conquer

Now that we have rendered our first component, let us plan all of the components that we neeed. For this tutorial we will be building a small web app that tells us the weather. Here is an image for the final result that we will be achieving by the end of the tutorial:

![alt text](https://github.com/sebzuloaga/React-Tutorial/blob/master/images/FinalResult.png "Final Weather Web App result")

If we split this up into smaller and smaller components, this is what it would look like. 

![alt text](https://github.com/sebzuloaga/React-Tutorial/blob/master/images/ComponentBreakdown.png "Final Weather Web App result")

The image above shows the structure that we will be following to create this application:

* The App.js file will contain a heading that says the place of the forecast and the 5-day forecast (a <ForecastList /> class coming from ForecastList.js)
* The ForecastList.js file will contain 5 individual forecasts, one for each of the 5 days (a <Forecast /> class coming from Forecast.js)
* The Forecast.js file will contain an image for the forecast (a <WeatherIcon /> class coming from WeatherIcon.js) and the weather information (a <WeatherInfo /> class coming from WeatherInfo.js).

For any application you are creating with React, it is crucial for you to understand this structure. 

### Setting up your folder structure

For each of the components above, you will do the following:

* Inside of your "src" folder", create a subfolder with the name of your component. For example, we are going to create a ForecastList component so we create a folder called "ForecastList". 
* After you have created a folder for each component, inside of each folder create a JavaScript file and a CSS file with the name of the component (for example ForecastList.js and ForecastList.css)

## Creating all of the components

In order to create all of the components we have outlined, we will follow the same process we did for the App.js component before:

* Import React
* Import the css stylesheet
* Create a javaScript class that extends React Components
* Add a render() method inside of your class
* Add a return() statement inside your render method
* Add HTML-like code via JSX inside of the return statement to render the right elements as part of a component
* Export the component to make sure it can be accessed by other components in the structure
* Add the CSS onto the relevant CSS file for the specific component
* *optional: add any JSX with the imported components*
* *optional: update any import statements if you are adding any other components within the current component*

As an example of this process, lets have a look at how we would create App.js and Forecastlist.js

### App.js

In the App.js file:

* **Import React**. Notice that now it is a bit different because we are importing "React, {Component}" which means that rather than importing the whole React library we are only importing the Component. This helps with performance:

```javascript
import React, {Component} from 'react';

```

* **Import the stylesheet for this component App.css**:

```javascript
import React, {Component} from 'react';
import './App.css';
```

* **Create the class App by extending a React component**. Notice that because we imported "React, {Component}" we no longer have to say "class App extend React.Component" and instead we can just say "class App extends Component":

```javascript
import React, {Component} from 'react';
import './App.css';

class App extends Component {

}
```

* **Add a render method and a return statement inside of the class you just created** (*note about return statements: if a return statement is only one line, then it does not need to be between "()" but parenthesis are needed if the return statement is longer than one line*):

```javascript
import React, {Component} from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
    
    )
  }
}
```

* **Add the necessary JSX content**. If you remember the image earlier where we showed the component structure. App.js will render a heading with the location of the forecast, and it will also have a Forecast List element. At the moment we will just put a "p" tag placeholder for the ForecastList (note that at this stage for the purpose of the tutorial we have removed the "text" variable we created earlier in App.js and also the "p" tag that displayed the "text" variable): 

```javascript
import React, {Component} from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="weatherApp">
        <h1>Brisbane</h1>
        <p>this is where the ForecastList will come</p>
      </div>
    )
  }
}
```

* **Export the class you just created:**

```javascript
import React, {Component} from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="weatherApp">
        <h1>Brisbane</h1>
        <p>this is where the ForecastList will come</p>
      </div>
    )
  }
}

export default App;
```

* **Add the CSS necessary to App.css file** (We are writing CSS onto a CSS file, so there is no difference here with tradition css):

```css
.weatherApp {
  background-color: seashell;
  height: 40vh;
}
```

* **Replace the placeholder paragraph with the "ForecastList" element:** 

```javascript
import React, {Component} from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="weatherApp">
        <h1>Brisbane</h1>
        <ForecastList />
      </div>
    )
  }
}

export default App;
```

* **Add the import of the "ForecastList" element.** We can't use the module if it has not been imported:

```javascript
import React, {Component} from 'react';
import ForecastList from '../ForecastList/ForecastList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="weatherApp">
        <h1>Brisbane</h1>
        <ForecastList />
      </div>
    )
  }
}

export default App;
```

**NOTE: at this stage, in your localhost:3000 you will not be able to see the code display and instead you will see an error because we have still not created the ForecastList element and so React throws an error to let us know we are attempting to import a class that has not been defined. Here is the error you may see:

![alt text](https://github.com/sebzuloaga/React-Tutorial/blob/master/images/ImportError.png "Import Error output")

### ForecastList.js

If we repeat the process as we did with App.js, we end with the following code that will go in ForecastList.js:

```javascript
/*import React and the stylesheet for ForecastList */

import React, {Component} from 'react';
import './ForecastList.css';

/*create the class called ForecastList so it can be exported and used in App.js*/
class ForecastList extends Component {

/*Add the render method and the return statement */
  render() {
    return (
/*Add the HTML-like content through JSX sysntax. Here we will add a <section>
  element as the root element, and also a paragraph placeholder for where each
  day forecast will be placed */ 
      <section>
          <p>This will contain the forecasts of each day</p>
      </section>
    )
  }
}

/*Add the export of the ForecastList class */
export default ForecastList;
```

At this stage, the ForecastList component is not complete. However just so we can see the result without any errors, we will skip the steps to add the individual day forecasts for now. 

### ForecastList.css

Add the following CSS inside of the ForecastList.css file:

```css
section {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    background-color: seashell;
    margin: 0 5vw;
}

@media only screen and (min-width: 600px) {
    section {
      flex-direction: row;
    }
  }

```

## Finish all of the other components

At this stage, you know all of the concepts necessary to create the following files:

* Forecast.js
* Forecast.css
* WeatherIcon.js
* WeatherIcon.css
* WeatherInfo.js
* WeatherInfo.css

Using the image that shows the component structure, challenge yourself to complete all of the files mentioned above. If you get stuck, the code for each component is in this Github repository in a folder called "resources/part1".

**Note**: for now, do not attempt to create 5 different weather forecasts. Create just the component that displays "Sunny with Clouds". We willw work later on how to use JavaScript objects to achieve 5 different forecasts. Essentially, at this stage you are creating the following image where the code is static and only shows one type of forecast:

![alt text](https://github.com/sebzuloaga/React-Tutorial/blob/master/images/Stage1Solution.png "Solution 1 Image")

## Adding images on React

Inside of WeatherIcon.js you will be adding an img tag to display the specific image for each forecast. Images work a bit different in React given that they have to be imported in a similar way as other modules. 

In order to add an image to your file, you have to do the following: 

```javascript
/* use an import statement with the name you want to give your image, and then specify the path to the image */

import Cloudy from './images/cloudy.svg'

/*create a class and within the render method add the image with your imported module as the src */

class WeatherIcon extends Component {
  render() {
    return(
      <figure>
        <img src={Cloudy} alt="cloudy" />
      </figure>
    )
  }
}
```

For this code to work, you will have to place the svg in an "images" folder inside of the "WeatherIcon" folder.  

The links to the icons that have been used in this tutorial are the following:

https://www.flaticon.com/free-icon/cloudy_1146869
https://www.flaticon.com/free-icon/rain_1146858
https://www.flaticon.com/free-icon/sunny_979585#term=sunny&page=1&position=1
https://www.flaticon.com/free-icon/storm_1146860#term=thunderstorm&page=1&position=2


# React Tutorial Part 2: Passing on dynamic information to the application

## Replacing static information

At this stage we are going to move on to the final part of this tutorial were we add in dynamic information to our web application. If you notice our solution from before, it really is not optimal if we cannot pass on the forecast of each day dynamically so that the web app can automattically show us the relevant information. It would not be very efficient if we had to hard code each value. Before you move forward with this exercise, make sure you have finalised the exercises before to have the correct solution. If you need the solution, the solution is in this github repository under "solution-part-1" folder.

In order get our app to make use of data structures to pass on relevant information to the components, we will be using "props" and "state". 

## Making App.js a stateful component

React Components support states, meaning that we can attach information to the state of a component so that we can use it within the components and perhaps pass it down to its subcomponents. In order to make a stateful component (a component with state), we need to understand some principles of Object Oriented Programming and uses of classes. 

The first thing we are going to do is to create a constructor() for our App component. In App.js, add the following code just after you have created the App class and before you have added the render() method:

```javascript 
constructor(props){
  super(props);
}
```

The constructor allows us to initialise the state of our class (as well as dealing with binding methods which is something we will touch on later). We need to make sure that we are passing on super(props) to our constructor so that we can also use the props because if super(props) is not used our props will be set to undefined (we will explain what props are soon). Essentially the super(props) allows us to have acces to all of the methods and information from the parent class. 

Now that we have created our constructor, lets also create our state for the App component. Update the constructor to include the initialisation of the state:

```javascript 
constructor(props){
  super(props);
  this.state = {
  
  }
}
```

We use the keyword **"this"** to reference this particular component, and we use the method **"state"** to initialise the state. Inside of the **"this.state"** method we need to add all of the forecast information as a JavaScript object so that we can use it within our application. Update the **"this.state"** to add the following object:

```javascript 
constructor(props){
  super(props);
  this.state = {
    location: "Brisbane",
      forecastList: [
        {
          day:"Monday",
          forecast: "Sunny with Clouds",
          max: 30,
          min: 20
        },
        {
          day:"Tuesday",
          forecast: "Rain",
          max: 30,
          min: 20
        },
        {
          day:"Wednesday",
          forecast: "Sunny with Clouds",
          max: 25,
          min: 15
        },
        {
          day:"Thursday",
          forecast: "Thunderstorms",
          max: 28,
          min: 19
        },
        {
          day:"Friday",
          forecast: "Sunny",
          max: 33,
          min: 25
        }
      ]
  }
}
```

This object includes mainly two pieces of information. First, it includes a **location** of the forecast and second it includes an array of 5 days of weather forecast called **forecastList**. Each day on the array is represented as another object which includes the name of the **day**, the **forecast**, a **max** temperature, and a **min** temperature. 

By adding this object onto the state of the App component, you have made App into a stateful component that has information that we can use. Now, we can move onto using this information. First we will access the state of App.js. 

You may remember that we added a heading that says "Brisbane" within the render method of the App component. However, in the future we will allow for users to choose the location of the forecast and thus we can't have the heading being static. The heading should display the current location the user has chosen. Where can we find this information? Well, at the moment we have added the location of the forecast onto the object we just created in our state. We can access this information using "this.state". 

In App.js, go to the "h1" tage we created before and replace "Brisbane" with "{this.state.location}" as shown below:

```javascript
render() {
    return (
      <div className="weatherApp">
        <h1>{this.state.location}</h1>
        <ForecastList />
      </div>
    )
  }
```

Remember that if we inject plain JavaScript into our JSX we have to put it between "{ }". Using "this.state" allows you to acces the information from the state, in this case it allows us to access the object we created as part of the state. In this object, there is a key named "location" which holds the information for the location of the forecast. Thefore in order to access the location within the object we use "{this.state.location}".

At the moment, it seems like nothing has changed. However, if you go to the object you created and then change the value of location to another city you will see that your app automatically changes the text in the "h1" tag. This will be extremely useful when we are allowing the user to choose the location and the app can automatically respond to any changes by changing the state of the App component (we will cover how to change the state later on).

## Passing the forecast information to sub-components

We have succesfully made sure that the location of the forecast is dynamic by using the state of the component. However, we also need to make sure that the weather information is dynamic and that the forecast information we added onto the state can be accessed by our smaller components such as the WeatherInfo and the WeatherIcon component. We can do this using properties or as "props" as they are known in React. 

A property is a piece of data that gets passed onto a component as if you are declaring an HTML attribute. A property can be a string, a number, a function, a method, object, etc. Lets look at how this works in our Weatgher example. 

We want to pass the forecast list from our state in App.js to the ForecastList component we have created in ForecastList.js.

1. In App.js, update the ForecastList tag to include a prop that is called "forecasts" as shown below:

```javascript
  <div className="weatherApp">
    <h1>{this.state.location}</h1>
    <ForecastList forecasts={this.state.forecastList}/>
  </div>
```

Notice that a prop looks very similar to a HTML attribute, the syntax being name_of_prop = value_of_prop. What we are doing here is getting React to get the ForecastList component to have access to the information from this.state.forecastList which contains th array with the 5-day forecast infromation.

2. Now lets move onto our ForecastList.js where we will need to access the information passed as a prop to this component. Originally, we have created five Forecast components as seen below:

```javascript
class ForecastList extends Component {
    render() {
        return (
            <section>
                <Forecast />
                <Forecast />
                <Forecast />
                <Forecast />
                <Forecast />
            </section>
        )
    }
} 
```

This is inefficient, and it does not really utilise the power of React. Instead, we will be replacing the 5 instances of Forecast with one function that iterates over the array of weather information we have passed as a prop. For each day of the 5 days of forecast we have, we want React to create a new Forecast component and give it access to its respective day of data. Update the render function of the ForecastList component to look as follows:

```javascript
class ForecastList extends Component {
    render() {
        return (
            <section>
                {this.props.forecasts.map( (forecast) => {
                   return <Forecast forecast={forecast}/>
                })}
            </section>
        )
    }
} 
```

If we breakdown the new code, this is what is happening:

* The this.props.forecasts expression allows us to access the prop forecasts that we gave to out ForecastList component in the App.js
* We use .map() to iterate over the array that we access through the prop forecasts. The .map() method takes a function as a parameter
* The function we pass as a parameter needs one paremeter itself which we are calling (forecast). Each forecast will represent one value of the array of 5-day forecasts
* Finally, inside of the function we are going to return a Forecast component with a prop of forecast so that we can access this information within the Forecast component. 

With the code above, React will be able to read the array containing the forecast information and then create a Forecast component with each information.


3. We have passed the individual weather information onto our Forecast component, so now we will be working on Forecast.js. Forecast.js is still not the component that will be utilising the relevant information. The weather icon and the weather information will be rendered by WeatherIcon.js and WeatherInfo.js so all that we need to do in Forecast.js is to give the WeatherIcon and WeatherInfo JSX elements access the to information via the prop forecast:

```javascript
return (
  <article className="dayForecast">
      <WeatherIcon forecast={this.props.forecast}/>
      <WeatherInfo forecast={this.props.forecast} />
  </article>
        )
```

4. Now that we have passed the information from the state of App.js all the way to WeatherInfo and WeatherIcon we can use this information to dynamically display forecast for each day. In WeatherInfo, we need to replace all of the static weather information with the data from our props.forecast:

```javascript

class WeatherInfo extends Component {
    render() {
        return(
            <main>
                <h2>{this.props.forecast.day}</h2>
                <h4>{this.props.forecast.forecast}</h4>
                <aside>
                    <ul>
                        <li className="maxTemp">{this.props.forecast.max}</li>
                        <li className="minTemp">{this.props.forecast.min}</li>
                    </ul>
                </aside>
            </main>
        )
    }
}

```

Notice now that instead of having actual static text information populating our tags, we have used the information from the weather data we added onto the state of App.js. Go back and check your application on your browser and see how each of the forecasts now have the relevant data for each day.

5. We have effectively changed the text information, but we stil need to get the icon to change based on the forecast information. The WeatherIcon component is the one who handles the image that will be rendered. Previously, we only added one icon and so now we have to add the four different icons we need by importing them inside of WeatherIcon.js:

```javascript
import Rainy from'../images/rain.svg';
import Sunny from'../images/sunny.svg';
import Thunderstorms from'../images/storm.svg';
```

**Note:** if you need to check again where these icons are coming from have a look at the section that mentions [Link to Header](##Adding images on React)how to add images onto React. 

6. React components can also have methods. We need to create a method that will check the forecast of the day and then assign the correct icon based on the forecast. Below we have created the method:

```javascript

class WeatherIcon extends Component {

    getIcon(forecast) {
        if(forecast === "Sunny with Clouds"){
            return Cloudy;
        }else if (forecast ==="Rain") {
            return Rainy;
        }else if (forecast ==="Sunny") {
            return Sunny;
        }else{
            return Thunderstorms;
        }
    }

    render() {
        return (
            <figure>
                <img src={Cloudy} alt={"Cloudy"}/>
            </figure>
        )
    }
}

```

This method gets the string from the forecast passed onto it, and then will check what the forecast is and then return the right icon icon. 

7. The method has been created, but we need to use it now. Inside of the img tag, we will change the src and alt:

```javascript

<img src={this.getIcon(this.props.weatherInfo.forecast)} alt={this.props.weatherInfo.forecast}/>

```

The method will get the right image and then pass onto the src. Go back and check your web application, you will see that your icons and your weather forecasts have now changed and that if you change your object in App.js this will update your application. 

# React Tutorial Part 3: Getting user input

Once the static components have been created, we want to make sure that the weather displayed is not only for Brisbane. We want to get the user to request the location of the forecast. We will do this via two HTML text inputs that will ask user for a city and country so that later on the API knows which information to display. 

In order to do this, we will add two input elements inside of the App component. In App.js, add the following input elements just after the main heading:

```javascript

<div>
  <h1>{this.state.location} Forecast</h1>
  <input type="text" placeholder="City"></input>
  <input type="text" placeholder="Country Code"></input>
  <button onClick={this.handleSubmit}>Submit!</button>
  <ForecastList forecastList={this.state.forecastList}/>
</div>

```

We need to input fields because the API that we will be using requires both a city and a country code to be given in order to send back the weather information necessary.

Now that we have the inputs, we need to be able to get the information the user has started writing on the input fields. React deals with events in a very similar way as normal HTML and JavaScript. In order to grab these events, we can use the keywork "on" plus the event that we want to trigger. For example and "onClick" sets a trigger to a click event or an "onChange" sets a trigger to when an element changes. In this case, we are going to set this event as part of the element as if it was a prop on each of the inputs. 

```javascript

  <input type="text" placeholder="City" onChange={this.handleCityChange}></input>
  <input type="text" placeholder="Country Code" onChange={this.handleCountryChange}></input>

```

The code above establishes a connection between the user and our application. It states that whenever there is a change in the input form, the method "this.handleCityChange" or "this.handleCountryChange" will be triggered depending on which input is being used. Now that we have access to the event, we also need to create the methods "this.handleCityChange" and "this.handleCountryChange" so that they can extract the information. 

Inside of the App class between your constructor and the render method, add the following code:

``` javascript
handleCityChange(e){
  console.log(e.target.value);
}

handleCountryChange(e){
  console.log(e.target.value);
}

```

When triggering events within the input elements, the triggered event creates an event object that contains a lot of information that we can use. We can access this event as the first parameter of the function that is goind to handle the event. In the "handleCityChange(e)", the e parameter is the one that gets to access the event object. Therefore, when we say e.target.value what we mean is the value from the input field. 

The process is as follows:

A user types something new on the text field. Every new character (or white space) trigger the "onChange" event. The onChange event is handled by the methods "this.handleCityChange" and "this.handleCountryChange" which will log to the console the text value that has been included in the text input fields. Open the developer console and start typing on the text fields so that you can see the result.

It is important to bind the methods you have just created so that they work with the current instance. This step will be clarified during class, but if you want to learn more about it check this link https://reactjs.org/docs/faq-functions.html . Add the following two lines of code inside of your constructor after you have defined the state of the class:

```javascript

this.handleCityChange = this.handleCityChange.bind(this);
this.handleCountryChange = this.handleCountryChange.bind(this);
    
```

Being able to log to the console is always nice for testing, but what we want to be able to do here is to grab the information the user has typed and include it in the state of the component so that we can later use it to make the weather API call. Let's add two state properties to the state of the App component. The first property is "searchCity" and "searchCountry", you will need to set both of them to an empty string:

```javascript

this.state = {
      searchCity: "",
      searchCountry: "",
      location: "Brisbane",
      ...

```

This new state information will allows us to save the results of the user's input. In order to do that, we will use the built in method in React called "setState". Change the methods "this.handleCityChange" and "this.handleCountryChange" to look like this:

```javascript

handleCityChange(e){
    let newText = e.target.value;
    this.setState({ searchCity: newText});
  }

  handleCountryChange(e){
    let newText = e.target.value;
    this.setState({ searchCountry: newText});
  }

```

The "setState" method allows us to change the current state of the component by passing in new information to it. In the code above, we are getting the text typed by the user and storing it within the variable "newText". Then we call the "setStatemethod" on the current component via the keyword "this". The setState takes one paramater in order to work, and it has to be an object with key / value pairs. In this object, if the key references exists in the state then the value of for this key will change to "newText". If the key does not exist then it will be created and given the value of "newText". In this case, the "searchCity" and "searchCountry" will be given the new value of newText for their respective text inputs. 

Once the user has finished typing both the city and the country and the system as changed the state, then we want to add a button so that the user can confirm the input and start the API request. To get this started, we will start by adding the button that needs to be clicked after the two input field we have already created: 

```javascript

<input type="text" placeholder="City" onChange={this.handleCityChange}></input>
<input type="text" placeholder="Country Code" onChange={this.handleCountryChange}></input>
<button onClick={this.handleSubmit}>Submit!</button>

```

To this button, we have also added a method called "handleSubmit" which will be triggered by clicking on the button which we have added through the event "onClick". Now we have to create the method "handleSubmit" within this class after the methods you have already added and before the render method:

```javascript

handleSubmit(e){
      this.setState( { location: this.state.searchCity});
      console.log("You have clicked the buttON and it is working, now lets make the API call");
  }

```

What this function does is that upon clicking the submit button, the searchCity term will now be the location for which the weather is being displayed. Now if you type a new city and country code, and then click the submit button you will see that the new city you type will now be displayed as the heading of the application. The console.log statement here is just a placeholder for when we add the actual API on the next major step of the tutorial.

Before we move on, we also need to bind this method. In the constructor, bind the "handleSubmit" method as seen below:

```javascript

    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleCountryChange = this.handleCountryChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
```

Currently, we have succesfully added a way for the user to decide on which location we want the forecast for but none of the information is changing as this is still static from out "state.forecastList". Now, it is finally time to add the live weather data and to connect the user's location choice to trigger a new API call to retrieve weather data which will then be added as the new "state.forecastList". 


# React Tutorial Part 4: OpenWeather API

## Starting with Open Weather API

For this React tutorial, we will be using the OpenWeather API to get our forecast information. In order for you to use this API, you will need to create your own account and get a key for you to use. Head to https://home.openweathermap.org/users/sign_up to register and get a key for your application. The OpenWeather app has both free and paid functionalities, we will be using the free version in order to get a 5-day / 3 hour forecast.

Once you go through the process of regisrtation and you get your key via email (or through your profile page on the API website) we are ready to begin our calls to the API. 

**Note:** even when you receive your key, it may take up to a couple of hours to activate so you may get some errors. Use the link example provided to you in your email confirmation to check the key validity. If you get an error, the key is still not active yet but if you can see some weather information then the key is working. 

## Creating the Call

For this tutorial, we will be covering some aspects of how the API works, however if you are interested in learning how the 5-day / 3 hour forecast part of the API works then you can visit the documentation at https://openweathermap.org/forecast5 .

The first thing that we will do is to create a new directory called "util" inside of the "src" folder we have been working on. The directory name "util" is sometimes used as a convention for non-component functionality. In this case, we are going to add all of out OpenWeather call functionalities here. Inside the "util" folder, create a file called OpenWeather.js. 

There are three main things we will need to start the our OpenWeather API call:

1- Node-fetch: a package that will allows us to make fetch reqeuests
2- API key: your own personal key so that the API can validate the request
3- URL endpoint: the URL that will be used by the API call to reach the particular resource in OpenWeather that we are trying to access

Lets start adding some of these things onto our OpenWeather.js :

1- Node-fetch cannot be used if you have not added it as part of the packages you are using. To check if you have node-fetch, you can run the command 'node-fetch -v' on the terminal inside the working directory. Otherwise, to include node-fetch you can run the command 'npm install node-fetch --save' in the folder you are currently working on. 

2- Once node-fetch has been installed, you need to add it as a module you will be using:

```javascript

const fetch = require('node-fetch');

```

3- Now you need to add your API key:

```javascript
const fetch = require('node-fetch');

const apiKey = "your key should be here, for security reasons I have not added my key";

```

4 - We also need to add a URL. For the sake of testing, we will be using a static URL now, but we will be chanching this later to change the URL based on the specific input from the user:

```javascript
const fetch = require('node-fetch');

const apiKey = "";
const baseUrl = "http://api.openweathermap.org/data/2.5/forecast?q=Brisbane,AU&units=metric&appid=";

```

This URL is the specific endpoint that we need to reach in order to get the information necessary from OpenWeather. In this case, we are asking for the forecast and we add into the query the fact that we want to grab the information for Brisbane,AU so "q=Birsbane,AU" and we want the information in celsius so we also request for "units=metric". A the end of the URL we also need to add your API key.

The URL you created above can be tested by copying it and pasting it into the any browser. When you enter this URL you should see a lot of weather information showing up as a JSON object.

5- We need to create an OpenWeather object that will containt all the methods / functionality for the API call and its handling. We will add the first method called "requestWeather" just to output something onto the console to test everything is working. 

```javascript

const fetch = require('node-fetch');

const apiKey = "f411c7c62d8111abe6bdde05b949e1e1";
const baseUrl = "http://api.openweathermap.org/data/2.5/forecast?q=Brisbane,AU&units=metric&appid=";

const OpenWeather = {
    requestWeather() {
        console.log('Weather Requested');
    }
}

```

6- After all of this code, in order for us to make sure everything is working we call the requestWeather() method:

```

OpenWeather.requestWeather();

```

For now, we will not be outputting this information onto the browser console and instead we will be using Node to check the code. In your terminal you will be running "OpenWeather.js" through the command "node OpenWeather". Depending on the current directory in whichb your terminal is working, you may have to change your directory to the "util" folder. 

If everything has run correctly, you should see your terminal logging "Weather Requested". 

Now that we have started with out OpenWeather functionality, we can move on to getting the necessary information from our API. 

## Fetch & Then

In order for us to get the information from the API, we will be using fetch() which we have added onto our application through the require node-fetch statement earlier. In this section, we will complete the method requestWeather() so all of our new code will be added inside of this method. 

With fetch() we will be able to do a GET request to the API so that the API can send back to our own application the data that we have requested. How does the API know which data we wanted? It will know based on the URL we have stored: 

```javascript

const OpenWeather = {
    requestWeather() {
        const completeUrl = baseUrl + apiKey;
        return fetch(completeUrl);
    }
};

console.log(OpenWeather.requestWeather());

```

First we make sure that we add our API key onto the baseURL we had before. The we get fetch the data from the completeURL endpoint which we have tested before in our browser. 

**Note:** in the above code we wrapped the OpenWeather.requesWeather() in a console.log() so that we can see what the return from the fetch function. In the terminal you will see "Promise { <pending> }", and what this means is that there is a request that is pending and that has not been fulfilled yet but this will not show you the results of the promise being fulfilled. When we use fetch() we are essentially creating a new Promise(), you can read more about promises on JavaScript here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise .

Node and React work in an interesting way when it comes to its processes. Some processes are run asynchronously and some processes are run syncrhonously. The problem here is that we could be writing a piece of code that only works if another process has been completed. The fetch promise is an asynchronous process meaning that Node and React will keep running other code while promises are being fulfilled. So we need to make sure that we handle the requests with then().



```javascript

const OpenWeather = {
    requestWeather() {
        const completeUrl = baseUrl + apiKey;
        return fetch(completeUrl).then( (response) => {
            console.log(response);
        });
    }
};

console.log(OpenWeather.requestWeather());

```

The then() function gets chained to the fetch() request. The return information from the fetch is then passed onto the then() callback as the 'response' parameter. Then we log this repsonse and here you will be able to actually see what the API is sending back. How this works is that the then() function will only start processing when the asynchronous fetch request has finalised and the reponse is ready. Now that we have started with using then(), we will be using it often to control the order of things to ensure processes do not start before their requirements are ready. 

If you noticed the response that was logged does not exactly seem like the information we need. Let's actually get the information we need:

```javascript

return fetch(completeUrl).then( (response) => {
            return response.json();
        }).then( (data) => {
            console.log(data);
        });
        
```

We parse the response from the fetch() and parse it as JSON. Then we chain another then() method to be able to log those results and see what the result is. You can start seeing how we are chaining some callback functions. You will see the new parsed result is starting to have more useful information. If you want to see the structure of a response from the API, have a look at this link https://openweathermap.org/forecast5 under the section JSON response.

While with some APIs you may be able to use the information after parsing the JSON response, with our application the information from the API does not come across perfectly and so we need to extract and manipulate the data. We will create our own array that contains the description, date, maximum temperature, and minimum temperature.

```javascript

return fetch(completeUrl).then( (response) => {
            return response.json();
        }).then( (data) => {
            return data.list.map( (weatherInterval) => ({
                description: weatherInterval.weather[0].description,
                date: weatherInterval['dt_txt'],
                maxTemp: weatherInterval.main['temp_max'],
                minTemp: weatherInterval.main['temp_min']
            }));
        }).then( (list) => {
            console.log(list);
        });

```

The above mapping function will allow us to create a new array with all the information we actually care. The array contains objects with key value pairs as describe above. The full return statement in requestWeather method is the above. Try out the code with Node and see the array of results that comes back. You may notice that the API returns a forecast for every 3 hours. We only neeed a daily forecast and so we need to use the 3 hour forecasts to create a final one by doing the following:

* Check all the objects for each date and check which is the minimum and maximum temperature across all of them
* Check all the objects for each date and check which is the description that occurs the most frequently so that we can used it as the description


## Fromatting the API results as days

For this section, we will be creating some methods within the OpenWeather object. As this functionality will get a bit complicated, it will be explained via comments on the code rather than paragraphs. 

We are going to create a method called convertToDaily inside of the OpenWeather object:

```javascript

Openweather = {
  ...
  convertToDaily(fullForecast) {
      // We need to get the date for the first forecast and currently we have the date 
      //and time so we split the string and save the date as the day variable
      
      let dateTime = fullForecast[0].date.split(" ");
      let day = dateTime[0];
      
      //We initialise all the variables we will be using. dailyInformation is an 
      //array containing the summarised data for each day the temperatures contains all 
      //the minimum and maximum values for each day so that we can get the absolute max and min
      //the descriptions will hold the list of descriptions for each day so we can see 
      //the most frequent one
      
      let dailyInformation = [];
      let temperatures = [];
      let descriptions = []; 
      
      // We are getting a list of 3 hour forecasts for 5 days, which means that we will
      //have a list of 40 weather forecasts. We need to iterate through all of the forecasts and 
      //do something with them. At the moment, we just log each forecast.
      //We loop for fullForecast.length + 1 because we will also need to do something special at the end.

      for(let i = 0; i < fullForecast.length +1 ; i++){
            console.log(fullForecast[i]);
       }
    }
}

```

Also, before we get this to work, we need to get convertToDaily to work after the API information has been loaded. Therefore we are going to add the convertToDaily to the final .then() method in the requestWeather() method instead of the console.log statement we had before:

```javascript

        ...
        }).then( (completeData) => {
            this.convertToDaily(completeData);
        });

```

With the new code, try it out with the command Node OpenWeather. You should see the 40 individual forecasts coming across. Now inside of the for loop, we need to do a lot of work to separate the 40 forecasts into 5 days that we can use in our application. The process here is to check which day we are on and if the new information forms part of the same current date, then the new information should be kept for comparison. Otherwise if the date is a new one, then we need to check for the descriptions and the temperatures to package all the information into one forecast. Lets revisit our convertToDaily method and inside the for loop add the following:

```javascript

for(let i = 0; i < fullForecast.length +1 ; i++){

  
     //As mentioned before, on the last iteration (when index is equal to 40 we will 
     //need to do something special so we will have an if statement to check for this and make 
     //sure that we leave it empty for now.
     
     if( i === 40){

          }else{
              // For any other run at the loop that is not 40, we need to get 
              //the date of the current forecast for index i. We do this in the same 
              //way as before, but now instead of the first item on the array we check 
              //for fullForecast[i]
              
              let currentDateTime = fullForecast[i].date.split(" ");
              let currentDay = currentDateTime[0];
              
              //Here we check if the day set at the beginning is the same as the day 
              //of the current forecast and log the result. If the days are different, 
              //then we have crossed over to the forecasts of another day and we need to acknowledge 
              // this by chanding the day variable to the currentDay

              if (currentDay === day) {
                console.log(currentDay + " is the same as " + day);
              }else{
                console.log(currentDay + " is not the same as " + day);
                day = currentDay;
              }
          }
    }
       
```

The above control flow will check if we are still on the same day. You can see what is being logged to the console as a test. Now that we can checl the dates, we need to combine all of the data for each day into the respective arrays. Delete the console.log statement inside the if statements and add the new code inside of the if statement:

```javascript

 if (currentDay === day) {
        //If the days match, then we want to add the max temperature, min 
        //temperature, and decription onto the empty array called temperatures 
        //and descriptions that we created all the way when we started the convertToDaily function. 
        // We are pushing the information from fullForecast at index i with the the 
        // respective keys (maxTemp, minTemp, description)
        
        temperatures.push(fullForecast[i].maxTemp);
        temperatures.push(fullForecast[i].minTemp);
        descriptions.push(fullForecast[i].description);
    }
    
 ```

To check the outcome of this step, output to the consoles both temperatures and desctiptions but do this as the last line of the loop. You should see two arrays being printed out, the first showing us the logged temperatures and the second showing us the descriptions. But we don't want a list of all of them, we want a list of each day. So now, on the else statement we are going to break them apart.

```javascript

if (currentDay === day) {
      ...
  }else{
      // Once we cross over to the other day, we want for our current stored values to 
      // be pushed as an object into the dailyInformation array
      dailyInformation.push( {
          date: day,
          forecast: descriptions,
          temperatures: temperatures
      })
      
      //Once the values are pushed into the array, we need to set the temperatures
      //and descriptions to be empty as we will need and empty array to store values 
      //for the new days. Given that the iteratot still continues, we will go ahead and store the
      // values from the current index

      temperatures = [];
      temperatures.push(fullForecast[i].maxTemp);
      temperatures.push(fullForecast[i].minTemp);

      descriptions = [];
      descriptions.push(fullForecast[i].description);
      day = currentDay;
  }
        
```
To check the outcome of this step, output to the console the value of dailyInformation outside of the for loop to see what the end result is. There is one thing missing, the code inside the if statement that checks if the index is 40. When the index is 40 all of the values of the final day have been added onto our lists but they havent been pushed to the dailyInformation array. So when the index is 40 we need to do one more push:

```javascript

if (currentDay === day) {
      dailyInformation.push( {
          date: day,
          forecast: descriptions,
          temperatures: temperatures
      })
  }
  
```

Check the log statement now and you will see that now you also have one more day. We have officially split the information into days. We will now be using these results to get the proper min and max temperatures for the whole day as well as the main description we will be using. 

## Max and Min temperatures

Now that we have the information of each day, we will create two methods inside the OpenWeather object. One will be called getMin and the other getMax and they will check all of the temperatures for each day and the using the reduce() method we will return the value that is either the minimum or the maximum. 

```javascript

// The function takes the full array of days as a parameter

getMin(dayForecasts){
        let minTemperatures = [];

//We have a loop to check each day
        for (let i = 0; i < dayForecasts.length; i++) {
        
// For each day, we access it through the current index (i variable) and the property
// temperatures. This temperatures proeperty is a list of all temperatures and therefore
// we can use the reduce() method for arrays that returns one value based on reducing the
// array to one value as per instructions. In this case we compare each value to the next
// one to see which one is the minimum

            let min = dayForecasts[i].temperatures.reduce(function(a, b) {
                return Math.min(a, b);
            });

//Once we have found the minimum, we will push it to the array minTemperatures, which will 
//hold the minimum temp for each day in the respective order

            minTemperatures.push(Math.round(min));
        }

        console.log(minTemperatures);
// return the result from the function
        return minTemperatures;
    },
    
//getMax is the same as above but now we check for the max temperature

getMax(dayForecasts){
    let maxTemperatures = [];
    for (let i = 0; i < dayForecasts.length; i++) {
        let max = dayForecasts[i].temperatures.reduce(function(a, b) {
            return Math.max(a, b);
        });

        maxTemperatures.push(Math.round(max));
    }

    console.log(maxTemperatures);
// return the result from the function
    return maxTemperatures;
}
    
```

We have outputed to the console the final array of max and min temperatures. In order to get these new methods to work, we will call them at the end of the convertToDaily method we were working on before:

```javascript
convertToDaily(fullForecast){
  ...

  let minTemperatures = this.getMin(dailyInformation);
  let maxTemperatures = this.getMax(dailyInformation);
  
}

```

You will see in your console two arrays coming up one with the ordered min temperatures and the other with the ordered max temperatures. Now we can move onto the descriptions.   

## Getting the main descriptions

Lets create another method called getDescription:

```javascript

getDescription(dayForecasts){

// Initialise the array we will return with the descriptions
        let mainDescriptions = [];
// We need to iterate through each of the days
        for (let i = 0; i < dayForecasts.length; i++) {
            
// We create an object descriptionCount to keep count of how many times each description 
// repeats itself, and we also get the currentDayDescriptions by accessing the forecast property
// of the current dayForecast[i]

            let descriptionCount = {};
            let currentDayDescriptions = dayForecasts[i].forecast;
            
// We need to iterate through the list of descriptions for a particular day, and keep count
// of its repetition. We do this by checking whether or not the current description is on the 
// object descriptionCount. If it is, then add 1 to the current number. If the description is not there
// we add it to the object and start it at one. 

            for (let j = 0; j < currentDayDescriptions.length; j++){
                if( currentDayDescriptions[j] in descriptionCount){
                    descriptionCount[currentDayDescriptions[j]] = descriptionCount[currentDayDescriptions[j]] +1;
                }else{
                    descriptionCount[currentDayDescriptions[j]] = 1;
                }
            }
        }

        console.log(descriptionCount);
    }
    
```

The above gets us the count for each type of description, but it does not separate the days. Therefore, after the secon loop, we need to check for the descriptions that have been entered up until day as those are all part of the same day.

``` javascript

getDescription(dayForecasts){

        let mainDescriptions = [];

        for (i = 0; i < dayForecasts.length; i++) {
            
            ...
            
// We give highestFrequency a 0 to be able to compare two numbers

            let highestFrequency = 0;
            
// We then iterate through the keys of the object and get the values for those keys. We then
// compare the current value against the highestFrequency and overwrite the highestFrequency 
// with the current value if that one is bigger

            Object.keys(descriptionCount).forEach( (key, index) => {
                let currentComparison = descriptionCount[key];
                highestFrequency = Math.max(highestFrequency, currentComparison);
            })
            
 // We now have the amount of times the most repeated number in highest frequency.
 // We can then use this value to find the key that holds this value and push it to 
 // the mostFrequentDescription array

            let mostFrequentDescription = Object.keys(descriptionCount).find(key => descriptionCount[key] === highestFrequency);

            mainDescriptions.push(mostFrequentDescription);
        }

        console.log(mainDescriptions);
// return the result from the function
        return mainDescription;
    }

```

In order to check the code above, don't forget to add the call to this method from convertToDaily() just afterwe called this.getMax and this.getMin.

With this code done, we have three different arrays containing 5 (in some cases 6 if the days are not cut off perfectly) elements of useful information. Now lets create out final list with the final information. We will be working again on convertToDaily().

We will make another loop that will be repeated 5 times in order to create out final list of useful information. At the end of convertToDaily() add the following code:

```javascript

let minTemperatures = this.getMin(dailyInformation);
let maxTemperatures = this.getMax(dailyInformation);
let mainDescriptions = this.getDescription(dailyInformation);

// We initialise the list that will contain the final information

let finalWeatherInfo = [];

// We run the loop five times for each of the 5 days we went to create. Sometimes the 
// weather information we created contains 6 days because the API does not send data from each full
// day and instead sends 40 forecasts from the current time and so sometimes instead of 5
// unique days we receive 6. We don't care about the 6th day so we just run the loop five times

    for( i = 0; i < 5; i++) {
    
// For each loop, we create and object where we pass the relevant informtion obatined from previous steps
        let dayInformation = {
            day: dailyInformation[i].date,
            forecast: mainDescriptions[i],
            max: maxTemperatures[i],
            min: minTemperatures[i]
        }
// We push the dayInformation object we just created onto our finalWeatherInfo array.

        finalWeatherInfo.push(dayInformation);
    }
    
// We return the result

    console.log(finalWeatherInfo);
    return finalWeatherInfo;

```

With this final console.log statement, you will finally see that the information is the way that we desire and the same structure as our state.forecastList in the App.js component. Lets now get the OpenWeather functionality connected to our own app. 

## Calling the API from React

We are just about to move onto our App.js component, but there are a couple of changes we need to do inside of OpenWeather.js in order to get our data ready:

1- Rather than call the function OpenWeather.requestWeather() at the end of OpenWeather.js, we need to export the OpenWeather component so that it can be used within our App.js. Change the last line of OpenWeather.js to an export statement:

```javascript 

export default OpenWeather;

```

2- We were only testing the functionality of convertToDaily() before, but now we actually need to return it. Inside of requestWeather(), make sure that before you call the convertToDaily() method you also add the keywork "return" so that the final weather information is actually returned when we requst the API data.

``` jvascript

.then( (completeData) => {
    return this.convertToDaily(completeData);
})

```

3- At the moment, our data is always requesting weather for Brisbane however in the actual application we will be receiving a city / town and country and getting the weather for that specific location. Therefore, we need to prepare our function to receive some information and to change the requested URL based on this. We will be changing the baseUrl constant at the beginning of the script and  the beginning of the requestWeather() method:

```javascript

const baseUrl = "http://api.openweathermap.org/data/2.5/forecast?q=";

const OpenWeather = {
    requestWeather(city, country) {
        const completeUrl = baseUrl + city + "," + country + "&units=metric&appid=" + apiKey;

```

Here, we changesd the baseURL to not include Brisbane and AU anymore as this information will not always be Brisbane AU. For us to get the city and country information, we will pass this data into our requestWeather(city, country) method as city and country. This information will be provided by the state from the App.js. Finally, we build the complete URL by adding the baseUrl string plus the city, country, the reques for metric system, and the API key. 

Now requestWeather(city, country) is expecting to be given a city and country for it to be able to know which information to request from the API. Now we can move onto the App.js component. Before we move onto using OpenWeather, we need to import it at the top of App.js:

```javascript

import OpenWeather from '../util/OpenWeater';

```

How do we change the weather information, well we need to call the API and get those results to update the state. We already have this functionality partly implemented from part 3 when we allowed for the text input to check which city and country has been typed by the user and the click on the submit button should be the one to trigger the request. Head to the handleSubmit() method inside of the App component, and change the current placeholder content with a call to the OpenWeather API:

```javascript

handleSubmit(e){
      OpenWeather.requestWeather(this.state.searchCity, this.state.searchCountry).then ( 
        (data) => {
          this.setState( {forecastList:data, location: this.state.searchCity});
      })
  }
  
```

Now, when the button is submitted, the request takes the text input from the user via the state.searchCity and searchCountry. Then the OpenWeather.requestWeather gets triggered and requests the weather information for that location. Once the information is returned, then the information is used to update state.forecastList which contains all the weather information. With the new weather information, React checks that data has changed and it updates the data and passes it down to all the child components to the locations we indicated from our original static structure. 

You will notice that the images don't change because the structure of the data is a bit different now. Lets fix this. 

## Changing the icon.

You may notice that our new descriptions are a bit different than the placeholder descriptions we used to create the static components. Therefore we need to change the comparison logic to cater for the new descriptions. Go to WeatherIcon.js and update the getIcon():

```javascript

getIcon(forecast) {
        if(forecast.includes("clouds")){
            return Cloudy;
        }else if (forecast.includes("rain")) {
            return Rainy;
        }else if (forecast.includes("clear")) {
            return Sunny;
        }else{
            return Thunderstorms;
        }
    }
    
```

The function will now check the description and see if the description text includes another piece of text like "clouds" or "rain" in order to check which image to return. The default case is if it can't find anything to match then it will display the ThunderStorms icon. This is not the optimal system, but it is a good way to limit the amount of icons we use. 

Finally, you may notice that everytime that we reload the application, we are getting the initial static information we were using to test the static components. This is not what we want, we want the application to get the actual Brisbane forecast when it loads up. Therefore, upon the page loading we want to use OpenWeather to grab the forecast and then display the actual data. 

## Setting Brisbane as a default

In order to set up Brisbane to be the default and load Brisbane's forecast once the application is ready. Here, we will introduce the React lifecycle methods. React has a series of methods that can be triggered for specific events that occur to React components. For example, if we want something to happen before a component Updates we can use the built in "componentWillUpdate()" method. If we want something to happen when React recognises that a component can be mounted or added to the application then we can use "componentWillMount()". If you want to learn more about the React Lifecycle have a look at these two links: https://reactjs.org/docs/state-and-lifecycle.html , https://programmingwithmosh.com/javascript/react-lifecycle-methods/ .

Essentially, we want to check that if the App component works we get some weather information for Brisbane as the default before the component actually renders. 

The first thing we will do is to update the state.location to bean empty string and state.forecastList to be an empty array:

```javascript

this.state = {
      searchCity: "",
      searchCountry: "",
      location: "",
      forecastList: []
    }

```

Now we start with an empty template. You will see in your browser that at the moment there will be an error when rendering because React is being told to use empty information for a lot of processes. We need to fix this up with out componentWillMount(). Add the following code before you start the handleCityChange() insie of App.js:

```javascript

componentWillMount(){
    OpenWeather.requestWeather("Brisbane","au").then( (results) => {
      this.setState( {forecastList: results, location: "Brisbane"})
    })
  }

```

Once the App component is mountable and before it renders the code in the function componentWillMount() will run. Inside here we request a call to the API, but in this case we pass the fixed values "Brisbane" and "au" because this is the default and then we set the state for forecastList and location just as we have done before.

Thats it! Your code should now work! It is far from perfect but its a good start

# What we covered & extending the project

In this tutorial we covered the following:

* Setting up Create-React-App
* Understanding some essential React concepts
* JSX Syntax
* Creating and using components
* Using props & state
* Adding events to React elements
* Getting user input
* Updating state with user input
* Calling the OpenWeather API
* Formatting the OpenWeather API data
* Using data from API calls in our React App

This is a lot of information, and its completely fine if it takes some time to cover all of it. React can be extended with much more functionality beyond what we have done in this tutorial. Here are some ideas for you to start practicing:

* Change the date from the API call to also show what type of day it is (Monday, Tuesday, etc.)
* Instead of the icons that we downloaded, use the icons from OpenWeather
* Add error handling so that if a user enters an invalid location or country the system can handle this elegantly
* Have a look at what Redux is, and see if there is any 
* Having a look at animating some of your elements. This is a starting point: https://medium.com/@dmitrynozhenko/5-ways-to-animate-a-reactjs-app-in-2019-56eb9af6e3bf
* Rather than have Brisbane as default, get the browser to request the user's location and then call the API with the user's location as the first call. Maybe this npm package could help you: https://www.npmjs.com/package/geolocator


# References to Icon images

Cloudy: Icon made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>

Rainy: Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>

Sunny: Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>

Thunderstorm: Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
