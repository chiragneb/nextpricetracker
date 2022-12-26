import React, { useState, createContext } from "react";
import CoinTable from "./CoinTable";


const coinPassed = createContext();

function CoinSearch() {
    const [search, setSearch] = useState("");

    const handleChange = (event) => {
        setSearch(event.target.value);
    };

    return (
        <>
           <h1 className="mb-2 mt-4 text-3xl font-extrabold text-black dark:text-white"> Search for a Coin: </h1>
                <form>
                    <input 
                    className="mb-6 shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Search"
                    onChange={handleChange}
                    />
                </form>
            <coinPassed.Provider value = {search}>
                <CoinTable />
            </coinPassed.Provider>
        </>
    );
}



export default CoinSearch;
export { coinPassed };