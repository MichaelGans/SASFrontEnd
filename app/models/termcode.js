import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr(),
    programrecords: DS.hasMany('programrecord', { async: true })
});
