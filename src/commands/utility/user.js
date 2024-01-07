const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("user")
    .setDescription("Replies with user info"),

    async execute(interaction){
        await interaction.reply(`This Command was run by ${interaction.user.username} , who joined on ${interaction.user.joinedAt}`)
    }
};
