// JavaScript for WhatsApp Chat Simulation using Stack Concept

// Initialize an empty stack (array) for messages
let messageStack = [];

// Function to display messages in the chat window
function displayMessages() {
    const chatWindow = document.getElementById('chatWindow');
    chatWindow.innerHTML = '';  // Clear previous messages

    messageStack.forEach(message => {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-bubble');
        messageElement.innerText = message;
        chatWindow.appendChild(messageElement);
    });

    // Scroll to the bottom of the chat window for new messages
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

// Function to send a new message
function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value.trim();

    if (message) {
        messageStack.push(message);  // Push message onto stack
        displayMessages();  // Refresh message display
        messageInput.value = '';  // Clear input field
    }
}

// Function to undo the last sent message (pop from stack)
function undoMessage() {
    if (messageStack.length > 0) {
        messageStack.pop();  // Remove the last message (LIFO)
        displayMessages();  // Refresh message display
    }
}

// Add event listeners to buttons
document.getElementById('sendMessageButton').addEventListener('click', sendMessage);
document.getElementById('undoMessageButton').addEventListener('click', undoMessage);

// Optional: Send message on Enter key press
document.getElementById('messageInput').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        sendMessage();
    }
});
