// Libs
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import { parseJwt } from '../../services/Auth';
import swal from 'sweetalert'

// Styles
import "../../assets/styles/reset.css";
import "../../assets/styles/pages/login.css";
import "../../assets/styles/modals/recover-password.css";

// Images
import banner from '../../assets/images/pages/login-banner.svg';
import close from '../../assets/images/modals/modal-close-icon.svg';

// Components
import Modal from '../../components/Modal';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            exemplo: '',
            isModalOpen: false,
            email: '',
            password: '',
            erroMensagem: '',
            isLoading: false
        };
    }


    efetuaLogin = (event) => {
        event.preventDefault();
        this.setState({ erroMensagem: '', isLoading: true });
        axios.post('https://54.147.100.207/api/Login', {
            email: this.state.email,
            password: this.state.password

        })
            .then(resposta => {

                if (resposta.status === 200) {

                    localStorage.setItem('user-token', resposta.data.token);
                    this.setState({ isLoading: false })
                    let base64 = localStorage.getItem('user-token').split('.')[1];
                    if (parseJwt().role === '0') {
                        this.props.history.push('/dashallbudget');
                    }
                    else {
                        this.props.history.push('/Home')
                    }
                }

            })
            .catch((erro) => {
                swal("Ocorreu um erro!", {erro}, "error");
            })

    }

    atualizaStateCampo = (campo) => {
        this.setState({ [campo.target.name]: campo.target.value })
    };

    componentDidMount(){
        document.title = "Login"
    }


    cancelaModal = () => {
        this.setState({ isModalOpen: false })
    }

    render() {
        return (
            <>
                <div className="login-background">
                    {/* ??rea do formul??rio (lado esquerdo) */}
                    <div className="login-form-background">
                        <div className="login-form-content">
                            <div className="login-form-text">
                                <h1>Bem vindo de volta!</h1>
                                <p>Insira suas credenciais de login para entrar no sistema.</p>
                            </div>

                            <form onSubmit={this.efetuaLogin}>
                            <div className="login-form-main">
                                <div className="login-form-input">
                                    <input name="email" type="email" placeholder="E-mail"  value={this.state.email} onChange={this.atualizaStateCampo} />
                                </div>

                                <div className="login-form-input">
                                    <input name="password" type="password" placeholder="Senha" value={this.state.password} onChange={this.atualizaStateCampo} />
                                </div>

                                <button >Entrar</button>
                            </div>
                            </form>
                            <div className="login-form-btns">
                                <p onClick={() => this.setState({ isModalOpen: true })}>Esqueceu a Senha?</p>
                                <p>Voc?? n??o tem uma conta? <Link to="/register">Registre-se</Link></p>
                            </div>
                        </div>
                    </div>
                   

                    {/* ??rea do banner (lado direito) */}
                    <div className="login-banner-background">
                        <div className="login-banner-content">
                            <img src={banner} alt="Banner" draggable="false" />
                        </div>
                    </div>
                </div>


                
                {/* Modal */}
                <Modal isOpen={this.state.isModalOpen}>
                    <div className="modal-overlay">
                        <div className="modal" id="modal" onClick={() => document.getElementById('modal-card').click() ? '' : this.cancelaModal()}></div>
                        <div className="modal-card-background" id="modal-card">
                            <div className="modal-card-close">
                                <img src={close} alt="??cone para fechar o modal" draggable="false" onClick={() => this.cancelaModal()} />
                            </div>

                            <div className="modal-card-form-background">
                                <div className="modal-card-form">
                                    <div className="modal-card-form-text">
                                        <h1>Recuperar Senha</h1>
                                        <p>Esqueceu sua senha? Insira os dados abaixo para recuperar suas credenciais</p>
                                    </div>

                                    <div className="modal-card-form-input">
                                        <input type="email" placeholder="E-mail Cadastrado" />
                                    </div>

                                    <button>Recuperar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>
            </>
        );
    }
}