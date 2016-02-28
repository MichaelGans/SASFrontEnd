import Ember from 'ember';

export default Ember.Component.extend({
  isManagingProgramadministration: false,
  store: Ember.inject.service(),
  selectedAcademicprogramcode:null,

  academicprogramcodeModel: Ember.computed(function(){
      var self = this;
        this.get('store').findAll('academicprogramcode').then(function(records){
        self.set ('selectedAcademicprogramcode', records.get('firstObject').get('id'));
      });
      return this.get('store').findAll('academicprogramcode');
    }),

  departmentModel: Ember.computed(function(){
      var self = this;
        this.get('store').findAll('department').then(function(records){
        self.set ('selectedDepartment', records.get('firstObject').get('id'));
      });
      return this.get('store').findAll('department');
    }),

  actions: {
    saveProgramadministration (){
      var myStore = this.get('store');
      var selectedAcademicprogramcode = myStore.peekRecord('academicprogramcode', this.get ('selectedAcademicprogramcode'));
      var selectedDepartment = myStore.peekRecord('department', this.get ('selectedDepartment'));

      var newProgramadministration = myStore.createRecord('programadministration', {
        name: this.get('name'),
        position: this.get('position'),
        academicprogramcode: selectedAcademicprogramcode,
        department: selectedDepartment
      });
      newProgramadministration.save().then(() => {
        this.set('isManagingProgramadministration', false);
      });
    },
    cancel() {
      this.set('isManagingProgramadministration', false);
    },

    selectedAcademicprogramcode (academicprogramcode){
      this.set('selectedAcademicprogramcode', academicprogramcode);
      Ember.Logger.log(this.get('selectedAcademicprogramcode'));
    },

    addNewProgramadministration() {
      this.set('isManagingProgramadministration', true);
    },
    doneProgramadministration(){
      this.set('isManagingProgramadministration', false);
    }

  }
});
