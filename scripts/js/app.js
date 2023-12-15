document.getElementById('saveChangesBtn').addEventListener('click', function() {
    var title = document.getElementById('stepTitle').value;
    var type = document.getElementById('stepType').value;
    
    // Create a widget using the values
    var widget = document.createElement('div');
    /*
    widget.className = "offcanvas offcanvas-start";
    
    widget.setAttribute('role', 'alert');
    widget.setAttribute('aria-live', 'assertive');
    widget.setAttribute('aria-atomic', 'true');
    */
    widget.className = 'toast show';

    widget.innerHTML = `<div class="toast-header" style="display: block;">
        <strong class="me-auto">${title}</strong>
        
            <i class="fas fa-cog" style="float:right;"></i>
        
    </div>`;
    widget.innerHTML += `<div class="toast-body">${type}</div>`;

    // Add CSS classes to the widget for Bootstrap column
    //widget.classList.add('col');
    //widget.classList.add('mx-auto'); // Center the widget horizontally

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

    // Append the container to the document
    //document.body.appendChild(container);

    // Make the widget sortable
    new Sortable(container, {
        animation: 150
    });
    });
