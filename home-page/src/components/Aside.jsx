function Aside(){
    return(
        <div>
            <aside className="flex h-screen">
                <div className="flex flex-col bg-linear-to-b from-black to-70% to-red-800 text-white w-60 items-center gap-5 pt-5">    
                <button className="bg-red-600 rounded-2xl h-[3.75rem] w-[12.625rem] cursor-pointer"><p>Progresso</p></button>
                <button className="bg-red-600 rounded-2xl h-[3.75rem] w-[12.625rem] cursor-pointer"><p>Treino em casa</p></button>
                <button className="bg-red-600 rounded-2xl h-[3.75rem] w-[12.625rem] cursor-pointer"><p>Treino na academia</p></button>
                <button className="bg-red-600 rounded-2xl h-[3.75rem] w-[12.625rem] cursor-pointer"><p>Corrida</p></button>
                </div>
            </aside>
        </div>
    )
}

export default Aside