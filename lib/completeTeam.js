const Component = require('./component.js');

class CompleteTeam extends Component {
  constructor(children) {
    super(children);
  }
  render() {
    return `<div>${this.renderInnerHtml()}</div>`;
  }
}

module.exports = CompleteTeam;
