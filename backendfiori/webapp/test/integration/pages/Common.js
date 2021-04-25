sap.ui.define([
    "sap/ui/test/Opa5",
    "mindset/com/backendfiori/localService/mockserver"
  ], function (Opa5, mockserver) {
    "use strict";
  
    return Opa5.extend("mindset.com.backendfiori.test.integration.pages.Common", { 
        iStartMyApp: function () {
            var sPath = sap.ui.require.toUrl("mindset/com/backendfiori/test");
            return this.iStartMyAppInAFrame(sPath + "/flpSandboxMockServer.html#masterDetail-display");
        }
    });
  }
);