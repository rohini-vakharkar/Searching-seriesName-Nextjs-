'use client'
import Image from 'next/image'
import { useQuery } from 'react-query'
import Card, { CardLoading } from './components/Card'
import {AiOutlineSearch} from 'react-icons/ai'
import SearchBar from './components/SearchBar'
import { ChangeEvent, useState } from 'react'

type ShowData = {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number;
  averageRuntime: number;
  premiered: string;
  ended: string;
  officialSite: string;
  schedule: {
    time: string;
    days: string[];
  };
  rating: {
    average: number;
  };
  weight: number;
  network: {
    id: number;
    name: string;
    country: {
      name: string;
      code: string;
      timezone: string;
    };
    officialSite: string;
  };
  webChannel: null | string;
  dvdCountry: null | string;
  externals: {
    tvrage: number;
    thetvdb: number;
    imdb: string;
  };
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  updated: number;
  _links: {
    self: {
      href: string;
    };
    previousepisode: {
      href: string;
    };
  };
};    

export default function Home() {
const [value, setValue] = useState('')


   const api = "https://api.tvmaze.com/shows";
  const { isLoading, error, data :moviesData} = useQuery<ShowData[]>('tvShowData', () =>
    fetch(api).then(res =>
      res.json()
    )
  )

  const onHandleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setValue(e.target.value)
  }
  const data = value ? moviesData?.filter((data)=>
  data.name.toLowerCase().includes(value.toLocaleLowerCase())):moviesData 
  return (
   <div className='p-8 max-w-7xl flex flex-col gap-5 mx-auto'>
   <h2 className='text-4xl font-semibold'>Tv Shows</h2>
   <section>
    <SearchBar onChange={onHandleChange} value={value}/>
     </section>
    <section className='flex flex-wrap gap-3 justify-between'>
      {isLoading ? Array(12).fill(null).map((_,i)=> <CardLoading key={i} />) :       
      data?.map((d:any,i:any)=>(
          <Card image={d.image.medium} name={d.name} key={i}/>
    ))}</section>
    
   </div>
  )
}
