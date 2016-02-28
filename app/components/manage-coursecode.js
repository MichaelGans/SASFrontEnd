import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  isManagingCoursecode: false,
  isAddingNewPermission: false,
  dataModel: null,

  coursecodeModel: Ember.computed(function(){
    return this.get('store').findAll('coursecode');
  }),

  actions: {
    saveNewCoursecode (){
      var myStore = this.get('store');
      var newCoursecode = myStore.createRecord('coursecode', {
        code: this.get('code'),
        number: this.get('number'),
        name: this.get('name'),
        unit: this.get('unit')
      });
      newCoursecode.save().then(() => {
        this.set('isAddingNewCoursecode', false);
      });
    },

    cancelAddNewCoursecode() {
      this.set('isAddingNewCoursecode', false);
    },

    manageCoursecode() {
      this.set('isManagingCoursecode', true);
    },

    addNewCoursecode() {
      this.set('isAddingNewCoursecode', true);
    },
    doneCoursecode(){
      this.set('isManagingCoursecode', false);
    }

  }
});
