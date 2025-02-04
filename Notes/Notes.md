# 2 What is React Native?
![What is Recat Native?](/Notes/whatIsReactNative.png)

# 4. A look under the hook

Un exemple del codi per una react component. S'usa una arrow function enlloc de la classica keyword 'function`.
```js
const App = props => {
    return (
        <View>
            <Text>Hello there!</Text>
        </View>
    );
}; 
```
La idea de React Native es que compila cada  component que tu escrius a una component equivalent per cada plataforma.
![Table of components](/Notes/components.png)

El codi lògic no es compila, serà interpretat per una thread de JavaScript que la nostras app hostejarà.

### React Native: Core Components, Styling & Colors - More Information

In this course, we'll use and style many components in many apps - hence you'll get lots of insights and practice opportunities, when it comes to styling and building user interfaces.

Still, every app has different requirements, hence I also strongly recommend exploring the official styling documentation: https://reactnative.dev/docs/style

You also might want to explore the official article about "Colors" to learn about different ways of setting & using colors in React Native apps: https://reactnative.dev/docs/colors (in this course, we'll primarily use hex code colors).

It's also worth exploring the official API reference articles for the different core components you might be using. For example, you can learn about all the props that can be set on the `<View>` component here: https://reactnative.dev/docs/view

From this article, you can also get to the supported style properties for this component (via https://reactnative.dev/docs/view#style): https://reactnative.dev/docs/view-style-props