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


## Navigation

<div>Setting the Default Screen</div><div><div><p>When setting up a Navigator (like <code>&lt;Stack.Navigator&gt;</code>) and registering its screens (via <code>&lt;Stack.Screen&gt;</code>), you can decide <strong>which screen will be shown as a default when the app starts</strong>.</p><p>Out of the box, the <strong>top-most screen</strong> (i.e. the <strong>first child </strong>inside of <code>&lt;Stack.Navigator&gt;</code>) is used as the initial screen.</p><p>I.e., in the following example, the AllProducts screen would be shown as an initial screen when the app starts:</p><div><div><pre class="prettyprint linenums prettyprinted" role="presentation" style=""><ol class="linenums"><li class="L0"><span class="tag">&lt;Stack.Navigator&gt;</span></li><li class="L1"><span class="pln">  </span><span class="tag">&lt;Stack.Screen</span><span class="pln"> </span><span class="atn">name</span><span class="pun">=</span><span class="atv">"AllProducts"</span><span class="pln"> </span><span class="atn">component</span><span class="pun">=</span><span class="atv">{AllProducts}</span><span class="pln"> </span><span class="tag">/&gt;</span><span> // initial screen</span></li><li class="L2"><span class="pln">  </span><span class="tag">&lt;Stack.Screen</span><span class="pln"> </span><span class="atn">name</span><span class="pun">=</span><span class="atv">"ProductDetails"</span><span class="pln"> </span><span class="atn">component</span><span class="pun">=</span><span class="atv">{ProductDetails}</span><span class="pln"> </span><span class="tag">/&gt;</span></li><li class="L3"><span class="tag">&lt;/Stack.Navigator&gt;</span></li></ol></pre></div></div><p>You can therefore change the initial screen by changing the <code>&lt;Stack.Screen&gt;</code> order. Alternatively, there also is an <code>initialRouteName</code> prop that can be set on the navigator component (i.e., on <code>&lt;Stack.Navigator&gt;</code> in this case):</p><div class="ud-component--base-components--code-block"><div><pre class="prettyprint linenums prettyprinted" role="presentation" style=""><ol class="linenums"><li class="L0"><span class="tag">&lt;Stack.Navigator</span><span class="pln"> </span><span class="atn">initialRouteName</span><span class="pun">=</span><span class="atv">"ProductDetails"</span><span class="tag">&gt;</span></li><li class="L1"><span class="pln">  </span><span class="tag">&lt;Stack.Screen</span><span class="pln"> </span><span class="atn">name</span><span class="pun">=</span><span class="atv">"AllProducts"</span><span class="pln"> </span><span class="atn">component</span><span class="pun">=</span><span class="atv">{AllProducts}</span><span class="pln"> </span><span class="tag">/&gt;</span><span class="pln"> </span></li><li class="L2"><span class="pln">  </span><span class="tag">&lt;Stack.Screen</span><span class="pln"> </span><span class="atn">name</span><span class="pun">=</span><span class="atv">"ProductDetails"</span><span class="pln"> </span><span class="atn">component</span><span class="pun">=</span><span class="atv">{ProductDetails}</span><span class="pln"> </span><span class="tag">/&gt;</span><span class="pln"> // initial screen</span></li><li class="L3"><span class="tag">&lt;/Stack.Navigator&gt;</span></li></ol></pre></div></div></div></div>