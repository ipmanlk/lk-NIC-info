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