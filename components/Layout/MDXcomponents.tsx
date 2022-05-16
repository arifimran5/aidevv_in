import Image from 'next/image';

function RoundedImage(props) {
  return (
    <figure className='mt-6 mb-4'>
      <Image alt={props.alt} className='rounded-lg' {...props} />
    </figure>
  );
}

const MDXcompoenents = {
  h1: (props) => <h1 className='font-semibold text-3xl mt-5 mb-2' {...props} />,
  h2: (props) => <h2 className='font-medium text-2xl mt-4 mb-1' {...props} />,
  h3: (props) => <h3 className='font-medium text-lg mt-3 mb-1' {...props} />,
  h4: (props) => <h4 className='' {...props} />,
  h5: (props) => <h5 className='' {...props} />,
  h6: (props) => <h6 className='' {...props} />,
  code: (props) => (
    <code className='bg-gray-200 p-[2px] text-sm rounded-md' {...props} />
  ),
  Image: RoundedImage,
  ul: (props) => <ul className='pl-8' {...props} />,
  ol: (props) => <ol className='pl-8' {...props} />,
  a: (props) => <a className='text-blue-500 hover:text-blue-600' {...props} />,
};

export default MDXcompoenents;
