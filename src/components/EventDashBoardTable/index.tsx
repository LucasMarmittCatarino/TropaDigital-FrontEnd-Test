import { TbDotsVertical } from 'react-icons/tb';
import './styles.css';

type Event = {
  id: number;
  name: string;
  teams: number;
  status: string;
  date: string;
};

type Props = {
  dashboard_data: Event[];
};

export const EventDashboardTable = ({ dashboard_data }: Props) => {
  return (
    <>
      <div className="max-[815px]:hidden">
        <table className="w-full text-left table-fixed border-separate border-spacing-x-[20px]">
          <thead>
            <tr className="relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[var(--main-orange-10)] after:content-['']">
              <th className="table-container table-label w-[35%]">Nome de evento</th>
              <th className="table-container table-label w-[15%]">Total de equipes</th>
              <th className="table-container table-label w-[25%]">Status</th>
              <th className="table-container table-label w-[25%]">Data</th>
            </tr>
          </thead>
          <tbody>
            {dashboard_data.map(({ id, name, teams, status, date }) => (
              <tr
                key={id}
                className="relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[var(--main-orange-10)] after:content-['']"
              >
                <td className="table-container table-data">{name}</td>
                <td className="table-container table-data">{teams}</td>
                <td className="table-container table-data">
                  <div className="flex items-center gap-[9px]">
                    <div
                      className={`w-[9px] h-[9px] rounded-full ${
                        status === 'Finalizado' ? 'bg-[#CC0000]' : 'bg-[#4DEF00]'
                      }`}
                    />
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
      </div>

      <div className="min-[815px]:hidden space-y-[15px]">
        {dashboard_data.map(({ id, name, teams, status, date }) => (
          <div key={id} className="flex flex-col card-border p-[20px]">
            <div>
              <span className="table-label">Nome de evento: </span>
              <span className="table-data">{name}</span>
            </div>
            <div>
              <span className="table-label">Total de equipes: </span>
              <span className="table-data">{teams}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="table-label">Status: </span>
              <div className="flex items-center gap-[6px]">
                <div
                  className={`w-[9px] h-[9px] rounded-full ${
                    status === 'Finalizado' ? 'bg-[#CC0000]' : 'bg-[#4DEF00]'
                  }`}
                />
                <span className="table-data">{status}</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <span className="table-label">Data: </span>
                <span className="table-data">{date}</span>
              </div>
              <TbDotsVertical size={16} className="text-[#CC6237] cursor-pointer" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
