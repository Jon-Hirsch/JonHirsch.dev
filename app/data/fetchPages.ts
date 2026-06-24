import { Schema } from "@/amplify/data/resource";
import { generateClient } from "aws-amplify/data";

const client = generateClient<Schema>();

export const fetchPages = async (pageType?: string) => {
  const filter = pageType ? { filter: { pageType: { eq: pageType } } } : {};

  try {
    const { data: items, errors } = await client.models.Page.list({
      selectionSet: ["id", "title", "description", "pageType", "url"],
      ...filter,
    });

    if (errors) {
      console.error("Errors fetching pages:", errors);
      return [];
    }

    return items;
  } catch (err) {
    console.error("Exception fetching pages:", err);
    return [];
  }
};
