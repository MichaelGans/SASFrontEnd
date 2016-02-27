export default DS.Model.extend({
    order: DS.attr(),
    eligibility: DS.attr(),
    student: DS.belongsTo('student', { async: true }),
    program: DS.belongsTo('program', {async: true})
});