import svgObject from "@/styles/svgIcons";
import styles from "./HealthTabsComponent.module.css";
import HealthTabItem from "./HealthTabItemComponent";

const HealthTabsComponent = () => {
  return (
    <section className={styles.container}>
      <ul className={styles.tabsList}>
        <HealthTabItem
          setPath="/patient/home"
          tabName="Home"
          setSvg={svgObject.tabsHome}
        />
        <HealthTabItem
          setPath="/patient/medication"
          tabName="calendar"
          setSvg={svgObject.calendarSvg}
        />
        <HealthTabItem
          setPath="/patient/add"
          tabName="Add Patient"
          setSvg={svgObject.tabsAdd}
        />
        <HealthTabItem
          setPath="/patient/messages"
          tabName="Messages"
          setSvg={svgObject.tabsMessages}
        />
        <HealthTabItem
          setPath="/patient/profile"
          tabName="Profile"
          setSvg={svgObject.tabsProfile}
        />
      </ul>
    </section>
  );
};

export default HealthTabsComponent;
