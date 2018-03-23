import { Collection } from 'backbone';

import User from '../models/user';

export default Collection.extend({
  model: User,
  url: 'https://jsonplaceholder.typicode.com/users/'
});
