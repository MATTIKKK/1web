import './client-form.css';
import formImg1 from '../../static/images/form-img1.png';
import formImg2 from '../../static/images/form-img2.png';

const ClientForm = () => {
  return (
    <div className="client-form">
      <div className="client-form-block first-image desktop">
        <img src={formImg1} alt="" />
      </div>
      <form className='client-form-block '>
        <p className="client-form-title">Оставьте отзыв или задайте вопрос</p>

        <input type="text" placeholder="ФИО" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Телефон" />
        <textarea
          name="comment"
          placeholder="Комментарий"
          className="comment-input"
        />
        <div className='client-form-checkbox'>
          <input type="checkbox" name="client-form-checkbox" />
          <label htmlFor="client-form-checkbox">
            Нажимая на кнопку «Отправить», вы соглашаетесь с условиями Политики
            конфиденциальности
          </label>
        </div>

        <button type="submit">Отправить</button>
      </form>
      <div className="client-form-block second-image desktop">
        <img src={formImg2} alt="" />
      </div>
    </div>
  );
};

export default ClientForm;
