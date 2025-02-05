import { useState } from 'react';
import Editor from '@monaco-editor/react';
import axios from 'axios';

export default function CodeEditor() {
  const [code, setCode] = useState('// Write your code here');
  const [language, setLanguage] = useState('javascript');
  const [output, setOutput] = useState('');
  const [isEditorReady, setIsEditorReady] = useState(false);

  const handleEditorDidMount = () => {
    setIsEditorReady(true);
  };

  const handleEditorChange = (value: string | undefined) => {
    if (value !== undefined) {
      setCode(value);
    }
  };

  const runCode = async () => {
    try {
      const response = await axios.post('http://localhost:4000/api/execute', {
        code,
        language,
      });
      setOutput(response.data.output);
    } catch (error) {
      setOutput('Error executing code');
    }
  };

  return (
    <div className="w-full h-[400px] relative">
      <Editor
        height="100%"
        width="100%"
        defaultLanguage={language}
        defaultValue={code}
        onChange={handleEditorChange}
        onMount={handleEditorDidMount}
        options={{
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
          automaticLayout: true,
          fontSize: 14,
          lineNumbers: 'on',
          roundedSelection: false,
          scrollbar: {
            vertical: 'visible',
            horizontal: 'visible',
          },
          lineHeight: 19,
          readOnly: false,
          theme: 'vs-dark',
        }}
        loading={<div>Loading editor...</div>}
      />
    </div>
  );
}
