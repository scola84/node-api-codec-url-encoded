const Decoder = require('./lib/decoder');
const Encoder = require('./lib/encoder');
const type = 'application/x-www-form-urlencoded';

function decoder(options) {
  return {
    type,
    create: () => new Decoder(options)
  };
}

function encoder(options) {
  return {
    type,
    create: () => new Encoder(options)
  };
}

module.exports = {
  type,
  decoder,
  encoder,
  Decoder,
  Encoder
};
