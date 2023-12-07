// import { set } from 'lodash';
import styles from './ShippingInfo.module.scss';
import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Stepper from '../Stepper/Stepper';
// import NextButton from 'UIComponents/NextButton/NextButton';

// import Buttons from '../components/Button';
// import { formWatch } from '../utils/mixins';

// const STORAGE_KEY = 'form-info';

const dummyShippingMethods = [
    {
        id: 1,
        name: 'standard',
        text: 'Standard',
        description: 'Approximately 3 to 7 business days.',
        feeText: 0,
        fee: 0,
        // checked: true,
    },
    {
        id: 2,
        name: 'dhl',
        text: 'DHL',
        description: 'Delivered within 48 hours.',
        feeText: 500,
        fee: 500,
        // checked: false,
    },
];

export default function ShippingInfo() {
    // const [currentStep, setCurrentStep] = useState(2);
    const [shippingMethods, setShippingMethods] = useState([]);

    // const navigate = useNavigate();
    // useEffect(() => {
    //     const savedForm = JSON.parse(localStorage.getItem(STORAGE_KEY)) || form;
    //     setForm(savedForm);
    //     fetchShippingMethod();
    // }, [form]); // 空依賴數組確保這個效果只運行一次

    // const handleStepChange = (stepNum) => {
    //     setCurrentStep(stepNum);
    //     if (stepNum === 3) {
    //         // 在 React 中使用 react-router-dom 的 useHistory
    //         // 請確保你的項目中已安裝 react-router-dom
    //         // npm install react-router-dom
    //         navigate('/Form3');
    //     } else if (stepNum === 1) {
    //         navigate('/Form1');
    //     }
    // };
    // const [isCheckout, setIsCheckout] = useState(false);
    // const handleCheckboxChange = () => {
    //     setIsCheckout(!isCheckout);
    // };

    const fetchShippingMethod = () => {
        setShippingMethods(dummyShippingMethods.map((method) => ({ ...method, checked: false })));

    };
    useEffect(() => {
        fetchShippingMethod();
    }, []);

    const handleMethodsChange = (methodId) => {
        // setShippingMethods(
        //     shippingMethods.map((method) => ({
        //         ...method,
        //         checked: method.id === methodId,
        //     }))
        // );
        // const updateMethods = shippingMethods.map((method) => ({
        //     ...method,
        //     checked: method.id === methodId,
        // }));
        // const newDeliverFee = methodId === 1 ? 0 : 500;
        // setShippingMethods(updateMethods, newDeliverFee);
        // console.log(methodId);
        // updateShippingInfo(methodId.fee);
        const selectMethod = shippingMethods.find((method) =>({
            ...method,
            checked: method.id === methodId,
        }));
        if (selectMethod) {
            console.log(selectMethod.fee);
            return selectMethod.fee;
        }
    };

    return (
        <div className={styles.container}>
            <h3 className={styles.partTitle}>Shipping Method</h3>
            <div className={styles.shipMethod} id="shippingMethod">
                {shippingMethods.map((shippingMethod) => (
                    <div key={shippingMethod.id} className={`${styles.shipContainer} ${shippingMethod.name}`}>
                        <input
                            type="radio"
                            name="shipment"
                            checked={shippingMethods.checked}
                            onChange={() => handleMethodsChange(shippingMethod.id)}
                        />
                        <label>
                            <p className={styles.text}>{shippingMethod.text}</p>
                            <p className={styles.description}>{shippingMethod.description}</p>
                        </label>
                        <span className={styles.feeText}>
                            {shippingMethod.feeText.toLocaleString('en-US', {
                                style: 'currency',
                                currency: 'USD',
                                maximumFractionDigits: 0,
                                minimumFractionDigits: 0,
                            })}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
