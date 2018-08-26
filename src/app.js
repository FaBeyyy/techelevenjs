import {tech} from './framework/techInit.js';
import {techDOM} from './framework/techInit.js';
import { Component } from './framework/component.js';
 

const HelloComponent = () => {
    return tech.createElement('div', null, `hi from component`);
}

class HelloClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            changed: 0,
        };

        this.test = () => {
            this.setState({changed: this.state.changed+1});
        };
        this.changeState = () => {
            setTimeout(this.test,5000);
        };
    }

    render() {
        this.changeState();
        const {name} = this.props;
        return tech.createElement('div', this.props, `hi from class ${name}, state changed: ${this.state.changed}`)
    }
}

//const helloWorld2 = Hello();
//const helloWorld = tech.createElement(Hello, null, null);

//const parent = tech.createElement('div', null, helloWorld, 'string');

const classTest = tech.createElement(HelloClass, {name: 'tech11'}, null);

techDOM.initEntryPoint(HelloClass);
techDOM.render(classTest);