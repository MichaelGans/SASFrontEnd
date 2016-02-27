export default DS.Model.extend({
    name: DS.attr(), 
    itrlist: DS.belongsTo('itrlist', {async: true})
});