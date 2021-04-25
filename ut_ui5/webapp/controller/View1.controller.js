sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/m/routing/Router"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller,
	MessageToast,
	Router
	) {
		"use strict";

		return Controller.extend("com.mindset.utui5.controller.View1", {
			onInit: function () {

			},

		onClick: function(oEvent) {
			MessageToast.show("This is cool");
			
			
		}

		});
	});
