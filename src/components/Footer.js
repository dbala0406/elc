export default function Footer() {
  return (
    <footer id="footer" className="text-center w-full bg-purple-600 text-white p-4 backdrop-blur-md z-50 text-sm sm:text-lg font-montserrat">
      <p>
        © {new Date().getFullYear()} E-Learning Center. All rights reserved.
      </p>
    </footer>
  );
}
