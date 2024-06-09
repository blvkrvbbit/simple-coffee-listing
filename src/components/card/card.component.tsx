/// <reference types="vite-plugin-svgr/client" />
import { Collection } from '../../types/collection.type';
import StarFilled from '../../assets/images/Star_fill.svg?react';
import Star from '../../assets/images/Star.svg?react';

type Props = {
  collection: Collection;
};
const Card = ({ collection }: Props) => {
  return (
    <div className=' relative p-4 ' key={collection.id}>
      <img
        src={collection.image}
        alt={collection.name}
        className='w-full rounded-[0.5rem]'
      />
      {collection.popular && (
        <div className='bg-yellow text-jet-black text-[10px] text-center absolute top-7 px-3 font-bold py-1 left-6 rounded-full'>
          Popular
        </div>
      )}
      <div className='flex justify-between mt-4 items-center'>
        <h2 className='text-white font-bold'>{collection.name}</h2>
        <div className='bg-torqoise text-[0.75rem] text-jet-black p-1 px-2 font-bold rounded'>
          {collection.price}
        </div>
      </div>
      <div className='flex space-x-1 mt-4 items-center'>
        <div>{collection.rating ? <StarFilled /> : <Star />}</div>
        <div className='text-white font-semibold'>{collection.rating}</div>
        <div className='flex justify-between w-full text-gray font-semibold'>
          <div>
            {collection.rating ? (
              <>({collection.votes} votes)</>
            ) : (
              <>No ratings</>
            )}
          </div>
          <div className='text-red'>
            {!collection.available && <>Sold out</>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
