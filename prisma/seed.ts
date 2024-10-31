import { PrismaClient } from '@prisma/client';
import { Category } from '@prisma/client';

const prisma = new PrismaClient();
async function main() {
  const risoto = await prisma.menu.upsert({
    where: { name: 'Risoto' },
    update: {},
    create: {
      name: 'Risoto',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla odio, convallis quis convallis quis, eleifend in nunc. In hac habitasse platea dictumst.',
      price: 109.99,
      category: Category.MAIN_DISH,
    },
  });
  const lasanha = await prisma.menu.upsert({
    where: { name: 'Lasanha' },
    update: {},
    create: {
      name: 'Lasanha',
      description:
        'Praesent pulvinar, urna pellentesque tristique consectetur, dui nisi fringilla leo, vestibulum hendrerit nisi sem at eros. Integer rutrum malesuada sapien quis eleifend.',
      price: 80.99,
      category: Category.MAIN_DISH,
    },
  });
  const feijoada = await prisma.menu.upsert({
    where: { name: 'Feijoada' },
    update: {},
    create: {
      name: 'Feijoada',
      description:
        'Aenean orci libero, aliquam eu turpis vitae, pellentesque efficitur enim. Mauris vestibulum quam id nulla rhoncus, sit amet faucibus diam tincidunt.',
      price: 129.9,
      category: Category.MAIN_DISH,
    },
  });
  const hamburguer = await prisma.menu.upsert({
    where: { name: 'Hamburguer' },
    update: {},
    create: {
      name: 'Hamburguer',
      description:
        'Nulla id enim eu enim feugiat volutpat. Suspendisse nisl libero, gravida id lectus at, dapibus aliquam felis. Sed eu dolor ante.',
      price: 55,
      category: Category.MAIN_DISH,
    },
  });
  const salada = await prisma.menu.upsert({
    where: { name: 'Salada' },
    update: {},
    create: {
      name: 'Salada',
      description:
        'Aliquam molestie magna in est mollis, et pellentesque dui porta. Phasellus ut odio id velit pretium bibendum eget vel tellus.',
      price: 109.99,
      category: Category.ENTRY,
    },
  });
  const suco = await prisma.menu.upsert({
    where: { name: 'Suco' },
    update: {},
    create: {
      name: 'Suco',
      description:
        'Ut dui justo, dictum eu dui nec, porttitor tempor leo. Nulla facilisi. Maecenas at vehicula tellus, in porttitor est. Nunc id neque nec est vulputate aliquet quis eget ante.',
      price: 5,
      category: Category.DRINK,
    },
  });
  const refrigerante = await prisma.menu.upsert({
    where: { name: 'Refrigerante' },
    update: {},
    create: {
      name: 'Refrigerante',
      description:
        'Ut mattis tristique turpis, lobortis aliquet diam congue eu.',
      price: 9,
      category: Category.DRINK,
    },
  });
  const carpaccio = await prisma.menu.upsert({
    where: { name: 'Carpaccio' },
    update: {},
    create: {
      name: 'Carpaccio',
      description:
        'Morbi gravida ultrices sem, at condimentum turpis eleifend interdum.',
      price: 159.99,
      category: Category.ENTRY,
    },
  });
  const pudim = await prisma.menu.upsert({
    where: { name: 'Pudim' },
    update: {},
    create: {
      name: 'Pudim',
      description:
        'Aliquam turpis tellus, scelerisque non felis eget, luctus dignissim ante.',
      price: 30.99,
      category: Category.DESSERT,
    },
  });
  const sorvete = await prisma.menu.upsert({
    where: { name: 'Sorvete' },
    update: {},
    create: {
      name: 'Sorvete',
      description: 'Vivamus semper egestas dui non efficitur.',
      price: 29.99,
      category: Category.DESSERT,
    },
  });
  console.log(
    risoto,
    lasanha,
    feijoada,
    hamburguer,
    salada,
    suco,
    refrigerante,
    carpaccio,
    pudim,
    sorvete,
  );
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
