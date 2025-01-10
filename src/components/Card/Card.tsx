import { MouseEvent } from "react"

interface CardProps {
    text: string;
    onClick: (event: MouseEvent) => void;
}

export const Card = ({ text, onClick }: CardProps) => {
    return (
        <div
            onClick={onClick}
            className="bg-violet-600 hover:bg-violet-800 hover:scale-105 text-4xl h-auto py-3 px-6 rounded-lg text-pretty text-center drop-shadow-xl cursor-pointer"
        >
            {text}
        </div>
    )
}