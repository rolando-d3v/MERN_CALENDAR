import * as RiIcons from "react-icons/ri";
import { useDispatch } from "react-redux";
import { layoutOpenModal } from "../../../redux/layout/layoutAction";
import styles from "./addNewFab.module.scss";

export default function AddNewFab() {
  const dispatch = useDispatch();

  const openButton = () => {
    dispatch(layoutOpenModal());
  };

  return (
    <button className={styles.addNewFab} onClick={openButton} >
      <RiIcons.RiAddCircleFill />
    </button>
  );
}
