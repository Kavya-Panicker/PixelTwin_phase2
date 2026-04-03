"use client";
import React, { useState } from "react";
import Link from 'next/link';
import { motion, AnimatePresence } from "framer-motion";
import { Check, Info } from "lucide-react";

const pricingPlans = [
  {
    id: "pro",
    name: "Pro",
    description: "Best for individuals & small teams",
    priceMonthly: "$4.99",
    priceYearly: "$49.99",
    featuresLabel: "What's included in Pro:",
    features: [
      { text: "Core workflows & task statuses" },
      { text: "Basic permissions" },
      { text: "Standard dashboards", hasInfo: true },
      { text: "Standard support" }
    ]
  },
  {
    id: "business",
    name: "Business",
    description: "Best for mid-sized teams",
    priceMonthly: "$9.99",
    priceYearly: "$99.99",
    badge: "Popular",
    featuresLabel: "Everything in Pro, plus:",
    features: [
      { text: "Custom workflows & task statuses" },
      { text: "Role-based permissions" },
      { text: "Automations", hasInfo: true },
      { text: "Advanced dashboards", hasInfo: true },
      { text: "Integrations", hasInfo: true },
      { text: "Priority support" }
    ]
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "Best for large organizations & regulated industries",
    priceMonthly: "$39.99",
    priceYearly: "$399.99",
    featuresLabel: "Everything in Business, plus:",
    features: [
      { text: "Advanced Security & SSO" },
      { text: "Audit logs & compliance", hasInfo: true },
      { text: "Unlimited Automations" },
      { text: "Dedicated success manager", hasInfo: true },
      { text: "24/7 Phone Support" }
    ]
  }
];

