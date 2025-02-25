import { Card, List, Tabs } from "antd";
import styles from "./library-showcase.module.scss";
import LibraryCard from "./library-card/library-card";

const LibraryShowcase = () => {
  const onChange = () => {
    console.log("yay!");
  };

  const TabContent = () => {
    const data = [
      {
        title: "Title 1",
      },
      {
        title: "Title 2",
      },
      {
        title: "Title 3",
      },
      {
        title: "Title 4",
      },
      {
        title: "Title 5",
      },
    ];
    return (
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 6,
          xxl: 3,
        }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <LibraryCard item={item} />
          </List.Item>
        )}
      />
    );
  };

  return (
    <div className={styles.LibraryShowcaseContainer}>
      <Tabs
        onChange={onChange}
        type="card"
        items={new Array(3).fill(null).map((_, i) => {
          const id = String(i + 1);
          return {
            label: `Tab ${id}`,
            key: id,
            children: <TabContent />,
          };
        })}
      />
    </div>
  );
};

export default LibraryShowcase;
