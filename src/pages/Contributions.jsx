import React from 'react';
import { useData } from '../hooks/useData';


function Contributions() {


  const { items: artistsNames, isLoading: loadingArtists } = useData('artists?page=2&limit=15');
  const { items: artworksItems, isLoading: loadingArts } = useData('artworks?page=2&limit=15')
  console.log("Passei por Contributions Artists :", artistsNames, loadingArtists);
  console.log("Passei por contributions Artworks :", artworksItems, loadingArts)

  if (loadingArtists || !artistsNames) {  //|| !artistsNames.data
    return <div>Loading info...</div>;
  }

  //filtrar apenas artistas com nome 
  const withArtistName = artistsNames.data.filter( // o filter ja cria um array por default
    (project) => project.title !== "Unknown artist" &&
      project.title !== "Anonymous");

  //outra possibilidade poderia ser 
  //        const excluded = ["Unknown artist", "Anonymous", "Desconhecido"];
  //        const withArtistName = artistsNames.data.filter(
  //        (project) => !excluded.includes(project.title)
  // );



  return (
    <>

      {withArtistName.map((artist) => {
        return <>
          <ul>
            <li>
              <div key={artist.id}>{artist.title}</div>
            </li>
          </ul>

        </>

      }
      )

      }



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