function ChangeablePricingSection({
  title = "Select a plan",
  plans = pricingPlans,
  defaultPlanId = null,
  defaultBillingCycle = "monthly",
  monthlyLabel = "Monthly",
  yearlyLabel = "Yearly",
  footerText = "Cancel anytime. No long-term contract.",
  buttonText = "Continue",
  onContinue = () => {},
}) {
  const [selectedPlan, setSelectedPlan] = useState(defaultPlanId);
  const [billingCycle, setBillingCycle] = useState(defaultBillingCycle);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-[60px] pb-2 px-4 overflow-hidden">
      
      <h1 className="text-center font-bold text-[#381a11]" style={{ fontSize: '2rem', letterSpacing: '-1px', marginBottom: '0.75rem' }}>Simple, transparent pricing.</h1>
      
      <div className="w-full max-w-[600px] bg-[#fdfaf8] rounded-[24px] p-4 shadow-[0_20px_50px_rgba(242,85,44,0.08)] ring-1 ring-orange-500/15 flex flex-col justify-center">
        {/* Header */}
        <div className="flex items-center justify-between px-3 py-3 border-b border-orange-500/10 mb-3">
          <h2 className="text-2xl font-bold text-neutral-900 tracking-tighter">
            {title}
          </h2>
          <div className="flex items-center bg-white p-1 rounded-full relative z-0 ring-1 ring-neutral-200">
            <motion.div
              className="absolute top-1 bottom-1 w-[calc(50%-4px)] bg-neutral-100/80 rounded-full shadow-sm border border-neutral-200/60 -z-10"
              animate={{
                x: billingCycle === "monthly" ? 0 : "100%",
              }}
              transition={{ type: "spring", bounce: 0.4, duration: 0.7 }}
              style={{ left: 4 }}
            />
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`font-bold w-[86px] py-2 rounded-full text-[11px] tracking-widest uppercase transition-colors z-10 ${billingCycle === "monthly" ? "text-neutral-900" : "text-neutral-400"}`}
            >
              {monthlyLabel}
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`font-bold w-[86px] py-2 rounded-full text-[11px] tracking-widest uppercase transition-colors z-10 ${billingCycle === "yearly" ? "text-neutral-900" : "text-neutral-400"}`}
            >
              {yearlyLabel}
            </button>
          </div>
        </div>

        {/* Plans */}
        <div className="flex flex-col gap-3 mt-1">
          {plans.map((plan) => {
            const isSelected = selectedPlan === plan.id;

            return (
              <motion.div
                layout
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                transition={{ type: "spring", bounce: 0.45, duration: 0.5 }}
                className={`relative overflow-hidden cursor-pointer rounded-[20px] transition-all duration-300 bg-white ${
                  isSelected
                    ? "ring-[2.5px] ring-[#f2552c] shadow-[0_10px_30px_rgba(242,85,44,0.12)] z-10"
                    : "ring-1 ring-neutral-200 shadow-sm hover:ring-orange-300 hover:shadow-md"
                }`}
              >
                <div className="px-5 py-4 sm:px-5 sm:py-4">
                  {/* Top row */}
                  <div className="flex justify-between items-start gap-3">
                    <div className="flex gap-4">
                      {/* Radio button */}
                      <div className="mt-0.5 shrink-0">
                        <div
                          className={`w-[24px] h-[24px] rounded-full flex items-center justify-center border-2 transition-colors ${
                            isSelected
                              ? "border-[#f2552c] bg-[#f2552c]"
                              : "border-neutral-300 bg-white"
                          }`}
                        >
                          {isSelected && (
                            <Check
                              size={14}
                              strokeWidth={4}
                              className="text-white"
                            />
                          )}
                        </div>
                      </div>

                      {/* Plan Info */}
                      <div className="flex flex-col mt-0.5">
                        <div className="flex items-center gap-2">
                          <span className="text-[20px] font-bold text-neutral-900 tracking-tight leading-none">
                            {plan.name}
                          </span>
                          {plan.badge && (
                            <span className="bg-orange-100 text-[#d84315] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest leading-none">
                              {plan.badge}
                            </span>
                          )}
                        </div>
                        <span className="text-[14px] text-neutral-500 mt-2.5 leading-none font-medium">
                          {plan.description}
                        </span>
                      </div>
                    </div>

                    {/* Price Info */}
                    <div className="flex flex-col items-end mt-0.5">
                      <div className="flex items-center justify-end text-[24px] font-bold tracking-tight text-neutral-900 leading-none overflow-hidden h-[24px]">
                        <AnimatePresence mode="popLayout" initial={false}>
                          <motion.span
                            key={billingCycle}
                            initial={{
                              y: billingCycle === "yearly" ? 24 : -24,
                              opacity: 0,
                            }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{
                              y: billingCycle === "monthly" ? -24 : 24,
                              opacity: 0,
                            }}
                            transition={{
                              type: "spring",
                              bounce: 0,
                              duration: 0.4,
                            }}
                            className="inline-block whitespace-nowrap"
                          >
                            {billingCycle === "monthly"
                              ? plan.priceMonthly
                              : plan.priceYearly}
                          </motion.span>
                        </AnimatePresence>
                      </div>
                      <span className="font-bold text-[10px] text-neutral-400 tracking-[0.1em] uppercase mt-2.5 leading-none">
                        per user/month
                      </span>
                    </div>
                  </div>

                  {/* Expandable Features */}
                  <AnimatePresence initial={false}>
                    {isSelected && plan.features.length > 0 && (
                      <motion.div
                        key="features"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          opacity: { duration: 0.2 },
                          height: { duration: 0.3, ease: "easeOut" },
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 mt-4 mb-0 border-t border-neutral-100">
                          {plan.featuresLabel && (
                            <p className="font-bold text-[10.5px] text-neutral-400 tracking-[0.15em] uppercase mb-3">
                              {plan.featuresLabel}
                            </p>
                          )}
                          <div className="flex flex-col gap-2.5">
                            {plan.features.map((feature, idx) => (
                              <div
                                key={idx}
                                className="flex items-center gap-3 font-medium text-neutral-500"
                              >
                                <Check
                                  size={16}
                                  strokeWidth={3}
                                  className="text-[#f2552c] shrink-0"
                                />
                                <span className="text-[14px] leading-tight flex items-center text-neutral-600">
                                  {feature.text}
                                  {feature.hasInfo && (
                                    <Info
                                      size={14}
                                      className="text-neutral-400 ml-1.5 inline-block"
                                    />
                                  )}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer info & CTA */}
        <div className="flex items-center justify-between mt-5 md:px-3 px-2 pb-1">
          <span className="font-semibold text-[10.5px] text-neutral-400 uppercase tracking-widest leading-relaxed">
            {footerText}
          </span>
          <button
            onClick={() => selectedPlan && onContinue?.(selectedPlan, billingCycle)}
            className={`px-6 py-2.5 rounded-lg text-[14px] font-bold transition-all outline-none ${
              selectedPlan 
                ? "bg-gradient-to-r from-[#ff6b4a] to-[#d84315] text-white hover:opacity-90 active:scale-95 shadow-[0_8px_16px_rgba(242,85,44,0.2)]" 
                : "bg-neutral-200 text-neutral-400 cursor-not-allowed"
            }`}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}

function CheckoutView({ plan, initialCycle, onBack }) {
  const [cycle, setCycle] = useState(initialCycle);
  
  const priceMoRaw = parseFloat(plan.priceMonthly.replace(/[^0-9.]/g, ''));
  const priceYrRaw = parseFloat(plan.priceYearly.replace(/[^0-9.]/g, ''));

  const currentPriceRaw = cycle === 'yearly' ? priceYrRaw : priceMoRaw;
  const tax = currentPriceRaw * 0.18;
  const total = currentPriceRaw + tax;

  const nextYearDate = new Date();
  nextYearDate.setFullYear(nextYearDate.getFullYear() + 1);
  const nextMonthDate = new Date();
  nextMonthDate.setMonth(nextMonthDate.getMonth() + 1);

  const renewDate = cycle === 'yearly' ? nextYearDate : nextMonthDate;
  const formattedDate = renewDate.toLocaleDateString('en-US');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-[60px] pb-2 px-4 overflow-hidden">
      
      <div className="w-full max-w-[550px]">
        <button onClick={onBack} className="text-[#d84315] font-bold text-[12px] mb-3 flex items-center gap-2 hover:opacity-80 transition-opacity">
           <span>&larr;</span> Back to plans
        </button>

        <h1 className="font-bold text-[#381a11] mb-3 tracking-tighter" style={{ fontSize: '1.8rem' }}>{plan.name} plan</h1>
        
        {/* Cycle Selection */}
        <div className="flex sm:flex-row flex-col gap-3 mb-4">
           <div 
             onClick={() => setCycle('monthly')}
             className={`flex-1 cursor-pointer rounded-2xl p-4 border-[2px] transition-all ${cycle === 'monthly' ? 'border-[#f2552c] bg-[#fff2ec] shadow-md' : 'border-neutral-200 bg-white hover:border-orange-300'}`}
           >
             <div className="flex items-center gap-3 mb-1">
                <div className={`w-[18px] h-[18px] rounded-full border-2 flex items-center justify-center ${cycle === 'monthly' ? 'border-[#f2552c]' : 'border-neutral-300'}`}>
                  {cycle === 'monthly' && <div className="w-[8px] h-[8px] bg-[#f2552c] rounded-full"></div>}
                </div>
                <h3 className="font-bold text-neutral-900 text-[15px]">Monthly</h3>
             </div>
             <p className="text-neutral-500 font-medium text-[12px] ml-7">{plan.priceMonthly}/month + tax</p>
           </div>
           
           <div 
             onClick={() => setCycle('yearly')}
             className={`flex-1 cursor-pointer rounded-2xl p-4 border-[2px] transition-all relative ${cycle === 'yearly' ? 'border-[#f2552c] bg-[#fff2ec] shadow-md' : 'border-neutral-200 bg-white hover:border-orange-300'}`}
           >
             <span className="absolute top-3 right-3 bg-orange-100 text-[#d84315] text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest leading-none">Save 17%</span>
             <div className="flex items-center gap-3 mb-1">
                <div className={`w-[18px] h-[18px] rounded-full border-2 flex items-center justify-center ${cycle === 'yearly' ? 'border-[#f2552c]' : 'border-neutral-300'}`}>
                  {cycle === 'yearly' && <div className="w-[8px] h-[8px] bg-[#f2552c] rounded-full"></div>}
                </div>
                <h3 className="font-bold text-neutral-900 text-[15px]">Yearly</h3>
             </div>
             <p className="text-neutral-500 font-medium text-[12px] ml-7">{plan.priceYearly}/year + tax</p>
           </div>
        </div>

        {/* Order Details box */}
        <div className="bg-[#fdfaf8] rounded-[20px] p-5 shadow-[0_4px_20px_rgba(242,85,44,0.04)] ring-1 ring-orange-500/15 mb-4">
           <h3 className="font-bold text-[18px] text-neutral-900 mb-3 tracking-tight">Order details</h3>
           
           <div className="flex justify-between items-start mb-3">
             <div className="flex flex-col gap-0.5">
               <span className="font-bold text-neutral-700 text-[14px]">{plan.name} plan</span>
               <span className="text-neutral-500 text-[13px] font-medium">{cycle === 'yearly' ? 'Annually' : 'Monthly'}</span>
             </div>
             <span className="font-bold text-neutral-900 text-[15px]">${currentPriceRaw.toFixed(2)}</span>
           </div>
           
           <div className="border-t border-orange-500/10 pt-3 flex flex-col gap-2">
             <div className="flex justify-between items-center text-[13px]">
               <span className="font-bold text-neutral-700">Subtotal</span>
               <span className="font-bold text-neutral-900">${currentPriceRaw.toFixed(2)}</span>
             </div>
             <div className="flex justify-between items-center text-[13px]">
               <span className="font-bold text-neutral-700">Tax</span>
               <span className="font-bold text-neutral-900">${tax.toFixed(2)}</span>
             </div>
           </div>

           <div className="border-t border-orange-500/10 mt-3 pt-3 flex justify-between items-center">
               <span className="font-bold text-neutral-900 text-[15px]">Total due today</span>
               <span className="font-bold text-[22px] tracking-tight text-[#d84315]">${total.toFixed(2)}</span>
           </div>
        </div>

        {/* Warning text box */}
        <div className="flex items-start gap-2 bg-white rounded-xl p-4 border border-orange-500/15 shadow-sm">
           <Info size={16} className="text-[#f2552c] shrink-0 mt-0.5" />
           <p className="text-[12px] font-medium text-neutral-600 leading-relaxed">
             Your subscription will auto renew on <span className="font-bold">{formattedDate}</span>. You will be charged <span className="font-bold">{cycle === 'yearly' ? `${plan.priceYearly}/year` : `${plan.priceMonthly}/month`} + tax</span>.
           </p>
        </div>

        <button className="w-full mt-4 bg-gradient-to-r from-[#ff6b4a] to-[#d84315] text-white px-6 py-3 rounded-xl text-[14px] font-bold hover:opacity-90 active:scale-95 transition-all outline-none shadow-[0_4px_12px_rgba(242,85,44,0.2)] tracking-wide">
           Complete Purchase
        </button>
      </div>
    </div>
  )
}

export default function PricingPage() {
  const [checkoutData, setCheckoutData] = useState(null);

  const handleContinue = (planId, cycle) => {
    const plan = pricingPlans.find(p => p.id === planId);
    setCheckoutData({ plan, cycle });
  };

  return (
    <>
      {checkoutData ? (
        <CheckoutView plan={checkoutData.plan} initialCycle={checkoutData.cycle} onBack={() => setCheckoutData(null)} />
      ) : (
        <ChangeablePricingSection onContinue={handleContinue} />
      )}
    </>
  );
}
