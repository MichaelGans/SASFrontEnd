import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  isManagingTermcode: false,
  isAddingNewPermission: false,
  dataModel: null,

  termcodeModel: Ember.computed(function(){
    return this.get('store').findAll('termcode');
  }),

  actions: {
    saveNewTermcode (){
      var myStore = this.get('store');
      var newTermcode = myStore.createRecord('termcode', {
        name: this.get('name')
      });
      newTermcode.save().then(() => {
        this.set('isAddingNewTermcode', false);
      });
    },

    cancelAddNewTermcode() {
      this.set('isAddingNewTermcode', false);
    },

    manageTermcode() {
      this.set('isManagingTermcode', true);
    },

    addNewTermcode() {
      this.set('isAddingNewTermcode', true);
    },
    doneTermcode(){
      this.set('isManagingTermcode', false);
    }

  }
});
