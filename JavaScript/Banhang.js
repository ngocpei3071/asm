function filterByPrice() {
  let selectedPrice = document.getElementById("price").value;
  let rows = document.getElementsByTagName("tr");

  for (let i = 0; i < rows.length; i++) {
      let row = rows[i];
      let priceCell = row.getElementsByTagName("td")[2];

      if (priceCell) {
          let price = parseInt(priceCell.textContent.replace("$", ""));
          if (price > selectedPrice) {
              row.style.display = "none";
          } else {
              row.style.display = "";
          }
      }
  }
}
function toggleQuantityInput(checkbox) {
  let quantityInput = checkbox.parentNode.parentNode.getElementsByTagName("td")[3].getElementsByTagName("input")[0];
  let priceCell = checkbox.parentNode.parentNode.getElementsByTagName("td")[2];
  let totalPriceCell = checkbox.parentNode.parentNode.getElementsByTagName("td")[4];
  if (checkbox.checked) {
      quantityInput.removeAttribute("disabled"); // Bỏ thuộc tính disabled
      calculateTotal(priceCell, quantityInput, totalPriceCell);
  } else {
      quantityInput.setAttribute("disabled", "disabled"); // Thêm thuộc tính disabled
      quantityInput.value = "";
      totalPriceCell.textContent = "";
      calculateTotal(priceCell, quantityInput, totalPriceCell);
  }
}

// Kiểm tra trạng thái ban đầu của checkbox
let checkboxes = document.querySelectorAll('input[type="checkbox"]');
for (let i = 0; i < checkboxes.length; i++) {
  let checkbox = checkboxes[i];
  if (!checkbox.checked) {
      let quantityInput = checkbox.parentNode.parentNode.getElementsByTagName("td")[3].getElementsByTagName("input")[0];
      quantityInput.setAttribute("disabled", "disabled"); // Thêm thuộc tính disabled
  }
}


function calculateTotal(priceCell, quantityInput, totalPriceCell) {
  let price = parseInt(priceCell.textContent.replace("$", ""));
  let quantity = parseInt(quantityInput.value);
  if (isNaN(quantity)) quantity = 0;
  let total = price * quantity;

  if (!isNaN(total)) {
      totalPriceCell.textContent = "$" + total;
  } else {
      totalPriceCell.textContent = "";
  }

  let rows = document.getElementsByTagName("tr");
  let sum = 0;

  for (let i = 1; i < rows.length; i++) { // Bắt đầu từ index 1 để bỏ qua hàng tiêu đề
      let row = rows[i];
      let checkboxes = document.querySelectorAll('input[type="checkbox"]');
      if (checkboxes[i].checked) {
          let totalPrice = parseInt(row.getElementsByTagName("td")[4].textContent.replace("$", ""));
          if (!isNaN(parseInt(totalPrice))) {
              sum += parseInt(totalPrice);
          }
      }
      document.getElementById("total").innerHTML = "$" + sum;
  }
}