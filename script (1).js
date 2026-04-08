const chatBox = document.getElementById("chatBox");
const input = document.getElementById("input");

function sendMessage() {
  const text = input.value.trim();
  if (!text) return;

  addMessage(text, "user-msg");
  input.value = "";

  setTimeout(() => {
    botReply(text);
  }, 500);
}

function addMessage(text, type) {
  const msg = document.createElement("div");
  msg.className = type;
  msg.innerText = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function botReply(userText) {
  let reply = "I'm thinking... 🤔";

  if (userText.toLowerCase().includes("hello")) {
    reply = "Hello 👋 How can I help you?";
  } else if (userText.toLowerCase().includes("anatomy")) {
    reply = "Anatomy is the study of the human body structure.";
  } else if (userText.toLowerCase().includes("heart")) {
    reply = "The heart pumps blood throughout the body ❤️";
  }

  addMessage(reply, "bot-msg");
}

/* ENTER KEY */
input.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});