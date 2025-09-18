import React from 'react';
import { useData } from '../hooks/useData';
import { useScrollPages } from '../hooks/useScrollPages';
import { Gallery } from '../components/Gallery';
import { Blob } from '../components/Blob';

function CaseStudies() {
    // useScrollPages({ next: "/contacts", previous: "/contributions" })
    const { items: projectItems, isLoading } = useData('artworks');
    console.log("Passei por case Studies :", projectItems, isLoading);

    if (isLoading || !projectItems || !projectItems.data) {
        return <div>Loading info...</div>;
    }

    //filtrar apenas "projetos" que recebam imagem
    const projectsWithImage = projectItems.data.filter( // o filter ja cria um array por default
        (project) => project.image_id !== null
    );

    return (
        <>
            {projectsWithImage.length > 0 ?
                <Gallery items={projectsWithImage}>
                    {(item) => (
                        <>
                            <h4>{item.department_title}</h4>
                            <Blob type={"image"} image={`https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`} width={"50px"} height={50} />
                            {/* <img
                                src={`https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`}
                                width={100}
                                height={100}
                                alt={item.alt_text || "Artwork image"}
                             /> */}
                            {/* <p>{item.medium_display}</p> */}
                        </>
                    )}
                </Gallery>
                : (
                    <p>Nenhum projeto com imagem encontrado</p>
                )}
        </>
    );
}

export default CaseStudies;
