import { FC } from "react"

interface Props {
    text: string;
}

export const Card: FC<Props> = (props) => {
    return (
        <div className="bg-violet-600 hover:bg-violet-800 hover:scale-105 text-6xl w-fit h-fit py-3 px-6 rounded-lg">
            {props.text}
        </div>
    )
}