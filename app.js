let form = document.querySelector(".form")

function submitForm(event){
    event.preventDefault();
    let Name = document.querySelector("#name");
    alert(`${Name.value} your feedback is submitted`);
    document.getElementById("feedbackForm").reset();
}
form.addEventListener("submit",submitForm);

const burger = document.querySelector(".burger");
const navbar = document.querySelector(".navbar");
const navList = document.querySelector(".nav-list");

burger.addEventListener('click',()=>{
    navList.classList.toggle('v-class-resp');
    // navbar.classList.toggle('h-class-resp');
});
document.querySelectorAll('.star-rating input').forEach(input => {
    input.addEventListener('change', (event) => {
        const ratingValue = event.target.value;
        alert(`You rated this site ${ratingValue} stars!`);
        // Add your logic to handle the rating value here (e.g., send it to your server)
    });
});
