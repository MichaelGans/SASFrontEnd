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
      var newItrlist = myStore.createRecord('itrlist', {
        name: namePull,
        order: orderPull,
        eligibility: this.get('eligibility'),
        student: selectedStudent
      });
      newItrlist.save().then(() => {
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
