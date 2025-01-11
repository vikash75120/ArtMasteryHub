import { Input, Radio, Space } from 'antd';
import { useState } from 'react';
import '../../styles/configureCard.scss';


const ChooseModule = () => {
    const [value, setValue] = useState(1);

    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    return (
        <>
            <Radio.Group onChange={onChange} value={value}>
                <Space direction="vertical">
                    <Radio value={1}>Unsplash</Radio>
                    <Radio value={2}>Deviant Art</Radio>
                    <Radio value={3}>Instagram</Radio>
                </Space>
            </Radio.Group>
        </>
    )
}

const ConfigureCard = (props) => {
    return (

        <div className='choose-module-card-container'>
            <div className='card-header'>
                <div className='card-count'></div>
                <h2>Choose Module</h2>
            </div>
            <div className='card-body'>
            {props.type === "module" ? <ChooseModule /> : null}
            </div>
        </div>
    );

}
export default ConfigureCard;