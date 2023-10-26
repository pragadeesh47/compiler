// proxy.js (serverless function)
const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  try {
    const response = await fetch('http://ec2-13-232-134-251.ap-south-1.compute.amazonaws.com:8080/puk');
    const data = await response.text();

    return {
      statusCode: 200,
      body: data,
      headers: {
        'Content-Type': 'application/json',
      },
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Proxy error' }),
    };
  }
};
