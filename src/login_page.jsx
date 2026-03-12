import React, { useState } from 'react';

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  
  // Login form state
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  
  // Signup form state
  const [signupData, setSignupData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    hospitalName: '',
    idNumber: '',
    password: '',
    confirmPassword: ''
  });

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Login attempted', { email: loginEmail, password: loginPassword });
      setIsLoading(false);
      window.location.href = '/admin';
    }, 1500);
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Validate passwords match
    if (signupData.password !== signupData.confirmPassword) {
      alert("Passwords don't match!");
      setIsLoading(false);
      return;
    }
    
    // Simulate API call
    setTimeout(() => {
      console.log('Signup attempted', signupData);
      setIsLoading(false);
      alert('Account created successfully! Please login.');
      setIsLogin(true);
    }, 1500);
  };

  const handleSignupChange = (e) => {
    setSignupData({
      ...signupData,
      [e.target.name]: e.target.value
    });
  };

  const handleSocialLogin = (provider) => {
    setIsLoading(true);
    setTimeout(() => {
      console.log(`Login with ${provider}`);
      setIsLoading(false);
      window.location.href = '/admin';
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A73E8] via-[#111827] to-[#22C58E] animate-gradient flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -left-40 w-80 h-80 bg-white/10 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-0 -right-40 w-96 h-96 bg-white/10 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full filter blur-3xl animate-pulse"></div>
      </div>

      {/* Main Container */}
      <div className="relative w-full max-w-6xl bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/20">
        <div className="flex flex-col lg:flex-row">
          
          {/* Left Side - Branding/Info */}
          <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-between bg-gradient-to-br from-[#1A73E8]/20 to-transparent">
            <div>
              <div className="flex items-center space-x-2 mb-8">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                  <span className="text-2xl font-bold text-[#1A73E8]">M</span>
                </div>
                <span className="text-2xl font-bold text-white">MedID System</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Secure Healthcare<br />Identity Management
              </h1>
              
              <p className="text-white/80 text-lg mb-8">
                Access your medical records, manage prescriptions, and connect with healthcare providers seamlessly.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-white">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>HIPAA Compliant Security</span>
                </div>
                <div className="flex items-center space-x-3 text-white">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>24/7 Secure Access</span>
                </div>
                <div className="flex items-center space-x-3 text-white">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Multi-Factor Authentication</span>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-white/60 text-sm">
              © 2024 MedID System. All rights reserved.
            </div>
          </div>

          {/* Right Side - Forms */}
          <div className="lg:w-1/2 p-8 lg:p-12 bg-white/95 backdrop-blur-xl">
            {/* Toggle Buttons */}
            <div className="flex bg-gray-100 p-1 rounded-xl mb-8">
              <button
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  isLogin 
                    ? 'bg-white text-[#1A73E8] shadow-lg' 
                    : 'text-gray-600 hover:text-[#1A73E8]'
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  !isLogin 
                    ? 'bg-white text-[#1A73E8] shadow-lg' 
                    : 'text-gray-600 hover:text-[#1A73E8]'
                }`}
              >
                Create Account
              </button>
            </div>

            {/* Login Form */}
            {isLogin ? (
              <form onSubmit={handleLoginSubmit} className="space-y-5 animate-fadeIn">
                <h2 className="text-2xl font-bold text-[#111827] mb-6">Welcome Back!</h2>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#1A73E8] focus:ring-2 focus:ring-[#1A73E8]/20 transition-all duration-300 outline-none"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                  <input
                    type="password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#1A73E8] focus:ring-2 focus:ring-[#1A73E8]/20 transition-all duration-300 outline-none"
                    placeholder="Enter your password"
                    required
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-[#1A73E8] focus:ring-[#1A73E8]" />
                    <span className="ml-2 text-sm text-gray-600">Remember me</span>
                  </label>
                  <a href="#" className="text-sm text-[#1A73E8] hover:text-[#1557B0] font-medium">
                    Forgot Password?
                  </a>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#1A73E8] hover:bg-[#1557B0] text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 disabled:opacity-70"
                >
                  {isLoading ? 'Signing In...' : 'Sign In'}
                </button>

                {/* Social Login */}
                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-500">Or continue with</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => handleSocialLogin('Google')}
                    className="flex items-center justify-center space-x-2 py-3 px-4 border border-gray-300 rounded-xl hover:bg-gray-50 transition-all duration-300 hover:border-[#1A73E8] group"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    <span className="text-sm font-medium text-gray-700">Google</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleSocialLogin('Microsoft')}
                    className="flex items-center justify-center space-x-2 py-3 px-4 border border-gray-300 rounded-xl hover:bg-gray-50 transition-all duration-300 hover:border-[#1A73E8] group"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 23 23">
                      <path fill="#f3f3f3" d="M0 0h23v23H0z"/>
                      <path fill="#f35325" d="M1 1h10v10H1z"/>
                      <path fill="#81bc06" d="M12 1h10v10H12z"/>
                      <path fill="#05a6f0" d="M1 12h10v10H1z"/>
                      <path fill="#ffba08" d="M12 12h10v10H12z"/>
                    </svg>
                    <span className="text-sm font-medium text-gray-700">Microsoft</span>
                  </button>
                </div>
              </form>
            ) : (
              /* Signup Form */
              <form onSubmit={handleSignupSubmit} className="space-y-4 animate-fadeIn max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                <h2 className="text-2xl font-bold text-[#111827] mb-4">Create Account</h2>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={signupData.fullName}
                    onChange={handleSignupChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-[#1A73E8] focus:ring-2 focus:ring-[#1A73E8]/20 transition-all duration-300 outline-none"
                    placeholder="Dr. John Doe"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={signupData.email}
                    onChange={handleSignupChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-[#1A73E8] focus:ring-2 focus:ring-[#1A73E8]/20 transition-all duration-300 outline-none"
                    placeholder="doctor@hospital.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={signupData.phoneNumber}
                    onChange={handleSignupChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-[#1A73E8] focus:ring-2 focus:ring-[#1A73E8]/20 transition-all duration-300 outline-none"
                    placeholder="+1 234 567 8900"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Hospital Name</label>
                  <input
                    type="text"
                    name="hospitalName"
                    value={signupData.hospitalName}
                    onChange={handleSignupChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-[#1A73E8] focus:ring-2 focus:ring-[#1A73E8]/20 transition-all duration-300 outline-none"
                    placeholder="City General Hospital"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Medical ID Number</label>
                  <input
                    type="text"
                    name="idNumber"
                    value={signupData.idNumber}
                    onChange={handleSignupChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-[#1A73E8] focus:ring-2 focus:ring-[#1A73E8]/20 transition-all duration-300 outline-none"
                    placeholder="MED-2024-XXXXX"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={signupData.password}
                    onChange={handleSignupChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-[#1A73E8] focus:ring-2 focus:ring-[#1A73E8]/20 transition-all duration-300 outline-none"
                    placeholder="Create a strong password"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={signupData.confirmPassword}
                    onChange={handleSignupChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-[#1A73E8] focus:ring-2 focus:ring-[#1A73E8]/20 transition-all duration-300 outline-none"
                    placeholder="Confirm your password"
                    required
                  />
                </div>

                <div className="flex items-center">
                  <input type="checkbox" className="rounded border-gray-300 text-[#1A73E8] focus:ring-[#1A73E8]" required />
                  <span className="ml-2 text-sm text-gray-600">
                    I agree to the <a href="#" className="text-[#1A73E8] hover:underline">Terms of Service</a> and <a href="#" className="text-[#1A73E8] hover:underline">Privacy Policy</a>
                  </span>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#22C58E] hover:bg-[#1BA978] text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 disabled:opacity-70 mt-2"
                >
                  {isLoading ? 'Creating Account...' : 'Create Account'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 shadow-2xl animate-fadeIn">
            <div className="w-16 h-16 border-4 border-[#1A73E8] border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p className="text-center mt-4 text-gray-700 font-medium">Processing...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;