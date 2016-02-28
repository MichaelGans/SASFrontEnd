import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  actions: {
    deleteCoursecode: function(id){
      var myStore = this.get('store');
      if (confirm ('Are you sure you need to delete this course code?')) {

        myStore.find('coursecode',  id).then(function(coursecode) {
          coursecode.set('grade', null); // repeat this line for all connected lookup tables
          coursecode.save().then(function(){
            coursecode.destroyRecord();
          });
        });

      }
    }
  }
});
