import { auth } from "@clerk/nextjs/server";
import PlaceholderDocument from "./PlaceholderDocument";
import { adminDb } from "@/firebaseAdmin";
import Document from "./Document";

export default async function Documents() {
    auth.protect();
    const { userId } = await auth();

    if (!userId) {
        throw new Error("User not authenticated");
    }

    const documentsSnapshot = await adminDb
        .collection("users")
        .doc(userId)
        .collection("files")
        .get();

    return (
        <div className="flex flex-wrap p-5 bg-gray-100 justify-center lg:justify-star rounded-sm gap-6 max-2-7xl mx-auto">
            {documentsSnapshot.docs.map((doc) => {
                const { name, downloadUrl, size } = doc.data();
                return (
                    <Document
                        key={doc.id}
                        id={doc.id}
                        name={name}
                        size={size}
                        downloadUrl={downloadUrl}
                    />
                );
            })}
            <PlaceholderDocument />
        </div>
    );
}
