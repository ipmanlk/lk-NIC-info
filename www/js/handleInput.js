//trigger when form submit
$('#inputForm').submit(function (e) {
    //hide info
    $('#instruction').hide();
    //avoid refresh
    e.preventDefault();
    //get nic
    let nic = $('#txtInput').val();

    if (validateNic(nic)) {
        getNicDetails(nic);
        $('#nicType').text(nicType);
        $('#bDay').text(bDay);
        $('#age').text(age);
        $('#gender').text(gender);
        $('#vote').text(vote);
        $('#nicInfo').fadeIn();
    } else {
        navigator.notification.alert("NIC Number is invalid!", null, "Error", "Ok")
    }

    //remove focus from button
    $('btnFind').blur();
});

//trigger when user type nic
$('#txtInput').keyup(function () {

    nic = $('#txtInput').val();

    if (validateNic(nic)) {
        $(this).css({ 'background': '' });
    } else {
        $(this).css({ 'background': '#700000' });
    }

    //change color to null when input is null
    if (!isNotNull(nic)) {
        $(this).css({ 'background': '' });
    }
});