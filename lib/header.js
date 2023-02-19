const Component = require("./component.js");

class Header extends Component {
    constructor(team) {
        super(team)
        this.team = team
    }
  render() {
    return `<header><h1><u>${this.team} Fut-7 Line Up</u></h1></header>`;
  }
}

module.exports = Header;
