import DS from 'ember-data';

export default DS.Model.extend({
    code: DS.attr(),
    progaction: DS.attr(),
    description: DS.attr(),
    notes: DS.attr(),
    distributionresult: DS.belongsTo('distributionresult', { async: true })
});
