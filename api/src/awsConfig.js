import AWS from 'aws-sdk';

AWS.config.update({
    accessKeyId: process.env.ACCESSKEYID,
    secretAccessKey: process.env.SECRETACCESSKEYID,
    region:process.env.REGION
});

const textract = new AWS.Textract();

export default textract;
