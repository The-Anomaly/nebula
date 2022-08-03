import * as React from "react";
import { Link } from "react-router-dom";
import { Routes } from "router";
import styles from "./styles.module.css";

const TermsUI = () => {
  return (
    <>
      <div className={`siteWrapper ${styles.privacyWrap}`}>
        <h1 className={styles.ttl}>Terms Of Service</h1>

        <p>
          DApps Platform, Inc., and/or its affiliates (“we,” “our,” or “us”)
          provides its software services through its website located at
          nebulawallet.io and related mobile applications and products
          (collectively the “Services” or “Nebula Wallet”). Before using our
          Services, please read the Terms of Service (the “Terms”) carefully,
          along with any other policies or notices on our website or mobile
          applications.
        </p>
        <h2>AGREEMENT TO TERMS</h2>
        <p>
          By accessing or using any or all of the Services, you expressly
          acknowledge that
        </p>
        <ul>
          <li>you have read and understood these Terms;</li>
          <li>you agree to be bound by these Terms; and</li>
          <li>you are legally competent to enter into these Terms.</li>
        </ul>
        <p>
          If you do not agree to be bound by these Terms or any modifications to
          these Terms, you may not access or use our Services.
        </p>

        <h2> PRIVACY POLICY</h2>
        <p>
          For an explanation on how we collect, use and disclose information
          from our users please see our{" "}
          <Link to={Routes.privacy}>Privacy Policy</Link>. You acknowledge and
          agree that your use of the Services is subject to, and that we can
          collect, use and/or disclose your information (including any personal
          data you provide to us) in accordance with our Privacy Policy.
        </p>

        <h2>UPDATES TO TERMS OR SERVICES</h2>
        <p>
          We reserve the right to modify these Terms at any time at our sole
          discretion. If we do so, we’ll let you know by either posting the
          modified Terms on our website, on our mobile application or through
          other methods of communication which we deem reasonable. If you
          continue to use Nebula Wallet following any modification of the Terms
          you shall be deemed to have accepted the modified Terms. If you do not
          agree to the Terms or any modifications to the Terms, you may not
          access or use our Services. Our Services are evolving over time, we
          may change or discontinue all or any part of the Services, at any time
          and without prior notice, at our sole discretion.
        </p>
        <h2>ELIGIBILITY</h2>
        <p>
          To be eligible to use Nebula Wallet, you must be at least eighteen
          (18) years old and legally competent to enter into these Terms. If you
          are using our Services on behalf of a legal entity, you further
          represent and warrant that:
        </p>
        <ul>
          <li>
            the legal entity is duly organized and validly existing under the
            applicable laws of the jurisdiction of its organization; and
          </li>
          <li>
            you are duly authorized by such legal entity to act on its behalf.{" "}
          </li>
        </ul>
        <p>
          You can only use our Services if permitted under the laws of your
          jurisdiction. Please make sure that these Terms are in compliance with
          all laws, rules, and regulations that apply to you. By using Nebula
          Wallet, you represent and warrant that you meet all eligibility
          requirements that we outline in these Terms. We may still refuse to
          let certain people access or use Nebula Wallet, however, and we
          reserve the right to change our eligibility criteria at any time.
        </p>

        <h2>SERVICES</h2>
        <p>
          Nebula Wallet is a non-custodial wallet software for digital assets
          such as cryptocurrencies and NFTs meaning you are in control of your
          private key and accordingly you can authorize transactions from your
          wallet address. For the avoidance of doubt, we do not maintain
          accounts or hold funds on behalf of any user. Nebula Wallet allows you
          to:
        </p>
        <ul>
          <li>
            generate wallet addresses and associated private keys that you may
            use to send and receive digital assets;
          </li>
          <li>
            browse and access third party decentralized application(s)
            (“DApp(s)”) and third party decentralized exchanges (“DEX”) through
            the mobile application’s web browser;
          </li>
          <li>
            stake certain digital assets in a third party ‘proof of stake’
            network through staking services (“Staking Service”);
          </li>
          <li>
            view digital asset price information made available by third party
            service provider(s); and
          </li>
          <li>
            broadcast Digital Asset Transaction data to various blockchains
            supported by Nebula Wallet without requiring you to download or
            install the associated blockchain-based software to your local
            device.
          </li>
        </ul>
        <h3>Wallet Address, Private Key, and Backup Capabilities</h3>
        <p>
          An encrypted backup of certain information associated with your wallet
          can be stored on eligible devices. The private key is associated with
          the wallet address and, together, they can be used to authorize the
          transfer of digital assets to and from that wallet address. You are
          solely responsible for the retention and security of your private key
          and any mnemonic phrase (“Secret Phrase”) associated with your wallet.
          <br />
          You must keep your wallet address, Secret Phrase, and private key
          access information secure. Failure to do so may result in the loss of
          control of digital assets associated with your wallet. You acknowledge
          and agree that we do not receive or store your wallet password,
          encrypted private key, unencrypted private key, or Secret Phrase
          associated with your wallet. <br /> We cannot generate a new password
          for your wallet if you fail to remember your original password. If you
          have not safely stored a backup of any wallet address and private key
          pairs maintained in your wallet, you accept and acknowledge that any
          digital assets you have associated with such wallet address will
          become inaccessible. <br /> Accordingly, we shall have no
          responsibility or liability whatsoever in the event you are unable to
          access your wallet for any reason including without limitation your
          failure to keep your wallet address, Secret Phrase and private key
          information secure.
        </p>
        <h3>Use of DApps and DEX</h3>
        <p>
          If you access or use DApps or DEX, including, without limitation, DApp
          functionality embedded within the Services such as the Trade/Swap
          digital assets function, you acknowledge and agree that:{" "}
        </p>
        <ul>
          <li>
            Nebula Wallet is not responsible for your access or use of DApps or
            DEX and shall have no liability whatsoever in connection with your
            use of DApps or DEX, including, without limitation, any transactions
            you dispute;
          </li>
          <li>
            the limits of amounts that you may exchange via DEX per day shall be
            subject to any requirements of the third-party developed Smart
            Contracts;
          </li>
          <li>
            blockchain operations are irrevocable meaning when you conduct any
            transactions via DApps or DEX, you shall be solely responsible for
            the consequences of any issues associated with such transactions,
            including, without limitation, your transfer to an incorrect address
            or problems associated with the node servers selected by you;{" "}
          </li>
          <li>
            when you use DApps or DEX, third-party developed Smart Contracts may
            charge you handling fees and/or service fees and any information
            displayed on Nebula Wallet relating to such fees are for your
            reference only as Nebula Wallet cannot and does not guarantee its
            accuracy, applicability, reliability, integrity or appropriateness,
            nor shall Nebula Wallet be liable for any loss or damage that may be
            caused directly or indirectly by your use of these contents; and
          </li>
          <li>
            Nebula Wallet does not currently charge any service fees or handling
            fees for the use of DApps or DEX, however, Nebula Wallet may, in its
            discretion, charge such fees at any time in the future. Any updated
            fees will apply to any transaction that occurs following the
            effective date of the updated fees.
          </li>
        </ul>
        <h3>Buy Digital Assets with Supported Credit or Debit Cards</h3>
        <p>
          If you use Nebula Wallet to purchase digital assets with your credit
          or debit card, a third party will convert your chosen amount into the
          applicable digital asset and credit it to your wallet.
          <br />
          You acknowledge and agree that:
        </p>
        <ul>
          <li>
            Nebula Wallet is not responsible for your use of such third party
            service and shall have no liability whatsoever in connection with
            your use of such service;
          </li>
          <li>
            you will be subject to any terms and conditions imposed by the
            relevant third party service provider;
          </li>
          <li>
            Nebula Wallet has no ability to change, withdraw or cancel any
            conversion requests you place;
          </li>
          <li>
            Nebula Wallet is not responsible for any exchange rates offered by
            the relevant third party service provider(s); and
          </li>
          <li>
            Nebula Wallet is not responsible for any fees charged by the
            relevant third party service provider(s) or your bank or credit card
            issuer(s).
          </li>
        </ul>

        <h3>Digital Asset Transactions</h3>
        <p>
          In order for all proposed digital asset transactions to be completed,
          they must be confirmed and recorded in the digital asset’s associated
          public blockchain. Such networks are decentralized, peer-to-peer
          networks supported by independent third parties, which we do not own,
          control, or operate. We have no control over the blockchain networks
          and, therefore, cannot and do not ensure that any transaction details
          that you submit via our Services will be confirmed and processed.
          <br /> By using Nebula Wallet, you acknowledge and agree that:
        </p>
        <ul>
          <li>
            we do not have the ability to cancel or otherwise modify your
            transaction;
          </li>
          <li>
            the transaction details you submit may not be completed, or may be
            substantially delayed, by the applicable blockchain networks;
          </li>
          <li>we do not store, send, or receive digital assets; and</li>
          <li>
            any transfer that occurs in relation to any digital asset occurs on
            the relevant blockchain network and not on a network owned by us and
            therefore we do not guarantee the transfer of title or right in any
            digital asset.
          </li>
        </ul>

        <h3>Accuracy of Information Provided by User</h3>
        <p>
          You represent and warrant that any information you provide via the
          Services is accurate and complete. You accept and acknowledge that we
          are not responsible for any errors or omissions that you make in
          connection with any digital asset transaction initiated via the
          Services. We strongly encourage you to review your transaction details
          carefully before attempting to transfer a digital asset.
        </p>
        <h2>WALLET REGISTRATION AND SECURITY</h2>
        <p>
          You must either import or create a wallet in order to use Nebula
          Wallet. When you create a wallet, you will be assigned a private key.
          You agree to immediately notify us of any unauthorized use of your
          private key or any other breach of security of your wallet.
          Notwithstanding the foregoing, you acknowledge and agree that you
          shall assume all risks related to the use of the Services and you
          shall be solely responsible for maintaining the confidentiality and
          security of your private key. When you create a wallet, you are
          strongly advised to take precautions in order to avoid loss of access
          to and/or control over your wallet. <br />
          Suggested measures include, but are not limited to, the following:
        </p>
        <ul>
          <li>
            creating a strong unique passcode that you do not use for any other
            purpose (i.e. different to your phone passcode or any other
            passcodes you use for websites, online services, etc.) and
            leveraging biometric authentication if available;
          </li>
          <li>
            do not store the private key and Secret Phrase in plain text online
            or in an unsecured physical location;
          </li>
          <li>limiting access to your devices and your wallet; </li>
          <li>
            taking all necessary precautions against malware on your devices and
            networks; and
          </li>
          <li>
            promptly notifying us if you discover or otherwise suspect any
            security breaches related to your wallet.{" "}
          </li>
        </ul>
        <p>
          Notwithstanding anything to the contrary herein, we shall have no
          liability whatsoever in connection with activities that occur on your
          wallet with or without your authorization.
        </p>
        <h3>Push Notifications</h3>
        <p>
          You may agree to receive push notifications from Nebula Wallet that
          will alert you when blockchain networks supported by Nebula Wallet are
          congested and when transactions involving your wallet have been
          completed. If you would like to receive push notifications, you must
          opt in to the service by accessing “Settings” and enabling “Push
          Notifications”.
        </p>

        <h3>Payment and Fees</h3>
        <p>
          Fees applicable to the Services or any component of the Services, if
          any, shall be set forth at nebulawallet.io and/or the Nebula Wallet
          mobile application.
        </p>
        <h3>Transaction Fees</h3>
        <p>
          You must ensure that you have an adequate balance in your wallet
          and/or “gas” to complete transactions before initiating a transaction.
          You acknowledge and agree that we will not be liable for any failed
          transactions due to insufficient funds or gas associated with your
          wallet address.
        </p>
        <h3>Taxes</h3>
        <p>
          It is your responsibility to determine what, if any, taxes apply to
          the transactions that you have submitted transaction details for via
          the Services, and it is your responsibility to report and remit the
          correct tax to the appropriate tax authority. You agree that we are
          not responsible for determining whether taxes apply to your
          transactions or for collecting, reporting, withholding, or remitting
          any taxes arising from any digital asset-related transactions.
        </p>

        <h2>THIRD PARTY SERVICES AND CONTENT</h2>
        <p>
          In no event shall a description or reference to a third party’s
          product or service (including, but not limited to, providing a
          description or reference via hyperlink) be construed as an endorsement
          or promotion of such third party products or services by us. We retain
          the exclusive right to add to, modify, or cancel the availability of
          any Third Party Service. You may agree to receive push notifications
          from Third Party Content providers. In order to receive push
          notifications, you must opt in to the service. Push notifications will
          not be automatically enabled on your device for Third Party Content.
          We do not control, endorse, or adopt any Third Party Content shared
          through push notifications, and will have no responsibility for Third
          Party Content including, but not limited to, token availability and/or
          sales. If, to the extent permitted by Nebula Wallet, you grant express
          permission to a third party to access or connect to your Nebula Wallet
          account, either through the third party’s product or service or
          through Nebula Wallet, you acknowledge that granting permission to a
          third party to take specific actions on your behalf does not relieve
          you of any of your responsibilities under these Terms. You are fully
          responsible for all acts or omissions of any third party with access
          to your wallet.
        </p>

        <h2>INTELLECTUAL PROPERTY</h2>

        <h3>License</h3>
        <p>
          We grant you a non-exclusive, sub-licensable and non-transferable
          license to use Nebula Wallet for your personal use or internal
          business use only. Except as otherwise expressly permitted in these
          Terms, you will not:{" "}
        </p>
        <ul>
          <li>
            eproduce, modify, adapt or create derivative works of any part of
            Nebula Wallet
          </li>
          <li>
            rent, lease, distribute, sell, sublicense, transfer, or provide
            access to Nebula Wallet;
          </li>
          <li>use Nebula Wallet for the benefit of any third party;</li>
          <li>
            incorporate Nebula Wallet into a product or service you provide to a
            third party without our prior written consent;
          </li>
          <li>
            circumvent mechanisms in Nebula Wallet intended to limit your use;
          </li>
          <li>
            reverse engineer, disassemble, decompile, translate, or otherwise
            seek to obtain or derive the source code, underlying ideas,
            algorithms, file formats or non-public APIs to Nebula Wallet, except
            to the extent expressly permitted by applicable law (and then only
            upon advance notice to us);{" "}
          </li>
          <li>
            remove or obscure any proprietary or other notices contained in
            Nebula Wallet
          </li>
          <li>
            use Nebula Wallet for competitive analysis or to build competitive
            products.
          </li>
        </ul>

        <h3>Feedback</h3>
        <p>
          From time to time, you may choose to submit feedback to us. We may, in
          connection with Nebula Wallet, freely use, copy, disclose, license,
          distribute and exploit any feedback in any manner without any
          obligation, royalty or restriction based on intellectual property
          rights or otherwise. No feedback will be considered your Confidential
          Information, and nothing in this Agreement limits our right to
          independently use, develop, evaluate, or market products or services,
          whether incorporating feedback or otherwise.
        </p>

        <h3>Content</h3>
        <p>
          Nebula Wallet may contain copyrighted material and trademarks
          including, but not limited to, text and graphics (the <b>“Content”</b>
          ), which is protected by copyright law, registered and unregistered
          trademarks, and other intellectual property rights. Unless otherwise
          provided, we exclusively own the Content. Your use of Nebula Wallet
          does not grant you any right, title, or interest in the Content. You
          agree that you will not copy, transmit, distribute, sell, license,
          create derivative works from, or, in any other way, exploit any of the
          Content, in whole or in part.
        </p>

        <h3>License to NFT Content</h3>
        <p>
          You may be able to store non-fungible tokens (“NFTs”) on Nebula
          Wallet. You hereby represent and warrant that you own all legal right,
          title in and interest to, including all intellectual property rights
          to the content associated with the NFT (“<b>NFT Content</b>”), or you
          are legally authorized by the owner of the intellectual property in
          the NFT Content to store the NFTs on Nebula Wallet. You retain all
          rights to the NFT Content stored or Nebula Wallet except for rights
          expressly granted herein. <br />
          By using Nebula Wallet, you grant us a license to access, use, host,
          cache, store, copy, reproduce, transmit, display, publish, distribute,
          adapt and modify (for technical purposes, e.g., making sure content is
          viewable on smartphones as well as computers and other devices) the
          NFT Content in any and all media or distribution methods (now know or
          later developed) solely as required to be able to operate and provide
          services of Nebula Wallet. We do not monitor the NFTs and NFT Content
          stored on Nebula Wallet for any infringement of a third party’s
          intellectual property rights.
          <br />
          Accordingly, we assume no liability for any action regarding any
          content provided by you. You further acknowledge and agree it is your
          sole responsibility to carry out all necessary due diligence for all
          your activities relating to NFTs, and you represent and warrant that
          you have not and are not relying on, and shall have no remedies, in
          respect of any statement or representation made by us in relation to
          any transfer or interaction otherwise with any NFTs.
          <br />
          If you have a dispute in relation to the NFTs and/or NFT Content, YOU
          RELEASE US FROM CLAIMS, DEMANDS, AND DAMAGES OF EVERY KIND AND NATURE,
          KNOWN AND UNKNOWN, ARISING OUT OF OR IN ANY WAY CONNECTED WITH SUCH
          DISPUTES. IN ENTERING INTO THIS RELEASE YOU EXPRESSLY WAIVE ANY
          PROTECTIONS (WHETHER STATUTORY OR OTHERWISE) THAT WOULD OTHERWISE
          LIMIT THE COVERAGE OF THIS RELEASE TO INCLUDE THOSE CLAIMS WHICH YOU
          MAY KNOW OR SUSPECT TO EXIST IN YOUR FAVOR AT THE TIME OF AGREEING TO
          THIS RELEASE.
        </p>

        <h2>YOUR USE OF NEBULA WALLET</h2>
        <p>
          You agree that you will not violate any laws when using our Services.
          This includes any local, provincial, state, federal, national, or
          international laws that may apply to you. You agree that you will not
          use our Services to pay for, support, or otherwise engage in any
          illegal activities including, but not limited to, illegal or otherwise
          prohibited trade, illegal gambling, fraud, money laundering, or
          terrorist activities. For the avoidance of doubt, if we discover that
          you have violated these Terms and/or any applicable laws or regulatory
          requirements, including, but not limited to, the Bank Secrecy Act, we
          reserve all of our rights and remedies under these Terms and at law
          and will take all necessary actions against you.
          <br /> You further agree that:
        </p>
        <ul>
          <li>
            you will not encourage or induce any third party to engage in any of
            the activities prohibited under this Section;
          </li>
          <li>
            you will not impersonate someone or use or attempt to use another
            user’s wallet without authorization or use our Services in any
            manner that could interfere, disrupt, negatively affect, or inhibit
            other users from fully enjoying it
          </li>
          <li>
            you will not distribute any virus or other harmful computer code
            through Nebula Wallet;
          </li>
          <li>
            you will not take any action that may impose an unreasonable or
            disproportionately large load on our or any of our third party
            providers’ infrastructure;
          </li>
          <li>
            you will not reverse engineer or bypass, circumvent, or attempt to
            bypass or circumvent any measures that we may use to prevent or
            restrict access to the Services including, without limitation, other
            accounts, computer systems, or networks connected to the Services;
            and
          </li>
          <li>
            you will not violate, misappropriate or infringe the rights of
            Nebula Wallet, our users, or others, including privacy, publicity,
            intellectual property, or other proprietary rights.{" "}
          </li>
        </ul>
        <p>
          Although we have no obligation to monitor any user content, we have
          absolute discretion to take any necessary actions any time and for any
          reason without notice in the event you breach these Terms. Any use of
          Nebula Wallet other than as specifically authorized in these Terms,
          without our prior written permission, is strictly prohibited and we
          shall have the right to terminate your license to use Nebula Wallet
          immediately without notice. You acknowledge and accept that by using
          the Services, you may be exposed to content that is offensive,
          indecent, or objectionable. We take no responsibility and assume no
          liability for any user content, including any loss or damage to any of
          your user content.
        </p>

        <h2>LIMITATION OF LIABILITY & DISCLAIMER OF WARRANTIES</h2>
        <p>
          You acknowledge and agree that we have no control over, and no duty to
          take any action regarding:
        </p>
        <ul>
          <li>
            failures, disruptions, errors, or delays in the processing of
            digital assets that you may experience while using the Services;
          </li>
          <li>
            the risk of failure of hardware, software, and Internet connections;{" "}
          </li>
          <li>
            the risk of malicious software being introduced or found in the
            software underlying Nebula Wallet;
          </li>
          <li>
            the risk that third parties may obtain unauthorized access to
            information stored within your wallet, including, but not limited to
            your wallet address, private key, and Secret Phrase; and
          </li>
          <li>
            the risk of unknown vulnerabilities in or unanticipated changes to
            the the applicable blockchain networks. You release us from all
            liability related to any losses, damages, or claims arising from:
            <ul>
              <li>
                user error such as forgotten passwords, incorrectly constructed
                transactions, or mistyped Digital Asset addresses;
              </li>
              <li>server failure or data loss;</li>
              <li>unauthorized access to the Nebula Wallet application;</li>
              <li>bugs or other errors in the Nebula Wallet software; and</li>
              <li>
                any unauthorized third party activities, including, but not
                limited to, the use of viruses, phishing, brute forcing, or
                other means of attack against Nebula Wallet.{" "}
              </li>
              <li></li>
            </ul>
          </li>
        </ul>
        <p>
          We make no representations concerning any Third Party Content
          contained in or accessed through our Services. Any other terms,
          conditions, warranties, or representations associated with such
          content, are solely between you and such organizations and/or
          individuals.
        </p>

        <h3>Limitation of Liability</h3>
        <p>
          TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL
          WE, OR OUR AFFILIATES, OR ANY OF OUR RESPECTIVE SHAREHOLDERS, MEMBERS,
          DIRECTORS, OFFICERS, EMPLOYEES, ATTORNEYS, AGENTS, REPRESENTATIVES,
          SUPPLIERS OR CONTRACTORS BE LIABLE FOR ANY DIRECT DAMAGES OR
          INCIDENTAL, INDIRECT, SPECIAL, PUNITIVE, CONSEQUENTIAL OR SIMILAR
          DAMAGES OR LIABILITIES WHATSOEVER (INCLUDING, WITHOUT LIMITATION,
          DAMAGES FOR LOSS OF DATA, INFORMATION, REVENUE, PROFITS OR OTHER
          BUSINESSES OR FINANCIAL BENEFITS) WHETHER UNDER CONTRACT, STATUTE,
          STRICT LIABILITY OR OTHER THEORY EVEN IF WE HAVE BEEN ADVISED OF THE
          POSSIBILITY OF SUCH DAMAGES, ARISING OUT OF YOUR ACCESS OR USE OF THE
          SERVICES, INCLUDING, BUT NOT LIMITED TO, ANY UNAUTHORIZED USE OF YOUR
          WALLET ADDRESS AND/OR PRIVATE KEY DUE TO YOUR FAILURE TO MAINTAIN THE
          CONFIDENTIALITY OF YOUR WALLET, ANY INTERRUPTION OR CESSATION OF
          TRANSMISSION TO OR FROM THE SERVICES OR ANY BUGS, VIRUSES, TROJAN
          HORSES, OR THE LIKE THAT ARE FOUND IN THE NEBULA WALLET SOFTWARE OR
          THAT MAY BE TRANSMITTED TO OR THROUGH OUR SERVICES BY ANY THIRD PARTY
          (REGARDLESS OF THE SOURCE OF ORIGINATION) SOME JURISDICTIONS DO NOT
          ALLOW THE EXCLUSION OR LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR
          INCIDENTAL DAMAGES, SO THE ABOVE LIMITATION MAY NOT APPLY TO YOU. IN
          NO EVENT SHALL OUR LIABILITY TO YOU FOR ALL DAMAGES (OTHER THAN MAY BE
          REQUIRED BY APPLICABLE LAW IN CASES INVOLVING PERSONAL INJURY) EXCEED
          THE AMOUNT OF ONE HUNDRED U.S. DOLLARS ($USD100.00) OR ITS EQUIVALENT
          IN THE LOCAL CURRENCY OF THE APPLICABLE JURISDICTION.
        </p>

        <h3>Warranty Disclaimer</h3>
        <p>
          NEBULA WALLET IS PROVIDED "AS IS" AND WITHOUT WARRANTY OF ANY KIND. TO
          THE MAXIMUM EXTENT PERMITTED BY LAW, WE DISCLAIM ALL REPRESENTATIONS
          AND WARRANTIES, EXPRESS OR IMPLIED, RELATING TO THE SERVICES AND
          UNDERLYING SOFTWARE OR ANY CONTENT ON THE SERVICES, WHETHER PROVIDED
          OR OWNED BY US OR BY ANY THIRD PARTY, INCLUDING WITHOUT LIMITATION,
          WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
          TITLE, NON-INFRINGEMENT, FREEDOM FROM COMPUTER VIRUS, AND ANY IMPLIED
          WARRANTIES ARISING FROM COURSE OF DEALING, COURSE OF PERFORMANCE, OR
          USAGE IN TRADE, ALL OF WHICH ARE EXPRESSLY DISCLAIMED. IN ADDITION, WE
          DO NOT REPRESENT OR WARRANT THAT THE CONTENT ACCESSIBLE VIA THE
          SERVICES IS ACCURATE, COMPLETE, AVAILABLE, CURRENT, FREE OF VIRUSES OR
          OTHER HARMFUL COMPONENTS, OR THAT THE RESULTS OF USING THE SERVICES
          WILL MEET YOUR REQUIREMENTS. SOME STATES DO NOT ALLOW THE DISCLAIMER
          OF IMPLIED WARRANTIES, SO THE FOREGOING DISCLAIMERS MAY NOT APPLY TO
          YOU.
        </p>

        <h2>INDEMNITY</h2>
        <p>
          To the extent permitted by applicable law, you agree to defend,
          indemnify, and hold harmless us, our affiliates, and our respective
          shareholders, members, directors, officers, employees, attorneys,
          agents, representatives, suppliers and contractors, from and against
          any and all claims, damages, obligations, losses, liabilities, costs
          or debt, and expenses (including, but not limited to, attorney’s fees)
          arising from:{" "}
        </p>
        <ul>
          <li>your use of and access to the Services;</li>
          <li>
            any feedback or submissions you provide to us concerning Nebula
            Wallet;{" "}
          </li>
          <li>violation of any Third Party Content</li>
          <li>your violation of the Terms; or</li>
          <li>
            your violation of any law, rule, or regulation, or the rights of any
            third party.
          </li>
        </ul>

        <h2>TIME LIMITATION ON CLAIMS</h2>
        <p>
          You agree that any claim you may have arising out of or related to
          your relationship with us must be filed within one year after such
          claim arises, otherwise, your claim is permanently barred.
        </p>

        <h2>GOVERNING LAW</h2>
        <p>
          No matter where you’re located, the laws of the State of California
          will govern these Terms and the parties’ relationship as if you signed
          these Terms in California, without regard to California’s conflicts of
          laws rules. If any provisions of these Terms are inconsistent with any
          applicable law, those provisions will be superseded or modified only
          to the extent such provisions are inconsistent. The parties agree to
          submit to the federal or state courts in California for exclusive
          jurisdiction of any dispute arising out of or related to your use of
          the Services or your breach of these Terms. You waive any objection
          based on lack of personal jurisdiction, place of residence, improper
          venue, or forum non conveniens in any such action.
        </p>

        <h2>NOTE TO INTERNATIONAL USERS</h2>
        <p>
          If you are a user accessing or using our Services from a region with
          laws or regulations governing personal data collection, use, and
          disclosure that differ from United States laws, please be advised that
          we do not collect or process your personal data, except as provided
          for in our Privacy Policy.
        </p>

        <h2>TERMINATION</h2>
        <p>
          In the event of termination concerning your license to use Nebula
          Wallet, your obligations under this Agreement will still continue.
          Your access to the funds in your Wallet after termination will depend
          on your access to your backup of your Wallet address and private key.
        </p>

        <h2>DISCONTINUANCE OF SERVICES</h2>
        <p>
          We may, in our sole discretion and without cost to you, with or
          without prior notice, and at any time, modify or discontinue,
          temporarily or permanently, any portion of our Services. You are
          solely responsible for storing outside of the Services a backup of any
          wallet address and private key pair that you maintain in your wallet.
          Maintaining an external backup of any wallet address and private key
          pairs associated with your wallet will allow you to access the
          blockchain network upon which your wallet is secured. Such a backup
          will allow you to fully restore your wallet at any time without cost
          or loss of your digital assets. If you do not maintain a backup of
          your wallet data outside of the Services, you will not be able to
          access the digital assets associated with your wallet. Nebula Wallet
          shall not be held responsible or liable for any loss of digital assets
          in the event that we discontinue all or any part of the Services.
        </p>

        <h2>NO WAIVER</h2>
        <p>
          Our failure to exercise or delay in exercising any right, power, or
          privilege under this Agreement shall not operate as a waiver; nor
          shall any single or partial exercise of any right, power, or privilege
          preclude any other or further exercise thereof. The waiver of any such
          right or provision will be effective only if in writing and signed by
          a duly authorized representative of us. Except as expressly set forth
          in this Agreement, the exercise by either party of any of its remedies
          under this Agreement will be without prejudice to its other remedies
          under this Agreement or otherwise.
        </p>

        <h2>SEVERABILITY</h2>
        <p>
          If it turns out that any part of this Agreement is invalid, void, or
          for any reason unenforceable, that term will be deemed severable and
          limited or eliminated to the minimum extent necessary. The limitation
          or elimination of the term will not affect any other terms.
        </p>

        <h2>ARBITRATION & WAIVER OF CLASS ACTION</h2>
        <p>
          The parties agree to arbitrate any dispute arising from this Agreement
          or your use of the Services on an individual basis. ARBITRATION
          PREVENTS YOU FROM SUING IN COURT OR FROM HAVING A JURY TRIAL. THE
          PARTIES HEREBY EXPRESSLY WAIVE TRIAL BY JURY. The parties agree that:
          (a) any arbitration will occur in San Francisco, California; and (b)
          the arbitration will be conducted confidentially by a single
          arbitrator in accordance with the rules of American Arbitration
          Association for arbitration of consumer-related disputes, in the
          English language, and with limited discovery. At your request,
          hearings may be conducted in person or by telephone and the arbitrator
          may provide for submitting and determining motions on briefs, without
          oral hearings. Other than class procedures and remedies discussed
          below, the arbitrator has the authority to grant any remedy that would
          otherwise be available to a court or other tribunal. THE PREVAILING
          PARTY IN ANY ACTION OR PROCEEDING TO ENFORCE THESE TERMS SHALL BE
          ENTITLED TO COSTS AND ATTORNEYS' FEES. THE ARBITRAL DECISION MAY BE
          ENFORCED IN ANY COURT. WHETHER THE DISPUTE IS HEARD IN ARBITRATION OR
          IN COURT, YOU AND NEBULA WALLET WILL NOT COMMENCE AGAINST THE OTHER A
          CLASS ACTION, CLASS ARBITRATION, OR REPRESENTATIVE ACTION OR
          PROCEEDING.
        </p>

        <h2>FORCE MAJEURE</h2>
        <p>
          We shall not be held liable for any delays, failure in performance, or
          interruptions of service which result directly or indirectly from any
          cause or condition beyond our reasonable control, including but not
          limited to: any delay or failure due to any act of God, act of civil
          or military authorities, act of terrorism, civil disturbance, war,
          strike or other labor dispute, fire, interruption in
          telecommunications or Internet services or network provider services,
          failure of equipment and/or software, other catastrophe, or any other
          occurrence which is beyond our reasonable control and shall not affect
          the validity and enforceability of any remaining provisions.
        </p>

        <h2>ASSIGNMENT</h2>
        <p>
          You agree that we may assign any of our rights and/or transfer,
          sub-contract, or delegate any of our obligations under these Terms.
          These Terms will bind and inure to the benefit of the parties, their
          successors and permitted assigns.Your agreement to these Terms is
          personal to you and you may not transfer or assign it to any third
          party.
        </p>

        <h2>ENTIRE AGREEMENT</h2>
        <p>
          This Agreement sets forth the entire understanding and agreement as to
          the subject matter hereof and supersedes any and all prior
          discussions, agreements, and understandings of any kind (including,
          without limitation, any prior versions of the Terms) and every nature
          between us. Except as provided for above, any modification to these
          Terms must be in writing and must be signed by both parties.
        </p>

        <h2>YOUR USE OF NEBULA WALLET</h2>
        <p>
          Any notices or other communications provided by us under these Terms,
          including those regarding modifications to it will be given by posting
          to the Services and/or through other electronic communication. You
          agree and consent to receive electronically all communications,
          agreements, documents, notices and disclosures that we provide in
          connection with your account and your use of the Services.
        </p>

        <h2>QUESTIONS OR COMMENTS</h2>
        <p>
          We welcome comments, questions, concerns, or suggestions. Please send
          us a message on our contact page at 
          <a
            href="mailto:hello@nebulawallet.io"
            target={"_blank"}
            rel="noreferrer"
          >
            hello@nebulawallet.io.
          </a>
          .
        </p>
      </div>
    </>
  );
};

export { TermsUI };
