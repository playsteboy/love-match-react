import type { create } from 'motion/react-client';
import { SplitText } from './components';
import Form from './components/form';

export default function App() {
  return (
    <main className="flex flex-col justify-evenly w-full h-screen items-center bg-gray-100">
      <div className='flex flex-col justify-evenly w-1/2 h-5/6 items-center bg-white rounded-2xl'>

      <img src="public\heart.png" alt="" className='w-28'/>
      <SplitText
        text="Love Match"
        className="text-5xl font-semibold text-center"
        delay={100}
        duration={0.6}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
      />
      <Form></Form>
      </div>
    </main>
  );
}
