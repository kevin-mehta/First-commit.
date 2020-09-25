// Import stylesheets
import "./style.css";

function descBubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

function ascBubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

function convertArrayValuesToNumber(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    try {
      // let temp = Number(arr[i].toString().trim());
      // arr[i] = temp;
      arr[i] = Number(arr[i].toString().trim());
    } catch {
      console.error("Error while converting array values to Number.");
    }
  }
  return arr;
}

function processForm(e) {
  if (e.preventDefault) e.preventDefault();
  /*
   * Perform operations on form submit.
   */
  let arrInputValues = document
    .getElementById("idInpArray")
    .value.toString()
    .split(",");
  let arrInputValuesNumber = convertArrayValuesToNumber(arrInputValues);
  document.getElementById("idSpanSortedArray").innerHTML = descBubbleSort(
    arrInputValuesNumber
  );
  /*
   * You must return "false" to prevent the default form behavior.
   */
  return false;
}

var form = document.getElementById("idFormSorting");
if (form.attachEvent) {
  form.attachEvent("submit", processForm);
} else {
  form.addEventListener("submit", processForm);
}
