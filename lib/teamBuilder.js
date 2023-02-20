const Component = require('./component.js');

class TeamBuilder extends Component {
  constructor(children) {
    super(children);
  }
  render() {
    return `<ul>${this.renderInnerHtml()}</ul>`;
  }
}

module.exports = TeamBuilder;
