import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faViber } from "@fortawesome/free-brands-svg-icons";

export default function FloatingHelpIcon() {
  return (
    <section className="fixed bottom-5 right-5 flex flex-col gap-3 floating-icons">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/9607744531"  // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-transform transform hover:scale-110 cursor-pointer text-center"
      >
        <FontAwesomeIcon icon={faWhatsapp} className="text-2xl" />
      </a>

      {/* Viber Button */}
      <a
        href="viber://chat?number=+9607744531"  // Replace with your Viber number
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-transform transform hover:scale-110 cursor-pointer text-center"
      >
        <FontAwesomeIcon icon={faViber} className="text-2xl" />
      </a>
    </section>
  );
}
