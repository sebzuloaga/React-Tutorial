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

* **Add the necessary JSX content**. If you remember the image earlier where we showed the component structure. App.js will render a heading with the location of the forecast, and it will also have a Forecast List element. At the moment we will just put a <p> placeholder for the forecastList (note that at this stage for the purpose of the tutorial we have removed the "text" variable we created earlier in App.js and also the <p> that displayed the "text" variable): 

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
  background-color: white;
  height: 40vh;
}
```

* **Replace the placeholder paragraph with the <ForecastList /> element:** 

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

* **Add the import of the <ForecastList /> element.** We can't use the module if it has not been imported:

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

