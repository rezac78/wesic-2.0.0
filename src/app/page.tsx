'use client'
import Header from "@/app/components/Header/Header";
import SliderShow from "@/app/parts/sliderShow/sliderShow";
import Divider from "./parts/Divider/Divider";
import PartsMain from "./parts/PartsMain/PartsMain";

export default function Home() {
  return (
    <>
      <Header />
      <SliderShow />
      <Divider/>
      <PartsMain/>
    </>
  )
}
