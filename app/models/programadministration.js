export default DS.Model.extend({
    name: DS.attr(),
    position: DS.attr(),
    academicprogramcode: DS.belongsTo('academicprogramcode', {async: true})
});