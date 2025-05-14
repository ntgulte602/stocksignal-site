const API_URL = "https://marketsignal.onrender.com/signals"; // Replace with your FastAPI backend

fetch(API_URL)
  .then(response => response.json())
  .then(data => {
    const signalsDiv = document.getElementById("signals");
    const signals = data.signals;

    if (signals.length === 0) {
      signalsDiv.innerHTML = "<p>No signals found.</p>";
      return;
    }

    signals.forEach(signal => {
      const div = document.createElement("div");
      div.innerHTML = `
        <h3>${signal.symbol}</h3>
        <p>RSI: ${signal.rsi}</p>
        <p>Volume Drop: ${signal.volumeDrop}%</p>
        <p>Price: $${signal.price}</p>
        <hr>
      `;
      signalsDiv.appendChild(div);
    });
  })
  .catch(error => {
    console.error("Error loading signals:", error);
    document.getElementById("signals").innerText = "Failed to load signals.";
  });
