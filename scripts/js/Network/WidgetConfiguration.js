

    $('#newStepModal').on('shown.bs.modal', function (e) {
        console.log("New Step Modal is ready");
        getWidgetsType();
    });


function getWidgetsType() {
    fetch('dummy_data/widgets_type.json')
    .then(response => response.json())
    .then(data => {
        const selectElement = document.getElementById('stepType');
        data.widgets.forEach(widgets => {
            const optionElement = document.createElement('option');
            optionElement.value = widgets.name;
            optionElement.textContent = widgets.name;
            selectElement.appendChild(optionElement);
        });
    });
}
            
// Path: scripts/js/Network/WidgetCreator.js