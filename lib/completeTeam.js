const Component = require('./component.js');

class CompleteTeam extends Component {
  constructor(children) {
    super(children);
  }
  render() {
    return `<ul>${this.renderInnerHtml()}</ul>`;
  }
}

module.exports = CompleteTeam;
