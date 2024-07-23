import * as i0 from '@angular/core';
import { Injectable, Component, Input } from '@angular/core';

class SharedService {
    constructor() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.1", ngImport: i0, type: SharedService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.1", ngImport: i0, type: SharedService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.1", ngImport: i0, type: SharedService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [] });

class SharedComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.1", ngImport: i0, type: SharedComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.1", type: SharedComponent, isStandalone: true, selector: "lib-shared", ngImport: i0, template: `
    <p>
      shared works!
    </p>
  `, isInline: true, styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.1", ngImport: i0, type: SharedComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-shared', standalone: true, imports: [], template: `
    <p>
      shared works!
    </p>
  ` }]
        }] });

class FirstComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.1", ngImport: i0, type: FirstComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.1", type: FirstComponent, isStandalone: true, selector: "lib-first", ngImport: i0, template: "<!-- <p>This is My Shared Application</p> -->\r\n <h2>Enter You Tenanat Name Here</h2>\r\n", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.1", ngImport: i0, type: FirstComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-first', standalone: true, imports: [], template: "<!-- <p>This is My Shared Application</p> -->\r\n <h2>Enter You Tenanat Name Here</h2>\r\n" }]
        }] });

class SecondComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.1", ngImport: i0, type: SecondComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.1", type: SecondComponent, isStandalone: true, selector: "lib-second", inputs: { btnData: "btnData" }, ngImport: i0, template: "<button class=\"btn btn-primary\">{{btnData}}</button>\r\n", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.1", ngImport: i0, type: SecondComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-second', standalone: true, imports: [], template: "<button class=\"btn btn-primary\">{{btnData}}</button>\r\n" }]
        }], propDecorators: { btnData: [{
                type: Input
            }] } });

/*
 * Public API Surface of shared
 */

/**
 * Generated bundle index. Do not edit.
 */

export { FirstComponent, SecondComponent, SharedComponent, SharedService };
//# sourceMappingURL=gauravshared.mjs.map
