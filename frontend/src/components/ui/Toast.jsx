import React, { useEffect } from "react";

const stylesByType = {
  success: {
    border: "border-emerald-400/30",
    bg: "bg-emerald-500/10",
    title: "text-emerald-200",
    dot: "bg-emerald-400",
  },
  error: {
    border: "border-rose-400/30",
    bg: "bg-rose-500/10",
    title: "text-rose-200",
    dot: "bg-rose-400",
  },
  info: {
    border: "border-sky-400/30",
    bg: "bg-sky-500/10",
    title: "text-sky-200",
    dot: "bg-sky-400",
  },
  warning: {
    border: "border-amber-400/30",
    bg: "bg-amber-500/10",
    title: "text-amber-200",
    dot: "bg-amber-400",
  },
};

export default function Toast({ message, type = "info", duration = 3000, onClose }) {
  useEffect(() => {
    if (!duration) return;
    const id = setTimeout(() => onClose?.(), duration);
    return () => clearTimeout(id);
  }, [duration, onClose]);

  const s = stylesByType[type] || stylesByType.info;

  return (
    <div className="fixed top-4 right-4 z-[9999] px-4 w-full max-w-md">
      <div
        className={[
          "w-full  rounded-xl border backdrop-blur",
          "shadow-[0_10px_30px_rgba(0,0,0,0.45)]",
          "px-4 py-3 flex items-start gap-3",
          "animate-[toastIn_140ms_ease-out]",
          s.border,
          s.bg,
        ].join(" ")}
        role="status"
        aria-live="polite"
      >
        <span className={["mt-1 h-2.5 w-2.5 rounded-full shrink-0", s.dot].join(" ")} />

        <div className="flex-1 min-w-0">
          <div className={["text-sm font-semibold", s.title].join(" ")}>
            {type === "success"
              ? "Success"
              : type === "error"
                ? "Error"
                : type === "warning"
                  ? "Warning"
                  : "Info"}
          </div>
          <div className="text-[13px] text-white/80 leading-snug break-words">{message}</div>
        </div>

        <button
          type="button"
          onClick={() => onClose?.()}
          className="text-white/60 hover:text-white/90 text-lg leading-none -mt-0.5 px-1"
          aria-label="Close toast"
        >
          ×
        </button>
      </div>

      <style>{`
        @keyframes toastIn {
          from { transform: translateY(-6px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
}

