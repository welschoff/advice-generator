import useSWR from 'swr';
import DiceIcon from './DiceIcon';
import Divider from './Divider';

type Response = {
  slip: {
    id: number;
    advice: string;
  };
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Advice() {
  const { data, error, isLoading, mutate } = useSWR<Response>(
    'https://api.adviceslip.com/advice',
    fetcher,
  );

  if (error) return <div>failed to Load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div className="flex flex-col text-center gap-5 bg-[#303A49] p-10 rounded-2xl w-131 relative">
      <h2 className="text-[#53FFAC]">Advice #{data?.slip.id}</h2>
      <p className="text-2xl font-semibold">{data?.slip.advice}</p>
      <div className="mb-5">
        <Divider />
      </div>
      <div
        onClick={() => mutate()}
        className="bg-[#53FFAC] w-fit p-5 rounded-full absolute -bottom-8 left-1/2 -translate-x-1/2"
      >
        <DiceIcon />
      </div>
    </div>
  );
}
