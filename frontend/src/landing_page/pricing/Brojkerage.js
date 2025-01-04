import React from "react";
function Brojkerage() {
  return (
    <div className="container">
      <div className="row">
        <h1 className="fs-3 text-center p-5">
          Calculate your costs upfront using our brokerage calculator
        </h1>
        <h3 className="fs-5">Charges explained</h3>
        <div className="col-6 p-5">
          <p className="fs-4 text-muted">
            Securities/Commodities transaction tax
          </p>
          <p className="fs-7 text-muted">
            Tax by the government when transacting on the exchanges. Charged as
            above on both buy and sell sides when trading equity delivery.
            Charged only on selling side when trading intraday or on F&O.
          </p>
          <p className="fs-7 text-muted">
            When trading at Zerodha, STT/CTT can be a lot more than the
            brokerage we charge. Important to keep a tab.
          </p>
          <p className="fs-4 text-muted">Transaction/Turnover Charges</p>
          <p>
            Charged by exchanges (NSE, BSE, MCX) on the value of your
            transactions.
          </p>
          <p>
            BSE has revised transaction charges in XC, XD, XT, Z and ZP groups
            to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been
            merged into a new group X w.e.f 01.12.2017)
          </p>
          <p>
            BSE has revised transaction charges in SS and ST groups to ₹1,00,000
            per crore of gross turnover.
          </p>
          <p>
            BSE has revised transaction charges for group A, B and other non
            exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC,
            W, T) at ₹375 per crore of turnover on flat rate basis w.e.f.
            December 1, 2022.
          </p>
          <p>
            BSE has revised transaction charges in M, MT, TS and MS groups to
            ₹275 per crore of gross turnover.
          </p>
          <p>Call & trade</p>
          Additional charges of ₹50 per order for orders placed through a dealer
          at Zerodha including auto square off orders.
          <p>Stamp charges</p>
          <p>
            Stamp charges by the Government of India as per the Indian Stamp Act
            of 1899 for transacting in instruments on the stock exchanges and
            depositories.
          </p>
          <p>NRI brokerage charges</p>
          <ul>
            <li>₹100 per order for futures and options.</li>
            <li>
              For a non-PIS account, 0.5% or ₹100 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              For a PIS account, 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              ₹500 + GST as yearly account maintenance charges (AMC) charges.
            </li>
          </ul>
          <p className="fs-7 text-muted">Account with debit balance</p>
          <p>
            If the account is in debit balance, any order placed will be charged
            ₹40 per executed order instead of ₹20 per executed order.
          </p>
        </div>
        <div className="col-6 p-5">
          <p className="fs-4 text-muted">Charges and Fees</p>

          <p className="fs-7 text-muted">GST</p>
          <p>
            Tax levied by the government on the services rendered. 18% of
            (brokerage + SEBI charges + transaction charges).
          </p>

          <p className="fs-7 text-muted">SEBI Charges</p>
          <p>
            Charged at ₹10 per crore + GST by Securities and Exchange Board of
            India for regulating the markets.
          </p>

          <p className="fs-7 text-muted">DP (Depository Participant) Charges</p>
          <p>
            ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is
            charged on the trading account ledger when stocks are sold,
            irrespective of quantity.
          </p>
          <p>
            Female demat account holders (as first holder) will enjoy a discount
            of ₹0.25 per transaction on the CDSL fee.
          </p>
          <p>
            Debit transactions of mutual funds & bonds get an additional
            discount of ₹0.25 on the CDSL fee.
          </p>

          <p className="fs-7 text-muted">Pledging Charges</p>
          <p>₹30 + GST per pledge request per ISIN.</p>

          <p className="fs-7 text-muted">AMC (Account Maintenance Charges)</p>
          <p>
            For BSDA demat account: Zero charges if the holding value is less
            than ₹4,00,000.
          </p>
          <p>
            For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly
            (90 days).
          </p>

          <p className="fs-7 text-muted">Corporate Action Order Charges</p>
          <p>
            ₹20 plus GST will be charged for OFS / buyback / takeover /
            delisting orders placed through Console.
          </p>

          <p className="fs-7 text-muted">Off-market Transfer Charges</p>
          <p>₹25 per transaction.</p>

          <p className="fs-7 text-muted">Physical CMR Request</p>
          <p>
            First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for
            subsequent requests.
          </p>

          <p className="fs-7 text-muted">Payment Gateway Charges</p>
          <p>₹9 + GST (Not levied on transfers done via UPI).</p>

          <p className="fs-7 text-muted">Delayed Payment Charges</p>
          <p>
            Interest is levied at 18% a year or 0.05% per day on the debit
            balance in your trading account.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Brojkerage;
