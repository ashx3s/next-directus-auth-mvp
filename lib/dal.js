import "server-only";
import { cookies } from "next/headers";
import client from "@/lib/directus";
import { readMe } from "@directus/sdk";
import { redirect } from "next/navigation";

export async function getUserData() {
  try {
    // Fetch the currently authenticated user's details
    const token = (await cookies()).get("directus_session_token")?.value;

    if (!token) {
      redirect("/login"); // Redirect if unauthorized
    }

    client.setToken(token);
    const user = await client.request(readMe());

    return { success: true, user };
  } catch (error) {
    console.log(error);
    redirect("/login"); // Redirect if unauthorized
  }
}
