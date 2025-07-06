function updateTotal() {
    const radios = document.getElementsByName("unit");
    let selectedValue = 10;
    for (const radio of radios) {
        if (radio.checked) {
            selectedValue = radio.value;
            break;
        }
    }
    document.getElementById("total").textContent = `$${parseFloat(selectedValue).toFixed(2)} USD`;
}

function addToCart() {
    alert("Item added to cart successfully!");
}