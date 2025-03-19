document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("personForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission
        alert("Form is being submitted!"); // Debugging alert

        const formData = {
            name: document.getElementById("name").value,
            age: parseInt(document.getElementById("age").value, 10),
            address: document.getElementById("address").value
        };

        fetch("http://localhost:8080/api/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            console.log("Success:", data);
            alert("Form submitted successfully!"); // Debugging alert
            window.location.href = "/result.html"; // Redirect to result page
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Error submitting form. Check console for details.");
        });
    });
});
