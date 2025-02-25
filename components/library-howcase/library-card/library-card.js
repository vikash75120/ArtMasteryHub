import { Card } from "antd";
import styles from "./library-card.module.scss";

const LibraryCard = ({item}) =>{
    return(
        <div>
            <Card title={item.title}>Card content</Card>
        </div>
    )
}

export default LibraryCard;