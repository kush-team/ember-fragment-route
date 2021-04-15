import Route from '@ember/routing/route';
import activeRoute from 'ember-fragment-route/services/active-route';
declare const FragmentRoute_base: Readonly<typeof Route> & (new (properties?: object | undefined) => import("@ember/object/-private/types").EmberClassArguments & Route<unknown>) & (new (...args: any[]) => import("@ember/object/-private/types").EmberClassArguments & Route<unknown>);
export default class FragmentRoute extends FragmentRoute_base {
    activeRoute: activeRoute;
    activate(...args: any[]): void;
}
export {};
