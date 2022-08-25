async function test() {
  const amount = document.getElementById("amountInput").value;
  const fromCurrency = document.getElementById("fromCurrency").value;
  const toCurrency = document.getElementById("toCurrency").value;
  const URL =
    "https://api.apilayer.com/exchangerates_data/convert?to=" +
    toCurrency +
    "&from=" +
    fromCurrency +
    "&amount=" +
    amount +
    "";
  console.log(URL);

  const a = await fetch(URL, {
    method: "GET",
    redirect: "follow",
    headers: {
      apikey: "",
    },
  });

  const data = await a.json();
  const { result } = data;
  document.getElementById("inputAmount").textContent =
    amount + " " + fromCurrency + " =";
  document.getElementById("outputAmount").textContent =
    result + " " + toCurrency;
}

document.getElementById("exchange").addEventListener("click", () => {
  const from = document.getElementById("fromCurrency").value;
  const to = document.getElementById("toCurrency").value;
  document.querySelector("#fromCurrency").value = to;
  document.querySelector("#toCurrency").value = from;
});
