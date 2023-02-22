const Component = require("./component.js");

class Header extends Component {
  constructor(team) {
    super(team);
    this.team = team;
  }
  render() {
    return `<header class="two alt-two"><h1>${this.team}<span>Starting 7</span></h1></header>`;
  }
}

module.exports = Header;
