type Props = {
  title: string;
};

const TrendButton = ({ title }: Props) => {
  return (
    <div className="bg-white bg-opacity-20 text-white text-opacity-50 py-[6px] px-[16px] rounded-md text-[13px]">
      {title}
    </div>
  );
};

export default TrendButton;
