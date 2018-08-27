## Simple usage
Similliar to ReactJS you can create strings, functions and classes that you want to render the following: 
```javascript
const HelloString = tech.createElement('div', null, `hi i am a string`);

const HelloComponent = () => {
    return tech.createElement('div', null, `hi from component`);
}

class HelloClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return tech.createElement('div', {className: hello-class, onClick:...}, `hi from class ${name}, state changed: ${this.state}`)
    }
}
const RenderAbleHelloClass = tech.createElement(HelloClass, props, null);
```
If you want to render these created components you simply do:
```javascript
techDOM.render(component);
```
To use local state in a class simply inherit from Component and use ```setState({name: value})``` to change it.
The DOM is then automatically cleared and re-rendered with the new state/props,

## Performance conclusions
#### Initial page rendering:
Pretty much the same
#### Updating the dom via state/prop changes (comparing to ReactJS setState())
ReactJS: ~0.01ms 

TechElevenJS: ~2ms+ (mostly a bit higher)

### Why is that?
It simply comes down to the performance heavy DOM changes (re-render).
##### What we do:

1. Call the re-render function
2. Clear the DOM
3. Completely render the DOM from beginning

##### What ReactJS does: 

1. Call the render function for the component
2. Get the current DOM
3. Get the future DOM after state changes
4. Only apply the specific DOM changes that differ

It's pretty easy to figure out why ReactJS is superior here.
Using something called virtual DOM ReactJS manages to only update what is needed and nothing more, which leads to an extreme performance advantage.

## Conclusion
Even though virtual DOM and many more aspects (eg. event handling etc..) that make libraries like ReactJS as good as they are could be implemented, the extraordinary amount of work that has to be put in to keep it bug free is in my opinion completely unnecessary.
