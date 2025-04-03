import Layout from "@/pages/Layout"
import Image from 'next/image';

const BoardOfDirectors = () => {
   const companyLeadership = [
      { name: 'Paul R Brody', image: '/profile/person1.jpg', mainPosition: 'Chairman', otherPosition: 'Ernst & Young Principal & Global Blockchain Leader' },
      { name: 'Redwan Meslem', image: '/profile/person2.jpg', mainPosition: 'Executive Director', otherPosition: 'EEA Executive Director' },
      { name: 'Yorke E Rhodes III', image: '/profile/person1.jpg', otherPosition: 'Microsoft Cofounder Blockchain @Microsoft Director Digital Transformation Blockchain' },
      { name: 'Aya Miyaguchi', image: '/profile/person2.jpg', otherPosition: 'Ethereum Foundation President' },
      { name: 'Dani Mariano', image: '/profile/person1.jpg', otherPosition: 'Razorfish President' },
      { name: 'John Whelan', image: '/profile/person2.jpg', otherPosition: 'Santander Head of Digital Investment Banking' },
      { name: 'Joseph Lubin', image: '/profile/person1.jpg', otherPosition: 'Cofounder Ethereum Founder ConsenSys' },
      { name: 'Keerthi Moudgal', image: '/profile/person2.jpg', otherPosition: 'JP Morgan Head of Product Kinexys by J.P. Morgan' },
      { name: 'Vanessa Grellet', image: '/profile/person1.jpg', otherPosition: 'Arche Capital Cofounder' },
      { name: 'Victor Wong', image: '/profile/person2.jpg', mainPosition: 'Treasurer', otherPosition: 'Blockapps Chairman, Founder' },
   ];

   const alternateRepresentatives = [
      { name: 'Paul R Brody', image: '/profile/person1.jpg', position: 'Ethereum Foundation' },
      { name: 'Redwan Meslem', image: '/profile/person2.jpg', position: 'Razorfish CEO', },
      { name: 'Yorke E Rhodes III', image: '/profile/person1.jpg', position: 'Microsoft Director of Engineering' },
      { name: 'Aya Miyaguchi', image: '/profile/person2.jpg', position: 'JP Morgan Head of Web3 Labs Kinexys by J.P. Morgan' },
   ];

   return (
      <Layout>
         <div className="flex-grow flex flex-col relative overflow-hidden">
            <div className="container mx-auto px-4 lg:pt-12">
               <h1 className="text-4xl sm:text-5xl md:text-6xl bebas-neue-regular leading-tight">BOARD MEMBERS OF THE OGL: <br /> MEET OUR LEADERSHIP TEAM </h1>
               <p className="text-base sm:text-lg mt-8 opacity-80">
                  The EEA is a member-led industry organization whose objective is to drive the use of Enterprise Ethereum and Mainnet Ethereum <br /> blockchain technology as an open-standard to empower ALL enterprises.  Meet our Board of Directors and the EEA Staff.
               </p>
            </div>
            <div className="container mx-auto py-12 grid grid-cols-1 md:grid-cols-4">
               {companyLeadership.map((person, index) => (
                  <div
                     key={index}
                     className={`group bg-neutral-900 py-14 px-4 flex flex-col items-center justify-center mx-4 mb-8`}
                  >
                     <Image
                        src={person.image}
                        alt={person.name}
                        width={250}
                        height={250}
                        className="h-74 w-74 rounded-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                     />
                     <h2 className="text-center mt-4 text-xl font-semibold">{person.name}</h2>
                     <p className="text-center text-sm opacity-80 mt-2">{person.mainPosition}</p>
                     <p className="text-center text-lg opacity-80 mt-4">{person.otherPosition}</p>
                  </div>
               ))}
            </div>
         </div>
         <div className="flex-grow flex flex-col relative overflow-hidden">
            <div className="container mx-auto px-4 pt-12">
               <h1 className="text-4xl sm:text-5xl md:text-6xl bebas-neue-regular leading-tight">EEA BOARD OF DIRECTOR ALTERNATE <br /> REPRESENTATIVES </h1>
               <p className="text-base sm:text-lg mt-8 opacity-80">
                  The EEA is a member-led industry organization whose objective is to drive the use of Enterprise Ethereum and Mainnet Ethereum <br /> blockchain technology as an open-standard to empower ALL enterprises.  Meet our Board of Directors and the EEA Staff.
               </p>
            </div>
            <div className="container mx-auto py-12 grid grid-cols-1 md:grid-cols-4">
               {alternateRepresentatives.map((person, index) => (
                  <div
                     key={index}
                     className={`group bg-neutral-900 py-14 px-4 flex flex-col items-center justify-center mx-4 mb-8`}
                  >
                     <Image
                        src={person.image}
                        alt={person.name}
                        width={250}
                        height={250}
                        className="h-74 w-74 rounded-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                     />
                     <h2 className="text-center mt-4 text-xl font-semibold">{person.name}</h2>
                     <p className="text-center text-lg opacity-80 mt-4">{person.position}</p>
                  </div>
               ))}
            </div>
         </div>
      </Layout>
   )
}

export default BoardOfDirectors
