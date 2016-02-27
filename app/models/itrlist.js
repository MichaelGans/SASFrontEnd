export default DS.Model.extend({
	name: DS.attr(),
    order: DS.attr(),
    eligibility: DS.attr(),
    student: DS.belongsTo('student', { async: true })
});