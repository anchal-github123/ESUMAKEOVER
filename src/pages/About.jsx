import ownerImg from "../assets/Shradha.webp"; // add her image here

export default function About() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">

      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-3">
          About <span className="text-primary">Esumakeover</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Enhancing beauty with passion, professionalism, and years of expertise.
        </p>
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* Image */}
        <div className="w-full h-[350px] md:h-[450px] overflow-hidden rounded-2xl shadow-lg">
          <img
            src={ownerImg}
            alt="Shraddha Pani"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Meet the Artist 💄
          </h2>

          <p className="text-gray-600 mb-4">
            <span className="font-semibold text-black">Shraddha Pani</span> is a certified professional makeup artist and the proud owner of Esumakeover. With over 8 years of experience in the beauty industry, she has helped countless clients look stunning on their special occasions.
          </p>

          <p className="text-gray-600 mb-4">
            Specializing in bridal, engagement, and party makeup, she combines modern techniques with a deep understanding of skin types and personal styles to deliver flawless results.
          </p>

          <p className="text-gray-600 mb-6">
            Based in Talcher (NTPC Kaniha), Esumakeover is known for its premium quality services, attention to detail, and commitment to client satisfaction.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-100 p-4 rounded-xl text-center">
              <h3 className="text-xl font-bold text-primary">8+</h3>
              <p className="text-sm text-gray-600">Years Experience</p>
            </div>

            <div className="bg-gray-100 p-4 rounded-xl text-center">
              <h3 className="text-xl font-bold text-primary">12.5K+</h3>
              <p className="text-sm text-gray-600">Happy Followers</p>
            </div>

            <div className="bg-gray-100 p-4 rounded-xl text-center">
              <h3 className="text-xl font-bold text-primary">650+</h3>
              <p className="text-sm text-gray-600">Projects Done</p>
            </div>

            <div className="bg-gray-100 p-4 rounded-xl text-center">
              <h3 className="text-xl font-bold text-primary">100%</h3>
              <p className="text-sm text-gray-600">Client Satisfaction</p>
            </div>
          </div>

          
        </div>
      </div>

    </section>
  );
}