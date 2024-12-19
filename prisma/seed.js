const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    // Ajouter des jeux d'exemple
    const games = await prisma.product.createMany({
        data: [
            {
                name: "The Witcher 3",
                description: "Un jeu de rôle en monde ouvert où vous incarnez Geralt de Rivia, un chasseur de monstres.",
                price: 49.99,
                image: "https://link-to-image.com/witcher3.jpg"
            },
            {
                name: "Red Dead Redemption 2",
                description: "Un jeu d'action-aventure où vous explorez l'ouest sauvage américain à la fin du 19ème siècle.",
                price: 59.99,
                image: "https://link-to-image.com/rdr2.jpg"
            },
            {
                name: "Cyberpunk 2077",
                description: "Un jeu de rôle en monde ouvert futuriste où vous explorez Night City.",
                price: 39.99,
                image: "https://link-to-image.com/cyberpunk2077.jpg"
            },
            {
                name: "Minecraft",
                description: "Un jeu de construction où vous explorez et construisez des mondes en blocs.",
                price: 29.99,
                image: "https://link-to-image.com/minecraft.jpg"
            },
            {
                name: "The Elder Scrolls V: Skyrim",
                description: "Un jeu de rôle fantasy où vous incarnez un Dragonborn pour sauver le monde.",
                price: 39.99,
                image: "https://link-to-image.com/skyrim.jpg"
            },
            {
                name: "Halo Infinite",
                description: "Un jeu de tir à la première personne dans un futur lointain où vous combattez les forces extraterrestres.",
                price: 59.99,
                image: "https://link-to-image.com/halo-infinite.jpg"
            }
        ]
    });
    console.log('Jeux ajoutés avec succès');
}

main()
    .catch(e => {
        console.error(e);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
