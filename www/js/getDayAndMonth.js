/* 
from : ishan-marikar's lanka-national-identity-card-js
link : https://github.com/ishan-marikar/lanka-national-identity-card-js
*/

function getDayAndMonth(numberOfDays) {

    let sumOfMonths = [31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 365];
    let index = 0;
    let month, day;

    if (numberOfDays <= sumOfMonths[0]) {
        month = 1;
        day = numberOfDays;
    } else {
        for (let sumOfDays of sumOfMonths) {
            index++;
            if (numberOfDays <= sumOfDays) {
                month = index;
                day = numberOfDays - sumOfMonths[index - 2];
                break;
            }
        }
    }

    return ([day,month]);
}