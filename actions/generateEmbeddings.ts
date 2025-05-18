"use server";

import { generateEmbeddingsInPineconeVectorStore } from "@/lib/langchain";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export async function generateEmbeddings(docId: string) {
    auth.protect();

    // turn PDF into embeddings (pdf to string numbers)
    await generateEmbeddingsInPineconeVectorStore(docId);

    revalidatePath("/dashboard");

    return { completed: true };
}
