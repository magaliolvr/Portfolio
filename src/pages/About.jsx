import React from 'react';
import { useData } from '../hooks/useData';
import { useScrollPages } from '../hooks/useScrollPages';
import { Blob } from '../components/Blob';

function About() {
  useScrollPages({ next: "/contributions", previous: "/" });
  const { items: aboutItems, isLoading } = useData('artworks/24202');

  console.log("aboutItems", aboutItems);

  if (isLoading) {
    return <div>Loading image</div>
  }


  //Sem useData

  //  const [infoPerson, setInfo] = useState();

  //   useEffect(() => {
  //     const fetchInfo = async () => {


  //         const data = await fetch(`https://api.artic.edu/api/v1/artworks`);
  //         const newDataList = await data.json();


  //         setInfo(newDataList); 

  //          if (newDataList.data && newDataList.data.length > 0) {
  //           setInfo(newDataList.data[0]);
  //         }


  //     };
  //     fetchInfo();
  //   }, []);



  return <>

    {aboutItems ?
      (<div className='section-2col' key={aboutItems.data.id}>

        <div className='col1'>
          <Blob type={"image"} image={"/src/assets/mee.jpeg"} width={"500px"} height={500} />
          {/* <img src={`https://www.artic.edu/iiif/2/${aboutItems?.data.image_id}/full/843,/0/default.jpg`} width={500} height={500} alt={aboutItems.data.thumbnail.alt_text} /> */}

        </div>
        <div className='col2'>
          <h2>{aboutItems.data.artist_display}</h2>
          <h3>{aboutItems.data.medium_display}</h3>
          <span>{aboutItems.info.license_text}</span>
        </div>



      </div>) : <p>erro</p>
    }


  </>;


  {/* sem useData */ }

  {/* {infoPerson ? (
        <>
          <h2>{infoPerson.title}</h2>
          {infoPerson.thumbnail && (
            <img
              src={infoPerson.thumbnail.lqip}
              width={infoPerson.thumbnail.width}
              height={infoPerson.thumbnail.height}
              alt={infoPerson.thumbnail.alt_text}
            />
          )}
          <p>Artista: {infoPerson.artist_title}</p>
          <p>Data: {infoPerson.date_display}</p>
        </>
      ) : (
        <p>Carregando...</p>
      )} */}

}

export default About;


// aqui quero dar detalhes experiência, formação e interesses. 