# mosaico-fe challenge
## how to run
before start project, install all dependences <br/>

`$ yarn` <br/>
and then run <br/>
`$ yarn dev` <br/>
to start the project
<br/>

## running tests
to check all tests, run the comma: <br/>
`$ yarn test`

## Description
Whole project uses some libraries that I use as main:
- React redux, @redux/toolkit
- React-router-dom v6
- styled-components with theme to define design tokens
- styled-system to help write process using theme and dynamically creating variable components
- react-query to manage all system queries

- eslint, prettier to linting the code and keep default definitions
- webpack and babel to run the project at development environment, and bundle splitting and generation

### Architecture
#### -> Services
All the data received from the backend will pass inside a react-query hook, that will receive and normalize data to the system respected format data. 
After it, data will be passed to the components that will use it. 

#### -> Components
The system components was divided with DesingSystem components and system components. DesignSystem components folder is in a format that we can export to a npm library
and manage it as a formal libary. In this format, not using a library, we can split the DesignSystem code using webpack code splitting, to generate a new bundle with 
those components. 
<br/>
All the other components are system components that can be reutilized in different cases, but don't match as a design system component.
<br/>
I wrote some components with a <Skeleton /> component that will be shown while queries are loading. And I wrote a skeleton container 
to reply the components if it's necessary.

#### -> State
The global state is managed with react-redux and @redux/toolkit. Now it's only an example code, that manages only layout property that will change 
the header variation.

#### -> Routes
The routes are managed with the react-router-dom v6 architecture. And I created a HOC component (only to show the skill rs) that will provide to all pages
wrapped, the possibility to display another header variant, but always showing the default header if it isn't given as prop. This HOC component will change the 
global layout state. But we have a fell other ways to write the same think. One of them is by using stack navigation, as react native style.

#### -> Theming
The theme was created based on figma layouts and tokens. I created a typography section that will provides to the system the typography tokens,
providing the possibility to access it from other components if it's necessary. In the majority part, the system use theme spacing tokens to respect
layout.

#### -> Git
I've used a very simple git strategy, that don't have any release/develop branch, only have feat branches and main, 
and they will be merged when it's all ready from the feature. But, in other case, we can apply git flow strategies to work with more developers team,
or create a custom strategy that matches with the team workflow.
