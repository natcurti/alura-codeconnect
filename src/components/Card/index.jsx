import Code from "./assets/code.svg";
import Chat from "./assets/chat.svg";
import Share from "./assets/share.svg";
import "./styles.css";

const Card = ({ imageUrl, title, resume, code, shared, comments, user }) => {
  return (
    <article className="card">
      <div className="card__img">
        <img src={imageUrl} alt="Imagem ilustrativa do post" />
      </div>
      <div className="card__content">
        <div className="content__text">
          <h3>{title}</h3>
          <p>{resume}</p>
        </div>
        <div className="card__footer">
          <div className="footer__content">
            <ul>
              <li>
                <img src={Code} alt="Códigos" />
                {code}
              </li>
              <li>
                <img src={Share} alt="Compartilhamentos" />
                {shared}
              </li>
              <li>
                <img src={Chat} alt="Comentários" />
                {comments}
              </li>
            </ul>
          </div>
          <div className="footer__user">
            <img src={user.imagem} alt="Imagem do usuário" />
            {user.nome}
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;
