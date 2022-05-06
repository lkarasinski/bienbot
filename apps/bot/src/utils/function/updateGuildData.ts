import { Guild } from "discord.js";
import DiscordClient from "../../client/client";

interface ServerData {
    onlineUsers: string[];
    allUsers: string[];
}

const updateGuildData = async (client: DiscordClient) => {
    const Guilds = client.guilds.cache;
    if (!Guilds) return;

    const admin = require("firebase-admin");
    const database = admin.firestore();

    Guilds.forEach(async (guild) => {
        if (guild instanceof Guild) {
            const guildMembers = await guild.members.fetch();
            const serverData: ServerData = {
                onlineUsers: [],
                allUsers: [],
            };

            guildMembers.forEach(async (member) => {
                serverData.allUsers.push(member.id);
                if (member.presence?.status) {
                    serverData.onlineUsers.push(member.id);
                }
            });
            await database.collection(guild.id).doc("data").update(serverData);
        }
    });
};

export default updateGuildData;