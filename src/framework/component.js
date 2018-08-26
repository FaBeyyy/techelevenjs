import { techDOM } from "./techInit.js";
import {tech} from './techInit.js'
 
export class Component {
    constructor(props) {
        this.props = props;
        this.state = null;
    }
    render() {

    }
    setState(obj) {
        this.state = {
            ...this.state,
            ...obj,
        }; 
        techDOM.reRender(this.props);
    }
};