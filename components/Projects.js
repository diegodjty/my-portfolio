import data from '../data/projects.json'
import Project from './Project';

function Projects() {
    return (
        <div>
            {data.map((details)=>(
                <Project details={details} key={details.id} id={details.id} />
            ))}
        </div>
    )
}

export default Projects
