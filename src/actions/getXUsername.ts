"use server";

export const getXUsername = async (token: string) => {
	const response = await fetch(
		"https://api.x.com/2/users/me?query=from:twitterdev",
		{
			headers: {
				Authorization: `Bearer ${token}`,
				"User-Agent": "v2UserLookupJS",
			},
		}
	);
	const data = await response.json();
	console.log(data);
	return data?.username || null;
};
