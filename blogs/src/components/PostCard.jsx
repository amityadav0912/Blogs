import React from "react";

import service from "../appWriteService/config";
import {Link}  from 'react-router-dom'

function PostCard({$id, title, featuredImage}){
    return(
        <Link to={`/post/${$id}`}>
            <div className='w-full bg-gray-100 rounded-xl p-4 h-[400px] flex flex-col'>
                <div className='w-full h-[320px] flex justify-center mb-4'>
                    <img src={service.getFilePreview(featuredImage)} alt={title} className='w-full h-full object-contain rounded-xl'
                    />
                </div>
                <div className="flex flex-grow items-center justify-center">
                <h2   className='text-xl font-bold text-center'>
                    {title}
                </h2>
                </div>
                
            </div>

        </Link>
    )
}

export default PostCard;