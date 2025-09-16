import React from 'react';
import { useData } from '../hooks/useData';

function CaseStudies() {
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
            {projectsWithImage.length > 0 ? ( // se existir projetos com imagens
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
            )}
        </>
    );
}

export default CaseStudies;
