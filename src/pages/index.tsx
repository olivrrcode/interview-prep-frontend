// src/pages/index.tsx
import CodeEditor from '../components/CodeEditor';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-4">Code Editor Playground</h1>
      <CodeEditor />
    </main>
  );
}
