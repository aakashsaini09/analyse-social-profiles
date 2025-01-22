import Card from "@/components/Card";

export default function Home() {
  const socials = [
    {
      id: 1,
      name: 'Github',
      url: '/github',
      des: 'Github Des'
    },
    {
      id: 2,
      name: 'Twiter',
      url: '/twitter',
      des: 'Twiter Des'
    },
    {
      id: 3,
      name: 'Linkedin',
      url: '/linkedin',
      des: 'Linkedin Des'
    },
  ]
  // console.log("key in root page:: ", process.env.NEXT_APP_GEMINI_API_KEY)
  return (
    <main className="min-h-screen container">
      <div className="flex flex-wrap justify-center mt-10 pt-7 gap-4 md:gap-9">
        {socials.map((card) => {
          return (
            <Card key={card.id} name={card.name} url={card.url} des={card.des}/>
          )
        })}
      </div>
    </main>
  );
}
