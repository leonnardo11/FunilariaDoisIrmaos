// Libs
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// Styles
import '../../assets/styles/reset.css';
import '../../assets/styles/pages/services.css';

// Components
import Sidebar from '../../components/Sidebar';


class Services extends Component {
    constructor(props){
        super(props);
        this.state = {
            example : '',
            getVehicleServices: []
        }
    }

    getVehicleServices = (user) => {
        axios('https://54.147.100.207/api/Services/Budget/845b4179-298a-48c0-a788-7261d66f2c60' ,{
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('user-token')
            }

        })
            .then(resposta => {
                if (resposta.status === 200) {
                    this.setState({ getVehicleServices: resposta.data })
                    console.log(this.state.getVehicleServices)
                }
            })
            .catch(erro => console.log(erro));
    };

    componentDidMount() {
        this.getVehicleServices();
        document.title = "Meus Veículos"
    };

    render() {
        return(
            <>
                <Sidebar>
                    <div className="services-header">
                        <Link to="/budgets" className="services-header-back">{"< Chevrolet Onix"}</Link>
                        <div className="services-title">
                            <h1>Orçamento #0001</h1>
                        </div>
                        <div className="services-name">
                            <p>Chevrolet Onix</p>
                        </div>
                        <div className="services-texts">
                            <p>Placa: ABC-1234</p>
                            <p>Data de Início: 20/10/2021</p>
                            <p>Data de Término: 21/10/2021</p>
                        </div>
                    </div>

                    <div className="services-card-background">
                        <p className="services-card-background-title">Serviços</p>

                        {/* Cards */}
                        <div className="services-card-content-background">
                                                       
                            {
                            this.state.getVehicleServices.map(vehicle => {
                                return (
                                    <div className="services-content-background">
                                    <div className="services-content-text">
                                        <h1>{vehicle.serviceDescription}</h1>
                                        <p className="services-content-text-descricao">Descrição: {vehicle.observations}</p>
                                        <p>Tipo de Serviço: {vehicle.serviceType.typeName}</p>
                                        <p>Data de Início: {vehicle.creationDate}</p>
                                    </div>
    
                                    <div className="services-content-btn">
                                         <p>Status: Finalizado</p>
                                         <p className="services-content-btn-valor">Valor: R$ {vehicle.price}</p>
                                    </div>
                                </div>
    
                                );
                            })
                        }

                        </div>
                    </div>
                </Sidebar>
            </>
        )
    }
}

export default Services;