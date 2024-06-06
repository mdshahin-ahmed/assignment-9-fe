"use server";

import { cookies } from "next/headers";

export const removeFromCookies = (key: string) => {
  cookies().delete(key);
};
