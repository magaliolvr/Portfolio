import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";


export function useScrollPages({ next, previous }) {
    const navigate = useNavigate();

    // Ref para guardar o último momento em que o scroll disparou navegação
    // Isso evita que o navigate seja chamado várias vezes rapidamente
    const lastScrollTime = useRef(0);

    useEffect(() => {
        const handleScroll = () => {

            // scrollHeight = altura total da página
            // scrollTop = quanto o usuário já rolou
            // clientHeight = altura visível da janela (viewport)
            const scrollHeight = document.documentElement.scrollHeight;
            const scrollTop = window.scrollY;
            const clientHeight = window.innerHeight;

            // --- Lógica de navegação ---
            // Se o usuário chegou no fundo da página
            if (scrollTop + clientHeight >= scrollHeight - 50 && next) {
                navigate(`${next}`); // vai para a próxima página
            }

            // Se o usuário chegou no topo da página
            if (scrollTop <= 0 && previous) {
                navigate(previous === "home" ? "/" : `${previous}`); // volta para a página anterior
            }
        };

        // Adiciona o evento de scroll quando o componente monta
        window.addEventListener("scroll", handleScroll);

        // Remove o evento de scroll quando o componente desmonta
        return () => window.removeEventListener("scroll", handleScroll);

        // Dependências: se mudar navigate, next, previous ou delay,
        // recria o efeito
    }, [navigate, next, previous]);
}








// function useScrollPages({ next, previous }) {
//     const navigate = useNavigate()


//     useEffect(() => {

//         const handleScroll = () => {

//             const scrollHeight = document.documentElement.scrollHeight;

//             const scrollTop = window.scrollY;

//             const clientHeight = window.innerHeight;



//             if (scrollTop + clientHeight >= scrollHeight - 50) {

//                 // Reached near bottom

//                 navigate(`/page/${next}`);

//             }

//         };

//         window.addEventListener('scroll', handleScroll);

//         return () => window.removeEventListener('scroll', handleScroll);

//     }, [navigate]);


// }

// export default useScrollPages;