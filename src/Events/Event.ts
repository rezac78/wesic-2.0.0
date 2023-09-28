import PopPoster from "./@/../../../public/homePage/1.png";
import traditionalPoster from "./@/../../../public/homePage/2.jpg";
import iranPopPoster from "./@/../../../public/homePage/3.jpg";
import musicFilmPoster from "./@/../../../public/homePage/4.jpg";
import musicVideoPoster from "./@/../../../public/homePage/5.png";
import {
  HomeIcon,
  UserIcon,
  PlayCircleIcon,
  PuzzlePieceIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
export interface AllsNavbar {
  id: number;
  Link: string;
  name: string;
  icon: any;
}
interface InputRegisters {
  id: number;
  LabelName: string;
  TypeInput: "text" | "email" | "password" | "confirmPassword";
  IdLabel: string;
  PlaceholderLabel: string;
}

export interface PartsMain {
  id: number;
  description: string;
  name: string;
  imageLink: any;
  Link: string;
  Direction: string;
  Dreg: string;
}

export const navbar: AllsNavbar[] = [
  { id: 1, name: "Tradition", Link: "#", icon: "" },
  { id: 2, name: "pop", Link: "#", icon: "" },
  { id: 3, name: "IranPop", Link: "#", icon: "" },
  { id: 4, name: "FilmMusic", Link: "#", icon: "" },
  { id: 5, name: "MusicVideo", Link: "#", icon: "" },
  { id: 6, name: "Study", Link: "#", icon: "" },
  { id: 7, name: "Home", Link: "#home", icon: HomeIcon },
  { id: 8, name: "Home", Link: "/register", icon: UserIcon },
  { id: 9, name: "Home", Link: "#PlayCircleIcon", icon: PlayCircleIcon },
  { id: 10, name: "Home", Link: "#PuzzlePieceIcon", icon: PuzzlePieceIcon },
];

export const PartsMains: PartsMain[] = [
  {
    id: 0,
    name: "Pop",
    description:
      "Pop is a genre of popular music that originated in its modern form during the mid-1950s in the United States and the United Kingdom. The terms popular music and pop music are often used interchangeably, although the former describes all music that is popular and includes many disparate styles.",
    imageLink: PopPoster,
    Link: "#Pop",
    Direction: "ltr",
    Dreg: "5",
  },
  {
    id: 1,
    name: "Traditional",
    description:
      "Persian traditional music or Iranian traditional music, also known as Persian classical music or Iranian classical music, refers to the classical music of Iran. It consists of characteristics developed through the country's classical, medieval, and contemporary eras.",
    imageLink: traditionalPoster,
    Link: "#traditional",
    Direction: "rtl",
    Dreg: "5",
  },
  {
    id: 2,
    name: "IranPop",
    description:
      "Iran's western-influenced pop music emerged by the 1950s.[4] Prior to the 1950s, Iran's music industry was dominated by traditional singers.[4] Viguen, known as the  of Iranian pop and jazz music, was a pioneer of this revolution.",
    imageLink: iranPopPoster,
    Link: "#iranPop",
    Direction: "ltr",
    Dreg: "5",
  },
  {
    id: 3,
    name: "MusicFilm",
    description:
      "A film score is original music written specifically to accompany a film. The score comprises a number of orchestral, instrumental, or choral pieces called cues, which are timed to begin and end at specific points during the film in order to enhance the dramatic narrative ",
    imageLink: musicFilmPoster,
    Link: "#musicFilm",
    Direction: "rtl",
    Dreg: "5",
  },
  {
    id: 4,
    name: "MusicVideo",
    description:
      "A music video, sometimes abbreviated to MV or M/V, is a video that integrates a song or an album with imagery that is produced for promotional or musical artistic purposes. Modern music videos are primarily made and used as a music marketing device intended to promote the sale of music recordings.",
    imageLink: musicVideoPoster,
    Link: "#musicVideo",
    Direction: "ltr",
    Dreg: "5",
  },
];

export const InputRegister: InputRegisters[] = [
  {
    id: 1,
    LabelName: "Name",
    TypeInput: "text",
    IdLabel: "username",
    PlaceholderLabel: "Enter your name",
  },
  {
    id: 2,
    LabelName: "Email",
    TypeInput: "email",
    IdLabel: "email",
    PlaceholderLabel: "Enter your email",
  },
  {
    id: 3,
    LabelName: "Password",
    TypeInput: "password",
    IdLabel: "password",
    PlaceholderLabel: "Enter your password",
  },
  {
    id: 4,
    LabelName: "Confirm Password",
    TypeInput: "confirmPassword",
    IdLabel: "confirmPassword",
    PlaceholderLabel: "Confirm your password",
  },
];

export const LoginInputData: InputRegisters[] = [
  {
    id: 1,
    LabelName: "Email",
    TypeInput: "email",
    IdLabel: "email",
    PlaceholderLabel: "Enter your email",
  },
  {
    id: 2,
    LabelName: "Password",
    TypeInput: "password",
    IdLabel: "password",
    PlaceholderLabel: "Enter your password",
  },
];
