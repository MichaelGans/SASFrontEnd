import Ember from 'ember';

export default Ember.Component.extend({
  isStudentFormEditing: false,
  store: Ember.inject.service(),
  selectedResidency: null,
  residencyID: null,
  selectedGender: null,
  genderID: null,
  selectedProvince: null,
  provinceID: null,
  selectedCountry: null,
  countryID: null,
  selectedCity: null,
  cityID: null,
  selectedAcademicload: null,
  academicloadID: null,
  studentModel: null,
  ID: null,
  studentRecord: null,
  Model: null,

   generateModel: Ember.observer('isStudentFormEditing', function(){
     var self = this;
     self.set ('studentModel', this.get('store').peekRecord('student', this.get('ID')));
     self.set ('selectedResidency',self.get('studentModel').get('resInfo') );
     self.set ('selectedGender',self.get('studentModel').get('gender') );
     self.set ('selectedCountry',self.get('studentModel').get('country') );
     self.set ('selectedProvince',self.get('studentModel').get('province') );
     self.set ('selectedCity',self.get('studentModel').get('city') );
     self.set ('selectedAcademicload',self.get('studentModel').get('academicload') );
   }),

  residencyModel: Ember.computed(function(){
    var self = this;
      this.get('store').findAll('residency').then(function(records){
      self.set ('selectedResidency', records.get('firstObject').get('id'));
    });
    return this.get('store').findAll('residency');
  }),

    genderModel: Ember.computed(function(){
      var self = this;
        this.get('store').findAll('gender').then(function(records){
        self.set ('selectedGender', records.get('firstObject').get('id'));
      });
      return this.get('store').findAll('gender');
    }),

    countryModel: Ember.computed(function(){
      var self = this;
        this.get('store').findAll('country').then(function(records){
        self.set ('selectedCountry', records.get('firstObject').get('id'));
      });
      return this.get('store').findAll('country');
    }),

    provinceModel: Ember.computed(function(){
      var self = this;
        this.get('store').findAll('province').then(function(records){
        self.set ('selectedProvince', records.get('firstObject').get('id'));
      });
      return this.get('store').findAll('province');
    }),

    cityModel: Ember.computed(function(){
      var self = this;
        this.get('store').findAll('city').then(function(records){
        self.set ('selectedCity', records.get('firstObject').get('id'));
      });
      return this.get('store').findAll('city');
    }),

    academicloadModel: Ember.computed(function(){
      var self = this;
        this.get('store').findAll('academicload').then(function(records){
        self.set ('selectedAcademicload', records.get('firstObject').get('id'));
      });
      return this.get('store').findAll('academicload');
    }),

  actions: {
    saveStudent () {
      //var updatedStudent = this.get('studentModel')
      var updatedStudent = this.get('store').peekRecord('student', this.get('ID'));

      var res = this.get('store').peekRecord('residency', this.get('selectedResidency'));
      var oneGender = this.get('store').peekRecord('gender', this.get('selectedGender'));
      var oneCountry = this.get('store').peekRecord('country', this.get('selectedCountry'));
      var oneProvince = this.get('store').peekRecord('province', this.get('selectedProvince'));
      var oneCity = this.get('store').peekRecord('city', this.get('selectedCity'));
      var oneAcademicLoad = this.get('store').peekRecord('academicload', this.get('selectedAcademicload'));

      updatedStudent.set('resInfo',res);
      updatedStudent.set('gender',oneGender);
      updatedStudent.set('country',oneCountry);
      updatedStudent.set('province',oneProvince);
      updatedStudent.set('city',oneCity);
      updatedStudent.set('academicload',oneAcademicLoad);
      updatedStudent.save().then(() => {
        this.set('isStudentFormEditing', false);
      });
    },

    selectResidency (residency){
      this.set('selectedResidency', residency);
    },

    selectGender (gender){
      this.set('selectedGender', gender);
    },

    selectedCountry (country){
      this.set('selectedCountry', country);
    },

    selectProvince (province){
      this.set('selectedProvince', province);
    },

    selectCity (city){
      this.set('selectedCity', city);
    },

    selectedAcademicload (academicload){
      this.set('selectedAcademicload', academicload);
    },

    editStudent () {
      this.get('Model').forEach(function(record){
         record.reload();
      });
      this.set ('studentRecord', this.get('store').peekRecord('student', this.get('ID')));
      var self = this;
      this.get('studentRecord').get('resInfo').then(function(res){
        if (res) {
          self.set ('residencyID' , res.get('id'));
        }
      });

      this.get('studentRecord').get('resInfo').then(function(res){
        if (res) {
          self.set ('residencyID' , res.get('id'));
        }
      });

      this.get('studentRecord').get('gender').then(function(res){
        if (oneGender) {
          self.set ('genderID' , oneGender.get('id'));
        }
      });

      this.get('studentRecord').get('country').then(function(res){
        if (oneCountry) {
          self.set ('countryID' , oneCountry.get('id'));
        }
      });

      this.get('studentRecord').get('province').then(function(res){
        if (oneProvince) {
          self.set ('provinceID' , oneProvince.get('id'));
        }
      });

      this.get('studentRecord').get('city').then(function(res){
        if (oneCity) {
          self.set ('cityID' , oneCity.get('id'));
        }
      });

      this.get('studentRecord').get('academicload').then(function(res){
        if (oneAcademicLoad) {
          self.set ('academicloadID' , oneAcademicLoad.get('id'));
        }
      });

      this.set('isStudentFormEditing', true);
    },

    cancel () {
      this.set('isStudentFormEditing', false);
    }

  }
});
