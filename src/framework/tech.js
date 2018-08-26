import { isClass, isFunc, isObject, isString } from './techUtils.js';
import { techDOM } from './techInit.js';

class Tech {
  constructor() {
    this.activeClasses = [];
  }
  
  // returns a valid dom element with one or more children
  _addElement(element, props, children) {
    // if element is function return the function call
    if (isClass(element)) {
      // support classes
      let elementObj = null;

      this.activeClasses.forEach(active => {
        if (active.constructor.name === element.name) {
            elementObj = active;
        };
      });
      if (elementObj === null) {
        elementObj = new element(props);
        this.activeClasses.push(elementObj);
      }
      return elementObj.render();
    }
    if (isFunc(element)) {
      return element();
    }

    const addElement = document.createElement(element);

    children.forEach(child => {
      // support html elements 
      if (isObject(child)) {
        addElement.appendChild(child);

      } else if (isString(child)) {
        // support plain strings
        addElement.innerHTML += child;
      }

    });
    return addElement;
  }

  createElement(element, props, ...children) {
    return this._addElement(element, props, children);
  }

}

export default Tech;

