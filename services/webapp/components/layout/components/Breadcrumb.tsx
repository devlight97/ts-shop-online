interface IProps {
  breadcrumb: string
}

const data = [
  {
    title: 'Home',
    link: '#',
  },
  {
    title: 'Product',
    link: '#',
  },
  {
    title: 'ThinkPad X1 Carbon 2022',
    link: '#',
  },
]

export const Breadcrumb: React.FC<IProps> = ({ breadcrumb = '' }) => {
  return (
    <div className="breadcrumbs">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="bread-inner">
              <ul className="bread-list">
                {data.map((item, index) => (
                  <li key={index}>
                    <a href={item.link}>
                      {item.title}
                      {index === data.length - 1 ? null : <i className="ti-arrow-right" />}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
