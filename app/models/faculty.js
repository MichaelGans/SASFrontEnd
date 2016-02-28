export default DS.Model.extend({
    name: DS.attr(),
    department: DS.hasMany('department', {async: true})
});