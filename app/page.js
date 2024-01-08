import LikeButton from "./like-button";

const Header = ({ title }) => {
  return (
  <>
    <h1>{title ? title : "Blank Title"}</h1>
    <LikeButton />
  </>
  )
}

export default Header;