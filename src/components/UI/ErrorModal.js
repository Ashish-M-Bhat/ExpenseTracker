import Card from "./Card";
import ErrorModalCssModule from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div>
        <div className={ErrorModalCssModule.backdrop} onClick={props.closeErrorModal}>

        </div>
      <Card className={`${ErrorModalCssModule.modal}`}>
        <header className={ErrorModalCssModule.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={ErrorModalCssModule.content}>
          <p>{props.message}</p>
        </div>
        <footer className={ErrorModalCssModule.actions}>
          <button onClick={props.closeErrorModal}>Okay :(</button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
