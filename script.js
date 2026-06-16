const payments = [
  {
    month: "May 2026",
    items: [
      { id: "wedding-dress-1st", title: "Wedding dress 1st payment", amount: 265.00, category: "Wedding", date: "Paid", details: "From your budget sheet.", defaultPaid: true },
      { id: "favor-bags", title: "Favor bags 200", amount: 211.84, category: "Wedding", date: "Paid", details: "From your budget sheet.", defaultPaid: true },
      { id: "favor-gifts", title: "Favor gifts", amount: 293.38, category: "Wedding", date: "Paid", details: "From your budget sheet.", defaultPaid: true },
      { id: "deposit-iron-manor", title: "Deposit Iron Manor 100 people", amount: 500.76, category: "Wedding", date: "Paid", details: "Venue deposit.", defaultPaid: true },
      { id: "wedding-dress-alterations", title: "Wedding dress alterations", amount: 260.00, category: "Wedding", date: "Paid", details: "Alterations payment.", defaultPaid: true },
      { id: "wedding-right-dress", title: "Wedding right dress", amount: 36.00, category: "Wedding", date: "Paid", details: "From your budget sheet.", defaultPaid: true },
      { id: "ryans-band", title: "Ryan's Wedding Band", amount: 535.84, category: "Wedding", date: "Paid", details: "Wedding band.", defaultPaid: true },
      { id: "tams-band", title: "Tam's Wedding Band", amount: 483.84, category: "Wedding", date: "Paid", details: "Wedding band.", defaultPaid: true },
      { id: "saxophone-deposit", title: "Saxophone deposit by Emmanuel", amount: 100.00, category: "Wedding", date: "Paid", details: "Deposit already paid.", defaultPaid: true },
      { id: "tasting", title: "Tasting Iron Manor / Ashton Gardens - 4 people", amount: 100.00, category: "Wedding", date: "Paid", details: "Tasting payment.", defaultPaid: true },

      { id: "flights", title: "Flights", amount: 1412.06, category: "Honeymoon", date: "Paid", details: "Flights paid.", defaultPaid: true },
      { id: "flight-seats-1", title: "Flight seats", amount: 104.54, category: "Honeymoon", date: "Paid", details: "Seat selection.", defaultPaid: true },
      { id: "flight-seats-2", title: "Flight seats", amount: 73.98, category: "Honeymoon", date: "Paid", details: "Seat selection.", defaultPaid: true },
      { id: "deposit-cruise", title: "Deposit cruise", amount: 398.00, category: "Honeymoon", date: "Paid", details: "Cruise deposit.", defaultPaid: true }
    ]
  },
  {
    month: "June 2026",
    items: []
  },
  {
    month: "July 2026",
    items: [
      { id: "installment-1", title: "Installment 1", amount: 5404.46, category: "Wedding", date: "07/15/2026", details: "Iron Manor payment.", defaultPaid: false }
    ]
  },
  {
    month: "August 2026",
    items: [
      { id: "installment-2", title: "Installment 2", amount: 5905.22, category: "Wedding", date: "08/15/2026", details: "Iron Manor payment.", defaultPaid: false }
    ]
  },
  {
    month: "September 2026",
    items: [
      { id: "installment-3", title: "Installment 3", amount: 5905.22, category: "Wedding", date: "09/15/2026", details: "Iron Manor payment.", defaultPaid: false }
    ]
  },
  {
    month: "October 2026",
    items: []
  },
  {
    month: "November 2026",
    items: [
      { id: "installment-4", title: "Installment 4", amount: 5905.22, category: "Wedding", date: "11/15/2026", details: "Iron Manor payment.", defaultPaid: false },
      { id: "cruise-remaining", title: "Cruise Remaining", amount: 1773.08, category: "Honeymoon", date: "November 2026", details: "Remaining cruise balance.", defaultPaid: false }
    ]
  },
  {
    month: "December 2026",
    items: []
  },
  {
    month: "January 2027",
    items: []
  },
  {
    month: "February 2027",
    items: [
      { id: "wedding-date", title: "Wedding Day", amount: 0, category: "Wedding", date: "02/25/2027", details: "Final wedding date.", defaultPaid: false, tbd: true }
    ]
  },
  {
    month: "To Schedule",
    items: [
      { id: "omar-alterations", title: "Wedding dress alterations Omar", amount: 300.00, category: "Wedding", date: "TBD", details: "From your To Pay column.", defaultPaid: false },
      { id: "saxophone-remaining", title: "Saxophone Remaining", amount: 700.00, category: "Wedding", date: "TBD", details: "Remaining saxophone balance.", defaultPaid: false },
      { id: "table-cloth", title: "Table cloth black to white", amount: 300.00, category: "Wedding", date: "TBD", details: "From your To Pay column.", defaultPaid: false },

      { id: "iron-manor-extra-costs", title: "Iron Manor extra costs", amount: 0, category: "Wedding", date: "TBD", details: "Amount not added yet.", defaultPaid: false, tbd: true },
      { id: "dj", title: "DJ", amount: 0, category: "Wedding", date: "TBD", details: "Amount not added yet.", defaultPaid: false, tbd: true },
      { id: "photographer", title: "Photographer", amount: 0, category: "Wedding", date: "TBD", details: "Amount not added yet.", defaultPaid: false, tbd: true },
      { id: "charged-plates", title: "Charged Plates", amount: 0, category: "Wedding", date: "TBD", details: "Amount not added yet.", defaultPaid: false, tbd: true },
      { id: "floral-decor", title: "Floral Decor", amount: 0, category: "Wedding", date: "TBD", details: "Amount not added yet.", defaultPaid: false, tbd: true },
      { id: "photobooth", title: "Photobooth", amount: 0, category: "Wedding", date: "TBD", details: "Amount not added yet.", defaultPaid: false, tbd: true },
      { id: "shawls", title: "Shawls", amount: 0, category: "Wedding", date: "TBD", details: "Amount not added yet.", defaultPaid: false, tbd: true },
      { id: "cake", title: "Cake", amount: 0, category: "Wedding", date: "TBD", details: "Amount not added yet.", defaultPaid: false, tbd: true },
      { id: "desserts", title: "Desserts by ARG Catering", amount: 0, category: "Wedding", date: "TBD", details: "Amount not added yet.", defaultPaid: false, tbd: true },
      { id: "envelops", title: "Envelops", amount: 0, category: "Wedding", date: "TBD", details: "Amount not added yet.", defaultPaid: false, tbd: true },
      { id: "candles", title: "Candles", amount: 0, category: "Wedding", date: "TBD", details: "Amount not added yet.", defaultPaid: false, tbd: true },
      { id: "pens", title: "Pens", amount: 0, category: "Wedding", date: "TBD", details: "Amount not added yet.", defaultPaid: false, tbd: true },
      { id: "makeup", title: "Makeup", amount: 0, category: "Wedding", date: "TBD", details: "Amount not added yet.", defaultPaid: false, tbd: true },
      { id: "nails", title: "Nails", amount: 0, category: "Wedding", date: "TBD", details: "Amount not added yet.", defaultPaid: false, tbd: true },
      { id: "menus-names-newspapers", title: "Menu / Names / Newspapers", amount: 0, category: "Wedding", date: "TBD", details: "Amount not added yet.", defaultPaid: false, tbd: true },
      { id: "table-numbers", title: "Table Numbers", amount: 0, category: "Wedding", date: "TBD", details: "Amount not added yet.", defaultPaid: false, tbd: true },
      { id: "night-frankfurt", title: "Night in Frankfurt", amount: 0, category: "Honeymoon", date: "TBD", details: "Amount not added yet.", defaultPaid: false, tbd: true }
    ]
  }
];

