import YouthProgrammeSection from "../components/YouthProgrammeSection";
import HistorySection from "../components/HistorySection";
import Committee from "../components/Committee";
import whoareweImage from "../assets/gallery/about/whoarewe.webp";
import mission1 from "../assets/gallery/about/mission1.jpg";
import mission2 from "../assets/gallery/about/mission2.jpg";
import mission3 from "../assets/gallery/about/mission3.jpg";
import mission4 from "../assets/gallery/about/mission4.jpg";

const images = [mission1, mission2, mission3, mission4]

function AboutPage() {
    return (
        <>
            <section className="bg-[#1c3b72] py-16 lg:py-20">
                <div className="max-w-5xl mx-auto px-6 text-left">
                    <h2 className="text-3xl lg:text-5xl font-bold text-white">
                    About Ponelo Pelo
                    </h2>

                    <p className="mt-5 text-lg lg:text-2xl text-white max-w-4xl  leading-tight mx-auto">
                    We bring collaboration between schools and communities for a brighter future of our learners.
                    </p>
                </div>
            </section>

            <section className="py-15 bg-white">
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
                        {/* Text */}
                        <h2 className="text-4xl mb-3 font-bold text-[#1d3554]">
                        We Are Ponelo Pelo
                        </h2>

                    <p className="mt-6 text-gray-700 max-w-[500px] leading-tight">
                        In Sepedi, Ponelo Pelo means “look far,” and it captures the heart of everything we do. We help
                        schools, learners and their communities envision - and build - a brighter future through
                        education, sport, culture and local development.
                        <br /><br />

                        We firmly believe that a prosperous future is only possible when schools and communities grow
                        hand in hand. That is why we work directly inside schools and villages, with simple, low-cost,
                        locally-run activities that build confidence, discipline, skills and pride. By meeting young people
                        where they are - on the sports field, in the chess club, around the storyteller’s fire - we open
                        doors that classroom learning alone cannot.
                        <br /><br />

                        From our beginnings as a whole-school pilot in Acornhoek, we now run an integrated Youth
                        Programme across the Greenvalley school circuit, combining sport, mind-sport, storytelling and
                        material support into one connected effort. Our future is bright.
                    </p>

                    </div>

                </div>

            </div>
            </section>

            <section className="bg-[#f3f6f9] py-16 lg:py-20">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#1d3554]">
                    Our Vision
                    </h2>

                    <p className="mt-5 text-lg lg:text-2xl text-[#1d3554] max-w-4xl  leading-tight mx-auto">
                    A future where young people across Bushbuckridge and rural South Africa grow up healthy,
                    confident and proud - where every learner can play, think, create and dream, where schools
                    and communities thrive together, and where local talent is given every chance to shine. Our
                    future is bright.
                    </p>
                </div>
            </section>

            <section className="bg-white py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-10">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Images */}
                    <div className="grid grid-cols-2 gap-4">
                        {images.map((image, index) => (
                        <div
                            key={index}
                            className="overflow-hidden rounded-2xl shadow-md group"
                        >
                            <img
                            src={image}
                            alt={`Mission activity ${index + 1}`}
                            className="w-full h-36 sm:h-44 md:h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        ))}
                    </div>

                    {/* Right Content */}
                    <div className="text-[#1F3558]">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Our Mission
                        </h2>

                        <p className="text-lg leading-relaxed text-slate-700">
                        We deliver low-cost, school-and-community-anchored programmes that
                        build the wellbeing, skills and opportunities of young people.
                        </p>

                        <p className="mt-5 text-lg leading-relaxed text-slate-700">
                        Through sport, chess, storytelling and practical support, we
                        strengthen participation, discipline, literacy and identity using
                        simple equipment, local facilitation and structured events.
                        </p>

                        <p className="mt-5 text-lg leading-relaxed text-slate-700">
                        We always work hand in hand with schools, circuits and communities
                        so that ownership stays local and the impact lasts.
                        </p>
                    </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#f3f6f9] py-16 lg:py-20">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#1d3554]">
                    Career
                    </h2>

                    <p className="mt-5 text-lg lg:text-2xl text-[#1d3554] max-w-4xl  leading-tight mx-auto">
                    Working at Ponelo Pelo means rolling up your sleeves alongside teachers, coaches, storytellers
                    and communities to build something that lasts. We look for people who are patient, resourceful
                    and deeply respectful of the communities we serve - coaches, facilitators, story collectors,
                    <br/>
                    chess mentors and volunteers who believe that talent is everywhere, even where resources are
                    scarce. If you want your work to change young lives, there is a place for you here.
                    </p>
                </div>
            </section>

            <YouthProgrammeSection />

            <section className="bg-[#f3f6f9] py-16 lg:py-20">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#1d3554]">
                    Where We Work
                    </h2>

                    <p className="mt-5 text-lg lg:text-2xl text-[#1d3554] max-w-4xl  leading-tight mx-auto">
                    We started in the Greenvalley school circuit in the Acornhoek area of Mpumalanga Province -
                    one of the most under-resourced parts of South Africa, where the legacy of apartheid-era
                    “homeland” policies still shapes daily life through overcrowded classrooms, ageing facilities,
                    high unemployment and limited opportunity for young people.
                    Our partner schools are organised into three clusters - Bridgeway, Mountain and Acornhoek -
                    covering primary, combined and high schools. We work directly with each school’s principal and
                    designated sports organiser, building from a shared database of each school’s facilities,
                    <br />
                    activities and needs so that support is matched to what each school can actually use and
                    sustain.
                    <br/>
                    It is also a place of resilience, talent and deep community spirit - and that is exactly why we
                    believe its future is bright.
                    </p>
                </div>
            </section>

            <HistorySection />

            <Committee />
        </>
    )
}

export default AboutPage;;