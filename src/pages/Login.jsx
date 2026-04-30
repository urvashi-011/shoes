import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = ({ currentTheme }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // In a real app, you'd verify credentials here
      console.log('Logged in with:', { email, password });
      navigate('/'); // Redirect to home page
    }, 1500);
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-white">
      
      {/* Left Side - Login Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-24">
        <div className="max-w-md w-full mx-auto">
          {/* Logo */}
          <div className="mb-10">
            <h1 className="text-2xl font-black tracking-tighter text-black flex items-center">
              ShoeHub<span className="w-1.5 h-1.5 bg-red-500 rounded-full ml-0.5"></span>
            </h1>
          </div>

          <div className="mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Welcome Back!</h2>
            <p className="text-gray-500 font-medium">Login to your account and continue shopping your favorite shoes.</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm font-bold rounded-r-xl animate-pulse">
              {error}
            </div>
          )}

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400">
                  <i className="ri-mail-line"></i>
                </span>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email" 
                  className="w-full pl-11 pr-4 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5 transition-all text-black"
                  required
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-bold text-gray-700">Password</label>
                <a href="#" className="text-xs font-bold text-gray-400 hover:text-black">Forgot Password?</a>
              </div>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400">
                  <i className="ri-lock-password-line"></i>
                </span>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password" 
                  className="w-full pl-11 pr-11 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5 transition-all text-black"
                  required
                />
                <span className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 cursor-pointer">
                  <i className="ri-eye-line"></i>
                </span>
              </div>
            </div>

            <div className="flex items-center">
              <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-black focus:ring-black" />
              <label className="ml-2 text-sm font-medium text-gray-500">Remember Me</label>
            </div>

            <button 
              type="submit"
              disabled={isLoading}
              className={`w-full bg-black text-white py-4 rounded-xl font-bold transition-all shadow-lg shadow-black/10 flex items-center justify-center gap-2 ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-gray-900'}`}
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Logging in...
                </>
              ) : 'Login'}
            </button>
          </form>

          <div className="relative my-10 text-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-100"></div>
            </div>
            <span className="relative px-4 text-xs font-bold text-gray-400 bg-white uppercase tracking-widest">or continue with</span>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <button className="flex items-center justify-center gap-3 w-full py-4 bg-white border border-gray-100 rounded-xl font-bold text-gray-700 hover:bg-gray-50 transition-all shadow-sm">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="Google" />
              Continue with Google
            </button>
            <button className="flex items-center justify-center gap-3 w-full py-4 bg-white border border-gray-100 rounded-xl font-bold text-gray-700 hover:bg-gray-50 transition-all shadow-sm">
              <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" className="w-5 h-5" alt="Facebook" />
              Continue with Facebook
            </button>
          </div>

          <p className="mt-10 text-center text-gray-500 font-medium">
            Don't have an account? <Link to="/login" className="text-red-500 font-bold hover:underline">Sign Up</Link>
          </p>

          {/* Footer inside login */}
          <div className="mt-16 flex justify-between text-[10px] font-bold text-gray-400 uppercase tracking-widest border-t border-gray-50 pt-8">
            <div className="flex items-center gap-1"><i className="ri-shield-check-line text-sm"></i> Secure Login</div>
            <div className="flex items-center gap-1"><i className="ri-customer-service-2-line text-sm"></i> 24/7 Support</div>
            <div className="flex items-center gap-1"><i className="ri-refresh-line text-sm"></i> Easy Returns</div>
          </div>
        </div>
      </div>

      {/* Right Side - Banner */}
      <div className="hidden lg:block lg:w-1/2 relative bg-gray-50">
        <div className="absolute top-20 left-20 z-10">
           <div className="w-8 h-1 bg-red-500 mb-6"></div>
           <h2 className="text-5xl font-bold text-black mb-4 leading-tight">Step Into Style</h2>
           <p className="text-gray-500 text-xl font-medium max-w-xs leading-relaxed">
             Your perfect pair is just a login away.
           </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
