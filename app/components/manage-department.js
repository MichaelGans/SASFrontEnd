import Ember from 'ember';

export default Ember.Component.extend({
  isManagingDepartment: false,
  store: Ember.inject.service(),
  selectedFaculty:null,

  facultyModel: Ember.computed(function(){
      var self = this;
        this.get('store').findAll('faculty').then(function(records){
        self.set ('selectedFaculty', records.get('firstObject').get('id'));
      });
      return this.get('store').findAll('faculty');
    }),

  actions: {
    saveDepartment (){
      var myStore = this.get('store');
      var selectedFaculty = myStore.peekRecord('faculty', this.get ('selectedFaculty'));

      var newDepartment = myStore.createRecord('department', {
        name: this.get('name'),
        faculty: selectedFaculty
      });
      newDepartment.save().then(() => {
        this.set('isManagingDepartment', false);
      });
    },

    cancel(){
      this.set('isManagingDepartment', false);
    },

    addNewDepartment() {
      this.set('isManagingDepartment', true);
    }

  }
});