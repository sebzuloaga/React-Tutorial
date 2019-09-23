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
3. On Visual Studio, open up a terminal and make sure that you are currently on the "React" directory you created before. 
4. **NOTE**: you will need to have Node and npm installed in your device. If you need to get Node you can go to this link https://nodejs.org/en/download/ and if you need to install npm you can run this command on your Visual Studio terminal after downloading Node: "npm install npm@latest -g"
5. On the terminal type the following: *npm init react-app* **your-application-name-goes-here**. If this does not work, then try: *create-react-app **your-application-name-goes-here**.  
6. If step 5 ran without an error, you will see that the terminal will tell you that it is creating the files. Once it is done you should see in Visual Studio a folder structure like the following image: 

![alt text](https://github.com/sebzuloaga/React-Tutorial/blob/master/images/folder_structure.png "Folder Structure")

### Working with the lab computers

1. 
