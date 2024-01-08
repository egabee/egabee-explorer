import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";

export function useSearch(key: string) {
  let url = `/api/0/search/${key}/`;
  if (!key) {
    url = "";
  }

  return useSWR(url, fetcher);
}
