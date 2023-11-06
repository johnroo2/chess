import { useState } from "react"
import { boardThemes, boardConfig } from "../helpers/boardThemes"

interface Props{
    theme:string
}

export default function BlankBoard({theme}:Props){
    const [board,] = useState<number[][]>(boardConfig.blank)

    return(
        <div className="relative flex flex-col border-2 border-neutral-700 w-min">
            {board.map((row, rkey) => 
            <div className="flex flex-row" key={rkey}>
                {row.map((square, ckey) => 
                <div className={`relative border-[1px] transition-colors duration-500 border-neutral-700 flex flex-row`} key={ckey + square}
                    style={{
                        backgroundColor: (ckey+rkey) % 2 == 0 ? boardThemes[theme].light : boardThemes[theme].alt,
                        width: boardConfig.tileSize,
                        height: boardConfig.tileSize
                    }}>
                </div>
                )}
            </div>)}
        </div>
    )
}