import { Component } from "react";
import Dishes from "../../../src/data/Dishes";
import MenuItem from "./MenuItem";
import DishDetails from "./DishDetails";
import {
  CardGroup,
  CardColumns,
  Modal,
  ModalBody,
  ModalFooter,
  Button,
} from "reactstrap";

class Menu extends Component {
  state = {
    dishes: Dishes,
    selectedDish: null,
    modalState: false,
  };
  toogleModalState = () => {
    console.log("  toogleModalState");
    this.setState({ modalState: !this.state.modalState });
  };
  onDishSelect = (dish) => {
    this.setState({ selectedDish: dish, modalState: !this.state.modalState });
  };
  render() {
    const menu = this.state.dishes.map((item) => {
      return (
        <MenuItem
          dish={item}
          key={item.id}
          DishSelect={() => {
            this.onDishSelect(item);
          }}
        />
      );
    });
    let dishDetail = null;
    if (this.state.selectedDish != null) {
      dishDetail = <DishDetails dish={this.state.selectedDish} />;
    }
    return (
      <div>
        <CardGroup>{menu}</CardGroup>
        <Modal isOpen={this.state.modalState}>
          <ModalBody>{dishDetail}</ModalBody>
          <Button onClick={this.toogleModalState}>X</Button>
        </Modal>
      </div>
    );
  }
}
export default Menu;
