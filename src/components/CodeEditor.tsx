// src/components/CodeEditor.tsx
'use client';

import { useState } from 'react';
import Editor from '@monaco-editor/react';
import { Button } from '@/components/ui/button';
import { Select, SelectItem } from '@/components/ui/select';
import { runCode } from '../utils/api';

const languages = [
  { label: 'JavaScript', value: 'javascript' },
  { label: 'Python', value: 'python' },
  { label: 'C++', value: 'cpp' },
];

export default function CodeEditor() {
  const [code, setCode] = useState('// Write your code here');
  const [language, setLanguage] = useState('javascript');
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  const handleRun = async () => {
    setIsRunning(true);
    try {
      const response = await runCode({ code, language });
      setOutput(response.output);
    } catch (error: any) {
      setOutput(`Error: ${error.message}`);
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center gap-4">
        <Select value={language} onValueChange={setLanguage}>
          {languages.map((lang) => (
            <SelectItem key={lang.value} value={lang.value}>
              {lang.label}
            </SelectItem>
          ))}
        </Select>
        <Button onClick={handleRun} disabled={isRunning}>
          {isRunning ? 'Running...' : 'Run Code'}
        </Button>
      </div>

      <Editor
        height="400px"
        language={language}
        value={code}
        onChange={(value) => setCode(value || '')}
        theme="vs-dark"
        options={{ fontSize: 14, minimap: { enabled: false } }}
      />

      <div className="bg-gray-900 text-white p-4 rounded-md">
        <strong>Output:</strong>
        <pre>{output}</pre>
      </div>
    </div>
  );
}
