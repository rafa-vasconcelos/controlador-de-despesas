import getReceitasDespesas from "@/actions/getReceitasDespesas";
import { formatarMoeda } from "../../../lib/utils";

const ReceitasDespesas = async () => {
  const { receita, despesa } = await getReceitasDespesas();
  return (
    <div className="flex gap-4 px-8 py-4 shadow-md">
      <div className="border-r-2 pr-4">
        <h4>RECEITAS</h4>
        <p className="text-green-600">{formatarMoeda(receita)}</p>
      </div>
      <div>
        <h4>DESPESAS</h4>
        <p className="text-red-600">{formatarMoeda(despesa)}</p>
      </div>
    </div>
  );
};

export default ReceitasDespesas;
