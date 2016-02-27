import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  isManagingProvince: false,
  isAddingNewPermission: false,
  dataModel: null,
  selectedCountry: null,  //added
  name: null,

  //added
  countryModel: Ember.computed(function(){
      var self = this;
        this.get('store').findAll('country').then(function(records){
        self.set ('selectedCountry', records.get('firstObject').get('id'));
      });
      return this.get('store').findAll('country');
    }),
  //end added

  provinceModel: Ember.computed(function(){
    return this.get('store').findAll('province');
  }),

  actions: {
    saveNewProvince (){
      var myStore = this.get('store');
      var chosenCountry = myStore.peekRecord('country', this.get ('selectedCountry')); //added
      var newProvince = myStore.createRecord('province', {
        name: this.get('selectedProvince'),
        country: chosenCountry
      });
      newProvince.save().then(() => {
        this.set('isAddingNewProvince', false);
      });
    },

    //added
    // selectCountry (country){
    //     this.set('selectedCountry', country);
    //     Ember.Logger.log(this.get('selectedCountry'));
    // },
    //end added

    cancelAddNewProvince() {
      this.set('isAddingNewProvince', false);
    },

    manageProvince() {
      this.set('isManagingProvince', true);
    },

    addNewProvince() {
      this.set('isAddingNewProvince', true);
    },
    doneProvince(){
      this.set('isManagingProvince', false);
    }

  }
});
