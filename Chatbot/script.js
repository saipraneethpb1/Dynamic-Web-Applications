let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];
let chatContainer = document.getElementById("chatContainer");
let userInput = document.getElementById("userInput");
let sendMsgBtn = document.getElementById("sendMsgBtn");

function getRandomMessage() {
    let index = Math.ceil(Math.random() * chatbotMsgList.length - 1);
    return chatbotMsgList[index];
}

sendMsgBtn.onclick = function() {

    let userMsg = userInput.value;

    // User Message
    let msgToChatbotContainer = document.createElement("div");
    msgToChatbotContainer.classList.add("msg-to-chatbot-container");

    let msgToChatbot = document.createElement("span");
    msgToChatbot.classList.add("msg-to-chatbot");
    msgToChatbot.textContent = userMsg;

    msgToChatbotContainer.appendChild(msgToChatbot);
    chatContainer.appendChild(msgToChatbotContainer);

    // Chatbot Reply
    let msgFromChatbotContainer = document.createElement("div");
    msgFromChatbotContainer.classList.add("msg-from-chatbot-container");

    let msgFromChatbot = document.createElement("span");
    msgFromChatbot.classList.add("msg-from-chatbot");
    msgFromChatbot.textContent = getRandomMessage();

    msgFromChatbotContainer.appendChild(msgFromChatbot);
    chatContainer.appendChild(msgFromChatbotContainer);

    // Clear Input
    userInput.value = "";
};