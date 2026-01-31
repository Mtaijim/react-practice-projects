import Tab from "./Tab";

const TestTab = () => {
  const tab = [
    {
      label: "Tab 1",
      content: <p>"These is the content of the 1st tab"</p>,
    },
    {
      label: "Tab 2",
      content: <p>"These is the content of the 2nd tab"</p>,
    },
    {
      label: "Tab 3",
      content: <p>"These is the content of the 3rd tab"</p>,
    },
  ];
  function handleonchange(getcurrentIndex) {
    console.log(getcurrentIndex);
  }

  return <Tab tabContent={tab} onChange={handleonchange} />;
};

export default TestTab;
