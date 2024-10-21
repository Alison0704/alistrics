function Hardware(){
    return (
        <div className="overflow-hidden">
            <p className="flex justify-center text-white">
                Hardware section</p>
            <button className="bg-transparent border-2 border-mainColor10 text-mainColor10 rounded-xl text-xl p-2 mt-4" type="button"
                onClick={() => setCurrentPage('main')}>Go back to Main Page
            </button>
        </div>
        
    )

}

export default Hardware;