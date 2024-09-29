export interface Slide {
    id: number;
    title: string;
    description: string;
    img?: string;
    url?: string;
    bg?: string;
}

export interface LogoProps {
    image: boolean;
}