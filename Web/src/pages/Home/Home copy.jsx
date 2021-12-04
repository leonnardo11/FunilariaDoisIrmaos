// Libs
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import { parseJwt, userAuthentication } from '../../services/Auth';

// Styles
import "../../assets/styles/reset.css";
import "../../assets/styles/pages/home.css";
import "../../assets/styles/modals/new-vehicle.css";

// Components
import Sidebar from '../../components/Sidebar';
import Modal from '../../components/Modal';

// Images
import car from '../../assets/images/pages/home-red-car-example.svg';
import close from '../../assets/images/modals/modal-close-icon.svg';


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vehicleList: [],
            isModalOpen: false
        };
    }

    getUserVehicle = (user) => {
        axios('http://44.195.209.235/api/Vehicles/User/' + parseJwt().jti , {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('user-token')
            }
            
        })
            .then(resposta => {
                if (resposta.status === 200) {
                    this.setState({ vehicleList: resposta.data })
                    console.log(this.state.vehicleList)
                }
            })
            .catch(erro => console.log(erro));
    };

    // Chama as funções assim que a tela é renderizada
    componentDidMount() {
        this.getUserVehicle();
        document.title = "Meus Veículos"
    };

    cancelaModal = () => {
        this.setState({ isModalOpen: false })
    }

    render() {
        return (
            <>
                <Sidebar>
                    <div className="home-title">
                        <h1>Meus Veículos</h1>
                    </div>
                    <div className="home-btn">
                        <button onClick={() => this.setState({ isModalOpen: true })}>Novo Veículo</button>
                    </div>
                    <div className="home-card-background">
                       
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

                            <div className="modal-vehicle-card-form-background">
                                <div className="modal-vehicle-card-form">
                                    <div className="modal-vehicle-card-form-text">
                                        <h1>Adicionar um novo veículo</h1>
                                        <p>Adicione as informações do seu Veículo</p>
                                    </div>

                                    <div className="modal-vehicle-card-form-input-background">
                                        <div className="modal-vehicle-card-form-input">
                                            <input type="text" placeholder="Insira o Modelo de seu Veículo" />
                                        </div>

                                        <div className="modal-vehicle-card-form-input">
                                            <input type="text" placeholder="Marca" />
                                        </div>

                                        <div className="modal-vehicle-card-form-input">
                                            <input type="year" placeholder="Ano" />
                                        </div>

                                        <div className="modal-vehicle-card-form-input">
                                            <input type="text" placeholder="Cor" />
                                        </div>

                                        <div className="modal-vehicle-card-form-input">
                                            <input type="text" placeholder="Placa" />
                                        </div>

                                        <button>Adicionar Veículo</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>
            </>
        );
    }
}