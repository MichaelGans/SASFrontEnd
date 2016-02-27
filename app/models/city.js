import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr(),
    students: DS.hasMany('student', { async: true }),
    province: DS.belongsTo('province', { async: true })
});