import { parseQuery } from '@scola/http';
import { Transform } from 'stream';

export default class UrlDecoder extends Transform {
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
      this.push(parseQuery(this.data));
      callback();
    } catch (error) {
      callback(error);
    }

  }
}
