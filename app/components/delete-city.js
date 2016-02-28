import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  actions: {
    deleteCity: function(id){
      var myStore = this.get('store');
      if (confirm ('Are you sure you need to delete this city?')) {

        myStore.find('city',  id).then(function(city) {
          //city.set('students', null); // repeat this line for all connected lookup tables
           city.set('province', null);
          city.save().then(function(){
            city.destroyRecord();
          });
        });

      }
    }
  }
});
