import { BsLinkedin, BsFillEnvelopeFill, BsWhatsapp, BsGithub } from "react-icons/bs";



function Contacts() {
    return (

        <div>
            <h2>Contact Me</h2>
            <ul>
                <li>
                    <a href="mailto:contact.magalioliveira@gmail.com?subject=Contact%20from%20site%20&body=Hi,%20Magali!%0A%0A%0AI%20visited%20your%20portfolio,%20... ">
                        <BsFillEnvelopeFill />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/magalideoliveira" target="_blank" rel="noopener noreferrer">
                        <BsLinkedin />
                    </a>
                </li>
                <li>
                    <a href="https://wa.me/351938306590?text=Hello%20Magali,%0A%0AI%20just%20visited%20your%20portfolio%20and%20would%20love%20to%20discuss%20future%20projects%20with%20you!"
                        target="_blank" rel="noopener noreferrer">
                        <BsWhatsapp />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/magaliolvr" target="_blank" rel="noopener noreferrer">
                        <BsGithub />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Contacts;