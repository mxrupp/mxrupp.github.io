// Hier können Sie Ihre Ortsdaten einfügen
const locations = [
    { name: "Ort 1", lat: 12.345, lng: 67.890, description: "Beschreibung 1" },
    { name: "Ort 2", lat: 23.456, lng: 78.901, description: "Beschreibung 2" },
    // Weitere Orte...
];

// Funktion zum Initialisieren der Karte
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 12.345, lng: 67.890 },
        zoom: 10,
    });

    // Markierungen für jeden Ort hinzufügen
    locations.forEach(location => {
        const marker = new google.maps.Marker({
            position: { lat: location.lat, lng: location.lng },
            map: map,
            title: location.name,
        });

        // Infofenster hinzufügen
        const infoWindow = new google.maps.InfoWindow({
            content: `<h3>${location.name}</h3><p>${location.description}</p>`,
        });

        // Ereignislistener für Klick auf Markierung
        marker.addListener("click", () => {
            infoWindow.open(map, marker);
        });
    });
}
