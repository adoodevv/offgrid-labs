import Image from 'next/image';

const Team = () => {
   const partnersAndAdvisors = [
      { name: 'Sandy Peng', image: '/profile/sandy.jpg', position: 'Co-founder - Scroll' },
      { name: 'Emmanuel Odianosen', image: '/profile/emmanuel.jpg', position: 'Developer Relations - Sonieum' },
      { name: 'Michael Lawal', image: '/profile/michael.jpg', position: 'Strategic Advisor - Aya HQ' },
      { name: 'Yele Bademosi', image: '/profile/yele.jpg', position: 'Co-founder - Onboard' },
      { name: 'Yele Bademosi', image: '/profile/yele.jpg', position: 'Advisor - CEO, Jamit' },
   ];

   const teamRepresentatives = [
      { name: 'Paul R Brody', image: '/profile/person1.jpg', position: 'Ethereum Foundation' },
      { name: 'Redwan Meslem', image: '/profile/person2.jpg', position: 'Razorfish CEO', },
      { name: 'Yorke E Rhodes III', image: '/profile/person1.jpg', position: 'Microsoft Director of Engineering' },
      { name: 'Aya Miyaguchi', image: '/profile/person2.jpg', position: 'JP Morgan Head of Web3 Labs' },
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
            <div className="container mx-auto py-12 grid grid-cols-1 md:grid-cols-4">
               {partnersAndAdvisors.map((person, index) => (
                  <div
                     key={index}
                     className={`group bg-neutral-900 py-14 px-4 flex flex-col items-center justify-center mx-4 mb-8`}
                  >
                     <Image
                        src={person.image}
                        alt={person.name}
                        width={250}
                        height={250}
                        className="h-74 w-74 rounded-full object-contain filter grayscale transition-all duration-300"
                     />
                     <h2 className="text-center mt-4 text-xl font-semibold">{person.name}</h2>
                     <p className="text-center text-sm opacity-80 mt-2">{person.position}</p>
                  </div>
               ))}
            </div>
         </div>
         <div className="flex-grow text-white flex flex-col relative overflow-hidden">
            <div className="container mx-auto px-4 pt-12">
               <h1 className="text-4xl sm:text-5xl md:text-6xl bebas-neue-regular leading-tight">TEAM REPRESENTATIVES </h1>
               <p className="text-base sm:text-lg mt-8 opacity-80">
                  Our team representatives are industry leaders and innovators dedicated to driving the adoption and growth of blockchain technology. Meet the individuals who represent our mission and vision across the globe.
               </p>
            </div>
            <div className="container mx-auto py-12 grid grid-cols-1 md:grid-cols-4">
               {teamRepresentatives.map((person, index) => (
                  <div
                     key={index}
                     className={`group bg-neutral-900 py-14 px-4 flex flex-col items-center justify-center mx-4 mb-8`}
                  >
                     <Image
                        src={person.image}
                        alt={person.name}
                        width={250}
                        height={250}
                        className="h-74 w-74 rounded-full object-contain filter grayscale transition-all duration-300"
                     />
                     <h2 className="text-center mt-4 text-xl font-semibold">{person.name}</h2>
                     <p className="text-center text-sm opacity-80 mt-2">{person.position}</p>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default Team
