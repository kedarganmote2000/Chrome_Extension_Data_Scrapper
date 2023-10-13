// content.js
// This script scrapes the table and sends it to the extension.

function scrapeTable() {
    const table = document.querySelector("table"); 
    const rows = table.querySelectorAll("tr");
    const data = [];
    
    rows.forEach((row) => {
      const rowData = [];
      row.querySelectorAll("th, td").forEach((cell) => {
        rowData.push(cell.innerText.trim());
      });
      data.push(rowData.join(","));
    });
  
    return data.join("\n");
  }
  
  // Listen for messages from the popup.
  chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.action === "scrape") {
      const csvData = scrapeTable();
      sendResponse({ csvData });
    }
  });
  
