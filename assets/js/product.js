document.addEventListener('DOMContentLoaded', () => {
    const decreaseBtn = document.getElementById('decrease');
    const increaseBtn = document.getElementById('increase');
    const quantityInput = document.getElementById('quantity');

    decreaseBtn.addEventListener('click', () => {
        let quantity = parseInt(quantityInput.value);

        if (quantity > 1) {
            quantityInput.value = quantity - 1;
        }
    });

    increaseBtn.addEventListener('click', () => {
        let quantity = parseInt(quantityInput.value);

        if (quantity < 10) {
            quantityInput.value = quantity + 1;
        }
    });

});

function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}
