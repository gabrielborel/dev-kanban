import type { GetServerSideProps, NextPage } from 'next';
import { signIn, getSession } from 'next-auth/react';
import { Icon } from '../components/AnimatedIcon';
import { motion } from 'framer-motion';
import { GithubLogo } from 'phosphor-react';

const Home: NextPage = () => {
  return (
    <div className='flex items-center justify-around h-screen bg-zinc-900'>
      <div className='w-full max-w-[400px] mx-auto font-semibold text-center'>
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.2 }}
          className='text-zinc-200 text-4xl mb-4 font-tri'
        >
          dev-kanban
        </motion.h1>

        <Icon />

        <motion.button
          onClick={() => signIn()}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 2 }}
          className='mt-8 text-gray-200 flex items-center gap-4 w-fit mx-auto text-lg border-2 p-4 rounded-3xl border-zinc-800 hover:border-zinc-600 transition-colors group'
        >
          <GithubLogo
            size={26}
            className='text-zinc-600 group-hover:text-zinc-200 transition-colors'
          />
          Log in with Github
        </motion.button>
      </div>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  if (session) {
    return {
      redirect: {
        destination: '/dashboard',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
