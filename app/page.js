"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPlay, faEnvelope, faLocationArrow, faPhone, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
// import modularkitchen from '../public/images/ModularKitchen.png'
import whyChooseusImg from '../public/images/why_us.jpeg'
import howWorks from '../public/images/how_it_works_2.jpg'
import meetingIcon from '../public/images/meeting.svg'
import approvedIcon from '../public/images/approved.svg'
import productionIcon from '../public/images/production.svg'
import truckIcon from '../public/images/truck.svg'
import dealIcon from '../public/images/deal.svg'
import rightArrow from '../public/images/right_arrow.png'
import userIcon from '../public/images/user_icon.png'
import kitchenClImg from '../public/images/kitchen.jpeg'
import windowDoorImg from '../public/images/window_door.jpeg'
import funitureImg from '../public/images/furniture.jpeg'
import furnishingsImg from '../public/images/furnishings.jpeg'
import wardrobesImg from '../public/images/wardrobes.jpeg'
import bathwareImg from '../public/images/bathware.jpeg'
import lightsImg from '../public/images/lights.jpeg'
import tilesImg from '../public/images/tiles.jpeg'
import ProjectImg_1 from '../public/images/project_1.jpeg'
import ProjectImg_2 from '../public/images/project_2.jpeg'
import ProjectImg_3 from '../public/images/project_3.jpeg'
import ClientProjectDefaultImg from '../public/images/default_client_img.jpeg'

// const servicesProvided = [
//   {
//     name: 'Service 1',
//     description: 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
//     img: modularkitchen
//   },
//   {
//     name: 'Service 2',
//     description: 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
//     img: modularkitchen
//   },
//   {
//     name: 'Service 3',
//     description: 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
//     img: modularkitchen
//   },
//   {
//     name: 'Service 4',
//     description: 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
//     img: modularkitchen
//   },
// ]

const whyChooseus = [
  {
    countNum: '01',
    title: 'Trusted Partners',
    description: ' For the past six years, we have been the trusted partner in creating distinctive interiors, successfully executing over 80 projects across residential and commercial sectors.'
  },
  {
    countNum: '02',
    title: 'Projects Completion',
    description: 'Our portfolio spans from cutting-edge modern flats to magnificent luxury villas, each project tailored to reflect the unique style and aspirations of our clients.'
  }, {
    countNum: '03',
    title: 'Our design philosophy',
    description: 'We also bring our signature elegance and flawless functionality to commercial projects, ensuring a sophisticated and productive atmosphere.'
  }
];

const packageOffered = [
  {
    projectImg: ProjectImg_1,
    title: 'The Zenith Core (Essentials)',
    description: 'This package is designed for clients who prioritize intelligent design, high functionality, and a clean, clutter-free aesthetic. It provides a robust, well-executed foundation with all essential features seamlessly integrated. Scope	Comprehensive design and execution of essential fixed elements (e.g., modular kitchen, basic wardrobes, vanity units).'
  },
  {
    projectImg: ProjectImg_2,
    title: 'The Opulent Select (Elegant Curator)',
    description: ' Building upon The Zenith Core, this package introduces elevated design elements, superior material quality, and advanced space utilization techniques for a distinctly elegant look and feel. Scope	All essentials plus elegant lighting fixtures, enhanced ceiling designs, bespoke paneling, and curated loose furniture guidance.'
  },
  {
    projectImg: ProjectImg_3,
    title: 'The Signature Legacy (Ultimate Luxury)',
    description: 'This is the ultimate package, delivering a truly luxurious, bespoke environment. It includes the highest grade of materials, complex detailing, and a fully personalized design journey that ensures the customer feels absolute luxury. Scope	Complete end-to-end service: all elements from Package 2 plus bespoke furniture design, automated home integration (e.g., smart systems), and comprehensive decor/art curation.'
  }
]

const benifits = [
  {
    title: 'SINCE',
    desc: '2004'
  },
  {
    title: 'PREMIUM',
    desc: 'Materials'
  },
  {
    title: '10 YEARS',
    desc: 'Warranty'
  },
  {
    title: 'COMPLETION',
    desc: '40 Working Days'
  },
  {
    title: 'LIFELONG',
    desc: 'Service Support'
  },

]

const projectsCompleted = [
  {
    clientProjectImg: '',
    clientImg: '',
    clientName: "Kalyan's",
    typeOf: '3BHK',
    location: 'Kismatpur'
  },
  {
    clientProjectImg: '',
    clientImg: '',
    clientName: 'Shaik Rafi',
    typeOf: '3BHK',
    location: 'Kismatpur'
  },
  {
    clientProjectImg: '',
    clientImg: '',
    clientName: 'Jagadish',
    typeOf: '',
    location: 'Karimnagar'
  }
]


