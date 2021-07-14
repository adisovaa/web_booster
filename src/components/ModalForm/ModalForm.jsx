import React from 'react'
import emailjs from 'emailjs-com'
import './ModalForm.css'


export const Modal = ({handleClose, show}) => {
    const showHideClassName = show ? 'modal display-block' : 'modal display-none'

    function sendEmail(e) {
        e.preventDefault()

        emailjs.sendForm('gmail', 'email_template', e.target, 'user_8qChYEpCetLn6qXJoK66F')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }
    return (
        <form onSubmit={sendEmail} className={showHideClassName}>
            <div className="modal-main">
                <div className="modal-container">
                    <p>Ваши данные</p>
                    <input type="text" name="user_name" placeholder='Имя'/>
                    <input type="number" name="contact_number" placeholder='Телефон'/>
                    <input type="email" name="user_email" placeholder='Email'/>
                    <input type="text" name="item_name" placeholder='Название товара'/>
                    <div className="modal-btn">
                        <input type="button" onClick={handleClose} defaultValue="Закрыть"/>
                        <input type="button" defaultValue="Отправить" />
                    </div>
                </div>
            </div>
        </form>
    );
};


