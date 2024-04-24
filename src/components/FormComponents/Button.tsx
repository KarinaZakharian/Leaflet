import './FormComponents.scss';

type Props = {
  prop: string;
};

function Button({ prop }: Props) {
  return (
    <button type="submit" className="form__submit-button">
      {prop}
    </button>
  );
}

export default Button;
