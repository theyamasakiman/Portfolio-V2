import React from 'react';
import Link from 'next/link';
import { StaticImageData } from "next/image";
import Image from "next/image";
// import 'src/App.css';

interface ProjectCardProps {
  title: string;
  image: string | StaticImageData;
  link: string;
  text: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, image, link, text }) => {
  return (
    <div className="fol-con">
      <Link  href={link} target="_blank" rel="noopener noreferrer">
        <div className="photo"> 
          <Image src={image} alt={title} height={340} width={340}/>
        </div>
      </Link>
      <div className="card-text">
        <div className="card-title">{title}</div>
        <div className="read-text">{text}</div>
      </div>
      
    </div>

    
  );
};

export default ProjectCard;