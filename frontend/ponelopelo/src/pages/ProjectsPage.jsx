import {motion} from "framer-motion";
import whoareweImage from "../assets/gallery/livinglibrary/livingli.jpg";
import uniformProjectImage from "../assets/gallery/projects/uniformproj.png";
import comproj from "../assets/gallery/projects/communitypr.jpg";

const impactPoints = [
  {
    title: "Supports local businesses and creates jobs in the community.",
    featured: true,
  },
  {
    title: "Provides affordable, made-to-order uniforms delivered straight to schools.",
  },
  {
    title: "Promotes equality and pride by ensuring every child has a proper uniform.",
  },
  {
    title: "Expands skills and opportunities - by employing local women.",
  },
];

function ProjectsPage () {
    return (
        <>

        <motion.section id="community-section"
        initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}

        className="bg-white py-15">

            <div className="max-w-7xl mx-auto px-6">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                <div className="md:text-right">
                    <span className="text-sm font-semibold uppercase tracking-[0.25em] text-red-500">
                    COMMUNITY PROJECT
                  </span>
                    <h2 className="text-4xl font-bold text-[#1d3554]">
                    Building Stronger Communities: Uniting for Positive Change
                    </h2>

                    <p className="mt-6 text-gray-700 leading-tight">
                    Our community projects foster school community integration, creating business opportunities 
                    for local residents. We provide school uniforms and support mask projects, while celebrating 
                    cultural diversity with traditional attire days and culture festivals. Musical instruments and 
                    culture groups enrich community life, and traditional medicine gardens promote holistic 
                    well-being. We offer support for the elderly and implement special needs projects, while 
                    emphasizing waste management and recycling for a cleaner environment. Our community center 
                    serves as a hub for youth programs and computer training, empowering the next generation. 
                    Together, let’s create a vibrant and inclusive community for all.
                    </p>

                </div>

                <img
                    src={comproj}
                    alt="Youth Academy"
                    className="rounded-3xl shadow-xl w-full object-cover"
                />

                </div>

            </div>

        </motion.section>

        <motion.section id="school-section" 
        initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
        
        className="py-15 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="flex flex-col md:flex-row items-center justify-center md:gap-20">

                    <div className="w-full md:w-[600px] flex-shrink-0">
                        <img
                        src={whoareweImage}
                        alt="Research Framework"
                        className="w-full rounded-3xl shadow-xl"
                        />
                    </div>

                    <div className="text-left">
                        <span className="text-sm font-semibold uppercase tracking-[0.25em] text-red-500">
                        SCHOOL PROJECT
                      </span>
                        <h2 className="text-4xl mb-3 font-bold text-[#1d3554]">
                        Empowering Education: Creating Thriving Schools Together
                        </h2>

                    <p className="mt-6 text-gray-700 max-w-[500px] leading-tight">
                        Our school projects encompass a wide range of support activities 
                        aimed at creating an enriching learning environment. We strive to empower 
                        students by establishing a variety of initiatives, such as a thriving veggie 
                        garden that fosters their connection with nature. An outdoor classroom provides
                         a dynamic space for interactive learning, while a designated chill area promotes 
                         relaxation and well-being. Our weather station encourages scientific curiosity, 
                         and a free zone encourages creativity and self-expression. To preserve local 
                         biodiversity, we establish indigenous nurseries. Furthermore, we create vibrant culture 
                         centers with captivating displays and well-stocked libraries to nurture a love for knowledge. 
                         We also revitalize school spaces through painting and refreshing, ensuring an inspiring 
                         ambiance. A fully equipped school kitchen supports nutrition and healthy eating habits, 
                         while rainwater harvesting promotes sustainability. Finally, we promote the importance of 
                         sports and recreation to encourage physical fitness and team spirit. Through these support 
                         activities, we strive to create a nurturing and holistic educational environment for all 
                         students.
                    </p>

                    </div>

                </div>

            </div>
            </motion.section>

            <motion.section id="uniform-section" 
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            
            className="bg-white px-5 py-10 sm:px-8 lg:px-12 lg:py-14">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#233D60] sm:text-3xl lg:text-4xl">
            School Uniform Project
          </h2>

          <p className="mt-1 text-sm font-bold text-red-500 sm:text-base">
            A school uniform for every child - made by the community, for the
            community
          </p>

          <p className="mx-auto mt-3 max-w-3xl text-sm leading-tight text-[#233D60] sm:text-base">
            The School Uniform Project is one of Ponelo Pelo’s founding
            initiatives, built to grow pride, identity and equality in schools.
            Wearing a uniform helps a child feel part of their school
            community, boosts self-esteem, and creates a sense of belonging and
            it removes the visible inequality that comes when some children
            have a proper uniform and others do not.
          </p>
        </div>

        {/* Main Content */}
        <div className="mt-8 grid grid-cols-1 items-start text-left gap-8 md:grid-cols-[0.85fr_1.15fr] md:gap-6 lg:mt-10 lg:gap-7">
          
          {/* Image */}
          <div className="overflow-hidden rounded-2xl">
            <img
              src={uniformProjectImage}
              alt="Local entrepreneur working on a school uniform"
              className="h-auto w-full object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h3 className="text-2xl font-bold leading-none text-[#233D60] sm:text-3xl">
              Made locally, by local entrepreneurs
            </h3>

            <p className="mt-2 text-sm leading-tight text-[#233D60] sm:text-base">
              Through this project we partner with local entrepreneurs like
              Kedibone Mathibela, who runs Vukvile Trading in Acornhoek under
              her brand Kedi’s. Kedibone started her business in 2007 and today
              produces high-quality, affordable school uniforms - full
              uniform packs of shirts, skirts, trousers, jerseys, socks and
              shoes, tailored to each school’s colours and sizes and finished
              with embroidered logos, made to order and delivered directly to
              the school.
            </p>

            {/* Why it matters */}
            <h4 className="mt-4 text-sm font-bold text-[#233D60] sm:text-base">
              Why it matters
            </h4>

            {/* Impact Cards */}
            <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {impactPoints.map((point, index) => (
                <div
                  key={index}
                  className={`flex min-h-[64px] items-center rounded-xl px-5 py-3 text-xs leading-tight text-[#233D60] sm:text-sm ${
                    "bg-slate-100"
                  }`}
                >
                  {point.title}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
        </>
    )
}

export default ProjectsPage;