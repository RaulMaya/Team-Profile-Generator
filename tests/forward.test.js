const Forward = require('../lib/forward.js');

describe('Forward', () => {
  test('Should create a forward object', () => {
    const myForward =
        {"age": 33, "club":"Barcelona", "email": "rlewa9@gmail.com", "headers": 95, "image": "dummyImage", "name": "Robert Lewandowski", "nation": "Poland", "overall": 93, "pace": 90, "position": "Forward", "shooting": 95}

    const forward = new Forward('Robert Lewandowski', 'Poland', 'Barcelona', 33, 'rlewa9@gmail.com', 'dummyImage', 95, 90, 95);
    expect(forward).toEqual(myForward);
  });
});
