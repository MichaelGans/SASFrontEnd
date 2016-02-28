import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  isManagingFaculty: false,
  isAddingNewPermission: false,

  facultyModel: Ember.computed(function(){
    return this.get('store').findAll('faculty');
  }),

  actions: {
    saveFaculty(){
      var myStore = this.get('store');
      var newFaculty = myStore.createRecord('faculty', {
        name: this.get('name')
      });
      newFaculty.save().then(() => {
        this.set('isManagingFaculty', false);
      });
    },

    cancel(){
      this.set('isManagingFaculty', false);
    },

    addNewFaculty() {
      this.set('isManagingFaculty', true);
    }

  }
});