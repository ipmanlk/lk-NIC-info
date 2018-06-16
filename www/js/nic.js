var gender;
var bDay;
var age;
var nicType;
var vote;

/*
langCode 0 = english
         1 = sinhala
         2 = tamil
*/

function getNicDetails(nic) {

    var nicYear;
    var nicDays;

    if (getNicType(nic)) { //old nic or new one

        nicYear = nic.slice(0, 2);
        nicDays = parseInt(nic.slice(2, 5));

        nicType = translate("Old",langCode);

        //Check voting status
        canVote(nic);

    } else {

        nicType = translate("New",langCode);
        nicYear = nic.slice(0, 4);
        nicDays = parseInt(nic.slice(4, 7));
        vote = translate("Unknown",langCode);
    }

    //find gender
    gender = translate("Male",langCode);

    if (getGender(nicDays)) {
        gender = translate("Female",langCode);
        nicDays = nicDays - 500;
    }

    //find birthday 
    bDay = getBday(nicYear, nicDays);
    if (getNicType(nic)) {
        bDay = moment(bDay, 'D/M/YY').format();
    } else {
        bDay = moment(bDay, 'D/M/YYYY').format();
    }

    bDay = bDay.split('T')[0];

    //find age
    age = getAge(bDay);
}

function getNicType(nic) {
    //old nic = true | new nic = false
    return ((nic.length === 10) ? true : false);
}


function getBday(year, days) {
    let DayAndMonth = getDayAndMonth(days);
    let day = DayAndMonth[0];
    let month = DayAndMonth[1];
    let date = day + "/" + month + "/" + year;
    return (date);
}

function getAge(date) {
    let today = new Date();
    let bDay = new Date(date);
    let age = today.getFullYear() - bDay.getFullYear();
    return (age);
}

function getGender(nicDays) {
    //if gender is female
    if (nicDays > 500) {
        return (true);
    }
}

function canVote(oldnic) {
    lastChar = (oldnic.slice(-1)).toLowerCase();
    if (lastChar === 'v') {
        vote = translate("Eligible",langCode);
    } else {
        vote = translate("Not eligible",langCode);
    }
}

function validateNic(nic) {
    if (nic.length === 10) {
        let spLetter = isLetter(nic.slice(-1).toLowerCase());
        let isNumber = !isNaN(parseInt(nic.slice(0, 11)));
        return (isNumber && spLetter);

    } else if(nic.length === 12) {
        return (!isNaN(parseInt(nic)));
    }
}

function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
}
