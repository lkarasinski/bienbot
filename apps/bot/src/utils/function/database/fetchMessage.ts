import { Message } from "discord.js";

import DiscordClient from "../../../client/client";

const fetchMessage = async ({
	client,
	message,
}: {
	client: DiscordClient;
	message: Message;
}) => {
	const { data, error: selectError } = await client.database
		.from("messages")
		.select()
		.eq("id", message.id);
	if (selectError) console.log(selectError);
	if (data?.length === 0 || !data) {
		return null;
	} else {
		return data[0];
	}
};

export { fetchMessage };
