import axios, { AxiosInstance } from 'axios';

const apiClient: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' },
});

interface Category {
  id: number;
  name: string;
}

interface Subject {
  id: number;
  category_id: number;
  name: string;
  wins: number;
  losses: number;
}

export const fetchInitialData = async () => {
  try {
    const categoryResponse = await apiClient.get<Category>('/categories/random/category');
    const randomSubjectsResponse = await apiClient.get<Subject[]>(`/subjects/random/${categoryResponse.data.id}`);
    
    return {
      fetchedCategory: categoryResponse.data,
      fetchedSubjectName1: randomSubjectsResponse.data[0].name,
      fetchedSubjectName2: randomSubjectsResponse.data[1].name,
    };
  } catch (err) {
    throw new Error("Error fetching data.");
  }
};