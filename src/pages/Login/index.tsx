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
        navigate("/dashboard");
    };

  return (
    <div className="flex justify-center items-center h-screen w-screen p-[15px] bg-[#F9FBFF]">

      <div className="flex items-center justify-center relative max-w-[756px] w-full min-h-[498px] bg-white p-[10px] rounded-[20px] shadow-2xl">

        <div className='flex flex-col w-full min-h-[388px] ml-[20px] mr-[42px] max-[611px]:mr-[20px]'>
            <img src={Logo} alt="Logo da empresa" className="max-w-[155px] h-[25px] mb-[35px]"/>
            <h1 className="font-bold text-[26px] text-[#CC6237] leading-[15px] max-[361px]:text-[23px]">Bem-vindo de volta</h1>
            <p className="text-[13px] font-normal text-[#2A4D8E80] max-[361px]:text-[10px]">Entre com sua conta para acessar o painel.</p>

            <form onSubmit={handleLogin} className="flex flex-col gap-[20px] mt-[35px]">
                <div className="flex flex-col">
                <label htmlFor="email" className="label-default">E-mail</label>
                <input
                    type="email"
                    id="email"
                    className="input-default"
                    placeholder="seunome@seuservidor.com"
                />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="password" className="label-default">
                        Senha
                    </label>

                    <div className="relative">
                        <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        placeholder="Digite aqui"
                        className="input-default pr-10"
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

                <button type="submit" className="w-full h-[40px] bg-[#CC6237] rounded-[100px] cursor-pointer hover:bg-[#b4542e] transition-colors duration-300">
                  <p className='text-white font-medium text-[13px]'>Enviar</p>
                </button>
            </form>
        </div>

        {isWideEnough && (
          <div className="flex items-end ml-auto max-w-[355px] w-full min-h-[478px] rounded-[20px] bg-[#CC6237]">
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
