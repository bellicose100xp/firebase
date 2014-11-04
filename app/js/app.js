/**
 * Created by buggy on 11/3/14.
 */
(function () {

    angular
        .module('myApp', ['firebase'])
        .controller(mainController, mainController());

    function mainController($firebase) {

        var mc = this;

        var ref = new Firebase("https://buggy.firebaseio.com/");

        var sync = $firebase(ref);

        mc.data = sync.$asObject();


    }

}());