import NavbarItem from "../../Data";

const Navbar = () => {
  return (
    <div className="container">
      <div>
        Wander<span>Sage</span>
      </div>

      <div>
        <ul>
          {NavbarItem.NavbarItem.map((data) => {
            let { id, item } = data;

            return <li key={id}>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
