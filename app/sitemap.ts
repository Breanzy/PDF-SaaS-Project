import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://pdfyai.vercel.verc.app/",
            lastModified: new Date(),
        },
        {
            url: "https://pdfyai.vercel.app/dashboard",
            lastModified: new Date(),
        },
        {
            url: "https://pdfyai.vercel.app/dashboard/upload",
            lastModified: new Date(),
        },
    ];
}
