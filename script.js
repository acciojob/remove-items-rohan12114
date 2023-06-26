function removeColor() {
  // Get the select element by its id
  var selectElement = document.getElementById("colorSelect");

  // Get the selected option
  var selectedOption = selectElement.options[selectElement.selectedIndex];

  // Remove the selected option
  selectElement.removeChild(selectedOption);
}
