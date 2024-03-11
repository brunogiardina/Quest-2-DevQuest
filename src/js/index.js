const btnSubmite = document.querySelector('.submitBtn');
let inputRequireds = document.querySelectorAll('.inputUserRequired');
const formField = document.getElementById('formField');

//If input filled, change border to color green.
inputRequireds.forEach((input) => {
  input.addEventListener('change', () => {
    
    if (input.value) {
      input.classList.add('inputRequiredFilled');
      const parent = input.parentNode;
      const tags = parent.querySelectorAll("p");

      tags.forEach(element => {
        parent.removeChild(element);
      })

    } else {
      input.classList.remove('inputRequiredFilled');
    }
  });
});

//Verify if input is empty and show message where is required.
formField.addEventListener('submit', (event) => {
    event.preventDefault();// Avoid submitting the form
    var hasError = false;

    inputRequireds.forEach((input) => {
        
        if (!input.value) {
            
        input.classList.add('inputEmptyRequired');

        const newTag = document.createElement('p');
        newTag.className = 'requiredFields';
        newTag.innerText = 'Field required';
        const parent = input.parentNode;
        parent.appendChild(newTag);

        hasError = true;
            
        } else {
            input.classList.remove('inputEmptyRequired');
            }
    });

    if (!hasError) {
        // If there are no errors, can send form
        event.target.submit();
    }
});
