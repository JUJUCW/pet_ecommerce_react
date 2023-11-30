import { useState } from 'react';
import styles from './AddressInfo.module.scss';
import Stepper from 'UIComponents/Stepper/Stepper';
import NextButton from 'UIComponents/NextButton/NextButton';

export default function AddressInfo() {
    const [currentStep, setCurrentStep] = useState(1);
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
    const handleInputChange = (fieldName, value) => {
        setForm({ ...form, [fieldName]: value });
    };
    return (
        <>
            <div className={styles.container}>
                {/* <Stepper /> */}
                <h3>Shipping Address</h3>
                <div className={styles.personalInfo}>
                    <div className={styles.nameContainer}>
                        <div className={styles.salutation}>
                            <label htmlFor="salutation">Salutation</label>
                            <select
                                name="salutation"
                                id="salutation"
                                value={form.salutation}
                                onChange={(e) => handleInputChange('salutation', e.target.value)}
                            >
                                <option value="先生">Mr.</option>
                                <option value="小姐">Ms.</option>
                            </select>
                        </div>
                        <div className={styles.name}>
                            <label htmlFor="name">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Enter Name Here"
                                value={form.name}
                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className={styles.contact}>
                        <div className={styles.phone}>
                            <label htmlFor="phone">Phone</label>
                            <input
                                type="text"
                                name="phone"
                                id="phone"
                                placeholder="Enter Phone Here"
                                value={form.phone}
                                onChange={(e) => handleInputChange('name', e.target.value)}
                            />
                        </div>
                        <div className={styles.email}>
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                name="email"
                                id="email"
                                placeholder="Enter Email Here"
                                value={form.email}
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                            />
                        </div>
                    </div>
                    <div className={styles.city}>
                        <div className={styles.cityContainer}>
                            <label htmlFor="city">City</label>
                            <select
                                name="city"
                                id="city"
                                value={form.city}
                                onChange={(e) => setForm({ ...form, city: e.target.value })}
                            >
                                <option value="台北市">台北市</option>
                                <option value="新北市">新北市</option>
                                <option value="台中市">台中市</option>
                                <option value="嘉義縣">嘉義縣</option>
                            </select>
                        </div>
                        <div className={styles.address}>
                            <label htmlFor="email">Address</label>
                            <input
                                type="text"
                                name="address"
                                id="address"
                                placeholder="Enter Address Here"
                                value={form.address}
                                onChange={(e) => setForm({ ...form, address: e.target.value })}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* <NextButton /> */}
        </>
    );
}
