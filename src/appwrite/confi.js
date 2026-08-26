import config from "../conf/config";
import { Client, ID, TablesDB, Storage, Query } from "appwrite";

export class Service {
    client = new Client();
    database;
    bucket;

    constructor() {
        this.client
            .setEndpoint(config.appwriteurl)
            .setProject(config.appwriteprojectid);

        this.database = new TablesDB(this.client);
        this.bucket = new Storage(this.client);
    }

    async createpost({ title, slug, content, featuredimg, status, userid }) {
        try {
            return await this.database.createRow({
                databaseId: config.appwritedatabaseid,
                tableId: config.appwritecollectionid,
                rowId: slug,
                data: {
                    title,
                    content,
                    featuredimg,
                    status,
                    userid,
                    slug,
                },
            });
        } catch (error) {
            throw error;
        }
    }

    async updatepost(slug, { title, content, featuredimg, status }) {
        try {
            return await this.database.updateRow({
                databaseId: config.appwritedatabaseid,
                tableId: config.appwritecollectionid,
                rowId: slug,
                data: {
                    title,
                    content,
                    featuredimg,
                    status,
                },
            });
        } catch (error) {
            throw error;
        }
    }

    async deletepost(slug) {
        try {
            await this.database.deleteRow({
                databaseId: config.appwritedatabaseid,
                tableId: config.appwritecollectionid,
                rowId: slug,
            });

            return true;
        } catch (error) {
            throw error;
        }
    }

    async getpost(slug) {
        try {
            return await this.database.getRow({
                databaseId: config.appwritedatabaseid,
                tableId: config.appwritecollectionid,
                rowId: slug,
            });
        } catch (error) {
            throw error;
        }
    }

    async getposts(
        queries = [Query.equal("status", "active")]
    ) {
        try {
            return await this.database.listRows({
                databaseId: config.appwritedatabaseid,
                tableId: config.appwritecollectionid,
                queries,
            });
        } catch (error) {
            throw error;
        }
    }

    // File upload service

    async uploadfile(file) {
        try {
            return await this.bucket.createFile(
                config.appwritebucketid,
                ID.unique(),
                file
            );
        } catch (error) {
            throw error;
        }
    }

    async deletefile(fileId) {
        try {
            await this.bucket.deleteFile(
                config.appwritebucketid,
                fileId
            );

            return true;
        } catch (error) {
            throw error;
        }
    }

    getfileview(fileId) {
    return this.bucket.getFileView(
        config.appwritebucketid,
        fileId
    );
}
}

const service = new Service();

export default service;