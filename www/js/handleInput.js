var nic;
//run when mobile is ready
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
  //run when user click find buton
  $("#btnFind").click(function () {
    getDetails();
  });

  //when user press return key
  $('#txtInput').keypress(function (e) {
    if (e.which == 13) {
      getDetails();
    }
  });

  //run when user start typing
  $('#txtInput').keyup(function () {
    nic = $("#txtInput").val();
    if (!validateNic(nic)) {
      $(this).css({ 'background': '#700000' });
    } else {
      $(this).css({ 'background': '' });
    }

    //change color back to default when input is null
    if (!isNotNull(nic)) {
      $(this).css({ 'background': '' });
    }
  });

  //call getNicDetails
  function getDetails() {
    nic = $("#txtInput").val();
    if (isNotNull(nic)) {
      if (validateNic(nic)) {
        $('#instruction').hide();
        getNicDetails(nic);
        $("#nicType").html(nicType);
        $("#bDay").html(bDay);
        $("#age").html(age);
        $("#gender").html(gender);
        $("#vote").html(vote);
        $('#nicInfo').fadeIn();
        Keyboard.hide();
      } else {
        navigator.notification.alert("Your NIC number is invalid!", null, "Sorry", "ok")
      }

    } else {
      navigator.notification.alert("Please enter your NIC number!", null, "Error", "ok")
    }
  }

}
