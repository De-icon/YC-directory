// import {defineQuery} from "next-sanity"
// import { client } from '@/lib/sanity.client'



// export const STARTUPS_QUERY = 
// async function getStartups() {
//   const query = `*[_type == "startup" && defined(slug.current)] | order(_createdAt desc) {
//     _id,
//     title,
//     slug,
//     _createdAt,
//     author->{
//       _id,
//       name,
//       image,
//       bio
//     },
//     views,
//     discription,
//     image
//   }`
  
//   return client.fetch(query)
// }