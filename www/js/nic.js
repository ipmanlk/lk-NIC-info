var gender, bDay, age, nicType, vote, nicYear, nicDays;

function getNicDetails(nic) {

    if (getNicType(nic) === 'Old') { //old nic or new one
        nicYear = getFullYear(nic.slice(0, 2));
        nicDays = parseInt(nic.slice(2, 5));
        nicType = "Old";

        //Check voting status
        vote = canVote(nic);

    } else {
        nicType = "New";
        nicYear = nic.slice(0, 4);
        nicDays = parseInt(nic.slice(4, 7));
        vote = "Unknown";
    }

    //get gender
    gender = getGender(nicDays);

    if (gender === 'Female') {
        nicDays = nicDays - 500;
    }

    //get bday
    bDay = getBday(nicYear, nicDays);

    //get age
    age = getAge(bDay);

}

function getNicType(nic) {
    //old nic = true | new nic = false
    return ((nic.length === 10) ? "Old" : "New");
}

function canVote(oldnic) {
    lastChar = (oldnic.slice(-1)).toLowerCase();
    if (lastChar === 'v') {
        return ("Eligible");
    } else {
        return ("Not eligible");
    }
}

function validateNic(nic) {
    if (getNicType(nic) === 'Old') {
        var spLetter = isLetter(nic.slice(-1).toLowerCase());
        var isNumber = !isNaN(parseInt(nic.slice(0, 11)));
        return (spLetter && isNumber);

    } else if (nic.length === 12) {
        return (!isNaN(parseInt(nic)));

    } else {
        return (false);
    }
}

function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
}

function getGender(nicDays) {
    //if gender is female
    if (nicDays > 500) {
        return ('Female');
    } else {
        return ('Male');
    }
}

function getBday(year, days) {
    var DayAndMonth = getDayAndMonth(days);
    var day = DayAndMonth[0];
    var month = DayAndMonth[1];
    var date = day + "/" + month + "/" + year;
    date = moment(date, 'D/M/YYYY').format();
    return (date.split('T')[0]);
}

function getFullYear(yy) {
    var fullYear = (yy < 17) ? '20' + yy : '19' + yy;
    return (fullYear);
}

function getDayAndMonth(numberOfDays) {
    /* 
    from : ishan-marikar's lanka-national-identity-card-js
    link : https://github.com/ishan-marikar/lanka-national-identity-card-js
    */
    var sumOfMonths = [31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 365];
    var index = 0;
    var month, day;

    if (numberOfDays <= sumOfMonths[0]) {
        month = 1;
        day = numberOfDays;
    } else {
        for (var sumOfDays of sumOfMonths) {
            index++;
            if (numberOfDays <= sumOfDays) {
                month = index;
                day = numberOfDays - sumOfMonths[index - 2];
                break;
            }
        }
    }
    return ([day, month]);
}

function getAge(date) {
    var today = new Date();
    var bDay = new Date(date);
    var age = today.getFullYear() - bDay.getFullYear();
    return (age);
}
