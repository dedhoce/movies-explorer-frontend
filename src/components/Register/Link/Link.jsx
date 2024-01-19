import './Link.css'

export default function Link({title, linkMessage}) {
  return (
    <div className="link-block">
      <h3 className="link-block__title">{title}</h3>
      <a rel="stylesheet" href="/signin" className="link-block__title link-block__title_link">
        {linkMessage}
      </a>
    </div>
  );
}
