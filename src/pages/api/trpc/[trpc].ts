import { createTRPCContext } from '@/server/trpc';
import { appRouter } from '@/server/trpc/root';
import { createNextApiHandler } from '@trpc/server/adapters/next';
import { type NextApiRequest, type NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // Create and call the tRPC handler
  return createNextApiHandler({
    router: appRouter,
    createContext: createTRPCContext,
  })(req, res);
};

export default handler;
