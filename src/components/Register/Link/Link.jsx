import './Link.css'

export default function Link({title, linkMessage, href}) {
  return (
    <div className="link-block">
      <h3 className="link-block__title">{title}</h3>
      <a rel="stylesheet" href={href} className="link-block__title link-block__title_link">
        {linkMessage}
      </a>
    </div>
  );
}
