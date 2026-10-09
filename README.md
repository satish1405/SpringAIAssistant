# 🤖 Spring AI Assistant — Local LLM Chatbot

An AI-powered chat assistant built using **Java, Spring Boot, Spring AI, HTML, CSS, JavaScript, Ollama, and Gemma 3**. The application provides a web-based chat interface that communicates with a locally running Large Language Model (LLM) to generate intelligent responses.

The project demonstrates how to integrate a locally hosted AI model with a Spring Boot backend and a responsive frontend without relying on a paid, cloud-hosted LLM API.

## 🚀 Project Overview

The Spring AI Assistant allows users to enter questions through a web interface and receive AI-generated responses. The frontend sends requests to the Spring Boot backend, which communicates with the Gemma model running locally through Ollama.

The project explores the fundamentals of Generative AI integration in Java applications and provides a foundation for building advanced AI solutions, including Retrieval-Augmented Generation (RAG).

## ✨ Features

* **AI-powered conversations:** Ask questions and receive AI-generated responses.
* **Local LLM integration:** Uses Ollama to run the Gemma model locally.
* **Spring Boot backend:** Handles HTTP requests and integrates the AI model.
* **Spring AI integration:** Simplifies communication between Java applications and LLMs.
* **Interactive chat interface:** Built with HTML, CSS, and JavaScript.
* **REST API communication:** Connects the frontend to the backend.
* **Asynchronous frontend requests:** Uses JavaScript Fetch API and async/await.
* **Local execution:** Supports running the language model on your own machine.
* **Extensible architecture:** Can be extended with document uploads, RAG, vector databases, authentication, and conversation history.

## 🛠️ Technology Stack

| Technology   | Purpose                                    |
| ------------ | ------------------------------------------ |
| Java 17+     | Backend programming language               |
| Spring Boot  | Application framework and REST APIs        |
| Spring AI    | Integration with the language model        |
| Ollama       | Local LLM runtime                          |
| Gemma 3      | Large Language Model                       |
| HTML5        | Frontend structure                         |
| CSS3         | Styling and responsive interface           |
| JavaScript   | Frontend interactions and API requests     |
| Maven        | Dependency management and build automation |
| Git & GitHub | Version control and source code management |

## 🏗️ Application Architecture

```text
┌──────────────────────────────┐
│         User Interface       │
│       HTML + CSS + JS        │
└──────────────┬───────────────┘
               │
               │ HTTP Request
               ▼
┌──────────────────────────────┐
│      Spring Boot Backend     │
│                              │
│       REST Controller        │
│              │               │
│              ▼               │
│         Spring AI            │
└──────────────┬───────────────┘
               │
               │ Model Request
               ▼
┌──────────────────────────────┐
│            Ollama            │
│       Local LLM Runtime      │
│              │               │
│              ▼               │
│           Gemma 3             │
└──────────────┬───────────────┘
               │
               │ Generated Response
               ▼
       Spring Boot Backend
               │
               ▼
         Web Chat UI
```

## ⚙️ How It Works

1. The user enters a question in the web chat interface.
2. JavaScript captures the input and sends an HTTP request to the Spring Boot backend.
3. The REST controller receives the question.
4. Spring AI prepares and sends the prompt to the configured language model.
5. Ollama executes the Gemma model locally and generates a response.
6. Spring Boot returns the generated text to the frontend.
7. JavaScript displays the response in the chat interface.

## 📋 Prerequisites

Install the following before running the project:

* Java Development Kit (JDK) 17 or the version required by your project.
* Maven, or use the project's Maven Wrapper.
* Ollama.
* Git.
* A computer with sufficient memory and processing resources for the selected LLM.

## 🔧 Installation and Setup

