import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const TeknisPengunggahan = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-cover bg-center bg-[url('/images/bgwarna.png')] md:bg-[url('/images/bgwarnadesktop.png')]"
        >
            <div className="p-8 rounded-lg text-center max-w-md w-full space-y-4">
                <img src="/nirmana/teknispengunggahanresult-01.png" alt="Teknis Pengunggahan" className="w-full h-auto rounded-lg" />
                <div className="flex justify-between mt-6">
                    <Button text="Back" onClick={() => navigate(-1)} variant="secondary" />
                    <Button text="Home" onClick={() => navigate('/')} />
                </div>
            </div>
        </div>
    );
};

export default TeknisPengunggahan;
