'use client';

import { useState } from 'react';
import Editor from '@monaco-editor/react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from '@/components/ui/select';
import { runCode } from '@/utils/api';
import { toast } from 'sonner';

const languages = [
  { label: 'JavaScript', value: 'javascript' },
  { label: 'Python', value: 'python' },
];

export default function CodeEditor() {
  const [code, setCode] = useState('// Write your code here');
  const [language, setLanguage] = useState('javascript');
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  const handleRun = async () => {
    if (!code.trim()) {
      toast.error('Please enter some code');
      return;
    }

    setIsRunning(true);
    try {
      const result = await runCode({ code, language });
      setOutput(result.error ? `Error: ${result.error}` : result.output);
      if (result.output) {
        toast.success('Code executed successfully');
      }
    } catch (error: any) {
      setOutput(`Error: ${error.message}`);
      toast.error(error.message || 'Failed to execute code');
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center gap-4">
        <Select value={language} onValueChange={setLanguage}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Select language" />
          </SelectTrigger>
          <SelectContent>
            {languages.map((lang) => (
              <SelectItem key={lang.value} value={lang.value}>
                {lang.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button
          onClick={handleRun}
          disabled={isRunning}
          className="min-w-[100px]"
        >
          {isRunning ? 'Running...' : 'Run Code'}
        </Button>
      </div>

      <Editor
        height="400px"
        language={language}
        value={code}
        onChange={(value) => setCode(value || '')}
        theme="vs-dark"
        options={{
          fontSize: 14,
          minimap: { enabled: false },
          lineNumbers: 'on',
          rulers: [80],
          wordWrap: 'on',
        }}
      />

      <div className="bg-gray-900 text-white p-4 rounded-md min-h-[100px]">
        <strong>Output:</strong>
        <pre className="mt-2 whitespace-pre-wrap font-mono text-sm">
          {output || 'No output yet'}
        </pre>
      </div>
    </div>
  );
}