export default function Home() {

  const carouselRef = useRef(null);
  const [index, setIndex] = useState(0);
  const totalSlides = 2;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(-${index * 100}%)`;
    }
  }, [index]);

  return (
    <>
      <div className="flex items-center justify-center min-h-screen slider_section" id="home">
        <div className="w-full overflow-hidden"> {/*  max-w-3xl */}
          <div ref={carouselRef} className="flex transition-transform duration-500 ease-in-out h-screen"> {/* style={{ width: '400%' }} */}
            <div className="w-full flex-shrink-0 text-white px-[24px] py-[34px] lg:px-[40px] lg:py-[40px] xl:px-[60px] xl:py-[60px] flex items-end text-2xl slide_1">
              <div className="w-full md:w-3/4 lg:w-3/5">
                <h2 className="text-3xl md:text-4xl lg:text-5xl text xl:text-6xl font-semibold">Luxury Redefined in Every Detail</h2>
                <p className="text-[16px] md:text-lg xl:text-xl mt-2 md:mt-4">Our bespoke designs bring refined elegance and modern functionality together, creating homes that exude prestige and comfort.</p>
                {/* <button className="mt-5 md:mt-6 text-sm xl:text-[16px] bg-[#3d7009] text-[#bfff80] px-6 py-2 xl:px-8 xl:py-3 rounded xl:rounded-lg cursor-pointer"><ScrollLink to="contactUs" smooth={true} duration={500}>Contact us <FontAwesomeIcon icon={faArrowRight} className="ms-1" /></ScrollLink></button> */}
                <ScrollLink to="contactUs" smooth={true} duration={500} ><button className="mt-5 md:mt-6 uppercase bg-[#FFAB4B] text-[#743F00] font-bold text-sm px-5 py-2 rounded cursor-pointer hover:bg-[#f79c34] transition-all">know more <FontAwesomeIcon icon={faArrowRight} className="ms-1" /></button></ScrollLink>
              </div>
            </div>
            <div className="w-full flex-shrink-0 text-white px-[24px] py-[34px] lg:px-[40px] lg:py-[40px] xl:px-[60px] xl:py-[60px] flex items-end text-2xl slide_2">
              <div className="w-full md:w-3/4 lg:w-3/5">
                <h2 className="text-3xl md:text-4xl lg:text-5xl text xl:text-6xl font-semibold">Where Creativity Meets Precision</h2>
                <p className="text-[16px] md:text-lg xl:text-xl mt-2 md:mt-4">Our expert team delivers flawless interiors with meticulous attention to detail, ensuring every corner speaks sophistication</p>
                {/* <button className="mt-5 md:mt-6 text-sm xl:text-[16px] bg-[#3d7009] text-[#bfff80] px-6 py-2 xl:px-8 xl:py-3 rounded xl:rounded-lg cursor-pointer"><ScrollLink to="contactUs" smooth={true} duration={500}>Contact us <FontAwesomeIcon icon={faArrowRight} className="ms-1" /></ScrollLink></button> */}
                <ScrollLink to="contactUs" smooth={true} duration={500} ><button className="mt-5 md:mt-6 uppercase bg-[#FFAB4B] text-[#743F00] font-bold text-sm px-5 py-2 rounded cursor-pointer hover:bg-[#f79c34] transition-all">know more <FontAwesomeIcon icon={faArrowRight} className="ms-1" /></button></ScrollLink>
              </div>
            </div>
            {/* <div className="w-full flex-shrink-0 text-white px-[24px] py-[34px] lg:px-[40px] lg:py-[40px] xl:px-[60px] xl:py-[60px] flex items-end text-2xl slide_3">
              <div className="w-full md:w-3/4 lg:w-3/5">
                <h2 className="text-3xl md:text-4xl lg:text-5xl text xl:text-6xl font-semibold">A Right choice for Your Big Dreams</h2>
                <p className="text-[16px] md:text-lg xl:text-xl mt-2 md:mt-4">Sowkya has been delivering quality homes. We have redefined the concept of quality housing.</p>
                <button className="mt-5 md:mt-6 text-sm xl:text-[16px] bg-[#771D32] px-6 py-2 xl:px-8 xl:py-3 rounded xl:rounded-lg cursor-pointer"><Link to="contactUs" smooth={true} duration={500}>High-level assistance</Link></button>
              </div>
            </div> */}
            {/* <div className="w-full flex-shrink-0 bg-red-500 text-white p-[60px] flex items-end text-2xl font-bold slide_4">
              <div className="w-3/5">
                <h2 className="text-6xl font-semibold">A Right choice for Your Big Dreams 4</h2>
                <p className="text-xl mt-4">Sowkya has been delivering quality homes. We have redefined the concept of quality housing.</p>
                <a href="#contactUs"><button className="mt-6 text-[16px] bg-[#771D32] px-8 py-3 rounded-lg cursor-pointer">High-level assistance</button></a>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <div className="packages_Offered px-[24px] pt-[40px] lg:px-[40px] lg:pt-[60px] xl:px-[60px] xl:pt-[100px]">
        <h2 className="text-2xl md:text-4xl lg:leading-[54px] font-semibold mb-7 md:mb-9 xl:mb-12 text-center"><span className="text-[#EE2128]">Sowkya Interiors</span> Designing Homes<br /> That Balance Elegance, Comfort, and Timeless Style</h2>
        <div>
          <ul className="flex flex-wrap items-center justify-center gap-[16px] sm:gap-[24px] lg:gap-[33px] xl:gap-[48px]">
            {benifits.map((data, index) => (
              <li className="rounded-full bg-[#ffedd8] w-[130px] h-[130px] sm:w-[150px] sm:h-[150px] xl:w-[180px] xl:h-[180px] content-center border-1 border-[#743f00] text-center" key={index}>
                <div>
                  <p className="uppercase text-md sm:text-lg font-semibold text-[#743f00]">{data.title}</p>
                  <p className="text-sm sm:text-md">{data.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="about_us px-[24px] pt-[40px] lg:px-[40px] lg:pt-[60px] xl:px-[60px] xl:pt-[100px]" id="aboutUs">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="content-center">
            <div className="img_section h-[521px] lg:h-[800px]">
              {/* <Image src={aboutUsImg} className="rounded h-[521px] object-fit" alt="about_img"/> */}
            </div>
          </div>
          <div className="">
            <div className="relative">
              <h2 className="text-3xl md:text-4xl xl:text-5xl lg:leading-[54px] xl:leading-[60px] font-semibold mb-7 md:mb-9 xl:mb-12">Trusted by <span className="text-[#EE2128]">homeowners and businesses</span> to elevate every corner.</h2>
              <div className="mb-6 xl:mb-8">
                <h5 className="text-xl md:text-2xl xl:text-3xl font-semibold border-b pb-1.5 mb-3">Our Values</h5>
                <ul>
                  <li className="mb-3"><span className="text-[#ee2128] font-medium">Flawless Execution:</span> Our reputation is built on a commitment to precision and meticulous execution, establishing us as one of the best designers in the region.</li>
                  <li className="mb-3"><span className="text-[#ee2128] font-medium">Elegant Design Philosophy:</span> Every design we create is a testament to the elegant and sophisticated work we deliver, blending aesthetics with enduring quality.</li>
                  <li className="mb-3"><span className="text-[#ee2128] font-medium">Smart Space Utilization:</span> We are experts in maximizing the potential of your area. Our innovative approach to space utilization ensures that you experience an unparalleled sense of luxury and openness, regardless of the size of your space.</li>
                  <li className="mb-3"><span className="text-[#ee2128] font-medium">Client-Centric Integrity:</span> Trust is earned through transparency and honest partnership. We prioritize clear communication, budget adherence, and delivering on our promises, making the client journey as seamless and comfortable as the final result.</li>
                  <li><span className="text-[#ee2128] font-medium">Respect & Reliability:</span>	We respect your time, investment, and vision. We are a reliable partner, dedicated to meeting timelines and managing resources efficiently, demonstrating professionalism and accountability at every stage.</li>
                </ul>
              </div>
              <div className="mb-6 xl:mb-8">
                <h5 className="text-xl md:text-2xl xl:text-3xl font-semibold border-b pb-1.5 mb-3">Our Vision</h5>
                <p>To pioneer the future of modern luxury interiors by seamlessly merging impeccable design aesthetics with engineering precision, making flawless execution the non-negotiable foundation of our brand.
                  We transform every client's space into a masterpiece of personal elegance and maximized functionality, ensuring that the luxury of space is felt, not just seen, in every corner we design.</p>
              </div>
              <ScrollLink to="contactUs" smooth={true} duration={500} ><button className="uppercase bg-[#FFAB4B] text-[#743F00] font-bold text-sm px-5 py-2 rounded cursor-pointer hover:bg-[#f79c34] transition-all">know more</button></ScrollLink>
              {/* <p className="text-7xl uppercase font-bold">About us</p> */}
            </div>
          </div>
        </div>
      </div>

      {/* <div className="services_offered px-[24px] py-[34px] lg:px-[40px] lg:py-[60px] xl:px-[60px] xl:py-[0px]">
        <h5 className="text-3xl md:text-4xl xl:text-5xl font-semibold  mb-7 md:mb-9 xl:mb-12">Services we’re offering to <span className="text-[#EE2128]">Our Customers</span></h5>
        <div className="grid grid-cols-3 xl:grid-cols-4 gap-[16px] xl:gap-[24px] mt-10">
          {servicesProvided.map((service, index) => (
            <div className="bg-[#FFEDD8] rounded-sm p-5 lg:px-6 lg:py-8 relative" key={index}>
              <h5 className="text-xl lg:text-2xl font-medium text-[#EE2128] pb-2 lg:pb-3">{service.name}</h5>
              <p className="mb-4">{service.description}</p>
              <div>
                <span className="px-[8px] py-[6px] lg:px-[9px] lg:py-[7px] rounded-[30px] bg-[#FFAB4B] me-2 inline-block"><FontAwesomeIcon icon={faArrowRight} /></span>
                <span className="cursor-pointer text-[#743F00] text-xs lg:text-sm font-medium">Read More</span>
              </div>
              <span className="inline-block bg-[#fffbf5] rounded-[100%] p-4 absolute bottom-[-16px] right-[-16px]">
                <Image src={service.img} width={75} height={75} alt={`${service.name}_icon`} className="service_Img"/>
              </span>
            </div>
          ))}
          
        </div>
      </div> */}

      <div className="why_choose_us px-[24px] pt-[40px] sm:pt-[40px] lg:px-[40px] lg:py-[60px] xl:px-[60px] xl:pt-[100px]">
        <div className="grid grid-cols-2 relative gap-8 xl:gap-10">
          <div className="col-span-2 lg:col-span-1">
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-3 sm:mb-6 lg:mb-9 xl:mb-12 lg:leading-[54px] xl:leading-[60px]">The Difference Between <span className="text-[#EE2128]">Ordinary & Extraordinary</span> Spaces</h2>
            <p className="mb-6 sm:mb-9 xl:mb-12 text-lg">As one of Hyderabad's premier interior design studios, we specialize in transforming spaces into luxurious, highly functional environments.</p>
            <ScrollLink to="contactUs" smooth={true} duration={500} ><button className="mb-6 sm:mb-0 uppercase bg-[#FFAB4B] text-[#743F00] font-bold text-sm px-5 py-2 rounded cursor-pointer hover:bg-[#f79c34] transition-all">contact us</button></ScrollLink>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:absolute w-full lg:w-4/5 md:py-4 md:pe-4 xl:py-6 xl:pe-6 bg-[#fffbf5] mt-10 md:mt-6 xl:mt-9">
              {whyChooseus.map((data, index) => (
                <div key={index}>
                  <p className="rounded font-black text-2xl xl:text-3xl bg-[#FFAB4B] text-[#743F00] p-2 content-center text-center inline-block xl:w-[60px] xl:h-[55px] w-[55px] h-[52px]">
                    <span>{data.countNum}</span>
                  </p>
                  <h3 className="font-semibold text-lg xl:text-xl pt-6 pb-3 text-[#743F00]">{data.title}</h3>
                  <p className="text-sm leading-[21px]">{data.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:block">
            <div>
              <Image src={whyChooseusImg} alt='' className="rounded w-full lg:h-[650px] xl:h-[650px] 2xl:h-[552px] object-cover" />
            </div>
          </div>
        </div>
      </div>

      <div className="plans_offered px-[24px] pt-[40px] sm:pt-[40px] lg:px-[40px] lg:py-[0px] xl:px-[60px] xl:py-[100px]" id="plans">
        <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold lg:leading-[54px] xl:leading-[60px] mb-14">Package <span className="text-[#EE2128]">Offers</span></h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-13 md:gap-y-15 md:gap-8 gap-4">
          {packageOffered.map((data, index) => (
            <div key={index} className="relative flex flex-col rounded-xl bg-[#ffedd8] bg-clip-border shadow-md">
              <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                <Image src={data?.projectImg} className="w-full" alt="Project_img" />
              </div>
              <div className="px-6 pt-6 pb-22">
                <h5 className="mb-2 block text-xl font-bold leading-snug tracking-normal text-[#743f00] antialiased">
                  {data.title}
                </h5>
                <p className="block leading-relaxed text-inherit antialiased">
                  {data.description}
                </p>
              </div>
              <div className="p-6 pt-0 absolute bottom-0">
                <ScrollLink to="contactUs" smooth={true} duration={500}><button className="mb-0 uppercase bg-[#FFAB4B] text-[#743F00] font-bold text-sm px-5 py-2 rounded cursor-pointer hover:bg-[#f79c34] transition-all">Know more</button></ScrollLink>
              </div>
            </div>
          ))}

        </div>
      </div>

      <div className="how_it_works pt-[40px] sm:pt-[40px] lg:py-[60px] xl:py-[0px] md:h-[760px] lg:h-[800px] relative">
        <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold lg:leading-[54px] xl:leading-[60px] mb-6 lg:ms-[34px] ms-[24px]">How It <span className="text-[#EE2128]">Works</span></h2>
        <div>
          <Image src={howWorks} alt='how_works' className="w-full h-[250px] md:h-[400px] object-cover" />
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-y-9 md:grid-cols-5 mt-6 px-6 md:absolute bottom-[120px] lg:bottom-[135px] xl:bottom-[180px]">
            <div className="flex">
              <div className="text-center">
                <p className="inline-block p-6 rounded-[100%] bg-[#FFEDD8]"><Image src={meetingIcon} alt="meetingIcon" className="w-[50px] h-[50px] sm:w-[75px] sm:h-[75px]" /></p>
                <p className="pt-1 sm:pt-3 text-md xl:text-xl font-medium"> Talk to our Interior Designer</p>
              </div>
              <div className="self-end">
                <Image src={rightArrow} alt="rightArrow" className="mb-[110px] lg:mb-[95px] xl:mb-[100px]" />
              </div>
            </div>
            <div className="flex">
              <div className="text-center">
                <p className="inline-block p-6 rounded-[100%] bg-[#FFEDD8]"><Image src={approvedIcon} alt="approvedIcon" className="w-[50px] h-[50px] sm:w-[75px] sm:h-[75px]" /></p>
                <p className="pt-1 sm:pt-3 text-md xl:text-xl font-medium"> Detailed Drawing and Approval</p>
              </div>
              <div className="self-end">
                <Image src={rightArrow} alt="rightArrow" className="mb-[110px] lg:mb-[95px] xl:mb-[100px]" />
              </div>
            </div>
            <div className="flex">
              <div className="text-center">
                <p className="inline-block p-6 rounded-[100%] bg-[#FFEDD8]"><Image src={productionIcon} alt="productionIcon" className="w-[50px] h-[50px] sm:w-[75px] sm:h-[75px]" /></p>
                <p className="pt-1 sm:pt-3 text-md xl:text-xl font-medium"> Production at Own Factories</p>
              </div>
              <div className="self-end">
                <Image src={rightArrow} alt="rightArrow" className="mb-[110px] lg:mb-[95px] xl:mb-[100px]" />
              </div>
            </div>
            <div className="flex">
              <div className="text-center">
                <p className="inline-block p-6 rounded-[100%] bg-[#FFEDD8]"><Image src={truckIcon} alt="truckIcon" className="w-[50px] h-[50px] sm:w-[75px] sm:h-[75px]" /></p>
                <p className="pt-1 sm:pt-3 text-md xl:text-xl font-medium"> Material Delivery & Execution</p>
              </div>
              <div className="self-end">
                <Image src={rightArrow} alt="rightArrow" className="mb-[110px] lg:mb-[95px] xl:mb-[100px]" />
              </div>
            </div>
            <div className="flex last_icon">
              <div className="text-center">
                <p className="inline-block p-6 rounded-[100%] bg-[#FFEDD8]"><Image src={dealIcon} alt="dealIcon" className="w-[50px] h-[50px] sm:w-[75px] sm:h-[75px]" /></p>
                <p className="pt-1 sm:pt-3 text-md xl:text-xl font-medium"> On Time Project Hand Over</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center content-end md:h-[230px] mt-10 md:mt-0">
          <ScrollLink to="contactUs" smooth={true} duration={500}><button className="uppercase bg-[#FFAB4B] text-[#743F00] font-bold text-sm px-5 py-3 rounded cursor-pointer hover:bg-[#f79c34] transition-all">BOOK FREE CONSULTATION</button></ScrollLink>
        </div>
      </div>

      <div className="completed_Projects px-[24px] py-[40px] sm:py-[40px] lg:px-[40px] lg:py-[60px] xl:pt-[10px] xl:pb-[100px] xl:px-[60px] ">
        <div className="flex justify-between items-center mb-6">
          <h4 className="text-3xl md:text-4xl xl:text-5xl font-bold lg:leading-[54px] xl:leading-[60px]">Spaces Designed by <span className="text-[#EE2128]">Sowkya Interiors</span></h4>
          <div className="hidden lg:block">
            <button className="uppercase bg-[#FFAB4B] text-[#743F00] font-bold text-sm px-8 py-2 rounded cursor-pointer hover:bg-[#f79c34] transition-all">View all</button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-6">
          {projectsCompleted.map((data, index) => (
            <div className="rounded-xl relative" key={index}>
              {/* <Image src={clientProjectImg} alt="client_project_img" className="h-[330px] md:h-[400px] object-cover rounded-xl" /> */}
              <Image src={data.clientProjectImg ? data.clientProjectImg : ClientProjectDefaultImg} alt="client_project_img" className="h-[330px] md:h-[400px] object-cover rounded-xl" />
              {/* <span className=""><FontAwesomeIcon icon={faPlay} className="absolute play_btn rounded-full py-[14px] px-[10px] bg-[#23201D]" /></span> */}
              <span className="overlayBlack absolute top-[0px]"></span>
              <div className="bg-[#FFEDD8] flex gap-[12px] items-center p-3 lg:p-3 xl:p-4 w-5/6 md:w-3/4 absolute bottom-0 rounded-bl-xl rounded-tr-xl">
                <div className="bg-[#FFCC91] p-3 md:p-3.5 rounded-full">
                  <Image src={data.clientImg ? data.clientImg : userIcon} alt="user_icon" width={36} height={38} />
                </div>
                <div>
                  <h5 className="font-medium text-md xl:text-lg text-[#EE2128]">{data.clientName} {data?.typeOf}</h5>
                  <p className="text-sm xl:text-md text-[#743F00]">{data.location}</p>
                </div>
              </div>
            </div>
          ))}

        </div>
        <div className="text-center mt-10 lg:hidden">
          <button className="uppercase bg-[#FFAB4B] text-[#743F00] font-bold text-sm px-8 py-2 rounded cursor-pointer hover:bg-[#f79c34] transition-all">View all</button>
        </div>
      </div>

      <div className="project_in_mind text-[#fffbf5]">
        <div className="w-full sm:w-3/4 px-[24px] py-[34px] lg:px-[40px] lg:py-[40px] xl:p-[60px]">
          <h3 className="text-3xl md:text-4xl xl:text-5xl font-bold">Have a project in mind?</h3>
          <p className="text-md sm:text-lg mt-4 mb-6 sm:mb-9">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using</p>
          <button className="uppercase bg-[#FFAB4B] text-[#743F00] font-bold text-sm px-8 py-2 rounded cursor-pointer hover:bg-[#f79c34] transition-all">contact us</button>
        </div>
      </div>

      <div className="projects_section px-[24px] pt-[40px] lg:px-[40px] lg:py-[60px] xl:px-[60px] xl:pb-[0px] xl:pt-[100px]" id="ongoingProjects">
        <h4 className="text-3xl md:text-4xl xl:text-5xl font-bold leading-[45px] md:leading-[54px] xl:leading-[60px] mb-7 xl:mb-10"><span className="text-[#EE2128]">Designs</span> That Speak, <span className="text-[#EE2128]">Projects</span> That Shine</h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="relative project_Card h-[350px] sm:h-[582px]">
            <Image src={kitchenClImg} alt="kitchen_img" className=" h-[350px] sm:h-[582px] object-cover rounded-md" />
            <div className="absolute bottom-[12px] left-[12px] lg:left-[16px] lg:bottom-[16px] xl:left-[24px] xl:bottom-[24px] z-1">
              <h4 className="font-bold text-lg sm:text-xl xl:text-2xl mb-1 text-[#fffbf5]">Kitchen</h4>
              <ScrollLink to="contactUs" smooth={true} duration={500}><p className="uppercase displayHover font-medium text-xs">Know more<FontAwesomeIcon icon={faCaretRight} /></p></ScrollLink>
            </div>
            <div className="overFlow  h-[350px] sm:h-[582px]"></div>
          </div>
          <div className="relative project_Card h-[350px] sm:h-[446px]">
            <Image src={windowDoorImg} alt="windowDoor_Img" className="h-[350px] sm:h-[446px] object-cover rounded-md" />
            <div className="absolute bottom-[12px] left-[12px] lg:left-[16px] lg:bottom-[16px] xl:left-[24px] xl:bottom-[24px] z-1">
              <h4 className="font-bold text-lg sm:text-xl xl:text-2xl mb-1 text-[#fffbf5]">Windows</h4>
              <ScrollLink to="contactUs" smooth={true} duration={500}><p className="uppercase displayHover font-medium text-xs">Know more<FontAwesomeIcon icon={faCaretRight} /></p></ScrollLink>
            </div>
            <div className="overFlow h-[350px] sm:h-[446px]"></div>
          </div>
          <div className="relative project_Card h-[350px] sm:h-[582px]">
            <Image src={funitureImg} alt="funiture_Img" className=" h-[350px] sm:h-[582px] object-cover rounded-md" />
            <div className="absolute bottom-[12px] left-[12px] lg:left-[16px] lg:bottom-[16px] xl:left-[24px] xl:bottom-[24px] z-1">
              <h4 className="font-bold text-lg sm:text-xl xl:text-2xl mb-1 text-[#fffbf5]">Funiture</h4>
              <ScrollLink to="contactUs" smooth={true} duration={500}><p className="uppercase displayHover font-medium text-xs">Know more<FontAwesomeIcon icon={faCaretRight} /></p></ScrollLink>
            </div>
            <div className="overFlow  h-[350px] sm:h-[582px]"></div>
          </div>
          <div className="relative project_Card h-[350px] sm:h-[446px]">
            <Image src={furnishingsImg} alt="furnishings_Img" className="h-[350px] sm:h-[446px] object-cover rounded-md" />
            <div className="absolute bottom-[12px] left-[12px] lg:left-[16px] lg:bottom-[16px] xl:left-[24px] xl:bottom-[24px] z-1">
              <h4 className="font-bold text-lg sm:text-xl xl:text-2xl mb-1 text-[#fffbf5]">Furnishings</h4>
              <ScrollLink to="contactUs" smooth={true} duration={500}><p className="uppercase displayHover font-medium text-xs">Know more<FontAwesomeIcon icon={faCaretRight} /></p></ScrollLink>
            </div>
            <div className="overFlow h-[350px] sm:h-[446px]"></div>
          </div>
          <div className="relative project_Card h-[350px] sm:h-[446px]">
            <Image src={wardrobesImg} alt="wardrobes_Img" className="h-[350px] sm:h-[446px] object-cover rounded-md" />
            <div className="absolute bottom-[12px] left-[12px] lg:left-[16px] lg:bottom-[16px] xl:left-[24px] xl:bottom-[24px] z-1">
              <h4 className="font-bold text-lg sm:text-xl xl:text-2xl mb-1 text-[#fffbf5]">Wardrobes</h4>
              <ScrollLink to="contactUs" smooth={true} duration={500}><p className="uppercase displayHover font-medium text-xs">Know more<FontAwesomeIcon icon={faCaretRight} /></p></ScrollLink>
            </div>
            <div className="overFlow h-[350px] sm:h-[446px]"></div>
          </div>
          <div className="relative project_Card  h-[350px] sm:h-[582px] sm:mt-[-136px]">
            <Image src={bathwareImg} alt="bathware_Img" className=" h-[350px] sm:h-[582px] object-cover rounded-md" />
            <div className="absolute bottom-[12px] left-[12px] lg:left-[16px] lg:bottom-[16px] xl:left-[24px] xl:bottom-[24px] z-1">
              <h4 className="font-bold text-lg sm:text-xl xl:text-2xl mb-1 text-[#fffbf5]">Bathware</h4>
              <ScrollLink to="contactUs" smooth={true} duration={500}><p className="uppercase displayHover font-medium text-xs">Know more<FontAwesomeIcon icon={faCaretRight} /></p></ScrollLink>
            </div>
            <div className="overFlow  h-[350px] sm:h-[582px]"></div>
          </div>
          <div className="relative project_Card h-[350px] sm:h-[446px]">
            <Image src={lightsImg} alt="lights_Img" className="h-[350px] sm:h-[446px] object-cover rounded-md" />
            <div className="absolute bottom-[12px] left-[12px] lg:left-[16px] lg:bottom-[16px] xl:left-[24px] xl:bottom-[24px] z-1">
              <h4 className="font-bold text-lg sm:text-xl xl:text-2xl mb-1 text-[#fffbf5]">Lights</h4>
              <ScrollLink to="contactUs" smooth={true} duration={500}><p className="uppercase displayHover font-medium text-xs">Know more<FontAwesomeIcon icon={faCaretRight} /></p></ScrollLink>
            </div>
            <div className="overFlow h-[350px] sm:h-[446px]"></div>
          </div>
          <div className="relative project_Card h-[350px] sm:h-[582px] sm:mt-[-136px]">
            <Image src={tilesImg} alt="tiles_Img" className=" h-[350px] sm:h-[582px] object-cover rounded-md" />
            <div className="absolute bottom-[12px] left-[12px] lg:left-[16px] lg:bottom-[16px] xl:left-[24px] xl:bottom-[24px] z-1">
              <h4 className="font-bold text-lg sm:text-xl xl:text-2xl mb-1 text-[#fffbf5]">Tiles</h4>
              <ScrollLink to="contactUs" smooth={true} duration={500}><p className="uppercase displayHover font-medium text-xs">Know more<FontAwesomeIcon icon={faCaretRight} /></p></ScrollLink>
            </div>
            <div className="overFlow h-[350px] sm:h-[582px]"></div>
          </div>
        </div>
      </div>

      <div className="contactUs px-[24px] py-[40px] lg:px-[40px] md:pt-[0px] lg:pb-[100px] xl:px-[60px] xl:py-[100px]" id="contactUs">
        <h4 className="text-3xl md:text-4xl xl:text-5xl font-bold lg:leading-[54px] xl:leading-[60px] mb-7 xl:mb-10">Where <span className="text-[#EE2128]">Every Space</span> Tells a <span className="text-[#EE2128]">Happy Story</span></h4>
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
          <div className="col-span-1 lg:col-span-2 self-center order-2 lg:order-1">
            <div className="space-y-7 xl:space-y-10">
              <div className="flex items-center gap-2 xl:gap-4">
                <div className="bg-[#ffedd8] rounded-full px-3 py-3 sm:px-[16px] sm:py-[17px]">
                  <FontAwesomeIcon icon={faEnvelope} className="text-lg sm:text-2xl text-[#743F00]" />
                </div>
                <div>
                  <p className="text-[#EE2128] font-medium">Mail us</p>
                  <a href="#" className="font-semibold hover:text-[#eb9d3a]">sowkyainteriors@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center gap-2 xl:gap-4">
                <div className="bg-[#ffedd8] rounded-full px-3 py-3 sm:px-[16px] sm:py-[17px]">
                  <FontAwesomeIcon icon={faPhone} className="text-lg sm:text-2xl  text-[#743F00]" />
                </div>
                <div>
                  <p className="text-[#EE2128] font-medium">Call us</p>
                  <a href="#" className="font-semibold hover:text-[#eb9d3a]">9391 900 400</a>
                </div>
              </div>
              <div className="flex items-center gap-2 xl:gap-4">
                <div className="bg-[#ffedd8] rounded-full px-3 py-3 sm:px-[16px] sm:py-[17px]">
                  <FontAwesomeIcon icon={faLocationArrow} className="text-lg sm:text-2xl text-[#743F00]" />
                </div>
                <div>
                  <p className="text-[#EE2128] font-medium">Address</p>
                  <a href="#" className="font-semibold hover:text-[#eb9d3a]">Sowkya Interiors, <br />Near by LV Prasad Eye Institute, <br /> Behind Prestige Villas, Kismatpur, <br /> Bandlaguda jagir Municipality, <br /> RR – 500086</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-4  order-1 lg:order-2">
            <div className="bg-[#FFEDD8] rounded-lg sm:py-10 xl:py-15 sm:px-10 p-6">
              <form className="space-y-4 md:space-y-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8">  {/* onSubmit={handleSubmit(formData)} */}
                <div className="col-span-2 sm:col-span-1">
                  <label className="block text-sm font-medium text-[#743F00] mb-1">First Name</label>
                  <input type="text" className="w-full bg-[#FFFBF5] rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#743f00]" placeholder="Enter your first name" />  {/* {...register('Cname', { required: { value: true, message: 'Name is required' } })} */}
                  {/* {errors.Cname?.type && <span className="text-red-500 text-xs">{errors.Cname?.message}</span>} */}
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className="block text-sm font-medium text-[#743F00] mb-1">Last Name</label>
                  <input type="text" className="w-full bg-[#FFFBF5] rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#743f00]" placeholder="Enter your last name" />  {/* {...register('Cname', { required: { value: true, message: 'Name is required' } })} */}
                  {/* {errors.Cname?.type && <span className="text-red-500 text-xs">{errors.Cname?.message}</span>} */}
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className="block text-sm font-medium text-[#743F00] mb-1">Email Address</label>
                  <input type="email" className="w-full bg-[#FFFBF5] rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#743f00]" placeholder="Enter your email" />
                  {/* {errors.email?.type && <span className="text-red-500 text-xs">{errors.email?.message}</span>} */}
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className="block text-sm font-medium text-[#743F00] mb-1">Phone Number</label>
                  <input type="text" className="w-full bg-[#FFFBF5] rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#743f00]" placeholder="Enter your phone number" />
                  {/* {errors.phoneNumber?.type && <span className="text-red-500 text-xs">{errors.phoneNumber?.message}</span>} */}
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-[#743F00] mb-1">Your Message</label>
                  <textarea rows="4" className="w-full bg-[#FFFBF5] rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#743f00]" placeholder="Write your message here..."></textarea>
                </div>
                <button type="submit" className="w-full bg-[#FFAB4B] hover:bg-[#f79c34] transition-all cursor-pointer text-[#743f00] font-semibold py-2 sm:py-3 rounded-md transition duration-200">
                  SUBMIT <FontAwesomeIcon icon={faArrowRight} className="ms-1" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
