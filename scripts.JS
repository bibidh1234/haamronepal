document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('addButton');
    const itemInput = document.getElementById('itemInput');
    const itemList = document.getElementById('itemList');

    function addItem() {
        const itemText = itemInput.value.trim();

        if (itemText === '') {
            showFeedback('Please enter an item.', 'error');
            return;
        }

        // Create a new list item with a remove button
        const listItem = document.createElement('li');
        listItem.textContent = itemText;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-button');
        removeButton.addEventListener('click', function() {
            itemList.removeChild(listItem);
        });

        listItem.appendChild(removeButton);
        itemList.appendChild(listItem);

        // Clear the input field
        itemInput.value = '';
        itemInput.focus();
    }

    function showFeedback(message, type) {
        // Create feedback element if it does not exist
        let feedback = document.getElementById('feedback');
        if (!feedback) {
            feedback = document.createElement('div');
            feedback.id = 'feedback';
            document.body.appendChild(feedback);
        }

        feedback.textContent = message;
        feedback.className = type;
        setTimeout(() => {
            feedback.textContent = '';
            feedback.className = '';
        }, 3000);
    }

    addButton.addEventListener('click', addItem);

    itemInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevent form submission
            addItem();
        }
    });
});
