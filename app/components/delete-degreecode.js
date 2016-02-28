import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  actions: {
    deleteDegreecode: function(id){
      var myStore = this.get('store');
      if (confirm ('Are you sure you need to delete this degree code?')) {

        myStore.find('degreecode',  id).then(function(degreecode) {
          //degreecode.set('grade', null); // repeat this line for all connected lookup tables
          degreecode.save().then(function(){
            degreecode.destroyRecord();
          });
        });

      }
    }
  }
});
