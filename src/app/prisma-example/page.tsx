import { prisma } from 'libs/prisma';

const PrismaExample = async () => {
  const chefs = await prisma.chefs.findMany();

  return (
    <div>
      {chefs.map((chef) => (
        <div key={chef.id}>{chef.name}</div>
      ))}
    </div>
  );
};

export default PrismaExample;
