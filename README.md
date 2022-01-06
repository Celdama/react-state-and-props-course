# Props

How do we share values or even functionnality between components ? the answer is `props`
Props are one of the two major pillars of React => the very heard of what the framework was built on.

In the JSX where we implement MyComponent, we also pass down a property called title. This syntax should look familiar to you: it’s the same way we assign attributes to HTML elements. In this specific example, we assign a “prop” (short for property, as in an object property) called title which we set to the value "React". In MyComponent, we can access this “prop” from within MyComponent with the syntax this.props.title. This technique is called “passing props.”
