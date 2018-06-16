function translate(msg, lang) {

    if (msg === 'Old') {
        switch (lang) {
            case 1: return ("පරණ"); break;
            case 2: return ("பழைய"); break;
            default: return (msg);
        }
    } else if (msg === 'New') {
        switch (lang) {
            case 1: return ("අලුත්"); break;
            case 2: return ("புதிய"); break;
            default: return (msg);
        }
    } else if (msg === 'Unknown') {
        switch (lang) {
            case 1: return ("නොදනී"); break;
            case 2: return ("தெரியாத"); break;
            default: return (msg);
        }
    } else if (msg == 'Male') {
        switch (lang) {
            case 1: return ("පුරුෂ"); break;
            case 2: return ("ஆண்"); break;
            default: return (msg);
        }
    } else if (msg == 'Female') {
        switch (lang) {
            case 1: return ("ස්ත්‍රී"); break;
            case 2: return ("பெண்"); break;
            default: return (msg);
        }
    } else if (msg == 'Eligible') {
        switch (lang) {
            case 1: return ("ඇත"); break;
            case 2: return ("கைந"); break;
            default: return (msg);
        }
    } else if (msg == 'Not eligible') {
        switch (lang) {
            case 1: return ("නැත"); break;
            case 2: return ("கைநாட"); break;
            default: return (msg);
        }
    } 
}