

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
  
  
  chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.action === "scrape") {
      const csvData = scrapeTable();
      sendResponse({ csvData });
    }
  });
  
