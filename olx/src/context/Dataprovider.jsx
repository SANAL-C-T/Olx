import { useState, useEffect } from 'react';
import DataContext from '../context/DataContext';
import { db } from '../firebase'; // Assuming firestore is the name of your Firestore instance
import { collection, getDocs } from "firebase/firestore";

const DataContextProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [limit, setLimit] = useState(8);

    useEffect(() => {
        getData();
    }, [limit]); // Load data on component mount



    console.log("limit:::",limit)
    const getData = async () => {
        try {
            const dataCollectionRef = collection(db, "items");
            const querySnapshot = await getDocs(dataCollectionRef);
            let fetchedData = [];
            querySnapshot.forEach(doc => {
                fetchedData.push({
                    id: doc.id, // Add the document ID as part of the object
                    ...doc.data() // Spread the rest of the document data
                });
            });
            
            console.log("Fetched data:", fetchedData); // Log fetched data to console
            setData(fetchedData); // Set the data from Firestore
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const contextValue = {
        data,
        limit,
        setLimit,
    };

    return (
        <DataContext.Provider value={contextValue}>
            {children}
        </DataContext.Provider>
    );
};

export default DataContextProvider;
