import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Test Devin - JavaScript Framework Comparison",
    description:
        "A demonstration app showcasing React, Solid, and Vue frameworks with accessible accordion components.",
    keywords: [
        "React",
        "Solid",
        "Vue",
        "JavaScript",
        "Framework",
        "Comparison",
    ],
    authors: [{ name: "Test Devin" }],
    viewport: "width=device-width, initial-scale=1",
    robots: "index, follow",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja">
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </head>
            <body className="flex min-h-screen flex-col">
                <header className="bg-gray-100 p-4">
                    <h1 className="font-bold text-xl">
                        JavaScript Framework Comparison
                    </h1>
                </header>
                <main className="flex-1">{children}</main>
                <footer className="bg-gray-100 p-4 text-center">
                    <p>&copy; 2024 Test Devin Application</p>
                </footer>
            </body>
        </html>
    );
}
