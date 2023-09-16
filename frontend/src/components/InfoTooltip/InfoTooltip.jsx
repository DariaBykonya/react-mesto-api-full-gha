import failed from '../../images/failed.svg';
import passed from '../../images/passed.svg';


function InfoTooltip({onClose, isOpen, isSucceed }) {
    return (
        <div className={`popup info-tooltip ${isOpen && 'popup_opened'}`} onClick = {onClose}>
            <div className="info-tooltip__container" onClick = {e => {e.stopPropagation()}}>
                {isSucceed ? (
                    <>
                        <div className="info-tooltip__image">
                        <img src={passed} alt='Фото успешного запроса' />
                        </div>
                        <p className="info-tooltip__subtitle">Вы успешно зарегистрировались!</p>
                    </>
                ) : (
                    <>
                        <div className="info-tooltip__image">
                        <img src={failed} alt='Фото не  успешного запроса' />
                        </div>
                        <p className="info-tooltip__subtitle">Что-то пошло не так! Попробуйте ещё раз.</p>
                    </>
                )}
                
                <button className="button info-tooltip__close" type="button" onClick={onClose}/>
            </div>
        </div>
  )};
  
  export default InfoTooltip