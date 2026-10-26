import { HomePage } from "@/components/homepage";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata = pageMetadata(
  "A private luxury stay in Lucknow",
  "Settle into a private, thoughtfully furnished ground-floor residence in Patrakar Puram, Gomti Nagar. Two bedrooms, room for up to six and warm Lucknow hospitality.",
  "/",
);

export default function Page() {
  return <HomePage />;
}
