import SkillsTags from "./SkillsTags"
import { v4 as uuid_v4 } from "uuid";

function Project({details:{title,img,skills,url,github,description},id}) {
    
    return (
        <div >
            <h3 className='text-3xl my-5 font-bold text-white'>{title}</h3>
            <img src={img} alt="" />
            <div className='flex  space-x-0.5 mt-5 flex-wrap '>
                {skills.map((skill)=>(
                    <SkillsTags skill={skill} key={uuid_v4()} />
                ))}
            </div>
            <p className='text-gray-300 mt-5'>
                {description}
            </p>
            
            <p className='text-white'></p>
            <div className='flex justify-between mt-5'>
                <button className='btn mt-2 w-[45%]'>
                    <a href={`${github}`} target="_blank">Code</a>
                </button>
                
                <button className='btn mt-2 w-[45%]'>
                    <a href={`${url}`} target="_blank">Live view</a>
                </button>
            </div>  
        </div>
    )
}

export default Project
