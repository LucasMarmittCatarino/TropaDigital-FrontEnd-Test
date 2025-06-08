import './styles.css';
import { CiSearch } from "react-icons/ci";
import { FiPlus } from "react-icons/fi";
import { dashboard_data } from '../../mocks/dashboard-data';
import { EventDashboardTable } from '../EventDashBoardTable';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

function EventBoard () {
    return (
        <div className="flex flex-col w-full bg-[#FFFFFF] border border-black/10 rounded-[10px] p-[20px]">

            <div className='flex w-full justify-end gap-[10px] mb-[12px]'>
                <div className="flex items-center gap-[15px] max-w-[203px] w-full h-[36px] bg-[#F6F6F6] rounded-[33px] px-[10px]">
                    <CiSearch size={16} />
                    <input
                        type="search"
                        placeholder="Buscar eventos"
                        className="flex-1 bg-transparent outline-none text-[13px] placeholder:text-black/20 placeholder:font-medium"
                    />
                </div>

                <button className="flex items-center justify-center bg-[#CC6237] text-white rounded-[33px] hover:bg-[#b6582f] transition-colors duration-200 cursor-pointer
                    w-[124px] h-[36px] px-[15px] gap-[5px]
                    max-[815px]:w-[35px] max-[815px]:h-[35px] max-[815px]:px-0 max-[815px]:gap-0 max-[815px]:rounded-full"
                >
                    <FiPlus size={16} />
                    <span className="text-[13px] font-medium max-[815px]:hidden">Inserir novo</span>
                </button>

            </div>

            <EventDashboardTable dashboard_data={dashboard_data}/>

            <div className="flex gap-[10px] mt-[29px] ml-auto">

                <button className="flex items-center justify-center bg-[#F5F5F5] rounded-full hover:bg-[#d47a3c] transition-colors duration-200 cursor-pointer w-[77px] h-[35px] max-[815px]:w-[35px] max-[815px]:h-[35px]">
                    <span className="text-[12px] font-normal text-black max-[815px]:hidden">Anterior</span>
                    <FaChevronLeft size={12} className="hidden max-[815px]:block text-black" />
                </button>

                <button className="flex items-center justify-center w-[35px] h-[35px] bg-[#CC6237] rounded-full hover:bg-[#b6582f] transition-colors duration-200 cursor-pointer">
                    <p className="text-white font-normal text-[12px]">1</p>
                </button>

                <button className="flex items-center justify-center w-[35px] h-[35px] bg-[#F5F5F5] rounded-full hover:bg-[#d47a3c] transition-colors duration-200 cursor-pointer">
                    <p className="text-black font-normal text-[12px]">2</p>
                </button>

                <button className="flex items-center justify-center w-[35px] h-[35px] bg-[#F5F5F5] rounded-full hover:bg-[#d47a3c] transition-colors duration-200 cursor-pointer">
                    <p className="text-black font-normal text-[12px]">3</p>
                </button>

                <button className="flex items-center justify-center bg-[#CC6237] rounded-full hover:bg-[#b6582f] transition-colors duration-200 cursor-pointer w-[77px] h-[35px] max-[815px]:w-[35px] max-[815px]:h-[35px]">
                    <span className="text-[12px] font-normal text-white max-[815px]:hidden">Próxima</span>
                    <FaChevronRight size={12} className="hidden max-[815px]:block text-white" />
                </button>
            </div>

        </div>
    )
};

export default EventBoard;