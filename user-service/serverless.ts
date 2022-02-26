import type { AWS } from '@serverless/typescript';

const serverlessConfiguration: AWS = {
  service: 'user-service',
  frameworkVersion: '3',

  provider: {
    name: 'aws',
    runtime: 'nodejs14.x'
  },

  functions: {
    hello: {
      handler: 'handler.hello',
      events: [
        {
          httpApi: {
            method: 'get',
            path: '/'
          }
        }
      ]
    }
  },

  plugins: [
    'serverless-plugin-typescript',
    'serverless-offline'
  ]
}

module.exports = serverlessConfiguration;