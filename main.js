const submitButton = document.getElementById('submit-button');

const buttons = document.querySelectorAll('.rating-button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove 'active' class from all buttons
        buttons.forEach(btn => btn.classList.remove('active'));

        // Add 'active' class to the clicked button
        button.classList.add('active');
    });
});




const ratingButtons = document.querySelectorAll(".rating-button");
const ratingValue = document.getElementById("rating-value");

let selectedRating = null; 

ratingButtons.forEach(button => {
    button.addEventListener("click", () => {
    ratingButtons.forEach(b => b.classList.remove("selected"));

    button.classList.add("selected"); 

    selectedRating = button.value; 
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('submit-button');
    const container = document.querySelector('.container');
    const container1 = document.querySelector('.container1');
    const ratingButtons = document.querySelectorAll('.rating-button');
    const ratingValue = document.getElementById('rating-value');
    
    let selectedRating = 0;

    // Add event listeners to rating buttons
    ratingButtons.forEach(button => {
        button.addEventListener('click', function() {
            selectedRating = this.value;
            ratingValue.textContent = selectedRating;
        });
    });

    // Handle submit button click
    submitButton.addEventListener('click', function() {
        if (selectedRating > 0) {
            container.classList.add('hidden');
            container1.classList.remove('hidden');
        } else {
            alert('Please select a rating before submitting.');
        }
    });
});