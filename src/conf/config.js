const config={
    appwriteurl:String(import.meta.env.VITE_APPWRITE_URL),
    appwritecollectionid: String(import.meta.env.VITE_APPWRITE_TABLE_ID),
    appwriteprojectid: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwritedatabaseid: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwritebucketid: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),

};

export default config;
