// When the page loads it fetches the data.json file
fetch("data.json")
    .then(function(response) {
        // Convert the response to JSON
        return response.json();
    })
    .then(function(data) {
        // Find the table body in the HTML
        let tbody = document.getElementById("emulator-table").getElementsByTagName("tbody")[0];

        // This gets the emulators array from the json file itself
        let emulators = data.emulators;

        // Loop through each emulator
        for (let i = 0; i < emulators.length; i++) {

            // Creating a new table rows
            let row = document.createElement("tr");

            // Fill the row with data from the JSON
            row.innerHTML = "<td><a href='" + emulators[i].details.website + "' target='_blank'>" + emulators[i].name + "</a></td>" +
                "<td>" + emulators[i].platform + "</td>" +
                "<td>" + emulators[i].details.version + "</td>" +
                "<td><span class='badge " + (emulators[i].details.status === "Stable" ? "easy" : "active") + "'>" + emulators[i].details.status + "</span></td>";

            // Add the row to the table
            tbody.appendChild(row);
        }
    });
