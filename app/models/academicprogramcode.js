export default DS.Model.extend({
    name: DS.attr(), 
    itrprogram: DS.belongsTo('itrprogram', {async: true})
});