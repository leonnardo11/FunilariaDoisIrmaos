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
        }
    }

    getVehicleBudget = () => {
        axios('https://54.147.100.207/api/Budgets/Vehicle/7f99dc6d-4395-4c03-b035-1f4229bc3d60')
            .then(resposta => {
                if (resposta.status === 200) {
                    this.setState({ BudgetList: resposta.data })
                    console.log(this.state.BudgetList);
                }
            })
            .catch(erro => console.log(erro));
    };

    componentDidMount() {
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
                            <h1></h1>
                        </div>
                        <div className="budget-placa">
                            <p>Placa: ABC-1234</p>
                        </div>
                    </div>

                    <div className="budget-card-background">
                        <p className="budget-card-background-title">Orçamento</p>
                        {
                            this.state.BudgetList.map(budget => {
                                return (
                                    <div className="budget-card-content-background">
                                        <Link to="/services" className="budget-content-background">
                                            <div className="budget-content-text">
                                                <h1>Orçamento #0001</h1>
                                                <p>Data de Início: 20/09/2021</p>
                                                <p>Data de Término: ----</p>
                                            </div>

                                            <div className="budget-content-btn">
                                                <p>Status: Em Andamento</p>
                                                <p className="budget-content-btn-valor">Valor: R$ 3.872,28</p>
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