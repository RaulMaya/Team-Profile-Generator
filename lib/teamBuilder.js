const Component = require('./component.js');

class TeamBuilder extends Component {
  constructor(children) {
    super(children);
  }
  render() {
    return `<li>${this.renderInnerHtml()}</li>`;
  }
}

module.exports = TeamBuilder;
