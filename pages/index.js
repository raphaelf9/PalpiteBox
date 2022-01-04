import React from "react";
import Link from "next/link";
import useSWR from "swr";
import PageTitle from "../components/PageTitle";

const fetcher = (...args) => fetch(...args).then(res=> res.json())

const Index = () => {
    const{data, error} = useSWR('api/get-promo', fetcher)
    return(
    <div>
        <PageTitle title= 'Bem Vindo!'/>
        <p className="mt-6 text-center">
        O Estabelecimento X sempre busca atender melhor seus clientes.<br />
        Por isso, estamos sempre abertos a ouvir a sua opinião.
        </p>
        <div className="my-12 text-center">
            <Link href='/pesquisa'>
                <a className="bg-blue-400 px-6 py-4 font-bold rounded-lg shadow-lg hover:shadow">Dar sua opinião ou sugestão</a>
            </Link>
        </div>
        {!data && <p>Carregando...</p>}
        {!error && data && data.showCoupon &&
        <p className="mt-6 text-center">
            {data.message}
        </p>
        }
    </div>
    )
}
export default Index;
