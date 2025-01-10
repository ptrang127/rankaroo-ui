import axios, { AxiosInstance } from 'axios'

interface Comparison {
  id?: number;
  firstSubjectId: number;
  secondSubjectId: number;
  firstSubjectVotes: number;
  secondSubjectVotes: number;
}

const apiClient: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' },
});

export const incrementSubjectVote = async (firstSubjectId: number, secondSubjectId: number, votedSubjectId: number) => {
  try {
    const response = await apiClient.post<Comparison>(`/comparisons/${firstSubjectId}/${secondSubjectId}/${votedSubjectId}`);
    return {
      response
    }
  } catch (err) {
    throw new Error("Error incrementing subject vote.")
  }
};
  