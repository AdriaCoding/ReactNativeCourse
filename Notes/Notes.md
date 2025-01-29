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