function addEventListenerToWidgets() {
document.getElementById('saveChangesBtn').addEventListener('click', function() {
    var title = document.getElementById('stepTitle').value;
    var type = document.getElementById('stepType').value;   
    // Create a widget using the values
    var widget = document.createElement('div');
    widget.className = 'toast show';
    widget.style = 'max-width: 100%;'

    widget.innerHTML = `<div class="toast-header" style="display: block;">
        <strong class="me-auto">${type}</strong>
        
            <i class="fas fa-cog" style="float:right; cursor: pointer;" data-name="${title}" data-type="${type}" data-toggle="modal" data-target="#configurationModal"></i>    
    </div>`;
    widget.innerHTML += `<div class="toast-body">${title}</div>`;
    // Create a container div
    var container = document.getElementById('widgets-container');
    // Add draggable attribute to the widget
    widget.setAttribute('draggable', 'true');
    // Add event listeners for drag events
    container.addEventListener('dragstart', function(event) {
        event.dataTransfer.setData('text/plain', 'widget');
    });
    // Append the widget to the container
    container.appendChild(widget);

    new Sortable(container, {
        animation: 150
    });
});
}


// Path: scripts/js/Network/WidgetConfiguration.js
$('#configurationModal').on('show.bs.modal', function (e) {
    var triggerButton = $(e.relatedTarget); // Button that triggered the modal
    console.log(triggerButton.data('name'));
    console.log(triggerButton.data('type'));
    var title = triggerButton.data('name') + '-' + triggerButton.data('type') ; // Extract title attribute
    var source = triggerButton.data('type').replace(/\s+/g, '-') + ".html"; // Extract HTML file source

    var modal = $(this);
    modal.find('.modal-title').text(title); // Set the modal title

    // Load HTML content into the modal body
    //modal.find('.modal-body').load("pages_templates/" + source);
    console.log("pages_templates/" + source);
    $.ajax({
        url: "pages_templates/" + source,
        method: 'GET',
        success: function (data) {
          modal.find('.modal-content').html(data); // Set the fetched HTML content in the modal body
        },
        error: function (error) {
          console.error('Error fetching content:', error);
        }
      });
    
  });

  $('#configurationModal').on('hidden.bs.modal', function (e) {
    var modal = $(this);
    // Clear the modal content when it's hidden
    modal.find('.modal-body').empty();
    var myElement = document.getElementById('executeProcess');
    myElement.removeEventListener('click', e);
  });


// Path: scripts/js/Network/WidgetCreator.js