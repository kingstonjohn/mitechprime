/* eslint-disable react/no-unknown-property */
import { useSearchParams } from "react-router-dom"

export default function StockTrading() {

    const [searchParams] = useSearchParams()

    const stock = searchParams.get("stock")

    switch (stock) {
        case "TSLA": {
            return (
                <iframe title="advanced chart TradingView widget" lang="en" id="tradingview_9fcca" allowtransparency="true" scrolling="no" allowfullscreen="true" src="https://s.tradingview.com/widgetembed/?hideideas=1&amp;overrides=%7B%7D&amp;enabled_features=%5B%5D&amp;disabled_features=%5B%5D&amp;locale=en#%7B%22symbol%22%3A%22TSLA%22%2C%22frameElementId%22%3A%22tradingview_9fcca%22%2C%22interval%22%3A%22D%22%2C%22allow_symbol_change%22%3A%221%22%2C%22save_image%22%3A%221%22%2C%22studies%22%3A%22%5B%5D%22%2C%22theme%22%3A%22light%22%2C%22style%22%3A%221%22%2C%22timezone%22%3A%22Etc%2FUTC%22%2C%22studies_overrides%22%3A%22%7B%7D%22%2C%22utm_source%22%3A%22copytdmarkerts.com%22%2C%22utm_medium%22%3A%22widget_new%22%2C%22utm_campaign%22%3A%22chart%22%2C%22utm_term%22%3A%22TSLA%22%2C%22page-uri%22%3A%22copytdmarkerts.com%2Ftrading%3Fstock%3DTSLA%22%7D" className="live-video-content-height w-full block"></iframe>
            )
        }
        case "SPY": {
            return (
                <iframe
                    title="advanced chart TradingView widget"
                    lang="en"
                    id="tradingview_9fcca"
                    allowtransparency="true"
                    scrolling="no"
                    allowfullscreen="true"
                    src="https://s.tradingview.com/widgetembed/?hideideas=1&amp;overrides=%7B%7D&amp;enabled_features=%5B%5D&amp;disabled_features=%5B%5D&amp;locale=en#%7B%22symbol%22%3A%22TSLA%22%2C%22frameElementId%22%3A%22tradingview_9fcca%22%2C%22interval%22%3A%22D%22%2C%22allow_symbol_change%22%3A%221%22%2C%22save_image%22%3A%221%22%2C%22studies%22%3A%22%5B%5D%22%2C%22theme%22%3A%22light%22%2C%22style%22%3A%221%22%2C%22timezone%22%3A%22Etc%2FUTC%22%2C%22studies_overrides%22%3A%22%7B%7D%22%2C%22utm_source%22%3A%22copytdmarkerts.com%22%2C%22utm_medium%22%3A%22widget_new%22%2C%22utm_campaign%22%3A%22chart%22%2C%22utm_term%22%3A%22TSLA%22%2C%22page-uri%22%3A%22copytdmarkerts.com%2Ftrading%3Fstock%3DTSLA%22%7D"
                    className="live-video-content-height w-full block">
                </iframe>
            )
        }
        case "SPX": {
            return (
                <iframe title="advanced chart TradingView widget" lang="en" id="tradingview_fe108" allowtransparency="true" scrolling="no" allowfullscreen="true" src="https://s.tradingview.com/widgetembed/?hideideas=1&amp;overrides=%7B%7D&amp;enabled_features=%5B%5D&amp;disabled_features=%5B%5D&amp;locale=en#%7B%22symbol%22%3A%22SPX%22%2C%22frameElementId%22%3A%22tradingview_fe108%22%2C%22interval%22%3A%22D%22%2C%22allow_symbol_change%22%3A%221%22%2C%22save_image%22%3A%221%22%2C%22studies%22%3A%22%5B%5D%22%2C%22theme%22%3A%22dark%22%2C%22style%22%3A%221%22%2C%22timezone%22%3A%22Etc%2FUTC%22%2C%22studies_overrides%22%3A%22%7B%7D%22%2C%22utm_source%22%3A%22copytdmarkerts.com%22%2C%22utm_medium%22%3A%22widget_new%22%2C%22utm_campaign%22%3A%22chart%22%2C%22utm_term%22%3A%22SPX%22%2C%22page-uri%22%3A%22copytdmarkerts.com%2Ftrading%3Fstock%3DSPX%22%7D" className="live-video-content-height w-full block"></iframe>
            )
        }
        case "APPL": {
            return (
                <iframe title="advanced chart TradingView widget" lang="en" id="tradingview_b3d9f" allowtransparency="true" scrolling="no" allowfullscreen="true" src="https://s.tradingview.com/widgetembed/?hideideas=1&amp;overrides=%7B%7D&amp;enabled_features=%5B%5D&amp;disabled_features=%5B%5D&amp;locale=en#%7B%22symbol%22%3A%22AAPL%22%2C%22frameElementId%22%3A%22tradingview_b3d9f%22%2C%22interval%22%3A%22D%22%2C%22allow_symbol_change%22%3A%221%22%2C%22save_image%22%3A%221%22%2C%22studies%22%3A%22%5B%5D%22%2C%22theme%22%3A%22dark%22%2C%22style%22%3A%221%22%2C%22timezone%22%3A%22Etc%2FUTC%22%2C%22studies_overrides%22%3A%22%7B%7D%22%2C%22utm_source%22%3A%22copytdmarkerts.com%22%2C%22utm_medium%22%3A%22widget_new%22%2C%22utm_campaign%22%3A%22chart%22%2C%22utm_term%22%3A%22AAPL%22%2C%22page-uri%22%3A%22copytdmarkerts.com%2Ftrading%3Fstock%3DAAPL%22%7D" className="live-video-content-height w-full block"></iframe>
            )
        }
        case "BA": {
            return (
                <iframe title="advanced chart TradingView widget" lang="en" id="tradingview_e1e99" allowtransparency="true" scrolling="no" allowfullscreen="true" src="https://s.tradingview.com/widgetembed/?hideideas=1&amp;overrides=%7B%7D&amp;enabled_features=%5B%5D&amp;disabled_features=%5B%5D&amp;locale=en#%7B%22symbol%22%3A%22BA%22%2C%22frameElementId%22%3A%22tradingview_e1e99%22%2C%22interval%22%3A%22D%22%2C%22allow_symbol_change%22%3A%221%22%2C%22save_image%22%3A%221%22%2C%22studies%22%3A%22%5B%5D%22%2C%22theme%22%3A%22dark%22%2C%22style%22%3A%221%22%2C%22timezone%22%3A%22Etc%2FUTC%22%2C%22studies_overrides%22%3A%22%7B%7D%22%2C%22utm_source%22%3A%22copytdmarkerts.com%22%2C%22utm_medium%22%3A%22widget_new%22%2C%22utm_campaign%22%3A%22chart%22%2C%22utm_term%22%3A%22BA%22%2C%22page-uri%22%3A%22copytdmarkerts.com%2Ftrading%3Fstock%3DBA%22%7D" className="live-video-content-height w-full block"></iframe>
            )
        }
        case "SP": {
            return (
                <iframe title="advanced chart TradingView widget" lang="en" id="tradingview_7d097" allowtransparency="true" scrolling="no" allowfullscreen="true" src="https://s.tradingview.com/widgetembed/?hideideas=1&amp;overrides=%7B%7D&amp;enabled_features=%5B%5D&amp;disabled_features=%5B%5D&amp;locale=en#%7B%22symbol%22%3A%22S%22%2C%22frameElementId%22%3A%22tradingview_7d097%22%2C%22interval%22%3A%22D%22%2C%22allow_symbol_change%22%3A%221%22%2C%22save_image%22%3A%221%22%2C%22studies%22%3A%22%5B%5D%22%2C%22theme%22%3A%22dark%22%2C%22style%22%3A%221%22%2C%22timezone%22%3A%22Etc%2FUTC%22%2C%22studies_overrides%22%3A%22%7B%7D%22%2C%22utm_source%22%3A%22copytdmarkerts.com%22%2C%22utm_medium%22%3A%22widget_new%22%2C%22utm_campaign%22%3A%22chart%22%2C%22utm_term%22%3A%22S%22%2C%22page-uri%22%3A%22copytdmarkerts.com%2Ftrading%3Fstock%3DS%26P%22%7D" className="live-video-content-height w-full block"></iframe>
            )
        }
    }
}