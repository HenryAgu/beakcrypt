import { createAuthClient } from "better-auth/react";
import { sentinelClient } from "@better-auth/infra/client";
import { convexClient } from "@convex-dev/better-auth/client/plugins";

export const authClient = createAuthClient({
  plugins: [convexClient(), sentinelClient()],
});

export const { signIn, signOut, useSession } = authClient;
export type Session = typeof authClient.$Infer.Session;

