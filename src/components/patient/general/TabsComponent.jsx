import svgObject from "@/styles/svgIcons";
import styles from "./TabsComponent.module.css";
import Link from "next/link";
import TabsItem from "./TabsItem";

const TabsComponent = () => {
  return (
    <section className={styles.container}>
      <ul className={styles.tabsList}>
        <TabsItem setPath = '/patient' tabName = 'Home' setSvg = {svgObject.tabsHome}/>
        <TabsItem setPath = '/patient/medication' tabName = 'Medication' setSvg = {svgObject.tabsMeds}/>
        <TabsItem setPath = '/patient/addmeds' tabName = 'Add' setSvg= {svgObject.tabsAdd}/>
        <TabsItem setPath = '/patient/messages' tabName = 'Messages' setSvg = {svgObject.tabsMessages}/>
        <TabsItem setPath = '/patient/profile' tabName = 'Profile' setSvg={svgObject.tabsProfile}/>
      </ul>
    </section>
  );
};

export default TabsComponent;
