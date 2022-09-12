import FormUser from "./FormUser";

const Backdrop = (props) => {
  return <div onClick={props.clickShow} className="backdrop"></div>;
};

const ModalWindow = (props) => {
  return (
    <div className="modal">
      <div>{<FormUser clickShow={props.clickShow} />}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <div className="modal__inner">
      <Backdrop clickShow={props.clickShow} />
      <ModalWindow clickShow={props.clickShow}></ModalWindow>
    </div>
  );
};

export default Modal;
