(window.webpackJsonp=window.webpackJsonp||[]).push([["intercom-app"],{"./src/udemy/js/intercom/app.js":function(e,a,n){"use strict";n.r(a),n.d(a,"appModule",function(){return g}),n.d(a,"default",function(){return f});var r=n("./node_modules/angular/angular.js"),t=n.n(r),o=n("./node_modules/angular-intercom/angular-intercom.js"),u=n.n(o),s=n("./src/udemy/js/eu-cookie-message/eu-cookie-message.mobx-store.js"),c=n("./src/udemy/js/utils/ud-config.js"),i=n("./src/udemy/js/utils/ud-me.js"),d=n("./src/udemy/js/utils/ud-render-angular-apps.js"),l=n("./src/udemy/js/utils/ud-request.js"),m=c.a.features.intercom_chat,p={};i.a.id&&Object.assign(p,{email:i.a.email,name:i.a.title,created_at:i.a.created,user_id:i.a.id}),l.a.extraIntercomData&&(Object.assign(p,l.a.extraIntercomData),p.hide_default_launcher=Object(s.b)()||p.hide_default_launcher);var g=t.a.module("intercom/app",[u.a.name]).config(["$intercomProvider",function(e){m&&e.asyncLoading(!0).appID(c.a.third_party.intercom.app_id)}]).run(["$intercom",function(e){m&&e.boot(p)}]);function f(e,a){Object(d.a)(e,".ud-angular--intercom--app",g,a)}},"./src/udemy/js/utils/ud-render-angular-apps.js":function(e,a,n){"use strict";n.d(a,"a",function(){return o});var r=n("./node_modules/angular/angular.js"),s=n.n(r),t=n("./node_modules/jquery/dist/jquery.js-exposed"),c=n.n(t);function o(e,a,u,n){var r=c()(e);if(!a.match(/^\.ud-angular--[\w-]+--[\w-]+$/))throw new Error("cssSelector should follow the pattern\n            '.ud-angular--{app-name}--{module-name}': received '".concat(a,"'"));var t=r.filter(a).add(r.find(a)).filter(function(e,a){var n=c()(a);return 0===n.parents('[class^="ud-angular--"], [class*=" ud-angular--"]').length||!!n.hasClass("ud-render-angular-apps--ignore-parents")});0<t.length&&(u=u.run(["$rootScope",function(e){Object.assign(e,n)}]),t.each(function(e,a){var n=c()(a);if(n.hasClass("ud-render-angular-apps--ignore-parents")){var r=["$provide",function(e){e.value("$rootElement",n)}],t=s.a.injector(["ng",r,u.name],!0),o=t.get("$rootScope").$new(!0);t.get("$compile")(a)(o),n.on("remove",function(){o.$destroy()})}else{s.a.bootstrap(a,[u.name],{strictDi:!0}).invoke(["$rootScope",function(e){n.on("remove",function(){e.$destroy()})}])}}))}}}]);
//# sourceMappingURL=intercom-app.982c1c9892f7d1e64cb4.js.map