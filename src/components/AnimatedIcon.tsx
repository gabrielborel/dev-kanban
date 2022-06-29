import { motion } from 'framer-motion';

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: 'rgb(30 41 59)',
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: '#0F172A',
  },
};

export const Icon = () => (
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8 }}
    className='w-[150px] h-[150px] mx-auto flex place-content-center overflow-hidden bg-slate-700 rounded-3xl'
  >
    <motion.svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 100 100'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='w-[70%] overflow-visible stroke-slate-900 stroke-2'
    >
      <motion.path
        d='M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z'
        variants={icon}
        initial='hidden'
        animate='visible'
        transition={{
          default: { duration: 2, ease: 'easeInOut' },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] },
          delay: 0.3,
        }}
      />
    </motion.svg>
  </motion.div>
);
