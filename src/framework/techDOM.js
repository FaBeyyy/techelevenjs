import {tech} from './techInit.js'

class TechDOM {
    constructor(tech) {
        this.rootElement = document.getElementById('root');
        this.entryClass = null;
        this.tech = tech;
    }
    initEntryPoint(entryClass) {
        this.entryClass = entryClass;
    }

    render(element) {
        // add element to dom tree (using root element as base parent)
        this.rootElement.appendChild(element);
    }
    reRender() {
        this.rootElement.childNodes.forEach(childNode => {
            this.rootElement.removeChild(childNode);
        });
        
        const element = this.tech.createElement(this.entryClass, this.props, null);
        this.render(element);
    }
}

export default TechDOM;


