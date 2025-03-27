"use client";
import { Input } from "@/components/ui/input"; // Adjust the path if necessary
import { Button } from "@/components/ui/button"; // Adjust the path if necessary
import { useState, useRef } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import ReCAPTCHA from "react-google-recaptcha";
import Link from "next/link";
import { FaApple, FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";

const SignUpForm: React.FC = () => {
  const { isLoaded, signUp, setActive } = useSignUp();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [verificationCode, setVerificationCode] = useState<string[]>([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [isVerifying, setIsVerifying] = useState<boolean>(false);
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const router = useRouter();
  console.log(captchaToken);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isLoaded) return;

    try {
      const signUpResponse = await signUp.create({
        emailAddress: email,
        password: password,
      });
      console.log(signUpResponse);
      await signUp.prepareEmailAddressVerification();
      setIsVerifying(true);
    } catch (error: unknown) {
      console.error("Error during sign-up:", error);
    }
  };
  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
  };
  const handleVerification = async () => {
    try {
      const code = verificationCode.join("");
      const verificationResult = await signUp?.attemptEmailAddressVerification({
        code,
      });
      console.log("result is", verificationResult);

      if (setActive && verificationResult?.createdSessionId) {
        await setActive({ session: verificationResult.createdSessionId });
        router.push("/dashboard");
      } else {
        console.error("Failed to set active session or session ID is missing.");
      }
    } catch (error) {
      console.error("Verification failed:", error);
    }
  };

  const handleOTPChange = (index: number, value: string) => {
    if (value.length > 1) return; // Prevent entering multiple digits
    const newCode = [...verificationCode];
    newCode[index] = value;
    setVerificationCode(newCode);

    if (value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1]?.focus(); // Move to next field
    }
  };

  return (
    <>
      <div className="min-h-screen grid grid-cols-12">
        <div
          className="col-span-12 md:col-span-6 to-white"
          style={{
            background: `linear-gradient(90deg, #FFC368 0%, #FF6262 50%, #5956E9 100%),
                      linear-gradient(180deg, #FFF9F9 0%, rgba(255, 255, 255, 0.1) 100%)`,
          }}
        ></div>
        <div className="col-span-12 md:col-span-6 flex-grow flex items-center justify-start p-6 md:pl-20">
          <div>
            <h2 className="text-3xl font-semibold text-left mb-4">
              Create an Account
            </h2>
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
            {!isVerifying ? (
              <form onSubmit={handleSignUp} className="space-y-4">
                {/* Username Field */}
                <div>
                  <label className="block text-[16px] leading-[24px] font-[400] text-[#666666] dark:text-white mb-1">
                    User name
                  </label>
                  <Input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="rounded-lg border-gray-300 dark:text-black"
                    variant="minimal"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-[16px] leading-[24px] font-[400] text-[#666666] dark:text-white mb-1">
                    Email address
                  </label>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="rounded-lg border-gray-300 dark:text-black"
                    variant="minimal"
                  />
                </div>

                {/* Password Field */}
                <div>
                  <label className="flex items-center justify-between text-[16px] leading-[24px] font-[400] text-[#666666] dark:text-white mb-1">
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
                      <span className="ml-1 dark:text-white">
                        {showPassword ? "Hide" : "Show"}
                      </span>
                    </button>
                  </label>
                  <Input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="rounded-lg border-gray-300 dark:text-black"
                    variant="minimal"
                  />
                  <p className="text-xs text-gray-500 dark:text-white mt-1">
                    Use 8 or more characters with a mix of letters, numbers &
                    symbols
                  </p>
                </div>

                {/* Terms and Privacy */}
                <div className="text-[16px] text-[#666666] dark:text-white leading-[24px]">
                  By creating an account, you agree to our <br />
                  <a
                    href="/terms"
                    className="text-[#111111] dark:text-white underline"
                  >
                    Terms of use
                  </a>{" "}
                  and{" "}
                  <a
                    href="/privacy"
                    className="text-[#111111] dark:text-white underline"
                  >
                    Privacy Policy
                  </a>
                  .
                </div>
                <div className="mt-4">
                  <ReCAPTCHA
                    sitekey="6LevQr0qAAAAAIQqlvBP9MMX2zqpQVm9d21VpoRd"
                    onChange={handleCaptchaChange}
                  />
                </div>
                {/* SignUp Button */}
                <Button
                  type="submit"
                  className={`w-1/2 mt-4 text-white py-6 rounded-[36px] font-semibold 
                    ${
                     email && username && password
                        ? "bg-black dark:bg-white dark:text-black opacity-100"
                        : "bg-gray-400 opacity-40"
                    }`}
                  
                >
                  Create an Account
                </Button>
              </form>
            ) : (
              <div className="space-y-4">
                <label className="block text-[16px] leading-[24px] font-[400] text-[#000000] mb-1">
                  Verification Code
                </label>
                <div className="flex space-x-2">
                  {verificationCode.map((digit, index) => (
                    <Input
                      key={index}
                      type="text"
                      value={digit}
                      maxLength={1}
                      onChange={(e) => handleOTPChange(index, e.target.value)}
                      ref={(el) => {
                        if (el) {
                          inputRefs.current[index] = el;
                        }
                      }}
                      variant="minimal"
                      className="w-12 text-center rounded-lg border-gray-300 !text-black"
                    />
                  ))}
                </div>
                <Button
                  onClick={handleVerification}
                  className="w-1/2 mt-4 bg-gray-400 text-white py-6 rounded-[36px] font-semibold opacity-40"
                >
                  Verify Account
                </Button>
              </div>
            )}

            <p className="text-sm text-left text-gray-600 dark:text-white mt-2">
              Already have an account?{" "}
              <Link href="/login" className="text-[#111111]">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