const timeline = document.getElementById("timeline");
const monthLine = document.getElementById("monthLine");

function formatMoney(amount) {
  return amount.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2
  });
}

function getSavedPaidValue(item) {
  const savedValue = localStorage.getItem(`paid-${item.id}`);

  if (savedValue === null) {
    return item.defaultPaid === true;
  }

  return savedValue === "true";
}

function savePaid(id, value) {
  localStorage.setItem(`paid-${id}`, value ? "true" : "false");
}

function getAllItems() {
  return payments.flatMap(month => month.items);
}

function getMonthLeft(month) {
  return month.items.reduce((sum, item) => {
    return getSavedPaidValue(item) ? sum : sum + item.amount;
  }, 0);
}

function renderMonthLine() {
  monthLine.innerHTML = "";

  const timelineMonths = payments.filter(month => month.month !== "To Schedule");
  let accumulatedThroughThisMonth = 0;

  timelineMonths.forEach(month => {
    // This top timeline is ONLY for planning numbers.
    // It does NOT change when you check/uncheck payments below.
    const amountNeededThisMonth = month.items.reduce((sum, item) => sum + item.amount, 0);
    accumulatedThroughThisMonth += amountNeededThisMonth;

    const item = document.createElement("div");
    item.className = "month-line-item";

    item.innerHTML = `
      <div class="month-line-dot"></div>
      ${month.month}: <strong>${formatMoney(amountNeededThisMonth)}</strong>
      <span>(${formatMoney(accumulatedThroughThisMonth)})</span>
    `;

    monthLine.appendChild(item);
  });
}

