import { format, parseISO } from 'date-fns';
import Link from 'next/link';
import { Post } from 'contentlayer/generated';

export default function PostCard(post: Post) {
  return (
    <div style={{ marginBottom: '1.5em' }} className=''>
      <h2 className=''>
        <Link href={post.url}>
          <a className=''>{post.title}</a>
        </Link>
      </h2>
      <time dateTime={post.date} className=''>
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
      <div className='flex gap-2'>
        <span>{post.readingTime.text}</span>
        <span>{post.wordCount} words</span>
      </div>
    </div>
  );
}
