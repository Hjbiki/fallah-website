import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  imageUrl: string;
  tags?: string[];
  isBlueprint?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  link,
  imageUrl,
  tags = [],
  isBlueprint = false,
}) => {
  return (
    <div className="card-wrapper">
      {/* Outer label - just text with stroke */}
      <div className={`card-outer-label ${isBlueprint ? 'resources' : ''}`}>
        {isBlueprint ? 'الموارد' : 'الألعاب'}
      </div>
      
      <Link href={link} className="block h-full">
        <div className="vertical-card">
          {/* Card Image */}
          <div className="card-image">
            {imageUrl && (
              <Image 
                src={imageUrl} 
                alt={title}
                fill
                className="object-cover"
              />
            )}
            
            {/* Cardboard texture overlay */}
            <div className="absolute inset-0 mix-blend-overlay opacity-30" 
                style={{ 
                  backgroundImage: 'url(/images/cardboard-texture.png)',
                  backgroundSize: '200px 200px' 
                }}></div>
            
            {/* Decorative stitch at top */}
            <div className="absolute top-0 left-0 right-0 h-2 stitches opacity-70"></div>
          </div>
          
          {/* Card Content */}
          <div className="card-content">
            {/* Tag */}
            {tags.length > 0 && (
              <div className="card-tag">{tags[0]}</div>
            )}
            
            {/* Title with LBP style */}
            <h3 className="card-title">{title}</h3>
            
            {/* Description */}
            <p className="card-description">{description}</p>
          </div>
          
          {/* Decorative elements based on card type */}
          {isBlueprint ? (
            <div className="absolute top-3 right-3 w-6 h-6 opacity-30 border-2 border-white rounded-full"></div>
          ) : (
            <div className="absolute bottom-0 left-0 right-0 h-2 stitches opacity-50"></div>
          )}
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard; 