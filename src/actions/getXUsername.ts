"use server";

export const getXUsername = async (token: string) => {
	try {
		const response = await fetch("https://api.x.com/2/users/me", {
			headers: {
				Authorization: `Bearer ${token}`,
				"User-Agent": "v2UserLookupJS",
			},
		});
		const res = await response.json();
		return res?.data?.username || null;
	} catch (error) {
		console.log(error);
		return null;
	}
};
