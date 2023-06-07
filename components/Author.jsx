
import React from 'react';
import Image from 'next/image';

import { grpahCMSImageLoader } from '../util';

const Author = ({ author }) => (
  <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20">
    {author && author.photo && (
    <div className="flex justify-center absolute left-0 right-0 -top-14">
      <img
        unoptimized
        loader={grpahCMSImageLoader}
        alt={author.name}
        height="100px"
        width="100px"
        className="align-middle rounded-full"
        src={author.photo.url}
      />
    </div>)}
    {author && author.photo && (
    <h3 className="text-white mt-4 mb-4 text-xl font-bold">{author.name}</h3>)}
    {author && author.photo && (
    <p className="text-white text-ls">{author.bio}</p>)}
  </div>
);

export default Author;