const natural = require('natural');

// Código para analizar sentimientos con `natural`
const analyzer = new natural.SentimentAnalyzer('English', natural.PorterStemmer, 'afinn');
const analysis = analyzer
