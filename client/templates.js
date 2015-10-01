
Template.Main.events({

    'click #crashButton': function() {

      const crashObj = new Post({
        title: 'Crash document',
        nested: {
          titleNested: 'with nested fields',
        },
      });

      console.log('validate crash', crashObj.validate());
    },

    'click #noCrashButton': function() {

      const obj = new Post({
        title: 'Invalid but no crash document',
      });

      console.log('validate no crash', obj.validate());
    },
})
