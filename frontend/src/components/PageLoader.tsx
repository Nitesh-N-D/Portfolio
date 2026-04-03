import { motion } from "framer-motion";

export default function PageLoader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-0 z-[1400] flex flex-col items-center justify-center bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_28%),linear-gradient(180deg,#020617_0%,#0f172a_55%,#020617_100%)]"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
        className="h-14 w-14 rounded-full border-4 border-white/10 border-t-blue-400"
      />
      <p className="mt-6 text-lg font-semibold tracking-tight text-white">
        Welcome to my portfolio
      </p>
      <p className="mt-2 text-sm text-slate-400">
        Loading projects, experience, and code highlights.
      </p>
    </motion.div>
  );
}
