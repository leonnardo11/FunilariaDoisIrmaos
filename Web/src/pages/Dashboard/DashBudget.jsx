// Libs
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import { parseJwt } from '../../services/Auth';
import InputMask from "react-input-mask";


// Styles
import '../../assets/styles/reset.css';
import '../../assets/styles/pages/DashBudget.css';
import '../../assets/styles/modals/edit-profile.css';

// Components
import SidebarAdmin from '../../components/SidebarAdmin';
import Modal from '../../components/Modal';

// Images
import close from '../../assets/images/modals/modal-close-icon.svg';

class dash extends Component {
    constructor(props){
        super(props);
        this.state = {
            example : '',
            getUserInfo: [],
            isModalOpen : false
        }
    }

    getUserInfo = (user) => {
        axios('https://54.147.100.207/api/Users/' + parseJwt().jti , {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('user-token')
            }
            
        })
            .then(resposta => {
                if (resposta.status === 200) {
                    this.setState({ getUserInfo: resposta.data })
                    console.log(this.state.getUserInfo)
                }
            })
            .catch(erro => console.log(erro));
    };

    componentDidMount() {
      
        document.title = "Meus Veículos"
    };

    cancelaModal = () => {
        this.setState({ isModalOpen : false })
    }

    render() {
        return(
            <>
                <SidebarAdmin>

                    <div className="dash-header">
    
                        <div className="dash-texts">
                            <h1>Orçamento #00000</h1>
                        </div>
                    </div>

                    <div className="dash-info-background">
                        <div className="dash-info-list">
                            <p>Cliente: {this.state.getUserInfo.username}</p>
                            <p>Veículo: {this.state.getUserInfo.email}</p>
                            <p>Defeitos: {this.state.getUserInfo.phoneNumber}</p>
                        </div>

                        <div className="dash-image-slider"> 
                        <img src="https://s2.glbimg.com/mYgwlPa7vtIiUk6kROUxJUi2yyo=/0x0:620x413/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/a/4/Ik8J1fQYirf6wYRvRJ8Q/2020-03-20-novo-tracker-1.jpg" alt="" srcset="" />
                        <img src="https://s2.glbimg.com/mYgwlPa7vtIiUk6kROUxJUi2yyo=/0x0:620x413/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/a/4/Ik8J1fQYirf6wYRvRJ8Q/2020-03-20-novo-tracker-1.jpg" alt="" srcset="" />
                        <img src="https://s2.glbimg.com/mYgwlPa7vtIiUk6kROUxJUi2yyo=/0x0:620x413/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/a/4/Ik8J1fQYirf6wYRvRJ8Q/2020-03-20-novo-tracker-1.jpg" alt="" srcset="" />
                        <img src="https://s2.glbimg.com/mYgwlPa7vtIiUk6kROUxJUi2yyo=/0x0:620x413/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/a/4/Ik8J1fQYirf6wYRvRJ8Q/2020-03-20-novo-tracker-1.jpg" alt="" srcset="" />
                        </div>

                        <div className="dash-info-edit">
                
                            <button onClick={() => this.setState({isModalOpen : true})}>Aceitar Orçamento</button>
                            <button>Rejeitar Orçamento</button>
                        </div>
                    
                        
                    </div>
                </SidebarAdmin>



                {/* Modal */}
                <Modal isOpen={this.state.isModalOpen}>
                    <div className="modal-overlay">
                        <div className="modal" id="modal" onClick={() => document.getElementById('modal-card').click() ? '' : this.cancelaModal()}></div>
                        <div className="modal-card-background" id="modal-card">
                            <div className="modal-card-close">
                                <img src={close} alt="Ícone para fechar o modal" draggable="false" onClick={() => this.cancelaModal()} />
                            </div>

                            <div className="modal-profile-card-form-background">
                                <div className="modal-profile-card-form">
                                    <div className="modal-profile-card-form-text">
                                        <h1>Aceitar Orçamento</h1>
                                    </div>

                                    <div className="modal-profile-card-form-input-background">
                                        <div className="modal-profile-card-form-input">
                                            <InputMask mask="9999,99"  placeholder="Preço" />
                                        </div>
                                        
                                        <div className="modal-profile-card-form-input">
                                            <input type="date" placeholder="Previsão para termino" />
                                        </div>

                                        <div className="modal-profile-card-form-input">
                                            <input type="Mecanico Responsável" placeholder="ID Do Mecanico" />
                                        </div>

                                        
                                        <button>Enviar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>
            </>
        )
    }
}

export default dash;