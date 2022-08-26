async function test() {
  const amount = document.getElementById("amountInput").value;
  const fromCurrency = document.getElementById("fromCurrency").value;
  const toCurrency = document.getElementById("toCurrency").value;

  //api query
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

  //fetch from api
  const data = await a.json();
  const { result } = data;

 //display results
  document.getElementById("inputAmount").textContent =
    amount + " " + fromCurrency + " =";
  document.getElementById("outputAmount").textContent =
    result + " " + toCurrency;
}

//to switch between two select currency
document.getElementById("exchange").addEventListener("click", () => {
  const from = document.getElementById("fromCurrency").value;
  const to = document.getElementById("toCurrency").value;
  document.querySelector("#fromCurrency").value = to;
  document.querySelector("#toCurrency").value = from;
});
