chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.type === "SAVE_DATA") {
    fetch("http://localhost:8080/application", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message.payload),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        sendResponse({ status: "success", data: data });
      })
      .catch((error) => {
        console.error("Error:", error);
        sendResponse({ status: "error", error: error.message });
      });
  }
  return true;
});
