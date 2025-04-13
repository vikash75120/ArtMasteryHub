import { Card, Radio, Space, TimePicker } from "antd";
import { useEffect, useState } from "react";
import styles from "./configureCard.module.scss";
import Search from "antd/es/input/Search";

const ChooseModule = ({ module, moduleId, setConfiguration }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(module?.fields[0]?.value || "");
  }, [module]);

  const updateConfig = (fieldId, val) => {
    setConfiguration((prev) => ({
      ...prev,
      [moduleId]: {
        ...prev[moduleId],
        [fieldId]: val,
      },
    }));
  };

  const onRadioValueChange = (e) => {
    const val = e.target.value;
    setValue(val);
    updateConfig(module.id, val);
  };

  const onSearch = (val) => {
    updateConfig(module.fields[0]?.id, val);
  };

  const onTimePickerChange = (time, timeString) => {
    updateConfig(module.fields[0]?.label, timeString); // using label as key for simplicity
  };

  switch (module.label) {
    case "radio_group":
      return (
        <Radio.Group
          onChange={onRadioValueChange}
          value={value}
          className={`radioGroupContainer`}
        >
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
              <Search
                placeholder={field?.Placeholder}
                onSearch={onSearch}
                className={`searchInputButton`}
              />
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
              <TimePicker
                onChange={onTimePickerChange}
                changeOnScroll
                needConfirm={false}
              />
            </div>
          ))}
        </>
      );
    default:
      return null;
  }
};

const ConfigureCard = ({ settings, setConfiguration }) => {
  return (
    <div className={styles.cardContainer}>
      <Card title={settings?.title} bordered={false}>
        {settings?.content?.map((item, index) => (
          <div key={index}>
            <ChooseModule
              module={item}
              moduleId={settings.id}
              setConfiguration={setConfiguration}
            />
          </div>
        ))}
      </Card>
    </div>
  );
};
export default ConfigureCard;
