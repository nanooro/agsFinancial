// import Image from "next/image";
import Link from "next/link";
import Header from "@/components/ui/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
// import { motion } from "framer-motion";

export default function Home() {
  return (
    <div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen grid grid-rows-[auto_1fr_auto] items-center justify-items-center p-8 sm:p-20 gap-16 bg-gradient-to-br from-blue-100 via-blue-300 to-green-200 text-gray-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 dark:text-white"
    >
      <Header />

      <main className="w-full max-w-2xl row-start-2">
        <Card className="bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
          <CardContent className="text-center sm:text-left flex flex-col gap-6 items-center sm:items-start">
            {/* this image is the image that appears above the your smart loan assistance heading  */}
            {/* <Image
              src="/bank.svg"
              alt="Bank Logo"
              width={80}
              height={80}
              priority
              className="dark:invert"
            /> */}
            <h1 className="text-4xl font-bold">Your Smart Loan Assistant</h1>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Find the best loan options for you — fast, simple, and secure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full mt-4">
              <Link href="/get-started">
                <Button className="w-full sm:w-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white hover:brightness-110 transition">
                  Get Started
                </Button>{" "}
              </Link>
              <Link href="/learn-more">
                <Button variant="outline" className="w-full sm:w-auto">
                  Learn More
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </main>

      <footer className="row-start-3 flex gap-4 text-sm text-gray-600 dark:text-gray-400">
        <a href="#" className="hover:underline">
          Privacy
        </a>
        <a href="#" className="hover:underline">
          Terms
        </a>
        <a href="#" className="hover:underline">
          Support
        </a>
      </footer>
    </div>
  );
}
