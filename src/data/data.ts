import htmlLogo from '../assets/images/logos/html.svg';
import cssLogo from '../assets/images/logos/css.svg';
import jsLogo from '../assets/images/logos/js.svg';
import reactLogo from '../assets/images/logos/react.svg';
import tailwindLogo from '../assets/images/logos/tailwindcss.svg';
import phpLogo from '../assets/images/logos/php.svg';
import javaLogo from '../assets/images/logos/java.svg';

export const projects = [
    {
        id: 1,
        title: 'Portfolio',
        description: 'Un portafolio personal para mostrar mis proyectos y habilidades.',
    }
]

export interface Logo {
    id: number;
    name: string;
    src: string;
}

export const logos: Logo[] = [
    {
        id: 1,
        name: 'HTML',
        src: htmlLogo,
    },
    {
        id: 2,
        name: 'CSS',
        src: cssLogo,
    },
    {
        id: 3,
        name: 'JavaScript',
        src: jsLogo,
    },
    {
        id: 4,
        name: 'React',
        src: reactLogo,
    },
    {
        id: 5,
        name: 'Tailwind CSS',
        src: tailwindLogo,
    },
    {
        id: 6,
        name: 'PHP',
        src: phpLogo,
    },
    {
        id: 7,
        name: 'Java',
        src: javaLogo,
    },
]