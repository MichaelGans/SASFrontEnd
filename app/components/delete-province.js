import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  actions: {
    deleteProvince: function(id){
      var myStore = this.get('store');
      if (confirm ('Are you sure you need to delete this province?')) {

        myStore.find('province',  id).then(function(province) {
          //province.set('student', null); // repeat this line for all connected lookup tables
          province.set('country', null);
          province.save().then(function(){
            province.destroyRecord();
          });
        });

      }
    }
  }
});
