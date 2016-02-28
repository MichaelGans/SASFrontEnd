import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr(), 
    itrprogram: DS.belongsTo('itrprogram', {async: true}),
    programadministrations: DS.hasMany('programadministration', { async: true })
});