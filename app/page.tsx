import { redirect } from "next/navigation";
import { DEFAULT_LOCALE } from "@/lib/constants";

export default function Root() {
  redirect(`/${DEFAULT_LOCALE}`);
}
