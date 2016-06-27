import { parse as parseQuery } from 'querystring';
import { Transform } from 'stream';

export default class UrlDecoder extends Transform {
  constructor() {
    super({
      objectMode: true
    });

    this._data = '';
  }

  _transform(data, encoding, callback) {
    this._data += data;
    callback();
  }

  _flush(callback) {
    try {
      this.push(parseQuery(this._data));
      callback();
    } catch (error) {
      callback(error);
    }

  }
}
