import { FC } from "react"

interface Props {
    text: string;
}

export const Category: FC<Props> = (props) => {
    return (
        <div className="">
            <div className="flex justify-center items-center gap-2">
                <span className="text-xl font-mono text-violet-400">
                    Category
                </span>
                <div className="tooltip tooltip-right" data-tip="Refresh Category">
                    <button className="btn btn-sm btn-square btn-solid bg-violet-600 hover:bg-violet-700">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="relative text-5xl w-fit h-fit py-1 px-2 rounded-lg uppercase">
                    {props.text}
                </div>
            </div>
        </div>
    )
}