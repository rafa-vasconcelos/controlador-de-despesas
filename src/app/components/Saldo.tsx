import getSaldo from "@/actions/getSaldo";

const Saldo = async () => {
  const balance = (await getSaldo()).balance;
  return (
    <div className="flex flex-col text-2xl">
      <h4>Seu Saldo</h4>
      <h1 className="font-bold">{balance}</h1>
    </div>
  );
};

export default Saldo;
