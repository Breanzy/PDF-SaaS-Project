"use client";
import { FrownIcon, PlusCircleIcon, Landmark, Frown } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import useSubscription from "@/hooks/useSubscription";

export default function PlaceholderDocument() {
    const { isOverFileLimit } = useSubscription();
    const router = useRouter();

    const handleClick = () => {
        if (isOverFileLimit) {
            router.push("dashboard/upgrade");
        } else {
            router.push("/dashboard/upload");
        }
    };

    return (
        <Button
            onClick={handleClick}
            className="flex flex-col items-center w-64 h-80 rounded-xl bg-gray-200 drop-shadow-md text-gray-400"
        >
            {isOverFileLimit ? (
                <FrownIcon className="!w-16 !h-16" />
            ) : (
                <PlusCircleIcon className="!w-16 !h-16" />
            )}
            <p>Add a Document</p>
        </Button>
    );
}
