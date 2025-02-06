import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

interface ExecuteCodeResponse {
  output: string;
  error?: string;
}

interface ExecuteCodeParams {
  code: string;
  language: string;
}

export const runCode = async ({
  code,
  language,
}: ExecuteCodeParams): Promise<ExecuteCodeResponse> => {
  try {
    const response = await axios.post<ExecuteCodeResponse>(
      `${API_BASE_URL}/execute`,
      {
        code,
        language,
      },
    );

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || 'Failed to execute code',
      );
    }
    throw error;
  }
};
