// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // 既存のユーザーを削除（必要に応じて）
  await prisma.user.deleteMany(); // 全ユーザー削除

  // ダミーユーザーを作成
  const user1 = await prisma.user.upsert({
    where: { login: 'wiwi' },
    update: {}, // 既存なら何もしない
    create: {
      login: 'wiwi',
      username: 'wdebo',
      password: '123mickey',
      email: 'wdeb@gmail.com',
      avatar: '../frontend/src/app/public/avatars/wdeb.jpg',
      isOL: true,
    },
  });

  const user2 = await prisma.user.upsert({
    where: { login: 'lilix' },
    update: {}, // 既存なら何もしない
    create: {
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

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
