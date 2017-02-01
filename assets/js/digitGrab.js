function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


function pullDigits() {

  // pull date from datepicker and format as "MMDDYYYY" string
  var dateSelected = $("#datepicker").datepicker("getDate");

  var monthSelected = "0";
  var daySelected = "0";
  var yearSelected = dateSelected.getFullYear();

  if (dateSelected.getMonth() + 1 < 10) {
    monthSelected += (dateSelected.getMonth() + 1);
  } else {
    monthSelected = (dateSelected.getMonth() + 1);
  }

  if (dateSelected.getDate() < 10) {
    daySelected += (dateSelected.getDate());
  } else {
    daySelected = (dateSelected.getDate());
  }

  var dictionaryKey = (monthSelected + daySelected + yearSelected).toString();

  // send AJAX request to grab corresponding digit
  var theDigit = 0;

  // INSERT AJAX REQUEST HERE

  theDigit = numberWithCommas(theDigit)

  // if statement to determine proper superscript
  var digitSuper = "";

  if (theDigit % 10 == 1) {
    digitSuper = "st";
  } else if (theDigit % 10 == 2) {
    digitSuper = "nd";
  } else if (theDigit % 10 == 3) {
    digitSuper = "rd";
  } else {
    digitSuper = "th";
  }

  // Your birthday is the 108,806,460<sup>th</sup> digit in pi.
  var reportString = "Your birthday is the<br>" + theDigit + "<sup>" + digitSuper + "</sup> digit in pi.";

  $('#result').html(reportString);

  $('.output').css("color", "black");

}
