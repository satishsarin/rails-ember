App.leadRoute = Ember.Route.extend({
  modal: function(params){ return this.store.find('lead', params.id)}
})