exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { query, cities } = JSON.parse(event.body);

  const cityList = cities.map(c =>
    `${c.name} (${c.vibe}, $${c.cost}/mo, WiFi ${c.wifi}/10): ${c.desc}`
  ).join('\n');

  const prompt = `You are a digital nomad expert helping a UK-based nomad find their next city.

The user says: "${query}"

Available cities:
${cityList}

Pick the single best match. Give a warm, enthusiastic 2-3 sentence recommendation explaining exactly why this city fits what they described. Start with the city name.`;

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 200
    })
  });

  const data = await response.json();
  const result = data.choices?.[0]?.message?.content || 'Could not generate a recommendation.';

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ result })
  };
};
