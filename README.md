# React-Tutorial Part 1: Introduction to JSX & React

In this tutorial you will learn how to get started with React JS. React is a framework that allows us to create websites that are built on the basis of reusable components. Traditional websites are built on the basis of adding all of the code to be rendered onto the single file. However React JS will separate your code onto different components and thus different files. 

There are many advantages to React JS, but here are a couple of them:

1. Components are reusable 
2. Components are easy to maintain than traditional static websites
3. React JS allows for better performance based on rendering chamnges only when necessary
4. It can lead you on to React Native development

## Structure of this Tutorial

In this tutorial you will be doing the following things:

1. **Setting up React** 
2. **The React folder structure**
3. **Creating the App and your first component**
4. **Organising your CSS and Images**
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

7. To make sure that everything is working fine, go to the terminal in Visual Studio Code and type and enter the following command: npm run

### Working with the lab computers

1.	Run “Windows” key + R

2.	Type cmd to open up the command prompt

3.	Make sure you can see your username on the command line

4.	Make a new directory from here by typing and entering: mkdir react

5.	navigate to that directory by using the command: **cd name_of_directory**

6.	When you are inside the directory, type the following command: *npm init react-app* **give-your-project-a-name-here**

7. If step 6 ran without an error, you will see that the terminal will tell you that it is creating the files. Once it is done you should be able to navigate to the folder that has your user files and see the new project that you have created. Drah and drop your folder onto Visual Studio Code. You should now see a folder structure on Visual Studio Code like the image above.  

8. To make sure that everything is working fine, go to the terminal in Visual Studio Code and type and enter the following command: npm run

### The React Folder structure

* public: this folder contains all the files that are ready to be deployed. In summary, the files in the public folder will be the files that create the final build of the application.
* src: this folder contains all the files during the development. You will be mostly coding and creating files on the src folder.

In your src folder, delete "App.test.js" and "logo.svg". Then go to "App.js", "App.css", "index.js", and "index.css" and delete the contents of this file. We do this in order to really start with a blank project. Also, go to the public folder to index.html and delete the link tag with a href="favico.ico".

For each component that we create, we will make a new subfolder on the "src" folder. 

### Creating your app and your first component.


#### Your App component

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
class extends React.Component {

  const text = "The following application has the forecast for the next five days";
  render() {
  return (
    <div className="weatherApp">
      <h1>This is my weather App</h1>
      <p>{text}</p>
    </div>
  )
}
```

#### Rules of JSX
