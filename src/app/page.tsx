import CategoryList from "@/components/categoryList/CategoryList";
import styles from "./homepage.module.css";
import Featured from "@/components/featured/Featured";
import Cardlist from "@/components/cardlist/Cardlist";
import Menu from "@/components/menu/Menu";

export default function Home() {
  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
    <Cardlist />
    <Menu />
      </div>
     
    </div>
  );
}