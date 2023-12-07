import { useState } from 'react';
import styles from './AddressInfo.module.scss';
// import Button from 'UIComponents/Button/Button';
// import Stepper from 'UIComponents/Stepper/Stepper';
// import NextButton from 'UIComponents/NextButton/NextButton';

export default function AddressInfo() {
    // const [currentStep, setCurrentStep] = useState(1);
    const [form, setForm] = useState({
        salutation: 'Mr.',
        name: '',
        phone: '',
        email: '',
        city: 'Taipei City',
        address: '',
        shippingFee: 0,
    });
    const [isAddressVisible, setIsAddressVisible] = useState(true);
    
    const toggleAddressVisible = () => {
        setIsAddressVisible(!isAddressVisible);
    };
    const handleInputChange = (fieldName, value) => {
        setForm({ ...form, [fieldName]: value });
    };
    const handleSave = () => {
    
        toggleAddressVisible();
    };
    return (
        <>
            <div className={styles.container}>
                {/* <Stepper /> */}
                <h3 onClick={toggleAddressVisible}>Shipping Address</h3>
                {!isAddressVisible && (
                    <div className={styles.addressBox}>
                        <div>
                            <div className={styles.addressContentName}>
                                {/* {saveName}&nbsp; */}
                                {form.salutation}&nbsp;
                                {form.name}
                            </div>
                            <div className={styles.addressContent}>
                                {form.city}&nbsp;
                                {form.address}
                                {/* {saveAddress} */}
                            </div>
                        </div>

                        <button className={styles.changeButton} onClick={toggleAddressVisible}>
                            change
                        </button>
                    </div>
                )}
                {isAddressVisible && (
                    <>
                        <div className={styles.personalInfo}>
                            <button className={styles.cross} onClick={toggleAddressVisible}>
                                X
                            </button>
                            <div className={styles.nameContainer}>
                                <div className={styles.salutation}>
                                    <label htmlFor="salutation">Salutation</label>
                                    <select
                                        name="salutation"
                                        id="salutation"
                                        value={form.salutation}
                                        onChange={(e) => handleInputChange('salutation', e.target.value)}
                                    >
                                        <option value="Mr.">Mr.</option>
                                        <option value="Ms.">Ms.</option>
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
                                        onChange={(e) => handleInputChange('name', e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className={styles.contact}>
                                <div className={styles.phone}>
                                    <label htmlFor="phone">Phone</label>
                                    <input
                                        type="tel"
                                        pattern="[0-9]{4}-[0-9]{6}"
                                        name="phone"
                                        id="phone"
                                        placeholder="0912-345678"
                                        value={form.phone}
                                        onChange={(e) => handleInputChange('phone', e.target.value)}
                                        required
                                    />
                                </div>
                                <div className={styles.email}>
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Enter Email Here"
                                        value={form.email}
                                        onChange={(e) => handleInputChange('email', e.target.value)}
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
                                        onChange={(e) => handleInputChange('city', e.target.value)}
                                    >
                                        <option value="Taipei City">Taipei City</option>
                                        <option value="New Taipei City">New Taipei City</option>
                                        <option value="Taichung City">Taichung City</option>
                                        <option value="Kaohsiung City">Kaohsiung City</option>
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
                                        onChange={(e) => handleInputChange('address', e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                        <button className={styles.saveButton} onClick={handleSave}>
                            SAVE
                        </button>
                    </>
                )}
            </div>
            {/* <NextButton /> */}
        </>
    );
}
