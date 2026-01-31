import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseStyles = "px-6 py-3 rounded-full font-medium transition-all focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2";

    const variants = {
        primary: "bg-primary text-secondary hover:bg-white hover:text-secondary hover:shadow-lg hover:border-primary border border-transparent hover:border-current",
        secondary: "bg-secondary text-white hover:bg-opacity-90 hover:shadow-lg",
        outline: "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-secondary",
        white: "bg-white text-secondary hover:bg-gray-100 hover:shadow-md"
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;
