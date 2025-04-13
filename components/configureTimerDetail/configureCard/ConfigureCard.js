import { Card, Radio, Space, TimePicker } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setConfiguration } from "@/store/slices/configurationSlice";
import styles from "./configureCard.module.scss";
import Search from "antd/es/input/Search";

const ChooseModule = ({ module, moduleId }) => {
  const configuration = useSelector((state) => state.configuration);
  console.log("testing configuration", configuration);
  const dispatch = useDispatch();

  const updateConfig = (fieldId, val) => {
    dispatch(
      setConfiguration({
        [moduleId]: {
          ...configuration[moduleId],
          [fieldId]: val,
        },
      })
    );
  };

  const onRadioValueChange = (e) => {
    updateConfig("radio_checked", e.target.value);
  };

  const onSearch = (val) => {
    updateConfig(module.fields[0]?.id, val);
  };

  const onTimePickerChange = (time, timeString) => {
    updateConfig(module.fields[0]?.id, timeString);
  };

  switch (module.label) {
    case "radio_group":
      return (
        <Radio.Group
          onChange={onRadioValueChange}
          value={configuration?.appSelection?.radio_checked || ""}
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

const ConfigureCard = ({ settings }) => {
  return (
    <div className={styles.cardContainer}>
      <Card title={settings?.title} bordered={false}>
        {settings?.content?.map((item, index) => (
          <div key={index}>
            <ChooseModule module={item} moduleId={settings.id} />
          </div>
        ))}
      </Card>
    </div>
  );
};
export default ConfigureCard;
