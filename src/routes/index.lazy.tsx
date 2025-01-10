import { createLazyFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react';
import Card from '../components/Card'
import CategoryCard from '../components/CategoryCard'
import { fetchInitialData } from '../hooks/fetchInitialData';
import { fetchRandomSubjectsByCategory } from '../hooks/fetchRandomSubjectsByCategory';

export const Route = createLazyFileRoute('/')({
  component: Index,
})

interface Category {
  id: number;
  name: string;
}

function Index() {
  const [currentCategory, setCurrentCategory] = useState<Category | null>(null);
  const [currentSubjectName1, setCurrentSubjectName1] = useState<string | null>(null);
  const [currentSubjectName2, setCurrentSubjectName2] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { 
          fetchedCategory, 
          fetchedSubjectName1, 
          fetchedSubjectName2, 
        } = await fetchInitialData(); 
        setCurrentCategory(fetchedCategory);
        setCurrentSubjectName1(fetchedSubjectName1);
        setCurrentSubjectName2(fetchedSubjectName2);
        setIsLoading(false);
      } catch (err) {
        setError(String(err)); 
        setIsLoading(false); 
      }
    };

    fetchData();
  }, []); 

  const handleSubjectCardClick = async () => {
    console.log("Subject Card Click");
    const {
      fetchedSubjectName1,
      fetchedSubjectName2,
    } = await fetchRandomSubjectsByCategory(currentCategory?.id || -1);
    setCurrentSubjectName1(fetchedSubjectName1);
    setCurrentSubjectName2(fetchedSubjectName2);
  }

  return (
    <div className="">
      {isLoading ?
        <p>Loading...</p> :
        <div>
        <CategoryCard 
          key={currentCategory?.id} 
          text={currentCategory?.name || ''} 
        />
        <div className="flex justify-evenly items-center flex-col md:flex-row my-10 md:my-28 gap-4 md:gap-0">
          <div className="w-4/5 md:w-1/3">
            <Card 
              text={currentSubjectName1 || "default subject"}
              onClick={handleSubjectCardClick}
            />
          </div>
          <div className="w-4/5 md:w-1/3 text-center">
            <span className="text-6xl">
              vs
            </span>
          </div>
          <div className="w-4/5 md:w-1/3">
            <Card 
              text={currentSubjectName2 || "default subject"}
              onClick={handleSubjectCardClick}
            />
          </div>
        </div>
        </div>
      }
    </div>
  )
}
