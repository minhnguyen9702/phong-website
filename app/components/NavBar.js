import Link from "next/link";
import * as motion from "motion/react-client";

const NavBar = () => {
  return (
    <div className="flex justify-around">
      <motion.div
        whileHover={{ scale: 1.1 }} // Optional: Adds a slight scale effect on hover
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Link href="/">Who Are We</Link>
      </motion.div>
      <Link href="/">What Do We Do</Link>
      <Link href="/">News</Link>
      <Link href="/">Careers</Link>
    </div>
  );
};

export default NavBar;
