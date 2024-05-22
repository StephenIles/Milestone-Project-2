document.addEventListener('DOMContentLoaded', function () {
  let currentCookies = 0;
  let cookiesPerClick = 1;
  let cookiesPerSecond = 0;
  let cookiesPerSecondAddition = 1;
  let overallCookies = 0;
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
  const achievementIds = [
    "#a1", 
    "#a2", 
    "#a3", 
    "#a4", 
    "#a5", 
    "#a6", 
    "#a7", 
    "#a8", 
    "#a9", 
    "#a10", 
    "#a11", 
    "#a12", 
    "#a13", 
    "#a14", 
    "#a15", 
    "#a16", 
    "#a17", 
    "#a18", 
    "#a19", 
    "#a20"
  ];
  const achievedClass = [
    "a1achieve",
    "a2achieve",
    "a3achieve",
    "a4achieve",
    "a5achieve",
    "a6achieve",
    "a7achieve",
    "a8achieve",
    "a9achieve",
    "a10achieve",
    "a11achieve",
    "a12achieve",
    "a13achieve",
    "a14achieve",
    "a15achieve",
    "a16achieve",
    "a17achieve",
    "a18achieve",
    "a19achieve",
    "a20achieve" 
  ]

  document.getElementById("cookie").addEventListener("click", function () {
    currentCookies += cookiesPerClick;
    overallCookies += cookiesPerClick
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
    overallCookies = 0;
    upgradeLevels = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    upgradePrices = [
      10, 250, 1500, 3000, 5000, 7500, 12000, 18000, 30000, 50000,
    ];

    upgradeLevels.forEach(function (index) {
      document.querySelector(upgradeLevelsIds[index]).innerText = upgradeLevels[index];
      document.querySelector(upgradePricesIds[index]).innerText = upgradePrices[index];
      document.getElementById("points").innerText = currentCookies;
      document.querySelector(upgradeMaxIds[index]).style.display = "none";
    });

    achievementIds.forEach(function (value,index) {
      document.querySelector(value).classList.remove(achievedClass[index]);
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
    overallCookies += cookiesPerSecond
    document.getElementById("cps").innerText = cookiesPerSecond;
    document.getElementById("points").innerText = currentCookies;
  }, 1000);

  // Checks game conditions every 0.1 second
  setInterval(() => {

    // Changes background color of the buy buttons depending if they are buyable, not buyable or max level
    upgradeButtons.forEach(function (value, index) {
      if (currentCookies > upgradePrices[index]) {
        if (upgradeLevels[index] !== 10) {
          document.querySelector(value).style.backgroundColor = "#7AB2B2";
        } else {
          document.querySelector(value).style.backgroundColor = "#36454F";
        }
      } else {
        document.querySelector(value).style.backgroundColor = "#A9A9A9";
      }
    });

    // Visiual feedback for the Reset Button
    document.getElementById("reset-button").addEventListener("click", function () {
      document.getElementById("reset-button").style.backgroundColor = "#FAC126";
      setTimeout(function () {
        document.getElementById("reset-button").style.backgroundColor = "#FFDA78";
      }, 200);
    });

    // Tracks achievement stats and highlights achievement badges when achieved
    achievementIds.forEach(function (value,index) {
      if(upgradeLevels[index] === 10) {
        document.querySelector(value).classList.add(achievedClass[index]);
      }

      if(overallCookies >= 1000) {
        document.getElementById("a11").classList.add(achievedClass[10])
      }

      if(overallCookies >= 100000) {
        document.getElementById("a12").classList.add(achievedClass[11])
      }

      if(overallCookies >= 1000000) {
        document.getElementById("a13").classList.add(achievedClass[12])
      }

      if(overallCookies >= 10000000) {
        document.getElementById("a14").classList.add(achievedClass[13])
      }

      if(overallCookies >= 100000000) {
        document.getElementById("a15").classList.add(achievedClass[14])
      }

      if(overallCookies >= 1000000000) {
        document.getElementById("a16").classList.add(achievedClass[15])
      }

      if(overallCookies >= 10000000000) {
        document.getElementById("a17").classList.add(achievedClass[16])
      }

      if(overallCookies >= 100000000000) {
        document.getElementById("a18").classList.add(achievedClass[17])
      }

      if(overallCookies >= 1000000000000) {
        document.getElementById("a19").classList.add(achievedClass[18])
      }

      if(overallCookies >= 10000000000000) {
        document.getElementById("a20").classList.add(achievedClass[19])
      }
    });

    document.getElementById("overall").innerText = overallCookies;
  }, 100);
});
