const type = 'application/x-www-form-urlencoded';

import { default as Decoder } from './src/decoder';

export const codec = {
  Decoder
};

export function decoder() {
  return {
    type,
    create: () => new Decoder()
  };
}
