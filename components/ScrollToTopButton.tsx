"use client"

import { FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ScrollToTopButton() {
    const isBrowser = () => typeof window !== 'undefined';

    function scrollToTop() {
        if (!isBrowser()) return;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <motion.button className="fixed shadow-xl z-50 bottom-4 right-6   p-3 bg-primary hover:bg-secondary transition-colors duration-300 text-white rounded-full" onClick={scrollToTop}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 1.1 }}>
            <FaArrowUp />
        </motion.button>
    );
}