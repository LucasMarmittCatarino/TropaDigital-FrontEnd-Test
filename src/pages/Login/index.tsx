import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from '../../assets/logo.png';
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import LoginImage from '../../assets/login-illustration.png';
import './styles.css';

function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        navigate("/dashboard");
    };

  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-[#F9FBFF]">
      <div className="flex items-center relative w-[756px] h-[498px] bg-white p-[10px] rounded-[20px] shadow-2xl">

        <div className='w-[299px] h-[388px] flex flex-col ml-[20px]'>
            <img src={Logo} alt="Logo da empresa" className="w-[160px] h-[24px] mb-[35px]"/>
            <h1 className="font-bold text-[26px] text-[#CC6237] leading-[15px] tracking-[0]">Bem-vindo de volta</h1>
            <p className="text-[13px] font-normal text-[#2A4D8E80]">Entre com sua conta para acessar o painel.</p>

            <form onSubmit={handleLogin} className="w-full max-w-md flex flex-col gap-[20px] mt-[35px]">
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
                            className="absolute right-[20px] top-1/2 transform -translate-y-1/2 text-[#CC6237] cursor-pointer"
                            onClick={() => setShowPassword(false)}
                        />
                        ) : (
                        <MdOutlineVisibility
                            size={27}
                            className="absolute right-[20px] top-1/2 transform -translate-y-1/2 text-[#CC6237] cursor-pointer"
                            onClick={() => setShowPassword(true)}
                        />
                        )}
                    </div>
                </div>

                <button type="submit" className="w-[299px] h-[40px] bg-[#CC6237] rounded-[100px] cursor-pointer hover:bg-[#b4542e] transition-colors duration-300">
                <p className='text-white font-medium text-[13px]'>Enviar</p>
                </button>
            </form>
        </div>

        <div className='absolute right-[10px] top-[10px] w-[355px] h-[478px] rounded-[20px] bg-[#CC6237]'>
          <img src={LoginImage} alt="Imagem Ilustrativa" className="absolute bottom-[0px] right-[40px] w-[357px] h-[316px]" />
        </div>

      </div>
    </div>
  );
}

export default Login;
