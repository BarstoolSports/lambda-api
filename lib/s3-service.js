'use strict';

/**
 * Lightweight web framework for your serverless applications
 * @author Jeremy Daly <jeremy@jeremydaly.com>
 * @license MIT
 */

// Require AWS SDK
const { S3Client, GetObjectCommand } = require('@aws-sdk/client-s3'); // AWS SDK
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner'); // AWS SDK

const client = new S3Client();

exports.signedGetObjectUrl = (input) => {
  const command = new GetObjectCommand(input);
  return getSignedUrl(client, command, { expiresIn: 900 });
};
