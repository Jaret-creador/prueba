searchInput.addEventListener("input", function () {
    const query = searchInput.value.toLowerCase();

    // Lógica para obtener sugerencias (simuladas para este ejemplo)
    const suggestedKeywords = getSuggestedKeywords(query);

    // Limpia las sugerencias actuales
    suggestions.innerHTML = "";

    // Muestra las sugerencias
    suggestedKeywords.forEach((suggestion) => {
        const suggestionItem = document.createElement("div");
        suggestionItem.textContent = suggestion;
        suggestionItem.classList.add("suggestion-item");

        // Maneja el clic en una sugerencia para llenar la barra de búsqueda
        suggestionItem.addEventListener("click", () => {
            searchInput.value = suggestion;
            suggestions.innerHTML = ""; // Limpia las sugerencias
        });

        suggestions.appendChild(suggestionItem);
    });
});
