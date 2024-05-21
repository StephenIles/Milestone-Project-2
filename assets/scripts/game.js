$(function () {
  var currentCookies = 0;
  var cookiesPerClick = 1;
  var cookiesPerSecond = 0;
  var cookiesPerSecondAddition = 1;
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
  var upgradePrices = [
    10, 250, 1500, 3000, 5000, 7500, 12000, 18000, 30000, 50000,
  ];
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
    ".b1",
    ".b2",
    ".b3",
    ".b4",
    ".b5",
    ".b6",
    ".b7",
    ".b8",
    ".b9",
    ".b10",
  ];

  $("#cookie").on("click", function () {
    currentCookies += cookiesPerClick;
    $("#points").text(currentCookies);
    $("#cookie").css("transform", "scale(1.05, 1.05");
    setTimeout(function() {
      $("#cookie").css("transform", "scale(1, 1)");
    }, 50);
  });

  // Button Functionallity
  $.each(upgradeButtons, function (index, value) {

    $(value).on("click", function () {
      if (currentCookies > upgradePrices[index]) {
        if (upgradeLevels[index] <= 9) {
          currentCookies = currentCookies - upgradePrices[index];
          upgradeLevels[index] += 1;
          upgradePrices[index] = upgradePrices[index] * 10;
          cookiesPerSecondAddition = Math.ceil(cookiesPerSecondAddition * 1.5);
          cookiesPerSecond += cookiesPerSecondAddition;
          cookiesPerClick += 10;
          $(upgradeLevelsIds[index]).text(upgradeLevels[index]);
          $(upgradePricesIds[index]).text(upgradePrices[index]);
          $("#points").text(currentCookies);
        } else {
          $(upgradeMaxIds[index]).show();
          $(upgradePricesIds[index]).text("Max Level");
        }
      }
    });
  });

  // Reset Button functionality
  $(".reset-button").on("click", function () {
    var top1 = $("#top1").text();
    var top2 = $("#top2").text();
    var top3 = $("#top3").text();
    var top4 = $("#top4").text();
    var top5 = $("#top5").text();

    if(currentCookies > top1) {
      $("#top1").text(currentCookies);
      $("#top2").text(top1);
      $("#top3").text(top2);
      $("#top4").text(top3);
      $("#top5").text(top4);
    } else if (currentCookies > top2) {
      $("#top2").text(currentCookies);
      $("#top3").text(top2);
      $("#top4").text(top3);
      $("#top5").text(top4);
    } else if (currentCookies > top3) {
      $("#top3").text(currentCookies);
      $("#top4").text(top3);
      $("#top5").text(top4);
    } else if (currentCookies > top4) {
      $("#top4").text(currentCookies);
      $("#top5").text(top4);
    } else if (currentCookies > top5) {
      $("#top5").text(currentCookies);
    } else {

    }

    currentCookies = 0;
    cookiesPerClick = 1;
    cookiesPerSecond = 0;
    cookiesPerSecondAddition = 1;
    upgradeLevels = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    upgradePrices = [10, 250, 1500, 3000, 5000, 7500, 12000, 18000, 30000, 50000];

    $.each(upgradeLevels, function(index, value) {
      $(upgradeLevelsIds[index]).text(upgradeLevels[index]);
      $(upgradePricesIds[index]).text(upgradePrices[index]);
      $("#points").text(currentCookies);
    });
  });

  // Hides "Max" tag if the level is less than 10
  $.each(upgradeMaxIds, function (index, value) {
    if (upgradeLevels[index] <= 9) {
      $(value).hide();
    }
  });

  // Initalizes Upgrade Prices
  $.each(upgradePricesIds, function (index, value) {
    $(value).text(upgradePrices[index]);
  });

  // Functionallity for automatic cookies
  setInterval(()=> {
    currentCookies += cookiesPerSecond;
    $("#cps").text(cookiesPerSecond);
    $("#points").text(currentCookies);
  }, 1000);

});
