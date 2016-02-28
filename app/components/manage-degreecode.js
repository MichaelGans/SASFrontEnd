import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  isManagingDegreecode: false,
  isAddingNewPermission: false,
  dataModel: null,

  degreecodeModel: Ember.computed(function(){
    return this.get('store').findAll('degreecode');
  }),

  actions: {
    saveNewDegreecode (){
      var myStore = this.get('store');
      var newDegreecode = myStore.createRecord('degreecode', {
        name: this.get('name')
      });
      newDegreecode.save().then(() => {
        this.set('isAddingNewDegreecode', false);
      });
    },

    cancelAddNewDegreecode() {
      this.set('isAddingNewDegreecode', false);
    },

    manageDegreecode() {
      this.set('isManagingDegreecode', true);
    },

    addNewDegreecode() {
      this.set('isAddingNewDegreecode', true);
    },
    doneDegreecode(){
      this.set('isManagingDegreecode', false);
    }

  }
});
