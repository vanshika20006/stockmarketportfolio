// script.js

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("stock-form");
    const portfolio = document.getElementById("portfolio");
    const totalValueEl = document.getElementById("total-value");
    let totalValue = 0;

    // Add stock to the portfolio
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("stock-name").value;
        const quantity = parseInt(document.getElementById("stock-quantity").value, 10);
        const price = parseFloat(document.getElementById("stock-price").value);

        const stockValue = quantity * price;
        totalValue += stockValue;
        totalValueEl.textContent = totalValue.toFixed(2);

        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${name}</td>
            <td>${quantity}</td>
            <td>$${price.toFixed(2)}</td>
            <td>$${stockValue.toFixed(2)}</td>
            <td><button class="delete-btn">Delete</button></td>
        `;

        portfolio.appendChild(row);
        form.reset();

        // Delete stock functionality
        row.querySelector(".delete-btn").addEventListener("click", () => {
            totalValue -= stockValue;
            totalValueEl.textContent = totalValue.toFixed(2);
            row.remove();
        });
    });
});
