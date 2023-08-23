import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import Collection from 'UIComponents/Collection/Collection';
import styles from './ProductMainContainer.module.scss';
import PetCard from 'UIComponents/PetCard/PetCard';
import fb from 'assets/icons/facebook_g.svg';
import twitter from 'assets/icons/twitter_g.svg';
import ig from 'assets/icons/instagram_g.svg';
import yt from 'assets/icons/youtube_g.svg';
import share from 'assets/icons/share.svg';

import Breadcrumb from 'UIComponents/Breadcrumb/Breadcrumb';
import Button from 'UIComponents/Button/Button';
import { getDog } from 'api/dog';
import PoppyInfoItem from 'UIComponents/PoppyInfoItem/PoppyInfoItem';

export default function ProductMainContainer() {
    const [poppyProfile, setPoppyProfile] = useState([]);
    const firstImage = poppyProfile?.images?.[0];
    const [selectedImage, setSelectedImage] = useState(firstImage);
    const urlParams = new URLSearchParams(window.location.search);
    const SKU = urlParams.get('SKU');
    const handleImageClick = (url) => {
        setSelectedImage(url);
    };
    useEffect(() => {
        const getPoppyProfile = async () => {
            // console.log(data)
            try {
                const data = await getDog(SKU);

                if (data.status === 'error') {
                    console.log(data.message);
                    return;
                }
                if (data) {
                    setPoppyProfile(data);
                    // console.log(data);
                }
            } catch (error) {
                console.log(error);
            }
        };
        getPoppyProfile();
        handleImageClick(firstImage);
    }, [SKU, firstImage]);

    return (
        <div className={styles.container}>
            <div className={styles.mainContainer}>
                <div className={styles.left}>
                    {<img src={selectedImage} alt="selected" className={styles.img} />}
                    <div className={styles.imagesContainer}>
                        {poppyProfile?.images?.map((url, index) => (
                            <img
                                key={index}
                                src={url}
                                alt="poppies"
                                className={styles.img_s}
                                onClick={() => handleImageClick(url)}
                            />
                        ))}
                    </div>

                    <div className={styles.socialMediaContainer}>
                        <div className={styles.share}>
                            <img src={share} alt="share" />
                            <span>Share:</span>
                        </div>
                        <img src={fb} alt="fb" className={styles.socialMedia} />
                        <img src={twitter} alt="fb" className={styles.socialMedia} />
                        <img src={ig} alt="fb" className={styles.socialMedia} />
                        <img src={yt} alt="fb" className={styles.socialMedia} />
                    </div>
                </div>
                <div className={styles.right}>
                    <Breadcrumb />
                    <div className={styles.poppyName}>{poppyProfile.title}</div>
                    <div className={styles.btn}>
                        <Button title="Adopt me" size="btn_151" />
                        <Button title="Chat with Us" size="btn_151_t" />
                    </div>
                    <div className={styles.poppyInfo}>
                        {
                            <PoppyInfoItem
                                SKU={poppyProfile.SKU}
                                age={poppyProfile.age}
                                size={poppyProfile.size}
                                vaccinated={poppyProfile.vaccinated}
                                color={poppyProfile.color}
                            />
                        }
                    </div>
                </div>
            </div>
            <Collection />
            <div className={styles.titleContainer}>
                <p className={styles.text}>Who's new?</p>
                <p className={styles.title}>See more of them</p>
            </div>
            <div className={styles.cardContainer}>
                <PetCard />
                <PetCard />
                <PetCard />
                <PetCard />
            </div>
        </div>
    );
}
