import Service from '@ember/service';
declare const ActiveRoute_base: Readonly<typeof Service> & (new (properties?: object | undefined) => import("@ember/object/-private/types").EmberClassArguments & Service) & (new (...args: any[]) => import("@ember/object/-private/types").EmberClassArguments & Service);
export default class ActiveRoute extends ActiveRoute_base {
    currentHash: string;
}
declare module '@ember/service' {
    interface Registry {
        'active-route': ActiveRoute;
    }
}
export {};
