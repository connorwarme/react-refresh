import LikeButton from "./like-button";

const Header = ({ title }) => {
  return (
  <>
    <h1>{title ? title : "Blank Title"}</h1>
  </>
  )
}

const HomePage = () => {
  return (
    <>
      <Header />
      <div>Like button counts up!</div>
      <LikeButton />
    </>
  )
}

export default HomePage;