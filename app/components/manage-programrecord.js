import Ember from 'ember';

export default Ember.Component.extend({
    isProgramrecordFormEditing: false,
    store: Ember.inject.service(),
    selectedDegreecode: null,
    selectedTermcode: null,

    degreecodeModel: Ember.computed(function(){
      var self = this;
        this.get('store').findAll('degreecode').then(function(records){
        self.set ('selectedDegreecode', records.get('firstObject').get('id'));
      });
      return this.get('store').findAll('degreecode');
    }),

    termcodeModel: Ember.computed(function(){
      var self = this;
        this.get('store').findAll('termcode').then(function(records){
        self.set ('selectedTermcode', records.get('firstObject').get('id'));
      });
      return this.get('store').findAll('termcode');
    }),

    actions: {
      saveProgramrecord () {
        var myStore = this.get('store');
        var chosenDegreecode = myStore.peekRecord('degreecode', this.get ('selectedDegreecode'));
        var chosenTermcode = myStore.peekRecord('termcode', this.get ('selectedTermcode'));
        var newProgramrecord = myStore.createRecord('programrecord', {
          level: this.get('level'),
          status: this.get('status'),
          comment: this.get('comment'),
          degreecode: chosenDegreecode,
          termcode: chosenTermcode
        });

        newProgramrecord.save().then(() => {
          this.set('isProgramrecordFormEditing', false);
        });
      },

      selectDegreecode (degreecode){
        this.set('selectedDegreecode', degreecode);
        Ember.Logger.log(this.get('selectedDegreecode'));
      },

      selectTermcode (termcode){
        this.set('selectedTermcode', termcode);
        Ember.Logger.log(this.get('selectedTermcode'));
      },

      addNewProgramrecord () {
        this.set('isProgramrecordFormEditing', true);
      },

      cancel () {
        this.set('isProgramrecordFormEditing', false);
      }

    }
});