import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";
import { Metadata } from "next";

export const meta: Metadata = {
    metadataBase: new URL("https://pdfyai.vercel.app"),
    keywords: [
        "AI PDF reader",
        "PDF chatbot",
        "interactive PDF assistant",
        "PDF question answering",
        "AI document analysis",
        "GPT PDF tool",
    ],
    title: {
        default: "PDFy.ai – AI-Powered PDF Reader & Interactive Chat Assistant",
        template: "%s | PDFy.ai",
    },
    openGraph: {
        description:
            "PDFy.ai lets you upload PDF documents and chat with an AI to get instant answers, summaries, and insights. Built with GPT-4o-mini, React, and Next.js for a smooth and intuitive experience.",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className="min-h-screen h-screen overflow-hidden flex flex-col">
                    <Toaster richColors />
                    {children}
                </body>
            </html>
        </ClerkProvider>
    );
}
