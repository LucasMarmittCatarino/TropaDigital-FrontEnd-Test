import EventBoard from "../../components/EventBoard";

function Events () {
    return(
        <div className="h-screen bg-[var(--background-grey)] p-[30px]">
            <h1 className="text-[16px] text-[var(--black-60)]">Bem vindo de volta,
                <span className="text-[var(--text-black)] font-medium"> Kaique Steck</span>
            </h1>
            <p className="font-bold text-[20px] text-[var(--main-orange-90)] mt-[10px] mb-[30px]">Todos eventos</p>

            <EventBoard />

        </div>
    )
}

export default Events;