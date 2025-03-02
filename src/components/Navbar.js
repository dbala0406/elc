import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">EduLearn</h1>
      <div>
        <Link to="#about" className="mx-2">About</Link>
        <Link to="#courses" className="mx-2">Courses</Link>
        <Link to="#contact" className="mx-2">Contact</Link>
      </div>
    </nav>
  );
}