### 1. Clone the Repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd <YOUR_PROJECT_FOLDER>
```

Replace the placeholders with your actual repository URL and project folder.

### 2. Install and Start Ollama

Download Ollama from:

https://ollama.com/download

### 3. Download the Gemma Model

Open a terminal and run:

```bash
ollama pull gemma3:4b
```

Run the model manually to verify it works:

```bash
ollama run gemma3:4b
```

The model name must match the model configured in your Spring Boot application.

### 4. Configure Spring Boot

Ensure your Spring AI Ollama dependency and model configuration are present in your Maven project.

Example `application.properties` configuration:

```properties
spring.application.name=spring-ai-assistant

spring.ai.ollama.base-url=http://localhost:11434
spring.ai.ollama.chat.options.model=gemma3:4b
```

Use the configuration appropriate for your installed Spring AI version. If your application already has a working configuration, retain it.

### 5. Run the Backend

Using Maven:

```bash
mvn spring-boot:run
```

Alternatively, build and run the JAR:

```bash
mvn clean package
java -jar target/<YOUR_APPLICATION_JAR>.jar
```

### 6. Open the Frontend

Open your frontend through the Spring Boot application's configured URL or the local development server, depending on how you have configured the project.
front-end URL:
##http://localhost:8080 - this will open your interface index.html from Spring boot package

Make sure the frontend API endpoint matches the backend REST controller mapping.

## 📁 Project Structure

The exact structure depends on your implementation. A typical layout looks like this:

```text
spring-ai-assistant/
├── src/
│   └── main/
│       ├── java/
│       │   └── com/example/
│       │       └── controller/
│       │           └── ChatController.java
│       └── resources/
│           ├── application.properties
│           └── static/
│               ├── index.html
│               ├── style.css
│               └── script.js
├── pom.xml
├── .gitignore
└── README.md
```

Your actual package names and frontend file locations may differ.

## 🔌 Backend API

The application exposes an HTTP endpoint for submitting questions to the AI assistant.

Example request body for a JSON-based chat endpoint:

```json
{
  "question": "What is dependency injection in Spring Boot?"
}
```

Example endpoint:

```text
POST /api/chat
```

The actual endpoint, request format, and response format should match your implemented Spring Boot controller.

## 🧠 Key Concepts Demonstrated

* Generative AI and Large Language Models.
* Spring AI integration with Java applications.
* Running open-weight language models locally.
* REST API development using Spring Boot.
* Frontend-backend integration.
* Asynchronous HTTP requests using JavaScript.
* Prompt submission and AI response handling.
* Maven-based dependency management.

## 🔮 Future Enhancements

The project can be extended into a more advanced AI application with the following features:

* [ ] Retrieval-Augmented Generation (RAG).
* [ ] PDF, DOCX, and TXT document uploads.
* [ ] Document parsing and text chunking.
* [ ] Embedding generation and vector storage using PostgreSQL with pgvector.
* [ ] Semantic search and retrieval of relevant document chunks.
* [ ] Answers grounded in uploaded documents with source citations.
* [ ] Conversation history and chat sessions.
* [ ] JWT authentication and user management.
* [ ] Streaming AI responses.
* [ ] Docker-based deployment.
* [ ] Cloud deployment.

**Note:** RAG, vector storage, document retrieval, and source citations are planned enhancements unless they have already been implemented.

## 🔐 Security Considerations

* Do not commit passwords, API keys, or other secrets to GitHub.
* Keep sensitive configuration in environment variables when appropriate.
* Validate user input on the backend.
* Apply authentication and authorization before exposing the application publicly.
* Configure suitable request limits and error handling.
* Remember that locally hosted models still consume system resources.

## 🎯 Learning Outcomes

This project helped explore the integration of Generative AI into a Java backend application. It demonstrates the interaction between a web frontend, REST APIs, Spring AI, and a locally hosted LLM.

It also establishes a foundation for expanding the application into a document-aware RAG assistant using embeddings and vector databases.

## 👨‍💻 Author

**Satish**

Java Developer | Spring Boot | REST APIs | Generative AI | Spring AI | RAG

## 📄 License

Choose an appropriate license for your repository, such as the MIT License, if you intend to permit reuse under its terms.
