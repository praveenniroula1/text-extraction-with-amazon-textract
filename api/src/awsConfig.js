import AWS from "aws-sdk";
import dotenv from "dotenv";

dotenv.config();


AWS.config.update({
  accessKeyId: process.env.ACCESSKEYID,
  secretAccessKey: process.env.SECRETACCESSKEYID,
  region: "ap-southeast-2",
});



const textract = new AWS.Textract();

export default textract;
