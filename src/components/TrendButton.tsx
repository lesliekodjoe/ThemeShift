type Props = {
  title: string;
};

const TrendButton = ({ title }: Props) => {
  return (
    <div className="flex items-center justify-center flex-wrap max-w-full break-all py-2 px-4 bg-white bg-opacity-20 text-white text-opacity-50 rounded-md text-[13px]">
      {title}
    </div>
  );
};

export default TrendButton;
