import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../../Provider/AuthProvider';
import MyCard from './MyCard';
const MyEquipments = () => {

    const { user } = useContext(AuthContext);
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`https://equi-sports-server-murex.vercel.app/equipmentEmail/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setData(data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [user])
   
    const [equipmentData,setEquipmentData] = useState([])
    useEffect(() => {
        setEquipmentData(data);
    }, [data]);

    console.log(data);
    console.log(equipmentData);
    

    return (
        <div>
            <Helmet>
                <title>EquiSports | My Equipment List</title>
            </Helmet>

            
            {/* <h2>Data {equipmentData.length}</h2> */}

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                {
                    equipmentData.map(d => <MyCard d={d} equipmentData={equipmentData} setEquipmentData={setEquipmentData}></MyCard>)
                }
            </div>



        </div>
    );
};

export default MyEquipments;