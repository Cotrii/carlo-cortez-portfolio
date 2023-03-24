import {BsFillMoonStarsFill} from 'react-icons/bs';
import Link from 'next/link';
import { useState } from 'react';
import code from '../public/code.png';
import Image from 'next/image';
import coding from '../public/coding.jpg';
import reading from '../public/reading.jpg';
import games from '../public/games.jpg';

export default function About() {

    const [darkMode, setDarkMode] = useState(false);

    return (
        <>
          
          <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
          <nav className="py-10 mb-12 flex justify-between ">
            <h1 className="text-xl font-burtons dark:text-white">My Portfolio</h1>
            <ul className="flex items-center">
              <li>
                <Link href="/about" className="bg-gradient-to-r from-sky-400 to-blue-500 text-white px-4 py-2 rounded-md ml-8"> About Me </Link>

                <Link className="bg-gradient-to-r from-sky-400 to-blue-500 text-white px-4 py-2 rounded-md ml-8" href="/">Resume</Link>
              </li>
            </ul>
          </nav>

          <div className='text-center p-10 dark:text-white'>
                <h2 className="text-5xl py-2 text-blue-500 font-medium md:text-6xl"> 
                    About Myself
                </h2>
            </div>

            <div className=' shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
              Hi! I am Carlo Cortez, a student who likes to dabble in dev and design projects. 
                A mixture of being conventional and disquisitive has led me to become an individual 
                that is fond of solving problems in an orderly manner with a set of rules and guides to 
                follow.

                <div className='my-5'> 
                For extracurricular activities, I am presently holding a position in a student organization.
                When I am not on my desk/computer, I usually spend my time reading books that pique my 
                interest, building plastic models, and playing different instruments.
                  
                </div>
            </div>


            <div className="lg:flex gap-10">
              <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
                <Image className='mx-auto' src={coding} width="200" height="200"></Image>
              </div>
              <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
                <Image className='mx-auto' src={games} width="200" height="200"></Image>
              </div>
              <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
                <Image className='mx-auto' src={reading} width="200" height="200"></Image>
              </div>
            </div>

          </main>
          


        </>
    )
}