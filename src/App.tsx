import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header/header.component';

import { Collection } from './types/collection.type';
import Card from './components/card/card.component';

function App() {
  const [collection, setCollection] = useState<Collection[] | []>([]);
  const [filteredCollection, setFilteredCollection] = useState<
    Collection[] | []
  >(collection);

  const [filterAvailable, setFilterAvailable] = useState<boolean>(false);
  useEffect(() => {
    const fetchCollection = async () => {
      const resp = await fetch(
        'https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json'
      );
      const collection = await resp.json();
      setCollection(collection);
      setFilteredCollection(collection);
    };
    fetchCollection();
  }, []);

  useEffect(() => {
    if (filterAvailable) {
      const newFilteredCollection = collection?.filter((c: Collection) => {
        if (c.available) {
          return c;
        }
      });
      setFilteredCollection(newFilteredCollection!);
    } else {
      setFilteredCollection(collection);
    }
  }, [filterAvailable, collection, setFilteredCollection]);

  const handleFilter = () => {
    setFilterAvailable(!filterAvailable);
  };
  return (
    <div className='relative h-[150rem] md:h-[85rem]'>
      <div className='bg'></div>
      <div className='container pb-12'>
        <div className='bg-black pb-12 p-5 max-w-[400px] md:max-w-[650px] lg:max-w-[1000px] right-0 absolute top-[8rem]   left-0  mb-8 rounded-[0.5rem] mx-auto'>
          <Header
            filterAvailable={filterAvailable}
            handleFilter={handleFilter}
          />
          <div className='collection gap-4 grid md:grid-cols-2 lg:grid-cols-3 mt-4'>
            {filteredCollection?.map((c) => (
              <Card collection={c} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
