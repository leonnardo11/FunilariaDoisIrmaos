// Libs
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";


// Styles
import '../../assets/styles/reset.css';
import '../../assets/styles/pages/budget.css';

// Components
import Sidebar from '../../components/Sidebar';


class Budget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            BudgetList: [],
            vehicleList: []
        }
    }

    getUserVehicle = () => {
        axios('https://54.147.100.207/api/Vehicles/VehicleId/' + this.props.match.params.id)
            .then(resposta => {
                if (resposta.status === 200) {
                    this.setState({ vehicleList: resposta.data })
                    console.log("Lista de Veículos:" + this.state.vehicleList)
                }
            })
            .catch(erro => console.log("Erro Lista de Veiculos: " + erro));
    };

    getVehicleBudget = () => {
        axios('https://54.147.100.207/api/Budgets/Vehicle/' + this.props.match.params.id)
            .then(resposta => {
                if (resposta.status === 200) {
                    this.setState({ BudgetList: resposta.data })
                    console.log("Lista: " + resposta.data);
                }
                console.log(this.state.BudgetList)
            })
            .catch(erro => console.log(erro));

    };

    componentDidMount() {
        this.getUserVehicle();
        this.getVehicleBudget();
        document.title = "Orçamento do Veículo"
    }

    render() {
        return (
            <>
                <Sidebar>
                    <div className="budget-header">
                        <Link to="/home" className="budget-header-back">{"< Meus Veículos"}</Link>
                        <div className="budget-title">
                            <h1>{this.state.vehicleList.brandName} {this.state.vehicleList.modelName}</h1>
                        </div>
                        <div className="budget-placa">
                            <p>Placa: {this.state.vehicleList.licensePlate}</p>
                        </div>
                    </div>

                    <div className="budget-card-background">
                        <p className="budget-card-background-title">Orçamento</p>

                        {
                            Object.keys(this.state.BudgetList).map(budget => {
                                return (
                                    <div key={budget.idVehicle} className="budget-card-content-background">
                                        <Link to="/services" className="budget-content-background">
                                            <div className="budget-content-text">
                                                <h1>Orçamento #0001</h1>
                                                <p>{budget.creationDate}</p>
                                                <p>Data de Término: ----</p>
                                            </div>

                                            <div className="budget-content-btn">
                                                <p>{budget.status}Status: Em Andamento</p>
                                                <p className="budget-content-btn-valor">{budget.totalValue}</p>
                                            </div>
                                        </Link>
                                    </div>
                                );
                            })
                        }

                    </div>
                </Sidebar>
            </>
        )
    }
}

export default Budget;