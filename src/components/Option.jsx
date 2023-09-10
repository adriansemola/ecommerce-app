const Option = ({ name }) => {
  return (
    <>
      <span className="nav-link" to={"/" + name}>{name}</span>
    </>
  )
}
export default Option