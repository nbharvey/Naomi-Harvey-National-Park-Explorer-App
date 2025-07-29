import React from 'react';

// --- Type Definition ---
// Defines the props for the Shimmer component. It accepts any valid React nodes as children.
interface ShimmerProps {
    children: React.ReactNode;
}

// --- Keyframes for the Animation ---
// We define the animation keyframes in a <style> tag to make this component
// self-contained. This animation moves the background gradient from left to right.
const keyframes = `
@keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
}
`;

// --- Component ---

const Shimmer: React.FC<ShimmerProps> = ({ children }) => {
    return (
        <>
            {/* The style tag injects the keyframes into the document's head. */}
            <style>{keyframes}</style>
            <div
                className="
                    bg-gradient-to-r from-slate-500 via-white to-slate-500 
                    bg-clip-text text-transparent 
                    bg-[length:200%_auto] 
                    animate-[shimmer_2s_linear_infinite]
                "
            >
                {children}
            </div>
        </>
    );
}

export default Shimmer;
