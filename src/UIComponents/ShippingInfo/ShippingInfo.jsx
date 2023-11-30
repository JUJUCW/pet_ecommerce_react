import styles from './ShippingInfo.module.scss';

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Stepper from '../Stepper/Stepper';
import NextButton from 'UIComponents/NextButton/NextButton';

// import Buttons from '../components/Button';
// import { formWatch } from '../utils/mixins';

const STORAGE_KEY = 'form-info';

const dummyShippingMethod = [
    {
        id: 1,
        name: 'standard',
        text: 'Standard',
        description: 'Approximately 3 to 7 business days.',
        feeText: 'FREE',
        fee: 0,
        checked: true,
    },
    {
        id: 2,
        name: 'dhl',
        text: 'DHL',
        description: 'Delivered within 48 hours.',
        feeText: '$ 500',
        fee: 500,
        checked: false,
    },
];

export default function ShippingInfo() {
    const [currentStep, setCurrentStep] = useState(2);
    const [shippingMethods, setShippingMethods] = useState([]);
    const [form, setForm] = useState({
        salutation: '先生',
        name: '',
        phone: '',
        email: '',
        city: '',
        address: '',
        shippingFee: 0,
        ccName: '',
        ccNumber: '',
        ccExpireDate: '',
        ccCvc: '',
    });
    const navigate = useNavigate();
    useEffect(() => {
        const savedForm = JSON.parse(localStorage.getItem(STORAGE_KEY)) || form;
        setForm(savedForm);
        fetchShippingMethod();
    }, [form]); // 空依賴數組確保這個效果只運行一次

    const handleStepChange = (stepNum) => {
        setCurrentStep(stepNum);
        if (stepNum === 3) {
            // 在 React 中使用 react-router-dom 的 useHistory
            // 請確保你的項目中已安裝 react-router-dom
            // npm install react-router-dom
            navigate('/Form3');
        } else if (stepNum === 1) {
            navigate('/Form1');
        }
    };

    const fetchShippingMethod = () => {
        setShippingMethods(dummyShippingMethod);
    };

    return (
        <>
            <div className={styles.container}>
                {/* Main Stepper */}
                {/* <Stepper currentStep={currentStep} /> */}

                <h3 className={styles.partTitle}>Shipping Method</h3>
                <div className={styles.shipMethod} id="shipping__method">
                    {shippingMethods.map((shippingMethod) => (
                        <div key={shippingMethod.id} className={`styles.shipContainer ${shippingMethod.name}`}>
                            <input
                                type="radio"
                                name="shipment"
                                checked={shippingMethod.checked}
                                onChange={() => setForm({ ...form, shippingFee: shippingMethod.fee })}
                            />
                            <label>
                                <p className={styles.text}>{shippingMethod.text}</p>
                                <p className={styles.description}>{shippingMethod.description}</p>
                            </label>
                            <span className={styles.feeText}>{shippingMethod.feeText}</span>
                        </div>
                    ))}
                </div>
            </div>
            {/* <NextButton /> */}
        </>
    );
}
