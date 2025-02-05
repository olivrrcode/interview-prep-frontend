// src/utils/api.ts
export const runCode = async ({
  code,
  language,
}: {
  code: string;
  language: string;
}) => {
  const response = await fetch('http://localhost:4000/api/execute', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ code, language }),
  });
  if (!response.ok) {
    throw new Error('Failed to execute code');
  }
  return response.json();
};
