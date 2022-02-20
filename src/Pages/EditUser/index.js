import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { Link } from 'react-router-dom';
import { PageArea } from './styled';

import  OlxAPI  from '../../helpers/OlxAPI';

import { PageContainer, PageTitle, ErrorMessage } from '../../components/MainComponents';

export const EditUser = () => {
    const api = OlxAPI();
    const Navigate = useNavigate();

    const fileField = useRef();

    const [categories, setCategories] = useState([]);
    
    // Principal esse de baixo
    const [stateList, setStateList] = useState([]);
    const [stateLoc, setStateLoc] = useState([]);
    const [name, setName] = useState([]);
    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);
    // -----


    
    const [price, setPrice] = useState('');
    const [priceNegotiable, setPriceNegotiable] = useState(false);
    const [desc, setDesc] = useState('');

    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState('');

    
    useEffect(() => {
        const getStates = async () => {
            const slist = await api.getStates();
            setStateList(slist);
        }
        getStates();
    }, []);

    useEffect(() => {
        const getCategories = async () => {
            const cats = await api.getCategories();
            setCategories(cats);
        }
        getCategories();
    }, []);

    useEffect(() => {
        const UpdateName = async () => {
            const json = await api.UpdateAccount();
            setName(json.name);
        }
        UpdateName();
    }, []);

    useEffect(() => {
        const UpdateEmail = async () => {
            const json = await api.UpdateAccount();
            setEmail(json.email);
        }
        UpdateEmail();
    }, []);

    useEffect(() => {
        const UpdatePassword = async () => {
            const json = await api.UpdateAccount();
            setPassword(json.password);
        }
        UpdatePassword();
    }, []);



    return (
        <PageContainer>
            <PageTitle>Trocar Usuário</PageTitle>
            <PageArea>
                {error &&
                    <ErrorMessage>{error}</ErrorMessage>
                }
                <form>
                    <label className="area">
                        <div className="area--title">Novo Nome:</div>
                        <div className="area--input">
                            <input type="text" disabled={disabled} value={name} onChange={e=>setName(e.target.value)} required />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Novo Email:</div>
                        <div className="area--input">
                            <input type="email" disabled={disabled} value={email} onChange={e=>setEmail(e.target.value)} required />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Nova Senha:</div>
                        <div className="area--input">
                            <input type="password" disabled={disabled} value={password} onChange={e=>setPassword(e.target.value)} required />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Novo Estado:</div>
                        <div className="area--input">
                            <select value={stateLoc} onChange={e=>setStateLoc(e.target.value)} required>
                                <option></option>
                                {stateList.map((i, k)=>
                                    <option key={k} value={i._id}>{i.name}</option>
                                )}
                            </select>
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title"></div>
                        <div className="area--input">
                            <Link to="/my-account" className='button' disabled={disabled}>Salvar</Link>
                        </div>
                    </label>
                </form>
            </PageArea>
        </PageContainer>
    )
}