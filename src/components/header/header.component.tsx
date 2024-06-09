// import Spiral from '../../assets/images/vector.svg?react';

type Props = {
  filterAvailable: boolean;
  handleFilter: () => void;
};

const Header = ({ filterAvailable, handleFilter }: Props) => {
  return (
    <header className='header pt-10 relative'>
      {/* <div className='absolute left-[11.5rem] top-[0.3rem]'>
        <Spiral className='z-0' />
      </div> */}

      <div className='z-4 pt-4 relative'>
        <h1 className='text-center text-white text-[2rem] font-bold'>
          Our Collection
        </h1>
        <p className='max-w-[28rem] mx-auto text-gray text-center text-[1rem] font-bold'>
          Introducing our Coffee Collection, a selection of unique coffees from
          different roast types and origins, expertly roasted in small batches
          and shipped fresh weekly.
        </p>
        <div className='space-x-4 flex justify-center mt-4'>
          <button
            onClick={handleFilter}
            className={`${
              !filterAvailable ? `bg-gray text-white ` : 'text-white'
            } p-2 px-3 rounded-[0.55rem]`}
          >
            All Products
          </button>
          <button
            onClick={handleFilter}
            className={`${
              filterAvailable ? `bg-gray text-white ` : 'text-white'
            } p-2 px-3 rounded-[0.55rem]`}
          >
            Available Now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
