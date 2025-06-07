"use client";

import useSubscription from "@/hooks/useSubscription";
import useUpload, { StatusText } from "@/hooks/useUpload";
import {
    CheckCircleIcon,
    CircleArrowDown,
    HammerIcon,
    RocketIcon,
    SaveIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { ReactElement, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { toast } from "sonner";

export default function FileUploader() {
    const { progress, status, fileId, handleUpload } = useUpload();
    const router = useRouter();
    const { isOverFileLimit, filesLoading } = useSubscription();

    useEffect(() => {
        if (fileId) {
            router.push(`/dashboard/files/${fileId}`);
        }
    }, [fileId, router]);

    const onDrop = useCallback(
        async (acceptedFiles: File[]) => {
            // Do something with the files

            const file = acceptedFiles[0];
            if (file) {
                if (!isOverFileLimit && !filesLoading) {
                    await handleUpload(file);
                } else {
                    toast.error(
                        "You have reached the maximum number of files allowed for your account. Upgrade to PRO to add more documents"
                    );
                }
            } else {
            }
        },
        [handleUpload]
    );

    const statusIcons: {
        [key in StatusText]: ReactElement;
    } = {
        [StatusText.UPLOADING]: (
            <RocketIcon className="h-20 w-20 text-indigo-600" />
        ),
        [StatusText.UPLOADED]: (
            <CheckCircleIcon className="h-20 w-20 text-indigo-600" />
        ),
        [StatusText.SAVING]: <SaveIcon className="h-20 w-20 text-indigo-600" />,
        [StatusText.GENERATING]: (
            <HammerIcon className="h-20 w-20 text-indigo-600" />
        ),
    };

    const {
        getRootProps,
        getInputProps,
        isDragActive,
        isFocused,
        isDragAccept,
    } = useDropzone({
        onDrop,
        maxFiles: 1,
        accept: {
            "application/pdf": [".pdf"],
        },
    });

    const uploadingProgress =
        progress != null && progress >= 0 && progress <= 100;

    return (
        <div className="flex flex-col gap-4 items-center max-w-7xl mx-auto">
            <div className="mt-32 flex flex-col justify-center items-center gap-5">
                <div
                    className={`radial-progress bg-indigo-300 text-white border-indigo-600 border-4 ${
                        progress == 100 || progress == null ? "hidden" : ""
                    }`}
                    role="progressbar"
                    style={{
                        //@ts-ignore
                        "--value": progress,
                        "--size": "12rem",
                        "--thickness": "1.3rem",
                    }}
                >
                    {progress} %
                </div>

                {
                    //@ts-ignore
                    statusIcons[status!]
                }

                {/* @ts-ignore */}
                <p className="text-indigo-600 animate-pulse">{status}</p>
            </div>

            {!uploadingProgress && (
                <div
                    {...getRootProps()}
                    className={`p-10 border-indigo-600 border-2 border-dashed mt-10 w-[90%] text-indigo-600 rounded-lg h-96 flex items-center justify-center ${
                        isFocused || isDragAccept
                            ? "bg-indigo-300"
                            : "bg-indigo-100"
                    }`}
                >
                    <input {...getInputProps()} />

                    <div className="flex flex-col items-center justify-center">
                        {isDragActive ? (
                            <>
                                <RocketIcon className="h-20 w-20 animate-ping" />
                                <p>Drop the files here ...</p>
                            </>
                        ) : (
                            <>
                                <CircleArrowDown className="h-20 w-20 animate-bounce" />
                                <p>
                                    Drag and drop some files here, or click to
                                    select files
                                </p>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
