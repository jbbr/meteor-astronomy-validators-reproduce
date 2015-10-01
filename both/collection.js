
const Posts = new Mongo.Collection('posts');

Nested = Astro.Class({
  name: 'Nested',

  fields: {
    titleNested: {
      type: 'string',
    }
  }
});

Post = Astro.Class({
  name: 'Posts',
  collection: Posts,
  fields: {
    title: {
      type: 'string',
      validator: [
        Validators.required()
      ]
    },
    nested: {
      type: 'object',
      nested: 'Nested'
    },
  },
});
