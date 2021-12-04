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
                            <main>
                                <h1 className="dash-title">Todos Orçamentos</h1>
                                <div class="main-header"> 
                                    <p>Orçamento</p>
                                    <p>Cliente</p>
                                    <p>Status</p>
                                </div>
                                {
                            this.state.BudgetList.map(Budget => {
                                return (
                                    <section className="main-equip">
                                    <details>
                                        <summary>
                                            <p></p>
                                            <p>Cliente</p>
                                            <p>Pendente</p>
                                        </summary>
                                        <div className="content">
                                            <div className="paragrafos">
                                                <p>Cliente: Leonardo Rodrigues</p>
                                                <p>Veículo: Chevrolet Onix</p>
                                                <p>Status: Pendente</p>

                                            </div>
                                            <div className="botoes">
                                                <Link to="/DashBudget">
                                                <a  className="btn-edit">Editar</a>
                                                </Link>
                                            </div>
                                        </div>
                                    </details>
                                </section>
                                );
                            })
                        }
                            </main>
                        </SidebarAdmin>
                    </>
                    )
    }
}

                    export default DashAllBugdets;