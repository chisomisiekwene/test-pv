
import ShopOnline from "./pages/shopOnline";
import { PayBills } from "./pages/payBills";
import MultiCurrencyWallets from "./pages/multicurrency";
import Faq from "./pages/faq";
import { Contact } from "./pages/contact";
import Hero from "./pages/heropage";

export default function Home() {
  return (
    <div >
    <Hero/>
      <MultiCurrencyWallets/>
      <ShopOnline/>
      <PayBills/>
      <Faq/>

      <Contact/>
      
    
    </div>
  );
}
