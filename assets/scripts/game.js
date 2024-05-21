document.addEventListener('DOMContentLoaded', function () {
  let currentCookies = 0;
  let cookiesPerClick = 1;
  let cookiesPerSecond = 1000000000;
  let cookiesPerSecondAddition = 1;
  let upgradeLevels = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const upgradeLevelsIds = [
    "#u1l",
    "#u2l",
    "#u3l",
    "#u4l",
    "#u5l",
    "#u6l",
    "#u7l",
    "#u8l",
    "#u9l",
    "#u10l"
  ];
  const upgradeMaxIds = [
    "#u1max",
    "#u2max",
    "#u3max",
    "#u4max",
    "#u5max",
    "#u6max",
    "#u7max",
    "#u8max",
    "#u9max",
    "#u10max"
  ];
  let upgradePrices = [
    10, 250, 1500, 3000, 5000, 7500, 12000, 18000, 30000, 50000,
  ];
  const upgradePricesIds = [
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
  const upgradeButtons = [
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
  const upgradeButtonsCookiesTag = [
    "#u1c",
    "#u2c",
    "#u3c",
    "#u4c",
    "#u5c",
    "#u6c",
    "#u7c",
    "#u8c",
    "#u9c",
    "#u10c",
  ]

  document.getElementById("cookie").addEventListener("click", function () {
    currentCookies += cookiesPerClick;
    document.getElementById("points").innerText = currentCookies;
    document.getElementById("cookie").style.transform = "scale(1.05, 1.05)";
    setTimeout(function () {
      document.getElementById("cookie").style.transform = "scale(1, 1)";
    }, 50);
  });

  // Button Functionality
  upgradeButtons.forEach(function (value, index) {
    document.querySelector(value).addEventListener("click", function () {
      if (currentCookies > upgradePrices[index]) {
        if (upgradeLevels[index] < 9) {
          currentCookies -= upgradePrices[index];
          upgradeLevels[index] += 1;
          upgradePrices[index] *= 5;
          cookiesPerSecondAddition = Math.ceil(cookiesPerSecondAddition * 1.5);
          cookiesPerSecond += cookiesPerSecondAddition;
          cookiesPerClick += 10;
          document.querySelector(upgradeLevelsIds[index]).innerText = upgradeLevels[index];
          document.querySelector(upgradePricesIds[index]).innerText = upgradePrices[index];
        } else if (upgradeLevels[index] === 9) {
          upgradeLevels[index] += 1;
          document.querySelector(upgradeLevelsIds[index]).innerText = upgradeLevels[index];
          document.querySelector(upgradeMaxIds[index]).style.display = "";
          document.querySelector(upgradeButtonsCookiesTag[index]).style.display = "None";
          document.querySelector(upgradePricesIds[index]).innerText = "Max Level";
        }
      }
    });
  });

  // Reset Button functionality
  document.querySelector(".reset-button").addEventListener("click", function () {
    const top1 = document.getElementById("top1").innerText;
    const top2 = document.getElementById("top2").innerText;
    const top3 = document.getElementById("top3").innerText;
    const top4 = document.getElementById("top4").innerText;
    const top5 = document.getElementById("top5").innerText;

    if (currentCookies > top1) {
      document.getElementById("top1").innerText = currentCookies;
      document.getElementById("top2").innerText = top1;
      document.getElementById("top3").innerText = top2;
      document.getElementById("top4").innerText = top3;
      document.getElementById("top5").innerText = top4;
    } else if (currentCookies > top2) {
      document.getElementById("top2").innerText = currentCookies;
      document.getElementById("top3").innerText = top2;
      document.getElementById("top4").innerText = top3;
      document.getElementById("top5").innerText = top4;
    } else if (currentCookies > top3) {
      document.getElementById("top3").innerText = currentCookies;
      document.getElementById("top4").innerText = top3;
      document.getElementById("top5").innerText = top4;
    } else if (currentCookies > top4) {
      document.getElementById("top4").innerText = currentCookies;
      document.getElementById("top5").innerText = top4;
    } else if (currentCookies > top5) {
      document.getElementById("top5").innerText = currentCookies;
    }

    currentCookies = 0;
    cookiesPerClick = 1;
    cookiesPerSecond = 0;
    cookiesPerSecondAddition = 1;
    upgradeLevels = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    upgradePrices = [
      10, 250, 1500, 3000, 5000, 7500, 12000, 18000, 30000, 50000,
    ];

    upgradeLevels.forEach(function (value, index) {
      document.querySelector(upgradeLevelsIds[index]).innerText = upgradeLevels[index];
      document.querySelector(upgradePricesIds[index]).innerText = upgradePrices[index];
      document.getElementById("points").innerText = currentCookies;
      document.querySelector(upgradeMaxIds[index]).style.display = "none";
    });
  });

  // Hides "Max" tag if the level is less than 10
  upgradeMaxIds.forEach(function (value, index) {
    if (upgradeLevels[index] < 9) {
      document.querySelector(value).style.display = "none";
    }
  });

  // Initializes Upgrade Prices
  upgradePricesIds.forEach(function (value, index) {
    document.querySelector(value).innerText = upgradePrices[index];
  });

  // Functionality for automatic cookies
  setInterval(() => {
    currentCookies += cookiesPerSecond;
    document.getElementById("cps").innerText = cookiesPerSecond;
    document.getElementById("points").innerText = currentCookies;
  }, 1000);

  // Checks to see Upgrades are purchasable and changes background color depending on condition
  setInterval(() => {
    upgradeButtons.forEach(function (value, index) {
      if (currentCookies > upgradePrices[index]) {
        if (upgradeLevels[index] != 10) {
          document.querySelector(value).style.backgroundColor = "#7AB2B2";
        } else {
          document.querySelector(value).style.backgroundColor = "#36454F";
        }
      } else {
        document.querySelector(value).style.backgroundColor = "#A9A9A9";
      }
    });
  }, 100);
});
