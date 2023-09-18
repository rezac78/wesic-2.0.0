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

export const navbar: AllsNavbar[] = [
  { id: 1, name: "Tradition", Link: "#", icon: "" },
  { id: 2, name: "pop", Link: "#", icon: "" },
  { id: 3, name: "IranPop", Link: "#", icon: "" },
  { id: 4, name: "FilmMusic", Link: "#", icon: "" },
  { id: 5, name: "MusicVideo", Link: "#", icon: "" },
  { id: 6, name: "Study", Link: "#", icon: "" },
  { id: 7, name: "Home", Link: "#home", icon: HomeIcon },
  { id: 8, name: "Home", Link: "#UserIcon", icon: UserIcon },
  { id: 9, name: "Home", Link: "#PlayCircleIcon", icon: PlayCircleIcon },
  { id: 10, name: "Home", Link: "#PuzzlePieceIcon", icon: PuzzlePieceIcon },
];
