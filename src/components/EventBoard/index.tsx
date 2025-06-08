import './styles.css';
import { CiSearch } from "react-icons/ci";
import { FiPlus } from "react-icons/fi";
import { dashboard_data } from '../../mocks/dashboard-data';
import { EventDashboardTable } from '../EventDashBoardTable';

function EventBoard () {
    return (
        <div className="flex flex-col w-full bg-[#FFFFFF] border border-black/10 rounded-[10px] p-[20px]">

            <div className='flex gap-[10px] ml-auto mb-[12px]'>
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

            <EventDashboardTable dashboard_data={dashboard_data}/>

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