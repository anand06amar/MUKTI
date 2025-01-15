import { motion } from "framer-motion";

interface CyberpunkCardProps {
  title: string;
  time: string;
  description: string;
  index: number;
  totalItems: number;
}

const CyberpunkCard: React.FC<CyberpunkCardProps> = ({ title, time, description, index, totalItems }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >
      <div className="absolute left-0 w-1 h-full">
        <div className="absolute top-0 left-0 w-6 h-6 bg-blue-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
          <div className="w-4 h-4 bg-blue-200 rounded-full" />
        </div>
        {index < totalItems - 1 && (
          <motion.div
            className="absolute top-6 left-0 w-1 bg-blue-500"
            initial={{ height: 0 }}
            animate={{ height: "calc(100% - 1.5rem)" }}
            transition={{ duration: 0.5, delay: 0.5 }}
          />
        )}
      </div>
      <div className="absolute top-3 left-6 w-6 h-1 bg-blue-500" />
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-gradient-to-br from-black to-blue-900 p-6 rounded-lg border border-blue-500/30 shadow-lg backdrop-blur-sm ml-12"
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
          <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200 mb-2 md:mb-0">
            {title}
          </h3>
          <p className="text-blue-400 text-sm font-medium px-3 py-1 bg-blue-900/50 rounded-full">
            {time}
          </p>
        </div>
        <p className="text-blue-100/80 text-sm">{description}</p>
      </motion.div>
    </motion.div>
  );
};

export default CyberpunkCard;

