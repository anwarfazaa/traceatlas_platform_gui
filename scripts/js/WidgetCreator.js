function addEventListenerToWidgets() {

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