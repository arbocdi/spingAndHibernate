webpackJsonp(["intercom-app"],{"./src/udemy/js/intercom/app.js":function(e,a,n){"use strict";function r(e,a){Object(l.a)(e,".ud-angular--intercom--app",f,a)}Object.defineProperty(a,"__esModule",{value:!0}),n.d(a,"appModule",function(){return f}),a.default=r;var t=n("./node_modules/angular/angular.js"),o=n.n(t),s=n("./node_modules/angular-intercom/angular-intercom.js"),u=n.n(s),c=n("./src/udemy/js/eu-cookie-message/eu-cookie-message.mobx-store.js"),i=n("./src/udemy/js/utils/ud-config.js"),d=n("./src/udemy/js/utils/ud-me.js"),l=n("./src/udemy/js/utils/ud-render-angular-apps.js"),m=n("./src/udemy/js/utils/ud-request.js"),p=i.a.features.intercom_chat,g={};d.a.id&&Object.assign(g,{email:d.a.email,name:d.a.title,created_at:d.a.created,user_id:d.a.id}),m.a.extraIntercomData&&(Object.assign(g,m.a.extraIntercomData),g.hide_default_launcher=Object(c.b)()||g.hide_default_launcher);var f=o.a.module("intercom/app",[u.a.name]).config(["$intercomProvider",function(e){p&&e.asyncLoading(!0).appID(i.a.third_party.intercom.app_id)}]).run(["$intercom",function(e){p&&e.boot(g)}])},"./src/udemy/js/utils/ud-render-angular-apps.js":function(e,a,n){"use strict";function r(e,a,n,r){var t=u()(e);if(!a.match(/^\.ud-angular--[\w-]+--[\w-]+$/))throw new Error("cssSelector should follow the pattern\n            '.ud-angular--{app-name}--{module-name}': received '".concat(a,"'"));var s=t.filter(a).add(t.find(a)).filter(function(e,a){var n=u()(a);return 0===n.parents('[class^="ud-angular--"], [class*=" ud-angular--"]').length||!!n.hasClass("ud-render-angular-apps--ignore-parents")});s.length>0&&(n=n.run(["$rootScope",function(e){Object.assign(e,r)}]),s.each(function(e,a){var r=u()(a);if(r.hasClass("ud-render-angular-apps--ignore-parents")){var t=["$provide",function(e){e.value("$rootElement",r)}],s=o.a.injector(["ng",t,n.name],!0),c=s.get("$rootScope").$new(!0);s.get("$compile")(a)(c),r.on("remove",function(){c.$destroy()})}else{o.a.bootstrap(a,[n.name],{strictDi:!0}).invoke(["$rootScope",function(e){r.on("remove",function(){e.$destroy()})}])}}))}a.a=r;var t=n("./node_modules/angular/angular.js"),o=n.n(t),s=n("./node_modules/jquery/dist/jquery.js-exposed"),u=n.n(s)}});
//# sourceMappingURL=intercom-app.67b4133fdc8f72eaf2f0.js.map