import axios, { AxiosInstance } from 'axios'

interface Subject {
    id: number;
    category_id: number;
    name: string;
    wins: number;
    losses: number;
  }

const apiClient: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' },
});

export const fetchRandomSubjectsByCategory = async (categoryId: number) => {
  try {
    const randomSubjectsResponse = await apiClient.get<Subject[]>(`/subjects/random/${categoryId}`);
    return {
      fetchedSubject1: randomSubjectsResponse.data[0],
      fetchedSubject2: randomSubjectsResponse.data[1],
    }
  } catch (err) {
    throw new Error("Error fetching new random subjects.")
  }
};
  