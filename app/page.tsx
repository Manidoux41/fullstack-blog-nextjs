async function fetchBlog() {
  const res = await fetch("http://localhost:3000/api/blog", {
    next: {
      revalidate: 10,
    },
  });
  const data = await res.json()
  return data.posts;
}

export default async function Home() {

  const posts = await fetchBlog()
  console.log(posts)

  return (
    <main className="w-full h-full">
      <div className="md:-2/4 sm:w-3/4 m-auto p-4 my-4 rounded-lg bg-slate-800 drop-shadow-xl">
        <h1 className="text-slate-200 text-center text-2xl font-extrabold font-[verdana]">
          My fullstack app with Next JS 13.4
        </h1>
      </div>
    </main>
  )
}


