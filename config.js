try {
  require('dotenv').config();
} catch (e) { 
  console.error('error loading dotenv', e);
}

module.exports = {
  twilio: {
    accountSid: 'AC2cc1717ec3e50507ec8267b315caf5f6',
    authToken: '',
    apiKey: 'SKcce7f18519f783cc741a5b0c3eceeb21',
    apiSecret: '',
    chatServiceSid: 'IS58750fba86ae4b898a4ccdc2fa57aea5'
  },
  port: process.env.PORT || 3001,
  ngrokSubdomain: 'ajtack'
}
