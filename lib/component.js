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
          if (typeof child === 'string' || typeof child === 'number') {
            console.log(child)
            return child;
          }
          return child.render();
        })
    }
  }
  
  module.exports = Component;