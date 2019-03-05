#   install parcel command
npm install -D parcel-bundler

#   install Prettier
npm install -D prettier

#   configuring ESLint with React
npm install -D babel-eslint eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react

# to remove class constructor with babel
npm install -D babel-eslint babel-core babel-preset-env babel-plugin-transform-class-properties babel-preset-react 
-   babel-eslint                                -> allow eslint to use babel to transform your code so it can read it
-   babel-core                                  -> perform transformations
-   babel-preset-env                            -> get future JavaScript and transpiles it to current JavaScript
-   babel-plugin-transform-class-properties     -> allows you to do top level properties on classes
-   babel-preset-react                          -> allows babel to understand JSX
  
# Topics to learn
-   event bubbling
-   event delegation