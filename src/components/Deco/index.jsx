function Deco(){
    return (
        <div className="h-[80vh] w-full">
            {/* Squares */}
            <div className="h-2/5 aspect-[1.5/1] deco-rectangle absolute left-[40%] top-[10%]"/>
            <div className="h-1/2 aspect-[1.5/1] deco-rectangle absolute left-[50%] top-[25%]"/>

            {/*Text Area */}
            <div className="absolute left-[10%] top-[50%]">
                <p className="text-mainColor10 font-semibold text-7xl">Hey There</p>
                <p className="text-mainColor30 text-7xl">I' m M.A. Alison</p>
                <p className="text-mainColor30 text-7xl">Emilien</p>
            </div>
        </div>

    );
}

export default Deco;