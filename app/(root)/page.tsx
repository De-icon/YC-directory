
import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";


export default async function Home({ searchParams }: 
  { searchParams: Promise<{ query: string }>
 }) {


  const query = (await searchParams).query;

  const posts = [{
    _createAt: new Date(),
    views: 55,
    author: { _id: 1, name: "John Doe" },
    _id: 1,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_wG5i3f3QurxvtO5B7J3A98S6Ujn9SI90mWxTNaPWOdwGQGzjZm2VFm91mGFU6vz_C2U&usqp=CAU",
    title: "We Robot",
    category: "Robotics",

  }]

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
