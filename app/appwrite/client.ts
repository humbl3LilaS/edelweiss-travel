import { Account, Client, Databases, Storage } from "appwrite";

export const appwriteConfig = {
	endpoint: import.meta.env.VITE_APPWRITE_API_ENDPOINT,
	projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
	dbId: import.meta.env.VITE_APPWRITE_DB_ID,
	apiKey: import.meta.env.VITE_APPWRITE_API_SECRET,
	usersCollectionId: import.meta.env.VITE_APPWRITE_USERS_COLLECTION_ID,
	tripsCollectionId: import.meta.env.VITE_APPWRITE_TRIPS_COLLECTION_ID,
};

export const client = new Client()
	.setEndpoint(appwriteConfig.endpoint)
	.setProject(appwriteConfig.projectId);

export const account = new Account(client);

export const database = new Databases(client);

export const storage = new Storage(client);
