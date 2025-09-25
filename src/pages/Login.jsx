import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoginView, setIsLoginView] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLoginView) {
      console.log('Login attempt:', { email, password });
      // In a real application, you would handle authentication here (e.g., API call)
      alert('Login submitted! Check the console for data.');
    } else {
      if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
      }
      console.log('Sign-up attempt:', { email, password });
      // In a real application, you would handle user registration here
      alert('Sign-up submitted! Check the console for data.');
    }
  };

  const toggleView = () => {
    setIsLoginView(!isLoginView);
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-sm p-8 space-y-8 bg-white rounded-xl shadow-2xl backdrop-filter backdrop-blur-md bg-opacity-80 border border-gray-200">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">
            {isLoginView ? 'Welcome Back!' : 'Create an Account'}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {isLoginView ? 'Sign in to continue to your account.' : 'Sign up to get started.'}
          </p>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-300"
            />
          </div>
          
          {/* Password Input */}
          <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
            <input
              id="password"
              name="password"
              type="password"
              required
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-300"
            />
          </div>

          {/* Confirm Password Input (for Sign-Up view) */}
          {!isLoginView && (
            <div className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                required
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-300"
              />
            </div>
          )}

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="h-4 w-4 text-green-600 rounded-md focus:ring-green-500"
              />
              <label htmlFor="remember_me" className="ml-2 text-gray-600">
                Remember me
              </label>
            </div>
            <a href="#" className="font-medium text-green-600 hover:text-green-500 transition duration-300">
              {isLoginView ? 'Forgot Password?' : ''}
            </a>
          </div>

          {/* Login/Sign-up Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 rounded-lg text-white font-semibold bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-300"
          >
            {isLoginView ? 'Login' : 'Sign up'}
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-gray-600">
          {isLoginView ? "Don't have an account?" : "Already have an account?"}{' '}
          <button onClick={toggleView} className="font-medium text-green-600 hover:text-green-500 transition duration-300">
            {isLoginView ? 'Sign up' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
