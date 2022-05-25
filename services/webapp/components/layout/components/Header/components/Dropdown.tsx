const MenuIcon: React.FC = () => <i className="fa fa-angle-right" aria-hidden="true" />

const data = [
  {
    name: 'Thinkpad',
    link: '',
  },
  {
    name: 'MacBook',
    link: '',
  },
  {
    name: 'Popular',
    link: '',
  },
  {
    name: 'Premium',
    link: '',
  },
  {
    name: 'Other',
    link: '',
  },
]

export const Dropdown: React.FC = () => {
  return (
    <ul className="main-category" style={{ display: 'none' }}>
      {data.map((item) => (
        <li key={item.name}>
          <a href={item.link}>{item.name}</a>
          <MenuIcon />
        </li>
      ))}
    </ul>
  )
}
