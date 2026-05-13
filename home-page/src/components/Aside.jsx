function Aside(){
    return(
        // h-full = heigth/screen ocupando tudo
        <div>
            <aside className=" h-full flex flex-col bg-linear-to-b from-black to-70% to-red-800 text-white w-60 items-center gap-5 pt-5">
                <button className="bg-red-600 rounded-2xl h-[3.75rem] w-[12.625rem] cursor-pointer"><p>Progresso</p></button>
                <button className="bg-red-600 rounded-2xl h-[3.75rem] w-[12.625rem] cursor-pointer"><p>Cronograma de treinos</p></button>
                <button className="bg-red-600 rounded-2xl h-[3.75rem] w-[12.625rem] cursor-pointer"><p>Treino em casa</p></button>
                <button className="bg-red-600 rounded-2xl h-[3.75rem] w-[12.625rem] cursor-pointer"><p>Treino na academia</p></button>
                <button className="bg-red-600 rounded-2xl h-[3.75rem] w-[12.625rem] cursor-pointer"><p>Corrida</p></button>
            </aside>
        </div>
    )
}

export default Aside