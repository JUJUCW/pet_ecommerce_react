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
                <Stepper />
                <h3>寄送地址</h3>
                <div className={styles.personalInfo}>
                    <div className={styles.nameContainer}>
                        <div className={styles.salutation}>
                            <label htmlFor="salutation">稱謂</label>
                            <select
                                name="salutation"
                                id="salutation"
                                value={form.salutation}
                                onChange={(e) => handleInputChange('salutation', e.target.value)}
                            >
                                <option value="先生">先生</option>
                                <option value="小姐">小姐</option>
                            </select>
                        </div>
                        <div className={styles.name}>
                            <label htmlFor="name">姓名</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="請輸入姓名"
                                value={form.name}
                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className={styles.contact}>
                        <div className={styles.phone}>
                            <label htmlFor="phone">電話</label>
                            <input
                                type="text"
                                name="phone"
                                id="phone"
                                placeholder="請輸入電話"
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
                                placeholder="請輸入Email"
                                value={form.email}
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                            />
                        </div>
                    </div>
                    <div className={styles.city}>
                        <div className={styles.cityContainer}>
                            <label htmlFor="city">縣市</label>
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
                            <label htmlFor="email">地址</label>
                            <input
                                type="text"
                                name="address"
                                id="address"
                                placeholder="請輸入地址"
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
