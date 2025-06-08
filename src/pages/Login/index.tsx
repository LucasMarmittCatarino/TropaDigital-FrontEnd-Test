import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from '../../assets/logo.png';
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import LoginImage from '../../assets/login-illustration.png';
import './styles.css';

function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [isWideEnough, setIsWideEnough] = useState(window.innerWidth > 610);
    const navigate = useNavigate();

    useEffect(() => {
      const handleResize = () => {
        setIsWideEnough(window.innerWidth > 610);
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        navigate("/events");
    };

  return (
    <div className="flex-container h-screen p-[15px] bg-[var(--background)]">

      <div className="flex-container relative max-w-[756px]  min-h-[498px] bg-[var(--white)] p-[10px] rounded-[20px] shadow-2xl">

        <div className='flex-column w-full min-h-[388px] ml-[20px] mr-[42px] max-[611px]:mr-[20px]'>
            <img src={Logo} alt="Logo da empresa" className="max-w-[155px] h-[25px] mb-[35px]"/>
            <h1 className="text-[26px] font-bold text-[var(--main-orange)] leading-[20px] max-[361px]:text-[23px]">Bem-vindo de volta</h1>
            <p className="text-[13px] text-[var(--grey-1)] max-[361px]:text-[10px]">Entre com sua conta para acessar o painel.</p>

            <form onSubmit={handleLogin} className="flex-column gap-[20px] mt-[35px]">
                <div className="flex-column">
                <label htmlFor="email" className="label-default">E-mail</label>
                <input
                    type="email"
                    id="email"
                    className="input-default"
                    placeholder="seunome@seuservidor.com"
                />
                </div>

                <div className="flex-column">
                    <label htmlFor="password" className="label-default">Senha</label>
                    <div className="relative">
                        <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        placeholder="Digite aqui"
                        className="input-default"
                        />
                        {showPassword ? (
                        <MdOutlineVisibilityOff
                            size={27}
                            className="icon"
                            onClick={() => setShowPassword(false)}
                        />
                        ) : (
                        <MdOutlineVisibility
                            size={27}
                            className="icon"
                            onClick={() => setShowPassword(true)}
                        />
                        )}
                    </div>
                </div>

                <button type="submit" className="w-full h-[40px] bg-[var(--main-orange)] rounded-[100px] cursor-pointer hover:bg-[var(--main-orange-dark)] transition-colors duration-300">
                  <p className='text-[var(--white)] font-medium text-[13px]'>Enviar</p>
                </button>
            </form>
        </div>

        {isWideEnough && (
          <div className="flex items-end ml-auto max-w-[355px] w-full min-h-[478px] rounded-[20px] bg-[var(--main-orange)]">
            <img
              src={LoginImage}
              alt="Imagem Ilustrativa"
              className="w-[90%] h-auto object-contain translate-x-[-26px]"
            />
          </div>
        )}

      </div>
    </div>
  );
}

export default Login;
