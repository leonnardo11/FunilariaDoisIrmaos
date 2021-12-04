// Libs
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import Modal from '../../components/Modal';



// Styles
import '../../assets/styles/pages/dashallbudget.css';
import '../../assets/styles/modals/edit-profile.css';

// Components
import SidebarAdmin from '../../components/SidebarAdmin';

// Images
import close from '../../assets/images/modals/modal-close-icon.svg';


class DashAllUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            example: '',
            UserList: [],
            isModalOpen: false
        }
    }

    getAllUsers = () => {
        axios('https://54.147.100.207/api/Users', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('user-token')
            }

        })
            .then(resposta => {
                if (resposta.status === 200) {
                    this.setState({ UserList: resposta.data })
                    console.log(this.state.UserList)
                }
            })
            .catch(erro => console.log(erro));
    };

    componentDidMount() {
        this.getAllUsers();
        document.title = "Usuários"
    };

    cancelaModal = () => {
        this.setState({ isModalOpen: false })
    }

    render() {
        return (
            <>
                <SidebarAdmin>
                    <main>
                        <h1 className="dash-title">Todos Usuários</h1>
                        <div class="main-header">
                            <p>Nome</p>
                            <p>Email</p>
                            <p>Telefone</p>
                        </div>
                        {
                            this.state.UserList.map(users => {
                                return (
                                    <section className="main-equip">
                                        <details>
                                            <summary>
                                                <p>{users.username}</p>
                                                <p>{users.email}</p>
                                                <p>{users.phoneNumber}</p>
                                            </summary>
                                            <div className="content">
                                                <div className="paragrafos">
                                                    <p>Nome: {users.username}</p>
                                                    <p>Email: {users.email}</p>
                                                    <p>Telefone: {users.phoneNumber}</p>
                                                </div>
                                                <button className="btn-edit" onClick={() => this.setState({ isModalOpen: true })}>Editar</button>
                                            </div>
                                        </details>
                                    </section>
                                );
                            })
                        }
                    </main>
                </SidebarAdmin>

                {/* Modal */}
                <Modal isOpen={this.state.isModalOpen}>
                    <div className="modal-overlay">
                        <div className="modal" id="modal" onClick={() => document.getElementById('modal-card').click() ? '' : this.cancelaModal()}></div>
                        <div className="modal-card-background" id="modal-card">
                            <div className="modal-card-close">
                                <img src={close} alt="Ícone para fechar o modal" draggable="false" onClick={() => this.cancelaModal()} />
                            </div>

                            <div className="modal-vehicle-card-form-background">
                                <div className="modal-vehicle-card-form">
                                    <div className="modal-vehicle-card-form-text">
                                        <h1>Editar Usuário</h1>
                                    </div>

                                    <div className="modal-vehicle-card-form-input-background">
                                        <div className="modal-vehicle-card-form-input">
                                            <input type="text" placeholder="Nome" />
                                        </div>

                                        <div className="modal-vehicle-card-form-input">
                                            <input type="text" placeholder="Telefone" />
                                        </div>

                                        <div className="modal-vehicle-card-form-input">
                                            <input type="year" placeholder="Senha" />
                                        </div>

                                        <div className="modal-vehicle-card-form-input">
                                            <input type="text" placeholder="Email" />
                                        </div>
                                        <button>Editar Usuário</button>
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

export default DashAllUsers;