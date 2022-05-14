const mime = require("mime");
const AWS = require("aws-sdk");

const genPresigned = async (fileExtension,userId,isPrivate) => {
    const signedUrlExpiration = 60 * 60 * 2;
    const myKey = `images/${userId}_${Date.now()}.${fileExtension}`;
    const s3 = new AWS.S3({
      accessKeyId: process.env.S3AWS_ACCESS_KEY,
      secretAccessKey: process.env.S3AWS_SECRET_ACCESS_KEY,
      signatureVersion: "v4",
      endpoint: process.env.S3AWS_ENDPOINT,
      region: process.env.S3AWS_REGION,
    });
    const contentType1 = mime.getType(fileExtension);

    const putObjectParams = {
      Bucket: "nvmh0103-bucket",
      Key: myKey,
      ContentType: contentType1,
      ACL: isPrivate ? "private" : "public-read",
      Expires: signedUrlExpiration,
    };
    const uploadingUrl = new Promise((resolve, reject) => {
      s3.getSignedUrl("putObject", putObjectParams, (e, url) => {
        if (e) {
          return reject(e);
        }
        return resolve(url);
      });
    });

    return {
      url: await uploadingUrl,
      key: myKey,
      contentType: contentType1,
      getUrl: `https://nvmh0103-bucket.s3.us-east-1.amazonaws.com/${myKey}`,
    };
}
module.exports = genPresigned;