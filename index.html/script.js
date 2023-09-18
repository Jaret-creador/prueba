const products = [
    { name: "Producto 1", price: 50.00 },
    { name: "Producto 2", price: 30.00 },
    // Agrega más productos aquí
];

const searchInput = document.getElementById("search");
const suggestions = document.getElementById("suggestions");

searchInput.addEventListener("input", function () {
    const query = searchInput.value.toLowerCase();

    // Filtrar los productos en base a la consulta
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(query));

    // Limpia las sugerencias actuales
    suggestions.innerHTML = "";

    // Muestra las sugerencias solo si hay resultados
    if (filteredProducts.length > 0) {
        filteredProducts.forEach((product) => {
            const suggestionItem = document.createElement("div");
            suggestionItem.textContent = product.name;
            suggestionItem.classList.add("suggestion-item");

            // Maneja el clic en una sugerencia para llenar la barra de búsqueda y buscar el producto
            suggestionItem.addEventListener("click", () => {
                searchInput.value = product.name;
                suggestions.innerHTML = ""; // Limpia las sugerencias
                performSearch(product); // Realiza la búsqueda del producto seleccionado
            });

            suggestions.appendChild(suggestionItem);
        });
    }
});

searchInput.addEventListener("blur", function () {
    // Limpia las sugerencias cuando se sale de la barra de búsqueda
    suggestions.innerHTML = "";
});

// Función para buscar y mostrar un producto específico
function performSearch(selectedProduct) {
    const query = selectedProduct.name.toLowerCase();
    // Realiza la búsqueda real del producto en base a la consulta
    const searchResult = products.find(product => product.name.toLowerCase() === query);

    // Muestra el resultado de la búsqueda (puedes personalizar cómo mostrarlo)
    if (searchResult) {
        const searchResultsContainer = document.getElementById("search-results");
        searchResultsContainer.innerHTML = `
            <div>
                <h2>${searchResult.name}</h2>
                <p>Precio: $${searchResult.price}</p>
            </div>
        `;
    } else {
        // Si no se encuentra el producto, muestra un mensaje de error o maneja la situación según tu caso
        alert("Producto no encontrado");
    }
}
