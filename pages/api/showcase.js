export default function handler(req, res) {
  res.status(200).json(
  [
    {
      id: 1,
      title: "website",
      description: "lorem bla blabla bla bla bla bla bla bla bla",
      image: "./assets/showcase/showcase1.jpg"
    },
    {
      id: 2,
      title: "Game",
      description: "lorem bla bla bla bl abla bla bla bla",
      image: "./assets/showcase/showcase2.jpg"
    }
  ]
)
}
