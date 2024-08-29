function Deco(){
    return (
        <div className="h-[80vh] w-full">
            {/* Squares */}
            <div className="h-2/5 aspect-[1.5/1] deco-rectangle absolute left-[40%] top-[10%]"/>
            <div className="h-1/2 aspect-[1.5/1] deco-rectangle absolute left-[50%] top-[25%]"/>

            {/*Text Area */}
            <div className="absolute left-[20%] top-[40%]">
                <p className="text-[#ff9900] font-semibold text-[50px]">Hey There</p>
                <p className="text-[#ffffff] text-[50px]">I' m M.A. Alison</p>
                <p className="text-[#ffffff] text-[50px]">Emilien</p>
            </div>
        </div>

    );
}

export default Deco;