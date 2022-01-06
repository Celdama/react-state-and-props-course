# Props

How do we share values or even functionnality between components ? the answer is `props`
Props are one of the two major pillars of React => the very heard of what the framework was built on.

In the JSX where we implement MyComponent, we also pass down a property called title. This syntax should look familiar to you: it’s the same way we assign attributes to HTML elements. In this specific example, we assign a “prop” (short for property, as in an object property) called title which we set to the value "React". In MyComponent, we can access this “prop” from within MyComponent with the syntax this.props.title. This technique is called “passing props.”

## funct as props

Now, you might be wondering how props work with functions. Believe it or not, they work the same way!

Ok, there is a little bit more going on here, but in the end, it works exactly as in the example before. First, there is MyComponent, which is essentially the same except one key difference: {this.props.onButtonClicked} is assigned to the onClick event of the component. Essentially, what this means is:

- Our MyComponent component is expecting a prop to be passed into it named onButtonClicked
- The value of that prop should be some kind of function
- We want this function to be attached to the click event of our button.

_Special Note 1_: In React, instead of using addEventListener to add event listeners, we assign them right in the JSX. Unlike adding them in HTML, these attributes must be camelCased!

_Special Note 2_: Did you notice how the function this.props.onButtonClicked was wrapped in curly braces? This is because JSX needs a way of knowing when you are using JavaScript, otherwise it will try to transpile your code into HTML elements, text nodes, or strings (or throw an error in some cases). In this case, we are referring to a JavaScript object property, which technically qualifies as “using JavaScript,” so we must wrap it in curly braces.

Now onto the App component. First, we defined the method onClickBtn above the render method. After that, we passed this function down to our MyComponent as a prop, which we named onButtonClicked (of course, you could also name it onClickBtn and then use that function in MyComponent.js with the name of onClickBtn, but we wanted to emphasize that you can rename the functions when passing them around as props). We do that in the same way that we passed the title value previously, except instead of passing a string, we’re just passing a function (and using curly braces to do so because it’s a JavaScript variable).

# State

The other main pillar of React is state. State is simply what we use to handle values that can change over time. For example, consider a very simple application that has a button and a counter. When the user clicks the button, the counter is incremented by 1. Since count will need to change on every click, we want to hold that value in state.

In the app component, we declared our state as an object with a property count set to an initial value of 0. You always declare state in the constructor of a class component. Once again, this will work differently when we cover functional components later. The setState method we call inside the countUp method sets the state to a new value.

IMPORTANT: In React, state should be treated as immutable. This means you should never change state directly (i.e. without using setState) because it can lead to unexpected behavior or bugs.

In other words, you should never do something like: this.state.count = 3, or, this.state.count++. Instead, always use the setState method React provides to class components to modify the state. Keep this in mind - it can save you a lot of debugging when you are getting started with React. This [article](https://web.archive.org/web/20211101150139/https://lorenstewart.me/2017/01/22/javascript-array-methods-mutating-vs-non-mutating/) does a great job analyzing many popular JavaScript methods concerning mutability. Take some time to read it so you can understand how easy it can be to accidentally mutate state.

# What about passing state as a prop ? legal ?

Yes! One of the greatest and most powerful features of React is the ability to pass one component’s state down to multiple children. When that piece of state is changed, each child component that uses it is automatically re-rendered with the new value!

Consider a webpage such as a forum where the “main” component of the site (we’ll call that component Forum) needed to know the user’s username so that when they are viewing a post or reply they wrote, the author is shown as “me” instead of “user123”. You’d probably want to keep that username as a piece of data in state so each user that visited the site and logged in could have this functionality. Now let’s say on that same site, you want the login button on the navigation bar to change into the user’s username to visually indicate to them that they are logged in. Instead of keeping this piece of state in both the NavBar and Forum component, we can keep it in their parent, App, and pass it down as a prop to both like so:

```js
// in the render method of App.js
return (
  <div>
    <NavBar username={this.state.username} />
    <Forum username={this.state.username} />
    <Footer />
  </div>
);
```

Now, when the user logs in, both the NavBar and Forum components will update, but the Footer component (which doesn’t need to know about that data) will not re-render. Pretty cool, right?

# State and props in functionnal components

As we learned in the previous lesson, and repeatedly made reference to in this lesson, React provides the ability to create components as functions instead of classes. We call these functional components. They use somewhat different syntax than the class components we’ve discussed thus far, but they essentially do that same thing. In functional components, we don’t pass props as an argument to the constructor, but instead just pass it as an argument to the component itself. Another major difference between functional and class components concerning props is the way you reference the props. You learned that in a class component, the props that have been passed down from the parent component can be used with this syntax: this.props.someFunction, however in functional components, we don’t need to reference this, so we access props simply with: props.someFunction. That’s the main difference with props between class and functional components. Let consider a quick example to solidify this:

```js
// MyComponent.js

import React from 'react';

function MyComponent(props) {
  return <div>{props.title}</div>;
}

export default MyComponent;
```

```js
// App.js

import React from 'react';
import MyComponent from './MyComponent';

function App() {
  return (
    <div>
      <MyComponent title='Hello World' />
    </div>
  );
}

export default App;
```

Of course, we can also destructure from props here. By adding the line const {title} = props above the return statement in MyComponent.js we can just refer to the title using {title}. Or, we can skip that line of code altogether if we destructure the prop inside the parameter parentheses like so:

```js
function MyComponent({ title }) {
  // rest of code
}
```

Using state in functional components is a bit different. Before the end of 2018, developers were not able to access state in functional components at all. Functional components were therefore just used for returning JSX logic with props. However, with the introduction of React Hooks, this changed. Now we can set and access state in functional components, and in the modern React landscape, they are often preferred over class components. React developers will be exposed to both kinds of components on the job, so it’s imperative for us to be very familiar with both. The way React hooks work is the topic of one of the following lessons, so don’t worry about it right now. We are setting you up to say “Hey! I remember that” when it’s introduced.

# Difference of Props and State

We have already learned about Props and we got to know that Props are also objects that hold information to control the behavior of that particular component, sounds familiar to State indeed but props and states are nowhere near be same. Let us differentiate the two.

- Props are immutable i.e. once set the props cannot be changed, while State is an observable object that is to be used to hold data that may change over time and to control the behavior after each change.
- States can be used in Class Components, Functional components with the use of React Hooks (useState and other methods) while Props don’t have this limitation.
- While Props are set by the parent component, State is generally updated by event handlers.
