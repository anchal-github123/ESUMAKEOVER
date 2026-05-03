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

          {/* ESU MAKEOVER - All Locations */}
          <div className="bg-white shadow-md rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-4 text-pink-600">
              ESU MAKEOVER
            </h2>

            {/* Salon & Spa */}
            <div className="mb-4">
              <h3 className="font-semibold text-lg">📍 Salon & Spa  <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
      Shop 1
    </span> </h3>
              <p className="text-gray-600">
                Talcher, NTPC, Kaniha <br />
                Bypass, Somanath Hotel Front <br />
                Odisha, India
              </p>
            </div>

            {/* Makeup Studio */}
            <div>
              <h3 className="font-semibold text-lg">💄 Makeup Studio  <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
      Shop 2
    </span></h3>
              
              <p className="text-gray-600">
                Talcher, NTPC <br />
                PK Studio Front <br />
                Odisha, India
              </p>
            </div>
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
              href="https://wa.me/918342058486"
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



                 {/* Facebook */}
<div className="bg-white shadow-md rounded-2xl p-6">
  <h2 className="text-xl font-semibold mb-2">📘 Facebook</h2>
  <a
    href="https://www.facebook.com/profile.php?id=100087495788732"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block mt-2 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
  >
    Follow on Facebook
  </a>
</div>

        </div>

 

        {/* Right - Map */}
        <div className="rounded-2xl overflow-hidden shadow-md">
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119129.07916423511!2d84.9249935972656!3d21.081298599999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1f53e6c7f1cfa7%3A0x6bed76520279e739!2sEsu%20Makeover!5e0!3m2!1sen!2sin!4v1777783653820!5m2!1sen!2sin" width="600" height="450"  loading="lazy" referrerpolicy="no-referrer-when-downgrade">

         </iframe>
        </div>

      </div>
    </div>
  );
}