import { SiFacebook, SiInstagram, SiWhatsapp, SiViber } from "react-icons/si";

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-12">
      <div className="max-w-3xl mx-auto text-center px-4 sm:px-6">
        <h2 className="font-bold tracking-tight text-purple-900 text-2xl sm:text-4xl font-montserrat mb-6">
          Get in Touch
        </h2>

        {/* Social Media Links */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
          {[
            { icon: SiWhatsapp, link: "https://wa.me/9607744531" },
            { icon: SiFacebook, link: "https://www.facebook.com/people/E-Learning-Centre/61556346217028/" },
            { icon: SiInstagram, link: "https://www.instagram.com/elearning_centre/" },
            { icon: SiViber, link: "viber://chat?number=+9607744531" },
          ].map(({ icon: Icon, link }, index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 sm:p-4 border-2 border-purple-700 rounded-full transition-transform transform hover:scale-110 hover:shadow-lg"
            >
              <Icon size={28} className="text-purple-900 size-4 sm:size-8" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
