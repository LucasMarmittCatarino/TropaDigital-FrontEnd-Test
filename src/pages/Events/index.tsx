import EventBoard from "../../components/EventBoard";

function Events () {
    return(
        <div className="h-screen bg-[#F8F8F8] p-[30px]">
            <h1 className="text-[16px] text-black/60 font-normal">Bem vindo de volta,
                <span className="text-[#101010] font-medium"> Kaique Steck</span>
            </h1>
            <p className="font-bold text-[20px] text-[#CC6237E5] mt-[10px] mb-[30px]">Todos eventos</p>

            <EventBoard />

        </div>
    )
}

export default Events;