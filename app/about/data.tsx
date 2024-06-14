import { Card, CardBody } from '@nextui-org/react'
import React from 'react'

const personalDetails = [
    { label: "FullName", value: "Jesus Maldonado" },
    { label: "Age", value: "24" },
    { label: "Residence", value: "Colombian" },
    { label: "Address", value: "calle 3# 7-63, palmar de varela,atlantic state, colombia" },
    { label: "E-mail", value: "Jmaldona18@cuc.edu.co" },
    { label: "Phone", value: "+57 3013822902" },

];
const DataAbout = () => {
    return (
        <div className="w-full h-full">
            <div >
                {personalDetails.map((detail, index) => (
                    <div
                        key={index}
                        className={`p-1 w-full ${index % 2 === 0 ? 'bg-transparent font-bold' : ' bg-white/40 rounded-xl font-bold text-black'}`}
                    >
                        <div className='flex items-start justify-between'>
                            <span className="font-bold">{detail.label} </span>
                            {detail.value}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DataAbout
