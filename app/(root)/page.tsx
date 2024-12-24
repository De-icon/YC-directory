
import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";
// import { STARTUPS_QUERY } from "@/sanity/lib/queries";
import { client } from '@/lib/sanity.client'

async function getStartups() {
  const query = `*[_type == "startup" && defined(slug.current)] | order(_createdAt desc) {
    _id,
    title,
    slug,
    _createdAt,
    author->{
      _id,
      name,
      image,
      bio
    },
    views,
    description,
    category,
    image
  }`
  
  return client.fetch(query)
}


export default async function Home({ searchParams }: 
  { searchParams: Promise<{ query: string }>
 }) {


  const query = (await searchParams).query;
  const posts = await getStartups()
  console.log(posts)


  return (
    <>

      <section className="pink_container">

        <h1 className="heading">Pitch Your Startup, <br /> Conect with Entrepreneurs</h1>

        <p className="sub-heading !max-w-3xl">Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Compatitions.</p>

        <SearchForm query={query}/> 
      </section>

      <section className="section_container">
          <p className="text-30-semibold">
             { query ? `Search Results for "${query}"` : "All Startups" }

          </p>

          <ul className="mt-7 card_grid">
              {posts?.length > 0 ?(
                posts.map((post: StartupCardType, index: number) => (
                  <StartupCard  key={post._id} post={post} />
                ))
              ) : (
                <p className="no-results">No startups found</p>
              )}
          </ul>
      </section>

    </>
  );
}
