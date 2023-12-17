$('#configurationModal').on('hidden.bs.modal', function (e) {
    var modal = $(this);
    // Clear the modal content when it's hidden
    modal.find('.modal-body').empty();
    var myElement = document.getElementById('empty-workbook-alert');
    myElement.remove();
  });