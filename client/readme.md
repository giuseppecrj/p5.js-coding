# Guidelines and Procedures for Front End Applications

These guidelines provide a direction for developers to start creating applications for the front end

Table of Contents
-----------------
- [Component Guidelines](#component-guidelines)

Component Guidelines
--------

All development will follow the component architecture, for more information on what this means please visit the [thinking in react](https://facebook.github.io/react/docs/thinking-in-react.html) article

The Reason For a Component Based Approach
There is a large number of benefits to leverage from this approach:

- Reusable Components - Instead of implementing similar controller/views over and over again and bloating the template, this approach enables to create components that can be composed into bigger components.
- Thinking about how the data flows.
- Clear relationship between the view template and the controller via directives.
- Isolated scope Only pass in the data that is needed for the component to behave as expected.
- Reason about state This means distinguishing between components that simply render data and components that might need to keep a certain state or operate on the given data.
- Components are testable Ensuring that components work as expected with Karma/Jasmine for example.

Here at herman-scheer we structure applications in the following component naming conventions in order to organize folder structure better.

- **Hero:** Component that represent a large callout, usually there's a background image within this component along with a h1-h3 tag that represent a title
- **Header:** A combination of a h tag along with a p tag that serve as title and subtitle sections
- **Thumb:** Thumbs are thumbnail components, these are usually part of a grid or within a loop that demonstrate repeatable data elements such as news articles or case studies
- **Nav:** Any navigational components such as nav bars or breadcrumbs will fall under the nav component type
- **Form:** A component type that represent either an input or a conglomerate of inputs within a ```<form action=""></form>``` tag
- **Button:** Any component that represent a submission or a link that act as event handlers
- **Slider:** A component that represent a collection of images or text that cycle in a specific order from right to left
- **Custom:** Any component that does not fall under the above categories such as components that might use html5 features like audio or components that use svg animations as their main feature.

#### Page Components
Page components are strictly for layout purposes, these components act as wrappers for the components above, these components usually contain padding, margin and position options and nothing more, all changes to a component base on the page they're on are contextual changes and are to be made in the component styling rather than the page styling:

```sass
// home.client.component.sass
// Just layout changes
.home
  @include grid-row()

  .home__wrapper
    @include grid-column()

  .home__contact-map
    position: relative
    padding-top: 1rem
    padding-bottom: 4rem
```

```sass
// custom-contact.map.client.component.sass
// component contextual styling changes
.custom-contact-map
  background-color: $c1

  .home &
    background-color: $c3
```

We stick to these default categories when creating components and use them as prefixes for any naming that will serve as differentiator but still maintain it within the category for example:

```pug
form-contact
form-newsletter
```

These two components are part of the **form** component type however one belongs as a contact form and the other one belongs as a newsletter form, this simple naming conventions helps us know these components are forms which technically means they contain input and submit buttons which will help any developer understand what that component does without having to inspect elements.

You can find other examples by going to [herman-scheer.com](http://herman-scheer.com) and inspecting any element. All components in the website follow the strict naming convention.
