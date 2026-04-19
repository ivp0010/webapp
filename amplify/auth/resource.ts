import { defineAuth } from '@aws-amplify/backend';


import type { PostConfirmationTriggerHandler } from "aws-lambda"; 
export const handler: PostConfirmationTriggerHandler = async (event) => { 
  return event;
};

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
  },
});
