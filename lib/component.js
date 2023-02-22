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
            if (child === this.children[3]) {
              return `<li class="hidden"><a href="mailto:${child}">Contact this player</a></li>`
            } else if (child === this.children[5]) {
              if (child.length === 0) {
                return `<li><img class="imageSelector" src="images/user.png" alt="Image of ${this.children[0]}"></li>`;
              } else {
                return `<li><img class="imageSelector" src="${child}" alt="Image of ${this.children[0]}" onerror="this.src='images/user.png';"></li>`;
              }

            } else {
              return `<li class="hidden">${child}</li>`;
            }
          }
          return child.render();
        })
        .join('');
    }
  }
  
  module.exports = Component;