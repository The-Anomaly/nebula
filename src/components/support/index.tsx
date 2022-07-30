import { Contact } from "components/generalComponents";
import * as React from "react";
import { Faq, FAQType } from "./faq";
import { HeroSection } from "./hero";
import styles from "./styles.module.css";

const SupportUI = () => {
  const faqs: FAQType[] = [
    {
      category: "gettingStarted",
      faqs: [
        {
          question: "What's Nebula Wallet?",
          answer: (
            <>
              Nebula Wallet is an NFT focused wallet. It is the first
              multi-chain, cross-chain NFT wallet of its kind. It is set to be
              the best and most compatible wallet to view, store, receive and
              send NFTs (Non-Fungible Tokens) and Fungible tokens
              (cryptocurrency).
              <br />
              It's safe, functional and incredibly easy to use.
            </>
          ),
        },
        {
          question: "How do I install Nebula?",
          answer: (
            <>
              Nebula is available for download on App Store(iOS users) and Play
              Store(Android users).
              <br />
              All you need to do is;
              <ol>
                <li>Go to one of the stores</li>
                <li>
                  Search for Nebula Wallet, and download and install the app.
                </li>
                <li>Or you can scan the QR code below.</li>
              </ol>
            </>
          ),
        },
        {
          question: "What is my Nebula address? How to get mine?",
          answer: (
            <>
              Your Nebula (neb) address is your unique ID that allows other
              Nebula users to send you tokens/clusters easily. <br />
              You get your Neb when you sign up.
            </>
          ),
        },
        {
          question: "What is a cluster?",
          answer: (
            <>
              A cluster is a group of NFTs curated from a user's portfolio.
              <br />
              Each cluster can contain different types of NFTs from multiple
              networks.
              <br />
              Your clusters can be named and have descriptions. You can also
              share your cluster via links or send them to another wallet
              address.
            </>
          ),
        },
        {
          question: "What is a seed phrase?",
          answer: (
            <>
              A seed phrase is a group of words(mnemonic phrase) that enables
              access to a crypto or NFT wallet. <br />
              It’s also known as recovery phrase or back up phrase. <br />
              This is different from a private key; a private key is an access
              key to just one address (account), while seed phrase is an access
              key to the whole wallet, which can hold multiple addresses.
            </>
          ),
        },
        {
          question: "What tokens & networks does Nebula support?",
          answer: (
            <>
              <b>Networks:</b> Ethereum, Solana, Binance smart chain
              <br />
              <b>Tokens:</b> ETH and any ETH based token(ERC20, ERC721, ERC1155
              standard tokens) SPL Tokens and EVM compatible tokens. EthTH, BSC,
              Sol, USDC, DAI
            </>
          ),
        },
      ],
    },
    {
      category: "sending",
      faqs: [
        {
          question: "How do I send and receive NFTs?",
          answer: (
            <>
              To send an NFT;
              <ol>
                <li>You need to select the NFT(s) you want to send. </li>
                <li>Click on the send button. </li>
                <li>
                  Then paste the address of the receiver into the input field.{" "}
                </li>
                <li>Finally, you click on send and sign the transaction.</li>
              </ol>
              <br />
              To receive an NFT, all you have to do is send your correct wallet
              address to the person sending you the NFT(s)
            </>
          ),
        },
        {
          question: "How do I send and receive tokens?",
          answer: (
            <>
              To send tokens;
              <ol>
                <li>You need to select the token you want to send.</li>
                <li>Click on the send button. </li>
                <li>
                  Then paste the address of the receiver into the input field.{" "}
                </li>
                <li>Finally, you click on send and sign the transaction.</li>
              </ol>
              <br />
              To receive tokens, all you have to do is send your correct wallet
              address to the person sending you the token(s)
            </>
          ),
        },
        {
          question: "I sent NFTs to the wrong address.",
          answer: (
            <>
              Okay, so, if you typed in the wrong address, or you sent your NFTs
              to a contract address instead of a wallet address. There are some
              things that can be done.
              <br />
              <ol>
                <li>
                  Check your transaction history on Etherscan if you're at all
                  unsure of where you sent it, or where the NFT(s) ended up. If
                  you know the person you sent it to, you could reach out to
                  them and ask if they would be willing to send it back to you.
                </li>
                <li>
                  If you realize it in time, while the transaction is still
                  pending, you can cancel the transaction. This would only work
                  if you're reading this while the transaction is processing, if
                  not. It’s too late.
                </li>
              </ol>
            </>
          ),
        },
        {
          question: "Is there a commission charge for using Nebula Wallet?",
          answer:
            "There are no commission charges for using Nebula Wallet. But you will pay a small transaction fee for swaps.",
        },
        {
          question:
            "What happens if I use the wrong wallet address to send and receive crypto?",
          answer: `We're not able to recover any crypto sent or received to an incorrect address. 
          This is because Nebula Wallet gives you complete custodian control over your digital assets. We strongly suggest that you double check addresses before sending or receiving crypto through your wallet.
          `,
        },
      ],
    },
    {
      category: "security",
      faqs: [
        {
          question: "Dapp permissions and token approvals",
          answer: (
            <>
              When you interact with a Dapp, there are two types of permissions
              you are granting:
              <ol>
                <li>
                  You grant the Dapp permission to access your wallet when you
                  initially connect your wallet. In this instance, you are
                  allowing the Dapp to access your public key and see your
                  wallet balances and activity.
                </li>
                <li>
                  You approve your tokens to be used in order to complete a buy
                  or trade. This step is referred to as “token approval” (or
                  “token allowance”) because you are allowing the Dapp to
                  directly interact with your tokens and complete a transaction.
                  You usually only have to complete a token approval once.
                </li>
              </ol>
            </>
          ),
        },
        {
          question: "What should I do to keep my wallet safe?",
          answer: (
            <>
              <ol>
                <li>
                  Never share your seed phrase with anyone, including bots.
                </li>
                <li>Save your password or seed phrase offline.</li>
                <li>
                  Use two-factor authentication, an extra layer of security.
                </li>
                <li>
                  Use strong and unique passwords—it's wise to use a different
                  password every time you create an account.
                </li>
                <li>Never connect your wallet to sketchy sites.</li>
              </ol>
            </>
          ),
        },
        {
          question: "What if I forget my wallet password?",
          answer:
            "If you can’t remember your password, restore your account using your Secret Recovery Phrase and create a new password.",
        },
        {
          question: "What happens if I lose my seed phrase?",
          answer: `If you lose your seed phrase (recovery phrase), you will lose access to Nebula Wallet.
          Please make sure to write down your seed phrase and keep it in a safe place. Do not hide it so well that you actually lose it.
          `,
        },
      ],
    },
    {
      category: "other",
      faqs: [
        {
          question: "What is cross-chain and multi-chain?",
          answer: (
            <>
              Multichain technology allows projects to exist on two or more
              blockchains at the same time.
              <br />
              Cross-chain technology is literally a bridge that connects and
              transports data between blockchain networks. It facilitates the
              connection between different blockchain networks and enables the
              exchange of data/information between blockchains.
            </>
          ),
        },
        {
          question: "How do I swap tokens on Nebula?",
          answer:
            "All you have to do is click the swap button on the app. Below are some images to help you out.",
        },
        {
          question: "Why did my swap fail?",
          answer: `
          It is possible that the swap resolver could not authenticate your transaction.
However, asides gas you would not lose any of your assets if your swap fails.
`,
        },
        {
          question: "Troubleshooting and tips",
          answer: (
            <>
              If you’re having issues with the Nebula wallet app:
              <ul>
                <li>Force quit the app and restart it.</li>
              </ul>
              <br />
              If you’re having issues viewing an NFT sent from an unsupported
              blockchain or in a different format:
              <ol>
                <li>
                  You'll have to import your Nebula Wallet to another
                  non-custodial wallet you trust that supports the NFT, in order
                  to access it.
                </li>
                <li>
                  Follow the steps provided by the other wallet provider to
                  import your Nebula Wallet. If you need more help, reach out to
                  their support team for additional support.
                </li>
              </ol>
              <br />
              <b>Note</b> that you’ll need your seed phrase (recovery phrase) to
              successfully import your Nebula Wallet to another wallet.
            </>
          ),
        },
        {
          question: "How do I switch networks?",
          answer:
            "During a transaction, like a swap, you can pick a network to initiate the from part and the corresponding receiver. From ETH to SOL etc",
        },
        {
          question: "How to avoid NFT and crypto scams",
          answer: (
            <>
              The most important rule to avoid any type of scam is to do your
              own research(DYOR), always.
              <br /> Here a few tips to help you avoid NFT scams:
              <ol>
                <li>Never click on links that you can't verify.</li>
                <li>
                  Go to the official collection's Twitter or Discord first to
                  make sure you're minting the verified link.
                </li>
                <li>
                  Check the domain link again — a fake website can often be
                  identified by a single difference in character.
                </li>
                <li>
                  Don’t interact with any new NFTs until you've verified their
                  origin.
                </li>
                <li>
                  Always double check Twitter handles and who's following the
                  account.
                </li>
                <li>
                  A large number of followers does not guarantee that an account
                  is real. If the account is fake, please report it.
                </li>
                <li>
                  A large number of followers does not guarantee that an account
                  is real. If the account is fake, please report it.
                </li>
                <li>
                  Scammers send fake OpenSea offers to emails. When you click
                  the view button it takes you to a page asking for your wallet
                  information and seed phrase. Never send/share your seed
                  phrase(recovery phrase) with anyone, including bots
                </li>
              </ol>
              <br />
              Here a few tips to help you avoid crypto scams:
              <ol>
                <li>When there are promises of guaranteed returns.</li>
                <li>Unnamed team members.</li>
                <li>
                  Excessive marketing: Do more research if the promotion for a
                  crypto product/service is intense or makes grand claims
                  without backing them up.
                </li>
                <li>
                  Whether in cash or cryptocurrency, any investment opportunity
                  promising free money is likely to be fake.
                </li>
                <li>A poor or non-existent whitepaper.</li>
              </ol>
            </>
          ),
        },
      ],
    },
  ];
  return (
    <>
      <HeroSection />
      <Faq faqs={faqs} />
      <Contact title={"Still got questions?"} />
    </>
  );
};

export { SupportUI };
