// popup.js

document.addEventListener("DOMContentLoaded", function () {
    const scrapeButton = document.getElementById("scrapeButton");
    const resultsList = document.getElementById("results");
  
    scrapeButton.addEventListener("click", function () {
      chrome.scripting.executeScript(
        {
          target: { tabId: chrome.tabs.TAB_ID_CURRENT },
          function: scrapeData,
        },
        (injectionResults) => {
          const scrapedData = injectionResults[0].result;
          displayData(scrapedData);
        }
      );
    });
  
    function displayData(data) {
      resultsList.innerHTML = "";
      for (const item of data) {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.title}: ${item.url}`;
        resultsList.appendChild(listItem);
      }
    }
  });
  