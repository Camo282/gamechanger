const { gameSchema } = require("./models");

const dataSeeds = [
    {
        title: "Roblox",
        description: "Roblox is an online multiplayer game creation platform system, that allows users to create their own games and play games that other users have made.",
        image: "https://cdn.gaminggorilla.com/wp-content/uploads/2020/05/Most-Popular-Video-Games-Roblox.jpg"
    },
    {
        title: "Rocket League",
        description: "Rocket League is a vehicular soccer video game developed and published by Psyonix.",
        image: "https://cdn.gaminggorilla.com/wp-content/uploads/2020/05/Most-Popular-Video-Games-Rocket-League.jpg"
    },
    {
        title: "Overwatch",
        description: "As a player, you get to choose from a roster of over 30 different characters and you’re split into teams of six. In your team, you work together to defend different control points and move payload across the map in a limited time.",
        image: "https://cdn.gaminggorilla.com/wp-content/uploads/2020/05/Most-Popular-Video-Games-Overwatch.jpg"
    },
    {
        title: "Red Dead Redemption II",
        description: "It’s a western-style action-adventure game that’s available to play on PlayStation 4 and Xbox One.",
        image: "https://cdn.gaminggorilla.com/wp-content/uploads/2020/05/Most-Popular-Video-Games-Red-Dead-Redemption-II.jpg"
    },
    {
        title: "Super smash Bros: Ultimate",
        description: "Super Smash Bros is a cross-over fighting game that features a number of different characters, stages, music, and titles from different Nintendo games.",
        image: "https://cdn.gaminggorilla.com/wp-content/uploads/2020/05/Most-Popular-Video-Games-Super-Smash-Bros-Ultimate.jpg"
    },
    {
        title: "Tom Clancy's Rainbow Six Siege",
        description: "As a player, you take control of either an attacker or a defender in different gameplay modes, like defusing a bomb or rescuing a hostage.",
        image: "https://cdn.gaminggorilla.com/wp-content/uploads/2020/05/Most-Popular-Video-Games-Tom-Clancys-Rainbow-Six-Seige.jpg"
    },
    {
        title: "Grand Theft Auto V",
        description: "It is played in either a first or third-person perspective and players have the freedom to get around on foot or vehicle of their choice.",
        image: "https://cdn.gaminggorilla.com/wp-content/uploads/2020/05/Most-Popular-Video-Games-Grand-Theft-Auto-V.jpg"
    },
    {
        title: "Fortnite",
        description: "It has three different modes that you can choose to play: Save the World, Battle Royale & Creative. The first two game modes became the most popular choices for the majority of Fortnite players. Battle Royale draws in a whopping 125 million players in less than a year.",
        image: "https://cdn.gaminggorilla.com/wp-content/uploads/2020/05/Most-Popular-Video-Games-Fortnite.jpg"
    },
    {
        title: "Minecraft",
        description: "In the game, you’re able to build things with a variety of 3D building blocks and explore, gather resources, and participate in combat.",
        image: "https://cdn.gaminggorilla.com/wp-content/uploads/2020/05/Most-Popular-Video-Games-Minecraft.jpg"
    },
    {
        title: "Call of Duty: Warzone",
        description: "Warzone is a battle-royale style edition to the Call of Duty: Modern Warfare core game, and it’s addictive as hell.",
        image: "https://cdn.gaminggorilla.com/wp-content/uploads/2020/05/Most-Popular-Video-Games-Call-of-Duty-Warzone-Modern-Warfare.jpg"
    },
];

const gameSeeds = () => gameSchema.bulkCreate(dataSeeds);

gameSeeds();

module.exports = gameSeeds;