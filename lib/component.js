class Component {
    constructor(children = [], team) {
      this.children = children;
      this.team = team
    }
    render() {
      throw new Error('Child class must implement a render() method.');
    }
    renderInnerHtml() {
      // Loop over children and convert any children that aren't strings to an
      // html string by calling its render method.
      return this.children
        .map((child) => {
          console.log(child)
          console.log(typeof child)
          if (typeof child === 'string' || typeof child === 'number') {
            if (child === this.children[3]) {
              return `<li><a href="mailto:${child}">Contact this player</a></li>`
            } else if (child === this.children[5]) {
              return `<li><img src="${child}" alt="Image of ${this.children[0]}"></li>`;
            } else {
              return `<li>${child}</li>`;
            }
          }
          return child.render();
        })
        .join('');
    }
  }
  
  module.exports = Component;