function renderTimeline() {
  timeline.innerHTML = "";

  payments.forEach(month => {
    const monthTotal = month.items.reduce((sum, item) => sum + item.amount, 0);
    const monthPaid = month.items.reduce((sum, item) => {
      return getSavedPaidValue(item) ? sum + item.amount : sum;
    }, 0);
    const monthLeft = monthTotal - monthPaid;

    const block = document.createElement("details");
    const monthIsFullyPaid = month.items.length > 0 && month.items.every(item => getSavedPaidValue(item));
    block.className = `month-block ${monthIsFullyPaid ? "month-paid" : ""}`;

    block.innerHTML = `
      <summary class="month-header">
        <div>
          <h2>${month.month}</h2>
          <div class="click-note">Click to view details</div>
        </div>
        <div class="month-total">
          This Month: ${formatMoney(monthTotal)}
          <div class="month-subtotal">
            Paid: ${formatMoney(monthPaid)} · Left: ${formatMoney(monthLeft)}
          </div>
        </div>
      </summary>
      <div class="month-content"></div>
    `;

    const content = block.querySelector(".month-content");

    month.items.forEach(item => {
      const paid = getSavedPaidValue(item);

      const row = document.createElement("div");
      row.className = `payment-item ${paid ? "paid" : ""}`;

      row.innerHTML = `
        <input type="checkbox" ${paid ? "checked" : ""} data-id="${item.id}" />
        <div>
          <div class="payment-title">${item.title}</div>
          <div class="payment-details">${item.date} — ${item.details}</div>
          <span class="category">${item.category}</span>
        </div>
        <div class="amount ${item.tbd ? "tbd" : ""}">
          ${item.tbd ? "TBD" : formatMoney(item.amount)}
        </div>
      `;

      content.appendChild(row);
    });

    timeline.appendChild(block);
  });

  addCheckboxEvents();
  renderMonthLine();
  updateSummary();
}

function addCheckboxEvents() {
  document.querySelectorAll("input[type='checkbox']").forEach(checkbox => {
    checkbox.addEventListener("change", event => {
      const id = event.target.dataset.id;
      savePaid(id, event.target.checked);
      renderTimeline();
    });
  });
}

function getCategorySummary(category) {
  let total = 0;
  let paid = 0;

  getAllItems().forEach(item => {
    if (item.category !== category) return;

    total += item.amount;

    if (getSavedPaidValue(item)) {
      paid += item.amount;
    }
  });

  return {
    total,
    paid,
    left: total - paid
  };
}

function updateSummary() {
  const wedding = getCategorySummary("Wedding");
  const honeymoon = getCategorySummary("Honeymoon");

  const grandTotal = wedding.total + honeymoon.total;
  const grandPaid = wedding.paid + honeymoon.paid;
  const grandLeft = grandTotal - grandPaid;

  document.getElementById("weddingTotal").textContent = formatMoney(wedding.total);
  document.getElementById("honeymoonTotal").textContent = formatMoney(honeymoon.total);
  document.getElementById("paidTotal").textContent = formatMoney(grandPaid);
  document.getElementById("leftTotal").textContent = formatMoney(grandLeft);

  document.getElementById("summaryWeddingTotal").textContent = formatMoney(wedding.total);
  document.getElementById("summaryWeddingPaid").textContent = formatMoney(wedding.paid);
  document.getElementById("summaryWeddingLeft").textContent = formatMoney(wedding.left);

  document.getElementById("summaryHoneymoonTotal").textContent = formatMoney(honeymoon.total);
  document.getElementById("summaryHoneymoonPaid").textContent = formatMoney(honeymoon.paid);
  document.getElementById("summaryHoneymoonLeft").textContent = formatMoney(honeymoon.left);

  document.getElementById("grandTotal").textContent = formatMoney(grandTotal);
  document.getElementById("grandPaid").textContent = formatMoney(grandPaid);
  document.getElementById("grandLeft").textContent = formatMoney(grandLeft);
}

renderTimeline();
