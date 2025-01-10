import { createLazyFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react';
import Card from '../components/Card'
import CategoryCard from '../components/CategoryCard'
import { fetchInitialData } from '../hooks/fetchInitialData';
import { fetchRandomSubjectsByCategory } from '../hooks/fetchRandomSubjectsByCategory';
import { incrementSubjectVote } from '../hooks/incrementSubjectVote';

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
  losses: number
}

function Index() {
  const [currentCategory, setCurrentCategory] = useState<Category | null>(null);
  const [currentSubject1, setCurrentSubject1] = useState<Subject | null>(null);
  const [currentSubject2, setCurrentSubject2] = useState<Subject | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { 
          fetchedCategory, 
          fetchedSubject1, 
          fetchedSubject2, 
        } = await fetchInitialData(); 
        setCurrentCategory(fetchedCategory);
        setCurrentSubject1(fetchedSubject1);
        setCurrentSubject2(fetchedSubject2);
        setIsLoading(false);
      } catch (err) {
        setError(String(err)); 
        setIsLoading(false); 
      }
    };

    fetchData();
  }, []); 

  const handleSubjectCardClick = async (votedSubject: Subject | null) => {
    console.log("Subject Card Click");
    if (!votedSubject || !currentSubject1 || !currentSubject2) return;
    else if (currentSubject1?.id !== undefined && currentSubject2?.id !== undefined) {
      await incrementSubjectVote(currentSubject1.id, currentSubject2.id, votedSubject.id);
      console.log(`Incremented ${votedSubject.name} by 1`)
    }

    const {
      fetchedSubject1,
      fetchedSubject2,
    } = await fetchRandomSubjectsByCategory(currentCategory?.id || -1);
    setCurrentSubject1(fetchedSubject1);
    setCurrentSubject2(fetchedSubject2);
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
              text={currentSubject1?.name || "default subject"}
              onClick={() => handleSubjectCardClick(currentSubject1)}
            />
          </div>
          <div className="w-4/5 md:w-1/3 text-center">
            <span className="text-6xl">
              vs
            </span>
          </div>
          <div className="w-4/5 md:w-1/3">
            <Card 
              text={currentSubject2?.name || "default subject"}
              onClick={() => handleSubjectCardClick(currentSubject2)}
            />
          </div>
        </div>
        </div>
      }
    </div>
  )
}
