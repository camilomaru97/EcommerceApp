import { useState } from 'react';
import { Comments } from './Comments';
import { Footer } from './Footer';
import { useProducts } from '../hooks/useProducts';

export const InteractionProduc = ({ producto }) => {
  const { comments, descripcion } = producto;
  const [commentsProduct, setCommentsProduct] = useState(true);
  const [inputComment, setInputComment] = useState({
    createAt: new Date().toString(),
    comment: '',
    productoId: null
  });

  const { comment } = inputComment;
  const [errormsg, setErrormsg] = useState(null);
  const [error, setError] = useState(false);

  const { onPostComment } = useProducts();
  const handleSectionClick = (isComments) => {
    if (commentsProduct !== isComments) {
      setCommentsProduct(isComments);
    }
  };

  const hanldeCommentChange = ({ target }) => {
    setInputComment({
      ...inputComment,
      [target.name]: target.value,
    });
  };

  const handleInputCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim().length < 1) {
      setError(true);
      setErrormsg('El comentario no puede estar vacio');
      setTimeout(() => {
        setError(false);
        setErrormsg(null);
      }, 4000);
      return;
    }
    onPostComment(inputComment, producto);
    setInputComment({
      createAt: new Date().toString(),
      comment: '',
      productoId: null,
    });
  };

  const sortedDataComments = comments.sort((a, b) => {
    const dateA = new Date(a.createAt);
    const dateB = new Date(b.createAt);
    return dateB - dateA; 
  });

  return (
    <>
      <section className="interaction-product">
        <header>
          <div className="header_coments">
            <h2
              style={commentsProduct ? { color: '#000' } : { color: '' }}
              onClick={() => handleSectionClick(true)}
            >
              Comentarios
            </h2>
            <h2
              style={commentsProduct ? { color: '' } : { color: '#000' }}
              onClick={() => handleSectionClick(false)}
            >
              Descripción
            </h2>
          </div>
          {commentsProduct ? (
            <>
              <main className="comentarios_container">
                <section className="comentarios_section">
                  {sortedDataComments.map((comment) => (
                    <Comments key={comment.id} comment={comment} />
                  ))}
                  <form onSubmit={handleInputCommentSubmit}>
                    <textarea
                      style={{ width: '80%' }}
                      className="input_comentario"
                      name="comment"
                      value={comment}
                      type="text"
                      placeholder="Escribe un comentario..."
                      onChange={hanldeCommentChange}
                    />
                    <div className="button_comentario">
                      <button type="submit">Comentar</button>
                    </div>
                  </form>
                  {error && <p className="error">{errormsg}</p>}
                </section>
                <div>
                  <section className="ofertas_section">
                    <div className="ofertas_container">
                      <h3>
                        Popular brands <br />
                        with discounts <br />
                        over 25%
                      </h3>
                      <button className="ofertas_button">
                        Visitar Ofertas
                      </button>
                    </div>
                  </section>
                  <section className="ofertas_section2">
                    <div className="ofertas_container">
                      <h3>
                        Popular brands <br />
                        with discounts <br />
                        over 55%
                      </h3>
                      <button className="ofertas_button">
                        Visitar Ofertas
                      </button>
                    </div>
                  </section>
                </div>
              </main>
            </>
          ) : (
            <>
              <main className="comentarios_container">
                <section className="comentarios_section">
                  <p className="descripcionProduct">{descripcion}</p>
                </section>
                <div>
                  <section className="ofertas_section">
                    <div className="ofertas_container">
                      <h3>
                        Popular brands <br />
                        with discounts <br />
                        over 25%
                      </h3>
                      <button className="ofertas_button">
                        Visitar Ofertas
                      </button>
                    </div>
                  </section>
                  <section className="ofertas_section2">
                    <div className="ofertas_container">
                      <h3>
                        Popular brands <br />
                        with discounts <br />
                        over 55%
                      </h3>
                      <button className="ofertas_button">
                        Visitar Ofertas
                      </button>
                    </div>
                  </section>
                </div>
              </main>
            </>
          )}
        </header>
      </section>

      <Footer />
    </>
  );
};
