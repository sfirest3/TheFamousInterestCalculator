document.addEventListener("DOMContentLoaded", () => {
  const aprSlider = document.querySelector("#apr");
  const principalInput = document.querySelector("#principal");
  const periodInput = document.querySelector("#period");
  const yearsInput = document.querySelector("#years");
  const accumulatedOutput = document.querySelector("#accumulated");
  const interestEarnedOutput = document.querySelector("#interestEarned");
  const totalOutput = document.querySelector("#total");

  function calculateInterest() {
    const principal = parseFloat(principalInput.value) || 0;
    const apr = parseFloat(aprSlider.value) / 100 || 0;
    const years = parseFloat(yearsInput.value) || 0;

    let compounds = 1;
    if (periodInput.value === "Yearly") compounds = 1;
    else if (periodInput.value === "Quarterly") compounds = 4;
    else if (periodInput.value === "Monthly") compounds = 12;
    else if (periodInput.value === "Daily") compounds = 365;

    const total = principal * Math.pow(1 + apr / compounds, compounds * years);
    const interest = total - principal;

    accumulatedOutput.textContent = `${(apr * 100).toFixed(2)}%`;
    interestEarnedOutput.textContent = `$${interest.toFixed(2)}`;
    totalOutput.textContent = `$${total.toFixed(2)}`;
  }

  aprSlider.addEventListener("input", calculateInterest);
  principalInput.addEventListener("input", calculateInterest);
  periodInput.addEventListener("change", calculateInterest);
  yearsInput.addEventListener("input", calculateInterest);
});
