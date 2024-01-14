import { motion } from "framer-motion";

const ToggleButton = ({ setOpen }) => {
  return (
    <button onClick={() => setOpen((prev) => !prev)}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          variants={{
            closed: { d: "M4 12H20" },
            open: { d: "M13 1L1 13" },
          }}
        />
        <motion.path
          d="M1 1L13 13"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          variants={{
            closed: { opacity: 0 },
            open: { opacity: 1 },
          }}
        />

        <motion.path
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          variants={{
            closed: { d: "M4 6H20" },
            open: { d: "M13 1L1 13" },
          }}
        />

        <motion.path
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          variants={{
            closed: { d: "M4 18H20" },
            open: { d: "M13 1L1 13" },
          }}
        />
      </svg>
    </button>
  );
};

export default ToggleButton;
