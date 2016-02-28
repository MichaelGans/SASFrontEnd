import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  actions: {
    deleteResidency: function(id){
      var myStore = this.get('store');
      if (confirm ('Are you sure you need to delete this residency?')) {

        myStore.find('residency',  id).then(function(residency) {
          //residency.set('student', null); // repeat this line for all connected lookup tables
          residency.save().then(function(){
            residency.destroyRecord();
          });
        });

      }
    }
  }
});
