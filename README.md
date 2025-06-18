
<p align="center">
  <img src="https://i.imgur.com/VTQNVBO.png"  style="width: 400px; height: 400px;"/>
</p>
     
# PDFy.AI 🤖📄

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![OpenAI](https://img.shields.io/badge/OpenAI-GPT--4o--mini-412991?style=flat-square&logo=openai)](https://openai.com/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=flat-square&logo=vercel)](https://vercel.com/)

**Transform Your PDFs into Interactive Conversations**

PDFy.AI is an intelligent PDF reader that lets you upload documents and chat with an AI assistant to get instant answers, summaries, and insights. Built with cutting-edge technologies including GPT-4o-mini, LangChain, and Pinecone for a seamless document interaction experience.

![PDFy.AI Screenshot](https://i.imgur.com/lJrfPCh.jpeg)

## ✨ Features

### 🗂️ **Store Your PDF Documents**
Keep all your important PDF files securely stored and easily accessible anytime, anywhere with cloud backup.

### ⚡ **Blazing Fast Responses**
Experience lightning-fast AI-powered answers to your queries about document content.

### 🧠 **Chat Memorization**
Our intelligent chatbot remembers previous interactions, providing seamless and personalized conversations.

### 👁️ **Interactive PDF Viewer**
- Zoom in/out functionality
- Page rotation
- Navigation controls
- Responsive design across all devices

### ☁️ **Cloud Backup**
Documents are safely backed up on Firebase Cloud Storage, protected from loss or damage.

### 📱 **Responsive Design**
Access and chat with your PDFs seamlessly on desktop, tablet, or smartphone.

### 💳 **Subscription Management**
- **Free Tier**: Upload up to 2 documents
- **Pro Tier**: Upload up to 20 documents with advanced features
- Stripe integration for secure payments

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **Authentication**: Clerk
- **Database**: Firebase Firestore
- **File Storage**: Firebase Cloud Storage
- **AI & Embeddings**: OpenAI GPT-4o-mini, LangChain
- **Vector Database**: Pinecone
- **Payments**: Stripe
- **PDF Processing**: react-pdf, PDF.js
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Accounts for: Firebase, Clerk, OpenAI, Pinecone, Stripe

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/pdfy-ai.git
   cd pdfy-ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory and add the following variables:

   ```env
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key

   # OpenAI
   OPENAI_API_KEY=your_openai_api_key

   # Pinecone Vector Database
   PINECONE_API_KEY=your_pinecone_api_key

   # Firebase
   FIREBASE_SERVICE_KEY=your_firebase_service_account_key_json
   FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket

   # Stripe Payments
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   STRIPE_API_KEY=your_stripe_secret_key
   STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
   ```

4. **Set up Firebase**
   - Create a Firebase project
   - Enable Firestore Database
   - Enable Cloud Storage
   - Download service account key and add to environment variables

5. **Set up Pinecone**
   - Create a Pinecone account
   - Create an index named `breanzypdf`
   - Add your API key to environment variables

6. **Set up Clerk Authentication**
   - Create a Clerk application
   - Configure authentication providers
   - Add your keys to environment variables

7. **Set up Stripe**
   - Create a Stripe account
   - Set up products and pricing
   - Configure webhooks
   - Add your keys to environment variables

8. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

9. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── dashboard/         # Dashboard pages
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── Chat.tsx          # Chat interface
│   ├── PdfView.tsx       # PDF viewer
│   └── ...
├── lib/                   # Utility libraries
│   ├── langchain.ts      # LangChain configuration
│   ├── pinecone.ts       # Pinecone setup
│   ├── stripe.ts         # Stripe configuration
│   └── ...
├── hooks/                 # Custom React hooks
├── actions/              # Server actions
└── firebase*.ts          # Firebase configuration
```

## 🔧 Key Components

### Chat System
- Real-time messaging with AI
- Context-aware responses using document content
- Chat history persistence
- Markdown support for formatted responses

### PDF Processing
- Upload and store PDFs securely
- Generate embeddings using OpenAI
- Vector storage in Pinecone for fast retrieval
- Interactive PDF viewer with zoom and rotation

### Authentication & Authorization
- Secure user authentication with Clerk
- Protected routes and API endpoints
- User-specific document access

### Subscription Management
- Free and Pro tier limitations
- Stripe integration for payments
- Automatic subscription status updates

## 🚀 Deployment

This application is deployed on Vercel. To deploy your own instance:

1. Fork this repository
2. Connect your GitHub repo to Vercel
3. Add all environment variables in Vercel dashboard
4. Deploy!

## 📄 API Routes

- `GET /api/chat` - Retrieve chat history
- `POST /api/chat` - Send new message
- `POST /api/upload` - Upload PDF document
- `POST /api/webhooks/stripe` - Handle Stripe webhooks

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [OpenAI](https://openai.com/) for providing the GPT-4o-mini model
- [LangChain](https://langchain.com/) for the AI orchestration framework
- [Pinecone](https://pinecone.io/) for vector database services
- [Clerk](https://clerk.dev/) for authentication services
- [Stripe](https://stripe.com/) for payment processing
- [Firebase](https://firebase.google.com/) for database and storage

## Additional Notes
- TL;DR: Another Mern AI slop to prove I'm good lmao. I'm glad I made this project, I learned lots. Special thanks to Sonny Sangha for the tutorial that this project is based on! Here's to more projects :]
---
