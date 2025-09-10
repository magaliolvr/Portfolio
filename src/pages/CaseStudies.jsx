import React from 'react';
import {useData} from '../hooks/useData';


function CaseStudies() {
  const {items: projectItems, isLoading} = useData('artworks')
  console.log("Passei por case Studies :", projectItems, isLoading)

  if (isLoading) {
    return <div>Loading info</div>
  }




  return (
    <>
      {projectItems ? (
        <>
        {projectItems.data.map((project) =>   {
        return (

          <div>
          <h2>{project.artist_title}</h2>
         <img src={`https://www.artic.edu/iiif/2/${project.image_id}/full/843,/0/default.jpg`} width={500} height={500} alt={project.alt_text} />

        </div>
        //  <img src={`https://www.artic.edu/iiif/2/${project.data.image_id}/full/843,/0/default.jpg`} width={500} height={500} alt={project.data.thumbnail.alt_text} />
        )
      }   
        
        )}
        </>
      ): <p>erro</p>

      }
    
  </>
  )
}

export default CaseStudies;
