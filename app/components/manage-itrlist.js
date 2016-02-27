import Ember from 'ember';

export default Ember.Component.extend({
  isManagingItrlist: false,
  store: Ember.inject.service(),
  selectedStudent: null,
  selectedAcademicprogramcode:null,
  selectedAcademicprogramcode1:null,
  selectedAcademicprogramcode2:null,

  studentModel: Ember.computed(function(){
      var self = this;
        this.get('store').findAll('student').then(function(records){
        self.set ('selectedStudent', records.get('firstObject').get('id'));
      });
      return this.get('store').findAll('student');
    }),

  academicprogramcodeModel: Ember.computed(function(){
      var self = this;
        this.get('store').findAll('academicprogramcode').then(function(records){
        self.set ('selectedAcademicprogramcode', records.get('firstObject').get('id'));
      });
      return this.get('store').findAll('academicprogramcode');
    }),

  actions: {
    saveItrlist (){
      var myStore = this.get('store');
      var selectedStudent = myStore.peekRecord('student', this.get ('selectedStudent'));
      var selectedAcademicprogramcode = myStore.peekRecord('academicprogramcode', this.get ('selectedAcademicprogramcode'));
      console.log(selectedAcademicprogramcode);
      var selectedAcademicprogramcode1 = myStore.peekRecord('academicprogramcode', this.get ('selectedAcademicprogramcode1'));
      console.log(selectedAcademicprogramcode1);
      var selectedAcademicprogramcode2 = myStore.peekRecord('academicprogramcode', this.get ('selectedAcademicprogramcode2'));
      console.log(selectedAcademicprogramcode2);
      var orderPull = document.getElementById('order').value;
      var orderPull1 = document.getElementById('order1').value;
      var orderPull2 = document.getElementById('order2').value;


      var newItrlist = myStore.createRecord('itrlist', {
        order: orderPull,
        eligibility: this.get('eligibility'),
        student: selectedStudent,
        academicprogramcode: selectedAcademicprogramcode
      });
      newItrlist.save();
      var newItrlist1 = myStore.createRecord('itrlist', {
        order: orderPull1,
        eligibility: this.get('eligibility1'),
        student: selectedStudent,
        academicprogramcode: selectedAcademicprogramcode1
      });
      newItrlist1.save();
      var newItrlist2 = myStore.createRecord('itrlist', {
        order: orderPull2,
        eligibility: this.get('eligibility2'),
        student: selectedStudent,
        academicprogramcode: selectedAcademicprogramcode2
      });
      newItrlist2.save().then(() => {
        this.set('isManagingItrlist', false);
      });
    },
    cancel() {
      this.set('isManagingItrlist', false);
    },

    selectedStudent (student){
        this.set('selectedStudent', student);
        Ember.Logger.log(this.get('selectedStudent'));
      },

    addNewItrlist() {
      this.set('isManagingItrlist', true);
    },
    doneItrlist(){
      this.set('isManagingItrlist', false);
    }

  }
});
