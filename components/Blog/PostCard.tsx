import Link from 'next/link';
import { motion } from 'framer-motion';
import { format, parseISO } from 'date-fns';
import { Post } from 'contentlayer/generated';

export default function PostCard(post: Post) {
  return (
    <Link href={post.url}>
      <a>
        <motion.article
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.9 }}
          className='mb-4 rounded-md'
        >
          <h2 className='text-xl sm:text-2xl font-semibold'>{post.title}</h2>
          <p>{post.description}</p>
          <div className='flex gap-4  mt-2 items-center text-gray-600 font-medium'>
            <time dateTime={post.date} className=''>
              {format(parseISO(post.date), 'LLLL d, yyyy')}
            </time>

            <span>{post.readingTime.text}</span>
          </div>
        </motion.article>
      </a>
    </Link>
  );
}
