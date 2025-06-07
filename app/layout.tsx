import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";

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
