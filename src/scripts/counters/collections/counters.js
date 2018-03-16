import { Collection } from 'backbone';
import { LocalStorage } from 'backbone.localstorage';

import Counter from '../models/counter';

export default Collection.extend({
  model: Counter,
  localStorage: new LocalStorage('counters-backbone'),
});
