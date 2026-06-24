import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  Page: a
    .model({
      title: a.string().required(),
      description: a.string().required(),
      url: a.string().required(),
      pageType: a.string().required(),
      sortOrder: a.integer() 
    })
}).authorization((allow) => [
    allow.publicApiKey().to(['read']), 
]);

export type Schema = ClientSchema<typeof schema>;
export const data = defineData({ schema });``