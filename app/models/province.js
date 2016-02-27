import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr(),
    students: DS.hasMany('student', { async: true }),
    country: DS.belongsTo('country', { async: true }),
    cities: DS.hasMany('city', { async: true })
});