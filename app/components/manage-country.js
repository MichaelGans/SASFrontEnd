import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  isManagingCountry: false,
  isAddingNewPermission: false,
  dataModel: null,
  id: null,

  countryModel: Ember.computed(function(){
    return this.get('store').findAll('country');
  }),

  actions: {
    saveNewCountry (){
      var myStore = this.get('store');
      var newCountry = myStore.createRecord('country', {
        name: this.get('selectedCountry')
      });

      newCountry.save().then(() => {
        this.set('isAddingNewCountry', false);

      this.set('id', newCountry.get('id'));
      // console.log(this.get('id'));
      // console.log(newCountry.get('id'));
      });
    },

    cancelAddNewCountry() {
      this.set('isAddingNewCountry', false);
    },

    manageCountry() {
      this.set('isManagingCountry', true);
    },

    addNewCountry() {
      this.set('isAddingNewCountry', true);
    },
    doneCountry(){
      this.set('isManagingCountry', false);
    }

  }
});
