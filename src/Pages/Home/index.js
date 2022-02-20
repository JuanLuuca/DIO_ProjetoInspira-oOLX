import React, { useState, useEffect } from 'react';
import { PageArea, SearchArea } from './styled';
import  OlxAPI  from '../../helpers/OlxAPI';
import { Link } from 'react-router-dom';


import { PageContainer } from '../../components/MainComponents';
import { AdItem } from '../../components/partials/AdItem';

export const Home = () => {
    const api = OlxAPI();

    const [stateList, setStateList] = useState([]);
    const [categories, setCategories] = useState([]);
    const [adList, setAdList] = useState([]);

    useEffect(() => {
        const getStates = async () => {
            const slist = await api.getStates();
            setStateList(slist);
        }
        getStates();
    }, []);

    useEffect(() => {
        const getStates = async () => {
            const cats = await api.getCategories();
            setCategories(cats);
        }
        getStates();
    }, []);

    useEffect(() => {
        const getRecentAds = async () => {
            const json = await api.getAds({
                sort: 'desc',
                limit: 8
            });
            setAdList(json.ads);
        }
        getRecentAds();
    }, []);
    return (
        <>
            <SearchArea>
                <PageContainer>
                    <div className='searchBox'>
                        <form method='GET' action='/ads'>
                            <input type="text" name="q" placeholder='O que você procura?' />
                            <select name="state">
                                {stateList.map((i, k) =>
                                    <option key={k} value={i.name}>{i.name}</option>
                                )}
                            </select>
                            <button>Pesquisar</button>
                        </form>
                    </div>
                    <div className='categoryList'>
                        {categories.map((i, k) => 
                            <Link key={k} to={`/ads?cat=${i.slug}`} className="categoryItem">
                                <img src={i.img} alt="" />
                                <span>{i.name}</span>
                            </Link>
                        )}
                    </div>
                </PageContainer>
            </SearchArea>
            <PageContainer>
                <PageArea>
                    <h2>Anúncios Recentes</h2>
                    <div className='list'>
                        {adList.map((image, index) =>
                            <AdItem key={index} data={image} /> 
                        )}
                    </div>
                    <Link to="/ads" className="seeAllLink">Ver Todos</Link>

                    <hr/>

                    ....
                </PageArea>
            </PageContainer>    
        </>
    );
}