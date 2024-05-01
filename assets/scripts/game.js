$(function () {
  var currentCookies = 0;
  var cookiesPerClick = 1;
  var upgradeLevels = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  var upgradeLevelsIds = [
    "#u1l",
    "#u2l",
    "#u3l",
    "#u4l",
    "#u5l",
    "#u6l",
    "#u7l",
    "#u8l",
    "#u9l",
    "#u10l",
  ];
  var upgradeMaxIds = [
    "#u1max",
    "#u2max",
    "#u3max",
    "#u4max",
    "#u5max",
    "#u6max",
    "#u7max",
    "#u8max",
    "#u9max",
    "#u10max",
  ];
  var upgradePrices = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  var upgradePricesIds = [
    "#u1p",
    "#u2p",
    "#u3p",
    "#u4p",
    "#u5p",
    "#u6p",
    "#u7p",
    "#u8p",
    "#u9p",
    "#u10p",
  ];
  var upgradeButtons = [
    ".s1",
    ".s2",
    ".s3",
    ".s4",
    ".s5",
    ".s6",
    ".s7",
    ".s8",
    ".s9",
    ".s10",
  ];


  // Button Functionallity 

  $.each(upgradeButtons, function (index, value) {
    $(value).on("click", function () {
      if (upgradeLevels[index] < 10) {
        upgradeLevels[index] += 1;
        upgradePrices[index] = upgradePrices[index] * 2;
        console.log(upgradePrices[index]);
        $(upgradeLevelsIds[index]).text(upgradeLevels[index]);
        $(upgradePricesIds[index]).text(upgradePrices[index]);
      } else {
        $(upgradeMaxIds[index]).show();
      }
    });
  });

  // Hides "Max" tag if the level is less than 10

  $.each(upgradeMaxIds, function (index, value) {
    if (upgradeLevels[index] < 10) {
      $(value).hide();
    }
  });

  // Initalizes Upgrade Prices

  $.each(upgradePricesIds, function (index, value) {
    $(value).text(upgradePrices[index]);
  });

  $("#cookie").on("click", function () {
    currentCookies += cookiesPerClick;
    $("#points").text(currentCookies);
  });

});
