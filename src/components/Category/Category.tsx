import { FC } from "react"

interface Props {
    text: string;
}

export const Category: FC<Props> = (props) => {
    return (
        <div className="static">
            <div className="flex justify-center">
                <span className="text-xl font-mono relative top-3 z-10 text-violet-400">Category</span>
            </div>
            <div className="flex justify-center">
                <div className="relative text-5xl w-fit h-fit py-4 px-8 rounded-lg uppercase">
                    {props.text}
                </div>
            </div>
        </div>
    )
}