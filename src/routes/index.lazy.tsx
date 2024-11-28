import { createLazyFileRoute } from '@tanstack/react-router'
import Card from '../components/Card'
import Category from '../components/Category'
import axios, { AxiosInstance } from 'axios'
import { useEffect, useState } from 'react';

export const Route = createLazyFileRoute('/')({
  component: Index,
})

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

const apiClient: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' },
});

function Index() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [subjects, setSubjects] = useState<Subject[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const categoriesResponse = await apiClient.get<Category[]>('/categories');
        console.log(categoriesResponse.data); // Trigger the Axios call
        setCategories(categoriesResponse.data);

        const subjectsResponse = await apiClient.get<Subject[]>('/subjects');
        console.log(subjectsResponse.data); // Trigger the Axios call
        setSubjects(subjectsResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        return error;
      }
    };

    getData(); // Trigger the Axios call when the component mounts
  }, []);

  return (
    <div className="">
      {categories.map((category) => (
        <Category key={category.id} text={category.name} />
      ))}
      <div className="flex justify-evenly items-center flex-col md:flex-row my-10 md:my-28 gap-4 md:gap-0">
        <div className="w-4/5 md:w-1/3">
          {subjects.find((subject) => subject.id === 1) && (
            <Card text={subjects.find((subject) => subject.id === 1)?.name || ''} />
          )}
        </div>
        <div className="w-4/5 md:w-1/3 text-center">
          <span className="text-6xl">
            vs
          </span>
        </div>
        <div className="w-4/5 md:w-1/3">
          {subjects.find((subject) => subject.id === 2) && (
            <Card text={subjects.find((subject) => subject.id === 2)?.name || ''} />
          )}
        </div>
      </div>
    </div>
  )
}
