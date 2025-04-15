import Image from 'next/image';
import FadeUpAnimation from '@/components/FadeUp';

export const metadata = {
   title: 'Team | Offgrid Labs',
   description: 'Join us in our mission to Enable Borderless Access with Technology.',
   keywords: 'Offgrid Labs, Products, Technology, Borderless Access',
   openGraph: {
      title: 'Team | Offgrid Labs',
      description: 'Join us in our mission to Enable Borderless Access with Technology.',
   },
}

const Team = () => {
   const partnersAndAdvisors = [
      { name: 'Sandy Peng', image: '/profile/sandy.jpg', position: 'Co-founder - Scroll' },
      { name: 'Emmanuel Odianosen', image: '/profile/emmanuel.jpg', position: 'Developer Relations - Sonieum' },
      { name: 'Michael Lawal', image: '/profile/michael.jpg', position: 'Strategic Advisor - Aya HQ' },
      { name: 'Yele Bademosi', image: '/profile/yele.jpg', position: 'Co-founder - Onboard' },
      { name: 'Ike Orizu', image: '/profile/ike.jpg', position: 'Advisor - CEO, Jamit' },
   ];

   const teamRepresentatives = [
      { name: 'Essiel Justice', image: '/profile/justice.jpg', position: 'Founder' },
      { name: 'Emmanuel Bannerman', image: '/profile/bannerman.jpg', position: 'CFO', },
      { name: 'Louis Phillipe', image: '/profile/louis.jpg', position: 'CMO' },
      { name: 'Faith Roberts', image: '/profile/faith.jpg', position: 'Protocol Engineer' },
   ];

   return (
      <div>
         <div className="flex-grow text-white flex flex-col relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 pt-8 md:pt-12">
               <h1 className="text-4xl sm:text-5xl md:text-6xl pt-8 md:pt-12 bebas-neue-regular leading-tight">ADVISORS & PARTNERS</h1>
               <p className="text-base sm:text-lg mt-8 opacity-80">
                  Meet our esteemed Advisors and Partners who are dedicated to advancing blockchain technology and driving innovation across industries.
               </p>
            </div>
            <div className="container mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
               {partnersAndAdvisors.map((person, index) => (
                  <FadeUpAnimation key={index} delay={index * 0.2} className="flex flex-col items-center">
                     <Image
                        src={person.image}
                        alt={person.name}
                        width={250}
                        height={250}
                        className="h-64 w-64 rounded-full object-cover filter grayscale transition-all duration-300 hover:grayscale-0"
                     />
                     <h2 className="text-center mt-4 text-xl font-semibold">{person.name}</h2>
                     <p className="text-center text-sm opacity-80 mt-2">{person.position}</p>
                  </FadeUpAnimation>
               ))}
            </div>
         </div>
         <div className="flex-grow text-white flex flex-col relative overflow-hidden">
            <div className="container mx-auto px-4 pt-12">
               <h1 className="text-4xl sm:text-5xl md:text-6xl bebas-neue-regular leading-tight">TEAM REPRESENTATIVES</h1>
               <p className="text-base sm:text-lg mt-8 opacity-80">
                  Our team representatives are industry leaders and innovators dedicated to driving the adoption and growth of blockchain technology. Meet the individuals who represent our mission and vision across the globe.
               </p>
            </div>
            <div className="container mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
               {teamRepresentatives.map((person, index) => (
                  <FadeUpAnimation key={index} delay={index * 0.2} className="flex flex-col items-center">
                     <Image
                        src={person.image}
                        alt={person.name}
                        width={250}
                        height={250}
                        className="h-64 w-64 rounded-full object-cover filter grayscale transition-all duration-300 hover:grayscale-0"
                     />
                     <h2 className="text-center mt-4 text-xl font-semibold">{person.name}</h2>
                     <p className="text-center text-sm opacity-80 mt-2">{person.position}</p>
                  </FadeUpAnimation>
               ))}
            </div>
         </div>
      </div>
   )
}

export default Team