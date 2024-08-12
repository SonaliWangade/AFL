sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("com.ibspl.valuehelp.controller.MasterPage", {
        onInit: function () {

        },
        onValueHelp:function(){
            if (!this.dCompanyCode) {
                this.dCompanyCode = this.loadFragment({
                  name: "com.ibspl.valuehelp.view.fragments.valuehelp"
                });
              }
              this.dCompanyCode.then(function (oDialog1) {
                oDialog1.open();
              });      
       },
       onWhitespaceCancelPress:function(){
        this.dCompanyCode.then(function (oDialog1) {
            oDialog1.close();
          });   
       }
    });
});
