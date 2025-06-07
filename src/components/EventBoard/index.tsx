import './styles.css';
import { CiSearch } from "react-icons/ci";
import { FiPlus } from "react-icons/fi";
import { TbDotsVertical } from "react-icons/tb";

function EventBoard () {

    const mockEvents = [
        {
            id: 1,
            name: "Clube do Laço Coração Pantaneiro",
            teams: 10,
            status: "Ativo",
            date: "09 a 11 de Junho",
        },
        {
            id: 2,
            name: "Clube do Laço Coração Pantaneiro",
            teams: 10,
            status: "Finalizado",
            date: "01 a 5 de Junho",
        },
        
    ];

    return (
        <div className="flex flex-col w-full bg-[#FFFFFF] border border-black/10 rounded-[10px] p-[20px]">

            <div className='flex gap-[10px] ml-auto'>
                <div className="flex items-center gap-[15px] w-[203px] h-[36px] bg-[#F6F6F6] rounded-[33px] px-[10px]">
                    <CiSearch size={16} />
                    <input
                        type="search"
                        placeholder="Buscar eventos"
                        className="flex-1 bg-transparent outline-none text-[13px] placeholder:text-black/20 placeholder:font-medium"
                    />
                </div>

                <button className="flex w-[124px] h-[36px] items-center px-[15px] gap-[5px] bg-[#CC6237] text-white rounded-[33px] hover:bg-[#b6582f] transition">
                    <FiPlus size={16} />
                    <span className="text-[13px] font-medium cursor-pointer">Inserir novo</span>
                </button>
            </div>

            <table className="w-full text-left table-fixed">
                <thead>
                    <tr className="border-b border-[#CC62371A]">
                    <th className="table-container table-label">Nome de evento</th>
                    <th className="table-container table-label">Total de equipes</th>
                    <th className="table-container table-label">Status</th>
                    <th className="table-container table-label">Data</th>
                    </tr>
                </thead>

                <tbody>
                    {mockEvents.map(({ id, name, teams, status, date }) => (
                    <tr key={id} className="border-b border-[#CC62371A]">
                        <td className="table-container table-data">{name}</td>
                        <td className="table-container table-data">{teams}</td>
                        <td className="table-container table-data">
                            <div className="flex items-center gap-[9px]">
                                <div
                                className={`w-[9px] h-[9px] rounded-full ${
                                    status === 'Finalizado' ? 'bg-[#CC0000]' : 'bg-[#4DEF00]'
                                }`}
                                ></div>
                                <span>{status}</span>
                            </div>
                        </td>
                        <td className="table-container table-data">
                            <div className="flex items-center justify-between w-full">
                            <span>{date}</span>
                            <TbDotsVertical size={16} className="text-[#CC6237] cursor-pointer" />
                            </div>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>

            <div className='flex gap-[10px] mt-[29px] ml-auto'>
                <button
                className="w-[75px] h-[35px] bg-[#F5F5F5] rounded-[200px] hover:bg-[#d47a3c] transition flex items-center justify-center cursor-pointer"
                >
                <span className="text-[12px] font-normal text-black">Anterior</span>
                </button>

                <div className='flex items-center justify-center w-[35px] h-[35px] bg-[#CC6237] rounded-[200px] hover:bg-[#b6582f] transition-colors duration-200 cursor-pointer'>
                    <p className='text-white font-normal text-[12px]'>1</p>
                </div>
                    <div className='flex items-center justify-center w-[35px] h-[35px] bg-[#F5F5F5] rounded-[200px] hover:bg-[#d47a3c] transition-colors duration-200 cursor-pointer'>
                    <p className='text-black font-normal text-[12px]'>2</p>
                </div>
                    <div className='flex items-center justify-center w-[35px] h-[35px] bg-[#F5F5F5] rounded-[200px] hover:bg-[#d47a3c] transition-colors duration-200 cursor-pointer'>
                    <p className='text-black font-normal text-[12px]'>3</p>
                </div>

                <button
                    className="w-[77px] h-[35px] bg-[#CC6237] rounded-[200px] hover:bg-[#b6582f] transition flex items-center justify-center cursor-pointer"
                    >
                    <span className="text-[12px] font-normal text-white">Próxima</span>
                </button>
            </div>

        </div>
    )
};

export default EventBoard;