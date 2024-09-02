document.addEventListener("click", function (e) {
  if (e.target.closest(".cardOutline")) {
    const card = e.target.closest(".cardOutline");
    const linkElement = card.querySelector(`a[data-jk]`);
    const vjk = linkElement
      ? linkElement.getAttribute("data-jk")
      : "VJK not found";

    console.log("Clicked card:", card);
    console.log("VJK from URL:", vjk);

    const companyName = card.querySelector(
      '[data-testid="company-name"]'
    )?.innerText;
    const location = card.querySelector(
      '[data-testid="text-location"]'
    )?.innerText;
    let jobTitle = card.querySelector("a[id^='sj_'] span")?.innerText;
    if (!jobTitle) {
      jobTitle = card.querySelector("a[id^='sj_']")?.innerText;
    }

    console.log("Company Name:", companyName);
    console.log("Location:", location);
    console.log("Job Title:", jobTitle);

    if (jobTitle) {
      chrome.runtime.sendMessage(
        {
          type: "SAVE_DATA",
          payload: {
            companyName,
            location,
            jobTitle,
            Link: vjk,
            Status: "Applied",
          },
        },
        (response) => {
          if (chrome.runtime.lastError) {
            console.error("Error sending message:", chrome.runtime.lastError);
          } else {
            console.log("Received response:", response);
          }
        }
      );
    }
  }
});
