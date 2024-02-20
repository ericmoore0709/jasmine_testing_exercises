
// accepts 'tipAmt', 'billAmt', 'tipPercent' and sums total from allPayments objects
function sumPaymentTotal(type) {
  let total = 0;

  for (let key in allPayments) {
    let payment = allPayments[key];

    total += Number(payment[type]);
  }

  return total;
}

// converts the bill and tip amount into a tip percent
function calculateTipPercent(billAmt, tipAmt) {
  return Math.round(100 / (billAmt / tipAmt));
}

// expects a table row element, appends a newly created td element from the value
function appendTd(tr, value) {
  let newTd = document.createElement('td');
  newTd.innerText = value;

  tr.append(newTd);
}

function appendDeleteBtnToServerTr(tr) {
  const delBtn = document.createElement('td');
  delBtn.textContent = 'X';
  delBtn.addEventListener('click', (e) => {
    if (confirm("Are you sure you want to delete this server?")) {
      const table = document.getElementById('serverTable');
      const rowToDelete = e.target.parent;
      table.removeChild(rowToDelete);
    }
  });
  tr.append(delBtn);
}

function appendDeleteBtnToPaymentTr(tr) {
  const delBtn = document.createElement('td');
  delBtn.textContent = 'X';
  delBtn.addEventListener('click', (e) => {
    if (confirm("Are you sure you want to delete this server?")) {
      const table = document.getElementById('paymentTable');
      const rowToDelete = e.target.parent;
      table.removeChild(rowToDelete);
    }
  });
  tr.append(delBtn);
}
