const Decoder = require('./lib/decoder');
const type = 'application/x-www-form-urlencoded';

function decoder(options) {
  return {
    type,
    create: () => new Decoder(options)
  };
}

module.exports = {
  type,
  decoder,
  Decoder
};
