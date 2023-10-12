document.getElementById("scrapeButton").addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: scrapeTable,
      }, (result) => {
        const csvData = result[0].result;
        const blob = new Blob([csvData], { type: "text/csv" });
        const url = URL.createObjectURL(blob);
        chrome.downloads.download({
          url: url,
          filename: "table_data.csv",
        });
      });
    });
  });
  