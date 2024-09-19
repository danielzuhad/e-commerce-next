import { procedure, router } from "./trpc";

export const appRouter = router({
  getData: procedure.query(() => {
    return { data: "hello" };
  }),
});

export type AppRouter = typeof appRouter;
