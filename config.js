try {
  require('dotenv').config();
} catch (e) { 
  console.error('error loading dotenv', e);
}

module.exports = {
  twilio: {
    accountSid: 'AC2cc1717ec3e50507ec8267b315caf5f6',
    authToken: '0ea0c185d74ae42d15b05828c2676be4',
    apiKey: 'SKcce7f18519f783cc741a5b0c3eceeb21',
    apiSecret: 'YenZIXDOcmDwZNvX9vZExL0po3uJY2uL',
    chatServiceSid: 'IS58750fba86ae4b898a4ccdc2fa57aea5'
  },
  port: process.env.PORT || 3001,
  ngrokSubdomain: 'ajtack'
}
