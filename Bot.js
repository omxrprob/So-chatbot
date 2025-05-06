const chat = document.getElementById("chat");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

sendBtn.addEventListener("click", () => {
  const input = userInput.value.trim();
  if (!input) return;

  appendMessage("You", input);
  const response = getBotResponse(input);
  appendMessage("Bot", response);
  userInput.value = "";
});

function appendMessage(sender, message) {
  chat.innerHTML += `<p><strong>${sender}:</strong> ${message}</p>`;
  chat.scrollTop = chat.scrollHeight;
}

function getBotResponse(input) {
  input = input.toLowerCase();

  if (input.includes("hello") || input.includes("hi")) {
    return "Hello! How can I help you?";
  } else if (input.includes("how are you")) {
    return "I'm just a bot, but I'm doing great!";
  } else if (input.includes("bye")) {
    return "Goodbye! Have a great day.";
  } else {
    return "I'm not sure how to respond to that.";
  }
}
