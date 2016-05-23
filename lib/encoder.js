const querystring = require('querystring');
const stream = require('stream');

class UrlEncoder extends stream.Transform {
  constructor() {
    super({
      objectMode: true
    });
  }

  _transform(data, encoding, callback) {
    try {
      this.push(querystring.stringify(data));
      callback();
    } catch (error) {
      callback(error);
    }
  }
}

module.exports = UrlEncoder;
