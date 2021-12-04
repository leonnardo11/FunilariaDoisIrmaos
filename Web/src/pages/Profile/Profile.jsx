// Libs
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import { parseJwt } from '../../services/Auth';

// Styles
import '../../assets/styles/reset.css';
import '../../assets/styles/pages/profile.css';
import '../../assets/styles/modals/edit-profile.css';

// Components
import Sidebar from '../../components/Sidebar';
import Modal from '../../components/Modal';

// Images
import close from '../../assets/images/modals/modal-close-icon.svg';

class Profile extends Component {
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
        this.getUserInfo();
        document.title = "Meu Perfil"
    };

    atualizaStateCampo = (campo) => {
        this.setState({ [campo.target.name] : campo.target.value })
    };


    cancelaModal = () => {
        this.setState({ isModalOpen : false })
    }

    render() {
        return(
            <>
                <Sidebar>

                    <div className="profile-header">
                        <div className="profile-title">
                            <h1>{this.state.getUserInfo.username}</h1>
                        </div>
                        <div className="profile-texts">
                            <p>Meu Perfil</p>
                        </div>
                    </div>

                    <div className="profile-info-background">
                        <div className="profile-info-list">
                            <h2>Informações Pessoais:</h2>
                            <p>Nome: {this.state.getUserInfo.username}</p>
                            <p>Email: {this.state.getUserInfo.email}</p>
                            <p>Telefone: {this.state.getUserInfo.phoneNumber}</p>
                        </div>

                        <div className="profile-info-edit">
                            <h2>Editar Informações:</h2>
                            <button onClick={() => this.setState({isModalOpen : true})}>Editar Informações Pessoais</button>
                            <button>Alterar minha Senha</button>
                        </div>
                    </div>
                </Sidebar>



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
                                        <h1>Editar Perfil</h1>
                                        <p>Edite as informações pessoais do seu Perfil</p>
                                    </div>

                                    <div className="modal-profile-card-form-input-background">
                                        <div className="modal-profile-card-form-input">
                                            <input type="text" name="username" onChange={this.atualizaStateCampo} value={this.state.getUserInfo.username} />
                                        </div>
                                        
                                        <div className="modal-profile-card-form-input">
                                            <input type="text" value={this.state.getUserInfo.email} />
                                        </div>

                                        <div className="modal-profile-card-form-input">
                                            <input type="text" value={this.state.getUserInfo.phoneNumber} />
                                        </div>
                                        <button>Salvar</button>
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

export default Profile;