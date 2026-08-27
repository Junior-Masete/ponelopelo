import {motion} from "framer-motion";
import livinglibr from "../assets/gallery/livinglibrary/living_library3.jpg";

const publications = [
  {
    title: "The Tales of the Village of Many Footprints",
    description:
      "eleven “tall tales for telling aloud after dark,” each woven from a belief that lives in this land (that the python holds the rain, that a storm is a great serpent coiled in the hills, that the ancestors speak through the ground) and folding a gentle lesson back into the wonder. The tales are bilingual by design: each one leaves a Sepedi voice box open so that elders and community translators can pour in the true words (in a follow-up phase of the story collection), with the English meaning kept beneath — never instead.",
  },
  {
    title:
      "The Village of Many Footprints - composite reader and lesson plans",
    description:
      "an animal allegory for upper-primary and junior-secondary learners, turning the recorded animal interviews into a single story with full lesson plans, activities and discussion questions that are classroom, linking to life orientation, language, heritage and environmental learning.",
  },
  {
    title: "The Animal Facts Table",
    description:
      "a senior-learner resource that sets the community’s animal knowledge beside verified facts from trusted sources (WWF, Britannica, National Geographic and others), with local names and classroom lesson hooks, so learners can tell a fact from a folk-tale while honouring both.",
  },
  {
    title: "The Story Collector’s Handbook",
    description:
      "a full field guide for anyone gathering oral memory: how to prepare, how to listen, how to seek consent, how to care for elders and children, the seven kinds of stories to collect, and how to turn a recording into a living book.",
  },
  {
    title: "A Taste of Tales",
    description:
      "In the long-ago, before this village had a name, the rains came when they pleased... Then came the year the Great Python, old as the river and patient as stone, woke beneath the reed beds — and, half-dreaming, mistook the first storm cloud for an egg, and swallowed the storm whole. And the rain did not fall... — opening of “The Python Who Swallowed the Rain” Each tale closes with a thalhol (the lesson). The python’s is this: a thing held too long out of pride poisons the one who holds it; it is the small, honest question — not the grand gift — that opens the jaws of a proud heart.",
  },
];

function LivingLibraryPage() {
    return (
    <>
        <section 
        className="bg-[#1c3b72] py-16 lg:py-20">
        <motion.div 
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        
        className="max-w-5xl mx-auto px-6 text-left">
                    <h2 className="text-3xl lg:text-5xl font-bold text-white">
                    Living Library
                    </h2>

                     <p className="mt-5 text-lg lg:text-2xl text-white max-w-4xl  leading-tight mx-auto">
                    Every elder is a book. Every child is a book still being written.
                     </p>
                    <br />
                    <p className="mt-5 text-lg lg:text-2xl text-white max-w-4xl  leading-tight mx-auto">
                   The Ponelo Pelo Living Library is a living archive of our communities’ voices. Where a book sits
                    silent on a shelf, our library breathes - it is made of people, memory and the spoken word.
                    Learners gather the stories, songs, sayings and wisdom that have been passed down for
                    generations, record them with care and consent, and return them to the community as a lasting
                    resource - in books, recordings and song.
                    </p>
                </motion.div>
            </section>

            <motion.section 
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            
            className="py-15 bg-white">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="flex flex-col md:flex-row items-center justify-center md:gap-20">


                    <div className="text-left">
                        {/* Text */}
                        <h3 className="text-4xl mb-3 font-bold text-[#1d3554]">
                        Stories collected by our own young people
                        </h3>

                    <p className="mt-6 text-gray-700 max-w-[500px] leading-tight">
                        In 2025, young adults from the Ponelo Pelo Schools project went out with voice recorders into
                        the villages of Buelang and Moloro and gathered the stories, beliefs and animal lore of their own
                        elders. Those recordings have become the first published readers of the Living Library - proof
                        that a community’s richest knowledge, once thought of as “just talk,” can be honoured, kept, and
                        shared with the world.
                    </p>

                    </div>

                    <div className="w-full md:w-[600px] flex-shrink-0">
                        <img
                        src={livinglibr}
                        alt="Research Framework"
                        className="w-full rounded-3xl shadow-xl"
                        />
                    </div>

                </div>

            </div>
        </motion.section>

        <motion.section 
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        
        className="bg-white px-4 py-8 sm:px-6 lg:px-8">
            <div className="mx-auto w-full max-w-3xl">
                {/* Heading */}
                <h2 className="mb-6 text-center text-2xl font-bold text-[#233D60] sm:text-3xl">
                What we have published
                </h2>

                {/* Publications */}
                <div className="space-y-4 sm:space-y-5">
                {publications.map((publication) => (
                    <article
                    key={publication.title}
                    className="rounded-2xl bg-slate-100 px-6 py-6 sm:px-10 sm:py-7"
                    >
                    <h3 className="mb-1 text-sm font-bold leading-tight text-[#233D60] sm:text-base">
                        {publication.title}
                    </h3>

                    <p className="text-xs leading-[1.15] text-[#233D60] sm:text-sm sm:leading-[1.2]">
                        {publication.description}
                    </p>
                    </article>
                ))}
                </div>
            </div>
    </motion.section>
    </>
    )
}

export default LivingLibraryPage;