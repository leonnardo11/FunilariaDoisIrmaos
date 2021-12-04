// Libs
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import { parseJwt } from '../../services/Auth';
import InputMask from "react-input-mask";


// Styles
import '../../assets/styles/pages/dashallbudget.css';
import '../../assets/styles/modals/edit-profile.css';

// Components
import SidebarAdmin from '../../components/SidebarAdmin';

// Images

class DashAllBugdets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            example: '',
            BudgetList: [],
            isModalOpen: false
        }
    }

    getAllBudget = (user) => {
        axios('https://54.147.100.207/api/Budgets', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('user-token')
            }

        })
            .then(resposta => {
                if (resposta.status === 200) {
                    this.setState({ BudgetList: resposta.data })
                    console.log(this.state.BudgetList)
                }
            })
            .catch(erro => console.log(erro));
    };

    componentDidMount() {
        this.getAllBudget();
        document.title = "Meus Veículos"
    };

    cancelaModal = () => {
        this.setState({ isModalOpen: false })
    }

    render() {
        return (
            <>
                <SidebarAdmin>
                <div className="dash-title">
                        <h1>Orçamentos</h1>
                    </div>
                    <div className="dash-card-background">
                        {
                            this.state.BudgetList.map(budget => {
                                return (
                                    <Link className="dash-content-background" to="/dashbudget">
                                        
                                        
                                        <div className="dash-content-text" >
                                            <h1>Veículo: {budget.vehicle.brandName} {budget.vehicle.modelName}</h1>
                                            <p>Placa: {budget.vehicle.licensePlate}</p>
                                            <p>Cor: {budget.vehicle.color}</p>
                                            <p>Serviços: {budget.services[0].serviceDescription}</p>
                                        </div>

                                        <div className="dash-content-btn">
                                            <p>Ver Orçamento</p>
                                        </div>
                                    </Link>
                                );
                            })
                        }
                    </div>
                </SidebarAdmin>
            </>
        )
    }
}

export default DashAllBugdets;