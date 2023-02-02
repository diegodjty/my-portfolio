import SkillsTags from './SkillsTags';
import { v4 as uuid_v4 } from 'uuid';
import imageUrlBuilder from '@sanity/image-url';
import client from '../helpers/sanityClient';

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

function Project({ project }) {
  const { title, img, description, skills, _id, github, url } = project;
  return (
    <div className="flex flex-col">
      <h3 className="text-3xl my-5 font-extrabold text-white">{title}</h3>
      <img src={urlFor(img)} alt="" />
      <div className="flex  space-x-0.5 mt-5 flex-wrap ">
        {skills.map((skill) => (
          <SkillsTags skill={skill} key={uuid_v4()} />
        ))}
      </div>
      <p className="text-gray-300 mt-5 ">{description}</p>

      <p className="text-white"></p>
      <div className="flex justify-between mt-auto ">
        <button className="btn mt-2 w-[45%]">
          <a href={`${github}`} target="_blank">
            Code
          </a>
        </button>

        <button className="btn mt-2 w-[45%]">
          <a href={`${url}`} target="_blank">
            Live view
          </a>
        </button>
      </div>
    </div>
  );
}

export default Project;
