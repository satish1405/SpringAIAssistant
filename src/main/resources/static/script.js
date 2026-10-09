const questionInput = document.getElementById("question");
const chatContainer = document.getElementById("chatContainer");
const sendButton = document.getElementById("sendButton");


/* ================= SEND MESSAGE ================= */

async function sendMessage() {

    const question = questionInput.value.trim();

    if (!question) {
        return;
    }

    const welcome = document.getElementById("welcome");

    if (welcome) {
        welcome.remove();
    }

    addMessage("👤", question, "user-message");

    questionInput.value = "";
    sendButton.disabled = true;

    const loadingId = "loading-" + Date.now();

    addMessage(
        "🤖",
        "Thinking...",
        "ai-message typing",
        loadingId
    );

    try {

        console.log("Sending question:", question);

        const response = await fetch("/api/chat", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                question: question
            })
        });

        console.log("Response status:", response.status);

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(
                "HTTP " + response.status + ": " + errorText
            );
        }

        const data = await response.json();

        console.log("AI response:", data);

        // Remove Thinking...
        const loadingElement =
            document.getElementById(loadingId);

        if (loadingElement) {
            loadingElement.remove();
        }

        // Show answer
        addMessage(
            "🤖",
            data.answer,
            "ai-message"
        );

    } catch (error) {

        console.error("ERROR:", error);

        const loadingElement =
            document.getElementById(loadingId);

        if (loadingElement) {
            loadingElement.remove();
        }

        addMessage(
            "⚠️",
            error.message,
            "ai-message"
        );

    } finally {

        sendButton.disabled = false;
        questionInput.focus();
    }
}

/* ================= ADD MESSAGE ================= */

function addMessage(
    avatar,
    text,
    type,
    id = null
) {

    const message = document.createElement("div");

    message.className = "message " + type;


    if (id) {
        message.id = id;
    }


    message.innerHTML = `

        <div class="avatar">
            ${avatar}
        </div>

        <div class="message-content ai-response">
            ${escapeHtml(text)}
        </div>

    `;


    chatContainer.appendChild(message);


    // Scroll to bottom
    chatContainer.scrollTop =
        chatContainer.scrollHeight;
}


/* ================= SUGGESTION ================= */

function askSuggestion(question) {

    questionInput.value = question;

    sendMessage();
}


/* ================= NEW CHAT ================= */

function newChat() {

    chatContainer.innerHTML = `

        <div id="welcome" class="welcome">

            <div class="welcome-icon">🤖</div>

            <h1>How can I help you?</h1>

            <p>
                Ask me anything about Java, Spring Boot,
                programming and more.
            </p>

            <div class="suggestions">

                <button onclick="askSuggestion('What is Java?')">
                    What is Java?
                </button>

                <button onclick="askSuggestion('Explain Spring Boot')">
                    Explain Spring Boot
                </button>

                <button onclick="askSuggestion('What is REST API?')">
                    What is REST API?
                </button>

            </div>

        </div>
    `;

    questionInput.value = "";

    questionInput.focus();
}


/* ================= ENTER KEY ================= */

function handleKey(event) {

    // Enter = send
    // Shift + Enter = new line

    if (event.key === "Enter" && !event.shiftKey) {

        event.preventDefault();

        sendMessage();
    }
}


/* ================= SECURITY ================= */

function escapeHtml(text) {

    const div = document.createElement("div");

    div.textContent = text;

    return div.innerHTML;
}