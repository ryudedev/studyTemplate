"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    const user1 = await prisma.user.create({
        data: {
            login: 'wiwi',
            username: 'wdebo',
            password: '123mickey',
            email: 'wdeb@gmail.com',
            avatar: '../frontend/src/app/public/avatars/wdeb.jpg',
            isOL: true,
        },
    });
    const user2 = await prisma.user.create({
        data: {
            login: 'lilix',
            username: 'aceralin',
            password: 'crumble',
            email: 'aceralin@gmail.com',
            avatar: '../frontend/src/app/public/avatars/aceralin.jpg',
            isOL: true,
        },
    });
    console.log({ user1, user2 });
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map