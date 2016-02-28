import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  actions: {
    deleteTermcode: function(id){
      var myStore = this.get('store');
      if (confirm ('Are you sure you need to delete this term code?')) {

        myStore.find('termcode',  id).then(function(termcode) {
          //coursecode.set('grade', null); // repeat this line for all connected lookup tables
          termcode.save().then(function(){
            termcode.destroyRecord();
          });
        });

      }
    }
  }
});
