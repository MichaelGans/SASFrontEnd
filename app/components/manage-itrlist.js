import Ember from 'ember';

export default Ember.Component.extend({
  isManagingItrlist: false,
  store: Ember.inject.service(),
  selectedStudent: null,

  studentModel: Ember.computed(function(){
      var self = this;
        this.get('store').findAll('student').then(function(records){
        self.set ('selectedStudent', records.get('firstObject').get('id'));
      });
      return this.get('store').findAll('student');
    }),

  actions: {
    saveItrlist (){
      var myStore = this.get('store');
      var selectedStudent = myStore.peekRecord('student', this.get ('selectedStudent'));
      var orderPull = document.getElementById('order').value;
      var namePull = document.getElementById('name').value;
      var orderPull1 = document.getElementById('order1').value;
      var namePull1 = document.getElementById('name1').value;
      var orderPull2 = document.getElementById('order2').value;
      var namePull2= document.getElementById('name2').value;


      var newItrlist = myStore.createRecord('itrlist', {
        name: namePull,
        order: orderPull,
        eligibility: this.get('eligibility'),
        student: selectedStudent
      });
      newItrlist.save();
      var newItrlist1 = myStore.createRecord('itrlist', {
        name: namePull1,
        order: orderPull1,
        eligibility: this.get('eligibility1'),
        student: selectedStudent
      });
      newItrlist1.save();
      var newItrlist2 = myStore.createRecord('itrlist', {
        name: namePull2,
        order: orderPull2,
        eligibility: this.get('eligibility2'),
        student: selectedStudent
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
