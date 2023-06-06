function getFormvalue() {
    //Write your code here
	const form = document.getElementById("form1");
  
  // Get the input values
  const firstName = form.fname.value;
  const lastName = form.lname.value;
  
  // Display an alert with the first and last name
  window.alert(`${firstName} ${lastName}`);
  
  // Prevent the form from submitting
  return false;
}
