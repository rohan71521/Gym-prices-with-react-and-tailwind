import PricingCards from "./pricingCards/PricingCards";



const Pricing = () => {
    const gymPackages = [
        {
          packagee: "Basic",
          price: 29.99,
          features: ["Access to gym equipment", "Locker room access", "Free weights"]
        },
        {
          packagee: "Premium",
          price: 49.99,
          features: ["All Basic package features", "Access to group classes", "Personal trainer sessions" , "Weekly Extra Training"]
        },
        {
          packagee: "Ultimate",
          price: 79.99,
          features: ["All Premium package features", "Sauna and spa access", "Nutrition consultation","Health Care", "Monthly Package"]
        }
      ];
      
    return (
        <div className="text-white">
            <h1 className="text-center md:py-20 py-5 text-2xl md:text-5xl md:underline">Best Pricing in the town</h1>
            <div className="grid md:grid-cols-3 gap-10">
                 {
                    gymPackages.map((packages, id) =><PricingCards key={id} packages={packages}></PricingCards>)
                 }
            </div>
        </div>
    );
};

export default Pricing;