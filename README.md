# React-Tutorial Part 1: Introduction to JSX & React

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

**NOTE: at this stage, in your localhost:3000 you will not be able to see the code display and instead yu will see an error because we have still not created the ForecastList element and so React throws an error to let us know we are attempting to import a class that has not been defined. Here is the error you may see:

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

const apiKey = "f411c7c62d8111abe6bdde05b949e1e1";
const baseUrl = "http://api.openweathermap.org/data/2.5/forecast?q=Brisbane,AU&units=metric&appid=";

```

This URL is the specific endpoint that we need to reach in order to get the information necessary from OpenWeather. In this case, we are asking for the forecast and we add into the query the fact that we want to grab the information for Brisbane,AU so "q=Birsbane,AU" and we want the information in celsius so we also request for "units=metric". A the end of the URL we also need to add your API key.

The URL you created above can be tested by copying it and pasting it into the any browser. When you enter this URL you should see a lot of weather information showing up as a JSON object.  



## Fetch & Then

## Fromatting the API results

## Calling the API from React

## Changing the icons

## Setting Brisbane as a default



# References to Icon images

Cloudy: Icon made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>

Rainy: Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>

Sunny: Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>

Thunderstorm: Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
