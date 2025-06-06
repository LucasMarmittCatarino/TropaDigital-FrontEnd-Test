import Logo from '../../assets/logo.png';

function LoginPage() {
  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-[#F9FBFF]">
      <div className="w-[756px] h-[498px] bg-white p-[10px] rounded-[20px] shadow-2xl">
        <img src={Logo} alt="Logo da empresa" className="mb-6" />
        <h1 className="font-bold text-[26px] text-[#CC6237]">Bem-vindo de volta</h1>
        <p className="text-gray-600 text-sm mb-8">Entre com sua conta para acessar o painel.</p>

      </div>
    </div>
  );
}

export default LoginPage;
