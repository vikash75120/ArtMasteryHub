import { Card, Radio, Space, TimePicker } from "antd";
import { useEffect, useState } from "react";
import styles from "./configureCard.module.scss";
import Search from "antd/es/input/Search";

const chooseModule = (module) => {
  const [value, setValue] = useState("");

  useEffect(() => {
      setValue(module?.fields[0]?.value);
  }, [module]);

  const onRadioValueChange = (e) => {
    setValue(e.target.value);
  };

  const onSearch = (value) => console.log(value);

const onTimePickerChange = (time, timeString) => {
  console.log(time, timeString);
};

  //switch case for different modules

  switch (module.label) {
    case "radio_group":
      return (
        <Radio.Group onChange={onRadioValueChange} value={value} className={`radioGroupContainer`}>
          <Space direction="vertical">
            {module?.fields?.map((field) => (
              <Radio key={field?.id} value={field?.value}>
                {field?.label}
              </Radio>
            ))}
          </Space>
        </Radio.Group>
      );
    case "input":
      return (
        <>
        {module?.fields?.map((field) => (
          <div key={field?.id} className={styles.searchInputContainer}>
            <label className={styles.inputLabel}>{field?.label}</label>
            <Search placeholder={field?.Placeholder} onSearch={onSearch} className={`searchInputButton`} />
          </div>
        ))}
        </>
      );
      case "timer_group":
      return (
        <>
        {module?.fields?.map((field) => (
          <div key={field?.id} className={styles.timerInputContainer}>
            <label className={styles.timerInputLabel}>{field?.label}</label>
            <TimePicker onChange={onTimePickerChange} changeOnScroll needConfirm={false} />
          </div>
        ))}
        </>
      );
    default:
      return null;
  }
};

const ConfigureCard = ({ settings }) => {
  return (
    <div className={styles.cardContainer}>
      <Card title={settings?.title} bordered={false}>
        {settings?.content?.map((item,index) => {
          return <div key={index}>{chooseModule(item)}</div>;
        })}
      </Card>
    </div>
  );
};
export default ConfigureCard;
