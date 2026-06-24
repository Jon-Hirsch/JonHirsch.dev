import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  Page: a
    .model({
      id: a.id().required(),
      title: a.string().required(),
      description: a.string().required(),
      url: a.string().required(),
      pageType: a.string().required()
    })
    .identifier(['id', 'pageType'])
    .secondaryIndexes((index) => [index('id')])
})
.authorization((allow) => [
    allow.publicApiKey().to(['read']), 
]);

export type Schema = ClientSchema<typeof schema>;
export const data = defineData({ schema });``