import Image from 'next/image';
import React from 'react';
import { SearchItemType, SearchResultsType } from '../types/opts/search-results';
import PagenationButtons from './PagenationButtons';

const ImageResults = ({results}: SearchResultsType) => {
  return (
    <div className="mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg: grid-cols-3 xl:grid-cols-4 px-3 space-x-4">
        {results.items?.map((result: SearchItemType) => (
          <div className="mb-8" key={result.link}>
            <div className="group">
              <a className='relative' href={result.image.contextLink}>
                <Image
                  className='group-hover:shadow-xl w-full h-60 object-contain'
                  width="100%"
                  height="100%"
                  src={result.link}
                  alt={result.title}
                />
              </a>
              <a className="group-hover:underline" href={result.image.contextLink}>
                <h2 className="truncate text-xl">
                  {result.title}
                </h2>
              </a>
              <a className="group-hover:underline" href={result.image.contextLink}>
                <p className="text-gray-600">
                  {result.displayLink}
                </p>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="ml-6">
        <PagenationButtons/>
      </div>
    </div>
  );
};

export default ImageResults;