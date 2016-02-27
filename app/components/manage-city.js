import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  isManagingCity: false,
  isAddingNewPermission: false,
  dataModel: null,
  selectedProvince: null,  //added

  //added
  provinceModel: Ember.computed(function(){
      var self = this;
        this.get('store').findAll('province').then(function(records){
        self.set ('selectedProvince', records.get('firstObject').get('id'));
      });
      return this.get('store').findAll('province');
    }),
  //end added

  cityModel: Ember.computed(function(){
    return this.get('store').findAll('city');
  }),

  actions: {
    saveNewCity (){
      var myStore = this.get('store');
      var chosenProvince = myStore.peekRecord('province', this.get ('selectedProvince')); //added
      var newCity = myStore.createRecord('city', {
        name: this.get('selectedCity'),
        province: chosenProvince
      });
      newCity.save().then(() => {
        this.set('isAddingNewCity', false);
      });
    },

    cancelAddNewCity() {
      this.set('isAddingNewCity', false);
    },

    manageCity() {
      this.set('isManagingCity', true);
    },

    addNewCity() {
      this.set('isAddingNewCity', true);
    },
    doneCity(){
      this.set('isManagingCity', false);
    }

  }
});
