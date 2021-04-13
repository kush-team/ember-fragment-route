import Service from '@ember/service';

export default class ActiveRoute extends Service.extend({
  // anything which *must* be merged to prototype here
}) {
  // normal class body definition here
  currentHash = '';
}

// DO NOT DELETE: this is how TypeScript knows how to look up your services.
declare module '@ember/service' {
  interface Registry {
    'active-route': ActiveRoute;
  }
}
