import styles from "./TabsComponent.module.css";
import svgObject from "@/styles/svgIcons";
import { useRouter } from "next/router";
import Link from "next/link";

const TabsItem = (props) => {
    const router = useRouter()
    const currentPath = router.pathname

    const activeTabClass = props.setPath === currentPath ? styles.activeColor : ''
    const activeSvgColor = props.setPath === currentPath ? '#066DFE' : '#8F8F8F'
  return (
    <Link href={props.setPath}>
      <div className={styles.tab_svg}>{props.setSvg(activeSvgColor)}</div>
      <p className={activeTabClass}>{props.tabName}</p>
    </Link>
  );
};

export default TabsItem;
