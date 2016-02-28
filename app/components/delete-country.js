import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  actions: {
    deleteCountry: function(id){
      var myStore = this.get('store');
      if (confirm ('Are you sure you need to delete this country?')) {

        myStore.find('country',  id).then(function(country) {
          //country.set('student', null); // repeat this line for all connected lookup tables
          country.save().then(function(){
            country.destroyRecord();
          });
        });

      }
    }
  }
});
