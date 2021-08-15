type Props = {
  buttonTitle: string;
};

const Button: React.VFC<Props> = ({ buttonTitle = "カートに入れる" }) => {
  return (
    <button className="rounded shadow-md flex items-center bg-red-500 px-4 py-2 text-white hover:bg-red-600">
      {buttonTitle}
    </button>
  );
};

export default Button;
