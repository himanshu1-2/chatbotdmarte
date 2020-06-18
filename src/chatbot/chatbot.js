const dialogflow=require('dialogflow')
const config=require('../../config/keys')
const projectID=process.env.googleprojectId
const credentials={
client_email:process.env.client_email,
private_key:process.env.private_key

}
const sessionClient= new dialogflow.SessionsClient({projectID,credentials})
const sessionPath=sessionClient.sessionPath(projectID,process.env.dialogSessionId)
let textQuery=async function(text,parameters={})
{
let self=module.exports
    const request = {
        session: sessionPath,
        queryInput: {
          text: {
            // The query to send to the dialogflow agent
            text: text,
            // The language used by the client (en-US)
            languageCode: config.dialogLanguage,
          },
        },

      queryParams:{
        payload:{
          data:parameters
        }
      }

      };
     
      let responses = await sessionClient.detectIntent(request);
   responses =await self.handleAction(responses)
  return responses

}

handleAction=function(responses)
{return responses

}

module.exports={
  textQuery,
  handleAction

 }