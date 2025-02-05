'use client';

import CodeEditor from '@/components/code-editor';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default function Home() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <CodeEditor />
    </QueryClientProvider>
  );
}
