import React, { useState, useEffect } from 'react';
import { PageArea, AccountArea } from './styled';
import  OlxAPI  from '../../helpers/OlxAPI';
import { Link } from 'react-router-dom';


import { PageContainer } from '../../components/MainComponents';
import { AdItem } from '../../components/partials/AdItem';

export const MyAccount = () => {
    const api = OlxAPI();

    const [ShowName, setShowName] = useState([]);
    const [ShowEmail, setShowEmail] = useState([]);
    const [ShowState, setShowState] = useState([]);
    const [adList, setAdList] = useState([]);

    useEffect(() => {
        const getShowName = async (token) => {
            const json = await api.getAccount({
                token
            });
            setShowName(json.name);
        }
        getShowName();
    }, []);

    useEffect(() => {
        const getRecentAds = async () => {
            const json = await api.getAccount({
                sort: 'desc',
                limit: 8
            });
            setAdList(json.ads);
        }
        getRecentAds();
    }, []);

    useEffect(() => {
        const getShowEmail = async () => {
            const json = await api.getAccount({
                sort: 'desc',
                limit: 8
            });
            setShowEmail(json.email);
        }
        getShowEmail();
    }, []);

    useEffect(() => {
        const getShowState = async () => {
            const json = await api.getAccount({
                sort: 'desc',
                limit: 8
            });
            setShowState(json.state);
        }
        getShowState();
    }, []);
    return (
        <>    
            <AccountArea>
                <PageContainer>
                    <h2>Meu Usuário</h2>
                    <form>
                        <label className="area">
                            <div className="area--title">Nome: </div>
                            <div className="area--input">
                                <p>{ShowName}</p>
                            </div>
                        </label>
                        <label className="area">
                            <div className="area--title">Email: </div>
                            <div className="area--input">
                                <p>{ShowEmail}</p>
                            </div>
                        </label>
                        <label className="area">
                            <div className="area--title">Estado: </div>
                            <div className="area--input">
                                <p>{ShowState}</p>
                            </div>
                        </label>
                          
                        <label className="area">
                            <div className="area--title"></div>
                            <div className="area--input">
                                <Link to="/edit-user" className='button'>Editar Usuário</Link>
                            </div>
                        </label>                     
                    </form>
                  
                </PageContainer>
            </AccountArea>
            <PageContainer>
                <PageArea>
                <h2>Meus Anúncios</h2>
                    <div className='formArea'>
                        {adList.map((image, index) =>
                            <AdItem key={index} data={image} /> 
                        )}
                    </div>
                    
                    <label className="area">
                            <div className="area--title"></div>
                            <div className="area--input">
                                <Link to="/edit-user" className='button'>Editar Anúncios</Link>
                            </div>
                        </label>  
                    
                </PageArea>
            </PageContainer>    
        </>
    );
}