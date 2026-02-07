/* eslint-disable react-hooks/exhaustive-deps */
import { createBrowserRouter, Outlet, RouterProvider, ScrollRestoration, Navigate } from "react-router-dom"
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import PasswordRecovery from "./pages/password-recovery";
import About from "./pages/about";
import OptionsCopyTrading from "./pages/options-copy-trading";
import AdvanceTrading from "./pages/advance-trading-account";
import Futures from "./pages/futures";
import Stock from "./pages/stock";
import Forex from "./pages/forex";
import OilGasStock from "./pages/oil-gas-stock";
import Terms from "./pages/terms";
import Faqs from "./pages/faqs";
import Insight from "./pages/insight";
import DashboardLayout from "./layout/dashboard-layout";
import Dashboard from "./pages/private/dashboard";
import StockTrading from "./pages/private/stock-trading";
import { useAuthStateContext } from "./context/authState";
import OtpVerification from "./pages/otp-verification";
import Live from "./pages/live-trading";
import LiveTradingIntro from "./pages/private/live-trading-intro";
import LiveTradingPlans from "./pages/private/live-trading-plans";
import InvestmentPlan from "./pages/private/investment-plans";
import Payment from "./pages/private/payment";
import PaymentMethod from "./pages/private/payment-method";
import TransactionHistory from "./pages/private/transaction-history";
import KycVerification from "./pages/private/kyc-verification";
import Invoice from "./pages/private/invoice";
import Withdrawal from "./pages/private/withdrawal";
import UserInvestmentPlan from "./pages/private/user-investment-plan";
import UserLiveTradingPlan from "./pages/private/user-livetrade-plans";
import BuyStock from "./pages/private/buy-stock";
import UserStock from "./pages/private/user-stock";
import { MetaResponsiveViewportWidth } from "./constants/meta";
import SEO from "./components/seo";
import { useEffect, useState } from "react";
import userService from "./services/user";
import Profile from "./pages/private/profile";
import Support from "./pages/private/support";
import SupportChat from "./pages/private/support-chat";
import Reviews from "./pages/Reviews";


const Root = () => {

  return (
    <div>
      <ScrollRestoration />
      <Outlet />
    </div>
  )
}

const ProtectedRoute = () => {

  const { state, dispatch } = useAuthStateContext()

  const [isError, setIsError] = useState(undefined);
  const [isSuccess, setIsSuccess] = useState(undefined);
  const [data, setData] = useState(undefined);

  useEffect(() => {
    (async () => {
      try {
        const response = await userService.getUser();
        setData(response);
        setIsSuccess(true)
        console.log(response);
      }
      catch (error) {
        setIsError(true)
        setIsSuccess(false)
        console.log(error)
      }
    })()
  }, [])

  useEffect(() => {
    if (isSuccess) {
      dispatch({ type: "SET_USER", payload: data?.data?.data?.user })
    }
  }, [isSuccess])

  if (isError) {
    return <Navigate to='/login' />
  }

  if (data && isSuccess && state.user) {
    return (
      <div>
        <SEO>
          {MetaResponsiveViewportWidth}
        </SEO>
        <ScrollRestoration />
        <Outlet />
      </div>
    )
  }

  return (
    <div className='h-[100vh] grid place-items-center'>
      <img src="/fizomarkt.png" alt="Logo" className="h-[38px]" />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <h1>Fatal Error occurred</h1>,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/otp-verification',
        element: <OtpVerification />
      },
      {
        path: '/password-recovery',
        element: <PasswordRecovery />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/options-copy-trading',
        element: <OptionsCopyTrading />
      },
      {
        path: '/advance-trading-account',
        element: <AdvanceTrading />
      },
      {
        path: '/live-trading',
        element: <Live />
      },
      {
        path: '/futures-trading',
        element: <Futures />
      },
      {
        path: '/stock-trading',
        element: <Stock />
      },
      {
        path: '/forex-trading',
        element: <Forex />
      },
      {
        path: '/oil-gas-stock-trading',
        element: <OilGasStock />
      },
      {
        path: '/terms-and-conditions',
        element: <Terms />
      },
      {
        path: '/faqs',
        element: <Faqs />
      },
      {
        path: '/insight',
        element: <Insight />
      },
      {
        path: '/reviews',
        element: <Reviews isPage/>
      }
    ],
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <DashboardLayout />,
        errorElement: <h1>Fatal error due to network connectivity</h1>,
        children: [
          {
            path: '/dashboard',
            element: <Dashboard />
          },
          {
            path: '/dashboard-stock-trading',
            element: <StockTrading />
          },
          {
            path: '/dashboard-live-trading-intro',
            element: <LiveTradingIntro />
          },
          {
            path: '/dashboard-live-trading-plans',
            element: <LiveTradingPlans />
          },
          {
            path: '/dashboard-investment-plans',
            element: <InvestmentPlan />
          },
          {
            path: '/payment',
            element: <Payment />
          },
          {
            path: '/payment/:method',
            element: <PaymentMethod />
          },
          {
            path: '/transaction-history',
            element: <TransactionHistory />
          },
          {
            path: '/dashboard-kyc',
            element: <KycVerification />
          },
          {
            path: '/invoice/:uid',
            element: <Invoice />
          },
          {
            path: '/withdrawal',
            element: <Withdrawal />
          },
          {
            path: '/dashboard-my-investment-plans',
            element: <UserInvestmentPlan />
          },
          {
            path: '/dashboard-my-live-trading-plans',
            element: <UserLiveTradingPlan />
          },
          {
            path: '/dashboard-buy',
            element: <BuyStock />
          },
          {
            path: '/dashboard-buy/purchases',
            element: <UserStock />
          },
          {
            path: '/dashboard-profile',
            element: <Profile />
          },
          {
            path: '/dashboard-support',
            element: <Support />
          },
          {
            path: '/dashboard-support/chat/:uid',
            element: <SupportChat />
          },
        ]
      }
    ]
  }
]);

export default function App() {
  return <RouterProvider router={router} />
}
