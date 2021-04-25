QUnit.config.autostart = false;

sap.ui.define([
	"sap/ui/test/Opa5",
    "mindset/com/backendfiori/test/integration/pages/Common",
	"sap/suite/ui/generic/template/integration/testLibrary/ListReport/pages/ListReport",
	"sap/suite/ui/generic/template/integration/testLibrary/ObjectPage/pages/ObjectPage",
	"mindset/com/backendfiori/test/integration/ListTest"
], function(Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "mindset.com.backendfiori.view",
		testLibs: {
			fioriElementsTestLibrary: {
				Common: {
					appId: "mindset.com.backendfiori",
					entitySet: "Products"
				}
			}
		}
	});
});