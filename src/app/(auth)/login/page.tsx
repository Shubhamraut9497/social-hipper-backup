"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FaFacebookF, FaApple, FaGoogle, FaTwitter } from "react-icons/fa";
import { useSignIn } from "@clerk/nextjs"; // Import Clerk sign-in hook
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const { signIn, isLoaded } = useSignIn(); // useSignIn hook for Clerk login
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter(); // Use Next.js router

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLoaded) return; // Ensure Clerk is loaded before proceeding
    setIsLoading(true);
    setError(null);

    try {
      const signInResponse = await signIn.create({
        identifier: email,
        password: password,
      });

      if (signInResponse.status === "complete") {
        // Redirect to your desired page or handle successful login
        console.log("Login successful");
        router.push("/dashboard");
      } else {
        // Handle further steps if required by Clerk
        console.log("Additional steps required");
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message || "Login failed. Please try again.");
      } else {
        setError("An unknown error occurred.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm">
        <h2 className="text-[40px] leading-[60px] font-semibold text-[#333333] text-center mb-4">
          Log in
        </h2>
        <p className="text-center text-gray-600 mb-6">
          New to Design Space?{" "}
          <Link href="/signup" className="text-blue-500 font-semibold">
            Sign up for free
          </Link>
        </p>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="text-gray-600">
              Email address
            </label>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              variant="minimal"
            />
          </div>
          <div className="mb-4">
            <label className="flex items-center justify-between text-[16px] leading-[24px] font-[400] text-[#666666] mb-1">
              Password
              <button
                type="button"
                className="flex items-center text-gray-600 ml-auto"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible
                    className="w-5 h-5"
                    aria-hidden="true"
                  />
                ) : (
                  <AiOutlineEye className="w-5 h-5" aria-hidden="true" />
                )}
                <span className="ml-1">{showPassword ? "Hide" : "Show"}</span>
              </button>
            </label>
            <Input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="rounded-lg border-gray-300"
              variant="minimal"
            />
          </div>
          <div className="text-left mb-6">
            <a href="#" className="text-blue-500 text-sm font-semibold">
              Forget password?
            </a>
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <Button
            type="submit"
            className="w-full bg-gray-300 text-black hover:text-white  py-2 mb-4 rounded-full"
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Log in"}
          </Button>
        </form>

        <div className="flex justify-between gap-2 mb-4">
          <Button
            variant="outline"
            className="flex-1 rounded-full flex items-center justify-center gap-2"
          >
            <FaFacebookF />
          </Button>
          <Button
            variant="outline"
            className="flex-1 rounded-full flex items-center justify-center gap-2"
          >
            <FaApple />
          </Button>
          <Button
            variant="outline"
            className="flex-1 rounded-full flex items-center justify-center gap-2"
          >
            <FaGoogle />
          </Button>
          <Button
            variant="outline"
            className="flex-1 rounded-full flex items-center justify-center gap-2"
          >
            <FaTwitter />
          </Button>
        </div>
        <Button className="w-full flex items-center rounded-full justify-center gap-2 border bg-white border-black text-black hover:text-white">
          <span role="img" aria-label="lock">
            🔒
          </span>{" "}
          Log in with SSO
        </Button>
      </div>
    </div>
  );
}
