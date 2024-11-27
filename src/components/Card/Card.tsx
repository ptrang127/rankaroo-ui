import { FC } from "react"

interface Props {
    text: string;
}

export const Card: FC<Props> = (props) => {
    return (
        <div className="bg-violet-600 hover:bg-violet-800 hover:scale-105 text-4xl h-auto py-3 px-6 rounded-lg text-pretty text-center drop-shadow-xl">
            {props.text}
        </div>
    )
}