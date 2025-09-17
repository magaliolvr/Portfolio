import React from 'react';
import Card from "./components/Card.jsx"
import { useData } from '../hooks/useData';
import { useScrollPages } from '../hooks/useScrollPages';

function Contributions() {
  useScrollPages({ next: "/casestudies", previous: "/about" })

  const { items: artworksItems, isLoading: loadingArts } = useData('artworks?page=2&limit=15')
  console.log("Passei por contributions Artworks :", artworksItems, loadingArts)

  if (loadingArts || !artworksItems) {  //|| !artistsNames.data
    return <div>Loading info...</div>;
  }

  //filtrar apenas artistas com nome 
  const withArtistName = artworksItems.data.filter( // o filter ja cria um array por default
    (project) => project.title !== "Unknown artist" &&
      project.title !== "Anonymous");

  //outra possibilidade poderia ser 
  //        const excluded = ["Unknown artist", "Anonymous", "Desconhecido"];
  //        const withArtistName = artistsNames.data.filter(
  //        (project) => !excluded.includes(project.title)
  // );



  return (
    <>

      <ul className='animated-timeline'>
        {withArtistName.map((art) => {
          return <li>
            <Card
              key={art.id}
              title={art.artist_title}
              content={art.medium_display}
            >
            </Card>
          </li>
        }
        )
        }
      </ul>



      {/* {projectsWithImage.length > 0 ? ( // se existir projetos com imagens
          projectsWithImage.map((project) => (
            <div key={project.id}>
              <h2>{project.department_title}</h2>
              <img
                src={`https://www.artic.edu/iiif/2/${project.image_id}/full/843,/0/default.jpg`}
                width={500}
                height={500}
                alt={project.alt_text || "Artwork image"}
              />
              <p>
                {project.medium_display}
              </p>
            </div>
          ))
        ) : (
          <p>Nenhum projeto com imagem encontrado</p>
        )} */}
    </>
  );
}


export default Contributions;
