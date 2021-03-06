import MenuItem from "./MenuItem";

export default function Sidebar() {
  const menuItems = [
    {
      name: "Home",
      link: "/"
    },
    {
      name: "Add Series",
      link: "/addseries"
    },
    {
      name: "File Management",
      link: "/filemanagement"
    },
    {
      name: "Test 3",
      link: "/t3"
    },
    {
      name: "Test 4",
      link: "/t4"
    }
  ];

  return (
    <div className="max-w-sidebar min-w-min w-full h-full bg-primary-975">
      <div className="py-3 mb-3 text-center font-semibold text-xl select-none text-white bg-zinc-700">
        Menu
      </div>
      <div>
        {menuItems.map(({ name, link }, i) => <MenuItem key={`${name}-${i}`} name={name} link={link} />)}
      </div>
    </div>
  );
}