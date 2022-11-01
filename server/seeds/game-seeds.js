const { gameSchema } = require("./models");

const dataSeeds = [
    {
        title: "Roblox",
        description: "Roblox is an online multiplayer game creation platform system, that allows users to create their own games and play games that other users have made.",
        image: "https://cdn.gaminggorilla.com/wp-content/uploads/2020/05/Most-Popular-Video-Games-Roblox.jpg"
    },
    {
        title: "Game title here",
        description: "Shoot em up",
        image: "https://stuff"
    },
    {
        title: "Game title here",
        description: "Shoot em up",
        image: "https://stuff"
    },
    {
        title: "Game title here",
        description: "Shoot em up",
        image: "https://stuff"
    },
    {
        title: "Game title here",
        description: "Shoot em up",
        image: "https://stuff"
    },
    {
        title: "Game title here",
        description: "Shoot em up",
        image: "https://stuff"
    },
    {
        title: "Game title here",
        description: "Shoot em up",
        image: "https://stuff"
    },
    {
        title: "Game title here",
        description: "Shoot em up",
        image: "https://stuff"
    },
    {
        title: "Game title here",
        description: "Shoot em up",
        image: "https://stuff"
    },
    {
        title: "Game title here",
        description: "Shoot em up",
        image: "https://stuff"
    },
];

const gameSeeds = () => gameSchema.bulkCreate(dataSeeds);

gameSeeds();

module.exports = gameSeeds;