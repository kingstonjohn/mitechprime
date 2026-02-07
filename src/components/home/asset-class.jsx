import { APP_NAME } from "../../constants";
import Box from "../../layout/box";

export default function AssetClass() {

    return (
        <Box className="py-20 grid lg:grid-cols-2 gap-10">
            <div>
                <h1 className="text-[24px] lg:text-[40px] font-bold text-dark mb-5">Asset Class</h1>
                <div className="flex flex-col gap-6 text-dark">
                    <p>At {APP_NAME}, we understand the importance of diversifying your investment portfolio and exploring different avenues for potential returns. An asset class refers to a group of financial instruments or investments that share similar characteristics and behave in a comparable manner within the market.</p>
                    <p>Diversifying across asset classes is a fundamental principle of risk management and can help you optimize your investment strategy. By allocating your funds across various asset classes, such as stocks, bonds, commodities, real estate, and more, you can potentially reduce the overall risk exposure of your portfolio.</p>
                    <p>Each asset class has its unique characteristics, risk profile, and potential for returns. Stocks offer the opportunity to participate in the growth of individual companies and the broader market. Bonds provide fixed income and can offer stability and income generation. Commodities, such as oil, gold, and agricultural products, can act as a hedge against inflation and provide diversification. Real estate offers the potential for capital appreciation and rental income.</p>
                    <p>By understanding the different asset classes and their dynamics, you can create a well-balanced portfolio that aligns with your financial goals, risk tolerance, and time horizon. Our platform at {APP_NAME} provides you with access to a wide range of asset classes, enabling you to explore and diversify your investment opportunities.</p>
                    <p>Remember, diversification is key to mitigating risk and maximizing potential returns. Consult with our expert advisors and leverage our educational resources to gain a deeper understanding of asset classes and construct a diversified portfolio that suits your investment objectives. Start exploring different asset classes and take control of your financial future with {APP_NAME} today.</p>
                </div>
            </div>
            <figure className="grid place-items-center">
                <img src="/images/brokerasset.png" alt="broker asset" className="w-full max-w-[400px]" />
            </figure>
        </Box>
    )
}