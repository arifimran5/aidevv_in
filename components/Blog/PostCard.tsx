import { format, parseISO } from 'date-fns';
import Link from 'next/link';
import { Post } from 'contentlayer/generated';

export default function PostCard(post: Post) {
  return (
    <article className='mb-4 hover:p-4 hover:shadow-md rounded-md transition-all duration-150 ease-in-out hover:border-[1px] hover:border-gray-100'>
      <h2 className='text-xl sm:text-2xl font-semibold hover:text-gray-500 transition-colors duration-100 ease-in-out'>
        <Link href={post.url}>
          <a className=''>{post.title}</a>
        </Link>
      </h2>
      <p>{post.description}</p>
      <div className='flex gap-4  mt-2 items-center text-gray-600 font-medium'>
        <time dateTime={post.date} className=''>
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>

        <span>{post.readingTime.text}</span>
      </div>
    </article>
  );
}
