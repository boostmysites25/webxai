"use client";

import { useState, useRef, useEffect } from "react";

interface Option {
    value: string;
    label: string;
}

interface CustomDropdownProps {
    options: Option[];
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    className?: string;
}

export default function CustomDropdown({
    options,
    value,
    onChange,
    placeholder = "Select an option",
    className = "",
}: CustomDropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const selectedOption = options.find((opt) => opt.value === value);

    return (
        <div ref={wrapperRef} className={`relative ${className}`}>
            {/* Trigger Area */}
            <div
                className={`
          cursor-pointer w-full px-4 py-3 rounded-xl 
          bg-white/5 border border-white/10 
          text-white backdrop-blur-md 
          flex items-center justify-between
          transition duration-200
          ${isOpen ? "border-white/30 ring-1 ring-white/10" : "hover:border-white/30"}
        `}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className={`block truncate ${selectedOption ? "text-white" : "text-white/40"}`}>
                    {selectedOption ? selectedOption.label : placeholder}
                </span>

                {/* Arrow Icon */}
                <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    className={`transform transition-transform duration-200 text-white/50 ml-2 shrink-0 ${isOpen ? "rotate-180" : "rotate-0"}`}
                >
                    <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>

            {/* Dropdown Menu */}
            {isOpen && (
                <div
                    className="absolute left-0 top-full mt-2 w-full max-h-60 overflow-y-auto rounded-xl 
                     bg-[#0C0C12] border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.7)] z-50"
                >
                    {options.map((option) => (
                        <div
                            key={option.value}
                            className={`
                px-4 py-3 cursor-pointer text-sm transition duration-150 border-b border-white/5 last:border-0
                hover:bg-white/10 hover:text-white
                ${value === option.value ? "bg-white/10 text-white font-medium" : "text-white/70"}
              `}
                            onClick={() => {
                                onChange(option.value);
                                setIsOpen(false);
                            }}
                        >
                            {option.label}
                        </div>
                    ))}
                    {options.length === 0 && (
                        <div className="px-4 py-3 text-white/40 text-sm text-center">No options available</div>
                    )}
                </div>
            )}
        </div>
    );
}
