document.getElementById('saveChangesBtn').addEventListener('click', function() {
    var title = document.getElementById('stepTitle').value;
    var type = document.getElementById('stepType').value;
    
    // Create a widget using the values
    var widget = document.createElement('div');
    widget.className = 'toast show';

    widget.innerHTML = `<div class="toast-header" style="display: block;">
        <strong class="me-auto">${title}</strong>
        
            <i class="fas fa-cog" style="float:right;"></i>
        
    </div>`;
    widget.innerHTML += `<div class="toast-body">${type}</div>`;


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
