import config from '../conf/config.js'
import { Client, Account, ID } from "appwrite";

export class Authservice{
    client = new Client();
    account ;
    constructor()
    {
        
    this.client
        .setEndpoint(config.appwriteurl)
        .setProject(config.appwriteprojectid);
        this.account= new Account(this.client);
    }
    async createAccount({email,password,name}){
        try{
            const useraccount=await this.account.create(ID.unique(),email,password,name);
            if(useraccount)
            {
                await this.login({ email, password });
                return useraccount;

            }else{
                return useraccount;
            }
        }
        catch(error){
            throw error;
        }
    }

    async login({email,password})
    {
        try{
            return this.account.createEmailPasswordSession(email, password);
        }
        catch(error){
            throw error;
        }
    }

    async getcurrentuser()
    {
        try{
            return await this.account.get(); 
        }
        catch(error)
        {
            throw error;
        }
        return null;
    }

    async logout()
    {
        try{
            return await this.account.deleteSessions();
        }
        catch(error){
            throw error;    
        }
    }
}

const authservice= new Authservice();

export default authservice 