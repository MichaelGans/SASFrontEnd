import DS from 'ember-data';

export default DS.Model.extend({
    level: DS.attr(),
    status: DS.attr(),
    comment: DS.attr(),
    grades: DS.hasMany('grade', { async: true }),
    degreecode: DS.belongsTo('degreecode', { async: true }),
    termcode: DS.belongsTo('termcode', { async: true })
});
