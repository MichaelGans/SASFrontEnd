import DS from 'ember-data';

export default DS.Model.extend({
    mark: DS.attr(),
    section: DS.attr(),
    student: DS.belongsTo('student', { async: true }),
    coursecode: DS.belongsTo('coursecode', { async: true }),
    programrecord: DS.belongsTo('programrecord', { async: true })
});