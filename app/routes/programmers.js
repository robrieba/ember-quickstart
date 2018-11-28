import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return ["Jack", "Jill", "Bill", "Cill"]
  }
});
