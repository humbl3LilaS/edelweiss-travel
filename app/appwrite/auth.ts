import { ID, OAuthProvider, Query } from "appwrite";
import { redirect } from "react-router";
import { account, appwriteConfig, database } from "~/appwrite/client";

export const loginWithGoogle = async () => {
	try {
		account.createOAuth2Session(OAuthProvider.Google);
	} catch (err) {
		console.log("Error Logging In with Google", err);
	}
};

export const logoutUser = async () => {
	try {
		await account.deleteSession("current");
		return true;
	} catch (err) {
		console.log(err);
		return false;
	}
};

export const getUser = async () => {
	try {
		const user = await account.get();
		if (!user) {
			return redirect("/auth/sign-in");
		}
		const { documents } = await database.listDocuments(
			appwriteConfig.dbId,
			appwriteConfig.usersCollectionId,
			[Query.equal("accountId", user.$id)],
		);

		if (!documents) {
			return redirect("/auth/sign-in");
		}

		return documents;
	} catch (err) {
		console.log(err);
		return redirect("/auth/sign-in");
	}
};

export const getGooglePicture = async () => {
	try {
		const session = await account.getSession("current");
		const oAuthToken = session.providerAccessToken;
		if (!oAuthToken) {
			console.log("No OAuth Token provided");
			return null;
		}

		const response = await fetch(
			"https://people.googleapis.com/v1/people/me?personFields=photos",
			{
				headers: {
					Authorization: `Bearer ${oAuthToken}`,
				},
			},
		);
		if (!response.ok) {
			console.log("Failed To fetch profile photo from Google People Api");
			return null;
		}

		const data = await response.json();

		return data.photos && data.photos.lenght > 0 ? (data.photos[0].url as string) : null;
	} catch (err) {
		console.log(err);
		return null;
	}
};

export const storeUser = async () => {
	try {
		const user = await account.get();

		if (!user) return null;

		const { documents } = await database.listDocuments(
			appwriteConfig.dbId,
			appwriteConfig.usersCollectionId,
			[Query.equal("accountId", user.$id)],
		);
		if (documents.length > 0) {
			return documents[0];
		}

		const imageUrl = await getGooglePicture();

		const newUser = await database.createDocument(
			appwriteConfig.dbId,
			appwriteConfig.usersCollectionId,
			ID.unique(),
			{
				accountId: user.$id,
				name: user.name,
				email: user.email,
				imageUrl: imageUrl || "",
				joinedAt: new Date().toISOString(),
			},
		);

		return newUser;
	} catch (err) {
		console.log(err);
		return null;
	}
};

export const getExistingUser = async () => {
	try {
		const user = await account.get();

		const { documents } = await database.listDocuments(
			appwriteConfig.dbId,
			appwriteConfig.usersCollectionId,
			[Query.equal("accountId", user.$id)],
		);
		if (!documents || documents.length === 0) {
			return null;
		}
		return documents[0];
	} catch (err) {
		console.log(err);
		return null;
	}
};
