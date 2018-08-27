export function isClass(v) {
    return typeof v === 'function' && /^\s*class\s+/.test(v.toString());
}

export function isFunc(val) {
    return typeof (val) === 'function';
}

export function isObject(val) {
    return typeof (val) === 'object';
}

export function isString(val) {
    return typeof (val) === 'string';
}

// creates eg. 'div' from string with atrr and handlers from given props
export function createDocumentParentElement(element, props) {
    let addElement = document.createElement(element);
    if (props) {
        if (props.hasOwnProperty('onClick')) {
            addElement.onclick = props.onClick;
        }
        if (props.hasOwnProperty('className')) {
            addElement.className = props.className;
        }
        if (props.hasOwnProperty('id')) {
            addElement.id = props.id;
        }
        if (props.hasOwnProperty('href')) {
            addElement.href = props.href;
        }
        if (props.hasOwnProperty('src')) {
            addElement.src = props.src;
        }
        if (props.hasOwnProperty('style')) {
            addElement.style = props.style;
        }
        if (props.hasOwnProperty('title')) {
            addElement.title = props.title;
        }
    }
    return addElement;
}