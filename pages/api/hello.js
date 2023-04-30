
// req = HTTP incoming message, res = HTTP server response
// They can be deployed as Serverless Functions (also known as Lambdas).


export default function handler(req, res) {
    res.status(200).json({ text: 'Hello' });
  }