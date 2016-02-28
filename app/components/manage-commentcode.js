import Ember from 'ember';

export default Ember.Component.extend({
    isCommentcodeFormEditing: false,
    store: Ember.inject.service(),
    selectedStudent: null,

    distributionresultModel: Ember.computed(function(){
      var self = this;
        this.get('store').findAll('distributionresult').then(function(records){
        self.set ('selectedDistributionresult', records.get('firstObject').get('id'));
      });
      return this.get('store').findAll('distributionresult');
    }),

    actions: {
      saveCommentcode () {
        var myStore = this.get('store');
        var chosenDistributionresult = myStore.peekRecord('distributionresult', this.get ('selectedDistributionresult'));
        var newCommentcode = myStore.createRecord('commentcode', {
          code: this.get('code'),
          progaction: this.get('progaction'),
          description: this.get('description'),
          notes: this.get('notes'),
          distributionresult: chosenDistributionresult
        });

        newCommentcode.save().then(() => {
          this.set('isCommentcodeFormEditing', false);
        });
      },

      selectedDistributionresult (distributionresult){
        this.set('selectedDistributionresult', distributionresult);
        Ember.Logger.log(this.get('selectedDistributionresult'));
      },

      addNewCommentcode () {
        this.set('isCommentcodeFormEditing', true);
      },

      cancel () {
        this.set('isCommentcodeFormEditing', false);
      }

    }
});
