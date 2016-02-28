import Ember from 'ember';

export default Ember.Component.extend({
  isManagingProgram: false,
  store: Ember.inject.service(),

  actions: {
    saveP(){
      var myStore = this.get('store');
      var newProgram = myStore.createRecord('academicprogramcode', {
        name: this.get('name')
      });
      newProgram.save().then(() => {
        this.set('isManagingProgram', false);
      });
    },
    cancel() {
      this.set('isManagingProgram', false);
    },

    addProgram() {
      this.set('isManagingProgram', true);
    },
    doneProgram(){
      this.set('isManagingProgram', false);
    }

  }
});