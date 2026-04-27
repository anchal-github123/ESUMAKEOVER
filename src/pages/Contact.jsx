export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">

      {/* Title */}
      <h1 className="text-3xl font-bold text-center mb-10">
        Contact Us
      </h1>

      <div className="grid md:grid-cols-2 gap-10">

        {/* Left - Info */}
        <div className="space-y-6">

          {/* Address */}
          <div className="bg-white shadow-md rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-2">📍 Address</h2>
            <p className="text-gray-600">
              Esu Makeover Studio <br />
              Talcher, NTPC Kaniha <br />
              Odisha, India
            </p>
          </div>

          {/* Call */}
          <div className="bg-white shadow-md rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-2">📞 Call Us</h2>
            <a
              href="tel:+6372294113"
              className="inline-block mt-2 bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition"
            >
              Call Now
            </a>
          </div>

          {/* WhatsApp */}
          <div className="bg-white shadow-md rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-2">💬 WhatsApp</h2>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition"
            >
              Chat on WhatsApp
            </a>
          </div>

          {/* Instagram */}
          <div className="bg-white shadow-md rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-2">📸 Instagram</h2>
            <a
              href="https://www.instagram.com/esu_makeover_official/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full hover:opacity-90 transition"
            >
              Follow Us
            </a>
          </div>

        </div>

        {/* Right - Map */}
        <div className="rounded-2xl overflow-hidden shadow-md">
          <iframe
            title="location"
            src="https://maps.google.com/maps?q=talcher%20odisha&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-[400px] border-0"
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </div>
  );
}