import Ember from 'ember';

export default Ember.Component.extend({
    isDistributionresultFormEditing: false,
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
      saveDistributionresult () {
        var myStore = this.get('store');
        var chosenStudent = myStore.peekRecord('student', this.get ('selectedStudent'));
        var newDistributionresult = myStore.createRecord('distributionresult', {
          date: this.get('date'),
          student: chosenStudent
        });

        newDistributionresult.save().then(() => {
          this.set('isDistributionresultFormEditing', false);
        });
      },

      selectStudent (student){
        this.set('selectedStudent', student);
        Ember.Logger.log(this.get('selectedStudent'));
      },

      addNewDistributionresult () {
        this.set('isDistributionresultFormEditing', true);
      },

      cancel () {
        this.set('isDistributionresultFormEditing', false);
      }

    }
});
