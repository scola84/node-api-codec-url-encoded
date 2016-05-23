const querystring = require('querystring');
const stream = require('stream');

class UrlDecoder extends stream.Transform {
  constructor() {
    super({
      objectMode: true
    });

    this.data = '';
  }

  _transform(data, encoding, callback) {
    this.data += data;
    callback();
  }

  _flush(callback) {
    try {
      this.push(querystring.parse(this.data));
      callback();
    } catch (error) {
      callback(error);
    }

  }
}

module.exports = UrlDecoder;
