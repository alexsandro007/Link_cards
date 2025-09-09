import styles from './Card.module.css';
import img from '../../assets/imgs/img.jpg';
import logo from '../../assets/imgs/comLogo.jpg';

import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineArrowOutward } from "react-icons/md";
import { LuCopy } from "react-icons/lu";

const cardData = [
  {
    id: 1,
    title: 'Card 1',
    curImg: img,
    comLogo: logo,
    category: 'relax'
  },
  {
    id: 2,
    title: 'Card 2',
    curImg: img,
    comLogo: logo,
    category: 'work'
  },
];

const Card = () => {
  return (
    <div className={styles.page}>
      {cardData.map((data) => (
        <div className={styles.card} key={data.id}>
          <div className={styles.container}>
            <div className={styles.imageContainer}>
              <img className={styles.img} src={data.curImg} alt={`Card ${data.id}`} />
              <MdOutlineArrowOutward className={styles.arrow} />
            </div>
            
            <div className={styles.textContainer}>
              <div className={styles.titleContainer}>
                <img className={styles.comLogo} src={data.comLogo} alt="Company Logo" />
                <h1>{data.title}</h1>
              </div>
              <p>{data.category}</p>
            </div>

            <div className={styles.icons}>
              <LuCopy className={styles.icon} />
              <div className={styles.heartContainer}>
                <FaRegHeart className={styles.heartOutline} />
                <FaHeart className={styles.heartFilled} />
              </div>
              <RiDeleteBin6Line className={styles.icon} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;