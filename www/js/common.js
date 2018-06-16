function isNotNull(str) {
    if (str !== null && str !== '') {
        return true;
    } else {
        return false;
    }
}

//load in device system browser
function loadMySite() {
    var ref = cordova.InAppBrowser.open('https://www.navinda.xyz', '_system', 'location=yes');
    ref.close();
}

//when page loaded
$(document).ready(function () {
    //load about page
    $('#about').load('./pages/about.html');
    //focus input box
    $('#txtInput').focus();
});

//disable back button
document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        document.addEventListener("backbutton", function (e) {
            e.preventDefault();
        }, false );
}