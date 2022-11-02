(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{304:function(e,t,a){"use strict";a.r(t);var n=a(10),o=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"coinjoin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#coinjoin"}},[e._v("#")]),e._v(" Coinjoin")]),e._v(" "),t("p",[e._v("A "),t("a",{attrs:{href:"https://en.bitcoin.it/Privacy#CoinJoin",target:"_blank",rel:"noopener noreferrer"}},[e._v("coinjoin"),t("OutboundLink")],1),e._v(" is a special Bitcoin transaction where several peers get together to literally join their coins in a single transaction.\nThey collaboratively build a transaction where each of them provides some coins as inputs, and fresh addresses as outputs.\nThe concept has been around since the early days of Bitcoin, and it was formalized by the great Greg Maxwell in "),t("a",{attrs:{href:"https://bitcointalk.org/index.php?topic=279249.msg2983902",target:"_blank",rel:"noopener noreferrer"}},[e._v("this awesome introductory thread"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v('The goal is to gain privacy by breaking the link of which input "pays" which output so that none of the outputs can be attributed to the owner of the input.\nWabiSabi enables centrally coordinated coinjoins with variable amounts in a trustless (meaning nobody can steal) and private (meaning even the coordinator cannot spy) manner, as described in the '),t("a",{attrs:{href:"https://eprint.iacr.org/2021/206",target:"_blank",rel:"noopener noreferrer"}},[e._v("WabiSabi paper"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#coinjoin-step-by-step"}},[e._v("Coinjoin step-by-step")]),t("ul",[t("li",[t("a",{attrs:{href:"#more-details"}},[e._v("More details")])]),t("li",[t("a",{attrs:{href:"#fees"}},[e._v("Fees")])])])]),t("li",[t("a",{attrs:{href:"#wabisabi-protocol-step-by-step"}},[e._v("WabiSabi protocol step-by-step")]),t("ul",[t("li",[t("a",{attrs:{href:"#input-registration"}},[e._v("Input registration")])]),t("li",[t("a",{attrs:{href:"#connection-confirmation"}},[e._v("Connection confirmation")])]),t("li",[t("a",{attrs:{href:"#output-registration"}},[e._v("Output registration")])]),t("li",[t("a",{attrs:{href:"#signing"}},[e._v("Signing")])]),t("li",[t("a",{attrs:{href:"#broadcasting"}},[e._v("Broadcasting")])])])]),t("li",[t("a",{attrs:{href:"#wasabi-coinjoin-examples"}},[e._v("Wasabi coinjoin examples")])])])]),t("p"),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"coinjoin-step-by-step"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#coinjoin-step-by-step"}},[e._v("#")]),e._v(" Coinjoin step-by-step")]),e._v(" "),t("ol",[t("li",[e._v("Launch Wasabi and open your wallet.")]),e._v(" "),t("li",[e._v("Wait.")]),e._v(" "),t("li",[e._v("You're done! Wasabi coinjoins automatically in the background. You can make private payments now.")])]),e._v(" "),t("h3",{attrs:{id:"more-details"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#more-details"}},[e._v("#")]),e._v(" More details")]),e._v(" "),t("p",[e._v("At first wallet load, you can choose one of the coinjoin strategy profiles:")]),e._v(" "),t("p",[t("img",{attrs:{src:"CoinjoinStrategy.png",alt:"Coinjoin Strategy"}})]),e._v(" "),t("p",[e._v("By default, Wasabi starts automatically coinjoining received funds when the total value of the non-private coins is equal to or above the "),t("code",[e._v("Auto-start coinjoin threshold")]),e._v(" (0.01 BTC by default).\n"),t("code",[e._v("Automatically start coinjoin")]),e._v(" can be disabled from the coinjoin settings.\nIn case you want to start the process manually, then click the play button; if you want to stop coinjoin, then click the pause button.")]),e._v(" "),t("p",[e._v('Once a coin achieves enough privacy, the corresponding amount will show up in the software\'s main view as "PRIVATE".')]),e._v(" "),t("p",[e._v('Notice that it is not yet possible to coinjoin from a hardware wallet, the keys must be "hot" on your computer.')]),e._v(" "),t("h3",{attrs:{id:"fees"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fees"}},[e._v("#")]),e._v(" Fees")]),e._v(" "),t("p",[e._v("A 0.3% coordinator fee will be taken from fresh coins bigger than 0.01 BTC.\nSmaller ones don't pay coordinator fee at all, according to the "),t("em",[e._v("PlebsDontPay")]),e._v(" threshold.")]),e._v(" "),t("p",[e._v("The round starts either as soon as the number of registered inputs reaches the maximum, or after the input registration time is reached and as long as the minimum number of inputs is satisfied.\nJust leave Wasabi running in the background of your computer, as coinjoining takes time.")]),e._v(" "),t("p",[e._v("Remixing is free, as well as coinjoining coins 1 hop from coinjoin, although, Bitcoin network fees still do apply.\nSo if you send a coinjoined coin and receive a change output, Wasabi will not charge you the coordinator fee for this change output again.\nThe recipient of the payment will not have to pay the coordinator fee, as long as he is making coinjoins with the same coordinator.")]),e._v(" "),t("h2",{attrs:{id:"wabisabi-protocol-step-by-step"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#wabisabi-protocol-step-by-step"}},[e._v("#")]),e._v(" WabiSabi protocol step-by-step")]),e._v(" "),t("p",[e._v("WabiSabi protocol requires 5 steps to successfully create and broadcast a coinjoin transaction to the bitcoin network.")]),e._v(" "),t("h3",{attrs:{id:"input-registration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#input-registration"}},[e._v("#")]),e._v(" Input registration")]),e._v(" "),t("p",[e._v("During the "),t("RouterLink",{attrs:{to:"/FAQ/FAQ-UseWasabi.html#what-is-happening-in-the-input-registration-phase"}},[e._v("input registration")]),e._v(", the client selects how many and which coins will be registered for coinjoin.\nThese coins need to be confirmed on the Bitcoin blockchain.\nIn the background Wasabi generates input proofs, which are signatures over challenge messages, made with the private keys that lock up the coins.\nWith this, the coordinator can verify that you actually own these coins.")],1),e._v(" "),t("p",[e._v("Wasabi wallet generates a new "),t("a",{attrs:{href:"https://tb-manual.torproject.org/managing-identities/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tor identity"),t("OutboundLink")],1),e._v(" called "),t("strong",[e._v("Alice")]),e._v(" for each input.\nShe is a separate entity, and for every round you use a new Alice who is not linked to any other input or previous connection.\nWith Alice, you send the input ownership proof to the coordinator.")]),e._v(" "),t("p",[e._v("The Wasabi coordinator now verifies that:")]),e._v(" "),t("ul",[t("li",[e._v("There is still room for more inputs on this coinjoin.")]),e._v(" "),t("li",[e._v("The input has not already been registered, is not banned, is unspent, and that the input proof is valid.")]),e._v(" "),t("li",[e._v("The input has at least 5000 sats value.")])]),e._v(" "),t("p",[e._v("Only when all these checks are passed, does the coordinator allow this input to be registered.\nThe coordinator creates and sends a credential back to Alice, which has the same amount as the input minus fees.")]),e._v(" "),t("p",[e._v("The input registration phase ends when either: the number of registered inputs reaches the maximum, or when the time elapsed and the minimum number of inputs is satisfied.")]),e._v(" "),t("h3",{attrs:{id:"connection-confirmation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#connection-confirmation"}},[e._v("#")]),e._v(" Connection confirmation")]),e._v(" "),t("p",[e._v("There are many users registering their inputs (with different Alice for each input) in the first phase, and this takes a while.\nThe connection confirmation phase makes sure that all of them are still online and ready to continue.\nThe coordinator verifies the unique ID from each Alice, and if everyone is still communicating.\nThe coordinator sends a zero value credential to each Alice for each successful connection confirmation.")]),e._v(" "),t("p",[e._v("The round is abandoned and re-started if too many Alices have dropped, for example when their Wasabi is shut down, or when their Tor connection is temporarily broken.\nThe connection confirmation phase ends when all Alices have provided their unique IDs, or after a timeout and the number of online Alices is still larger than the minimum number of inputs.")]),e._v(" "),t("h3",{attrs:{id:"output-registration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#output-registration"}},[e._v("#")]),e._v(" Output registration")]),e._v(" "),t("p",[e._v("Now that all peers are online, we are ready to proceed with the "),t("RouterLink",{attrs:{to:"/FAQ/FAQ-UseWasabi.html#what-is-happening-in-the-output-registration-phase"}},[e._v("output registration phase")]),e._v(" of the round.")],1),e._v(" "),t("p",[e._v("First, every client needs to change the value of their credentials to the desired output values.\nFor this, the client presents to the coordinator two old credentials, and two newly created ones.\nThe coordinator does not know the amount value of any of those credentials, but it can verify, that the two pairs sum up to exactly the same value.\nFor example, a user can present one 5 btc and one 0 btc credential, and redeem one 2 btc and one 3 btc credential.\nOr a user can present one 4 btc and one 1 btc credential, and redeem one 5 btc and one 0 btc credential.\nAfter potentially many rounds of reissuance, each client has exactly the amount credential it desires.\nEach of these reissuance is perfectly private, so the coordinator cannot link any of them to the same user.")]),e._v(" "),t("p",[e._v("Next, your Wasabi client generates multiple new Tor identities called "),t("strong",[e._v("Bob")]),e._v(", which are in no way tied to any Alice.\nBob sends to the Wasabi coordinator:")]),e._v(" "),t("ul",[t("li",[e._v("An unblinded credential signed by the coordinator")]),e._v(" "),t("li",[e._v("A new unused bitcoin address")])]),e._v(" "),t("p",[e._v("Because the coordinator can verify its own credential, it knows that this credential came into existence after an input of at least this much value was registered.\nHowever, it cannot know which input exactly.")]),e._v(" "),t("p",[e._v("It is very important that the coordinator cannot link Alice to Bob.\nBecause Alice has sent the cleartext input, and Bob sends the cleartext output.\nSo, if the two were to be linked, then the coordinator can specifically link the input to the output, meaning that the anonymity set is 1.\nBecause Alice received a credential from the coordinator, and because Bob is a new Tor identity not linked to Alice, the coordinator can verify that nobody is cheating, but it cannot deanonymize the peers.")]),e._v(" "),t("p",[e._v("The output registration phase ends when the value of cleartext outputs is equal to the value of inputs, meaning that all Bobs have registered.\nIf after a timeout not all outputs are registered, then this round is abandoned, the missing inputs are temporarily banned, and a new round is started.")]),e._v(" "),t("h3",{attrs:{id:"signing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#signing"}},[e._v("#")]),e._v(" Signing")]),e._v(" "),t("p",[e._v("Now that all inputs and outputs are registered, the coordinator can start the "),t("RouterLink",{attrs:{to:"/FAQ/FAQ-UseWasabi.html#what-is-happening-in-the-signing-phase"}},[e._v("signing phase")]),e._v(", by building the coinjoin transaction with all the registered inputs and outputs.\nIt sends this transaction to all the Alices of the round.")],1),e._v(" "),t("p",[e._v("Each Alice does the following:")]),e._v(" "),t("ul",[t("li",[e._v("Verifies that her input and output are included.")]),e._v(" "),t("li",[e._v("Signs the transaction with the private key of her input.")]),e._v(" "),t("li",[e._v("Sends the signature to the coordinator, who verifies this information.")])]),e._v(" "),t("p",[e._v("The signing phase ends when the coordinator has received all the valid signatures for all the registered inputs.")]),e._v(" "),t("h3",{attrs:{id:"broadcasting"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#broadcasting"}},[e._v("#")]),e._v(" Broadcasting")]),e._v(" "),t("p",[e._v("The coinjoin transaction has been successfully built and signed, and it is now ready to be "),t("RouterLink",{attrs:{to:"/FAQ/FAQ-UseWasabi.html#what-is-happening-in-the-broadcasting-phase"}},[e._v("broadcast")]),e._v(" to the peers of the Bitcoin network.\nThe coordinator sends this transaction over the Tor network to random Bitcoin P2P nodes, and from there it is gossiped to other nodes and miners.\nTo save on mining fees, the target confirmation time is roughly 24 hours.")],1),e._v(" "),t("h2",{attrs:{id:"wasabi-coinjoin-examples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#wasabi-coinjoin-examples"}},[e._v("#")]),e._v(" Wasabi coinjoin examples")]),e._v(" "),t("p",[e._v("Here's a list of Wasabi coinjoin examples and how they appear on a block explorer:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://mempool.space/tx/198aee6e1b2cad9b7c3e4cd12962980fbaab0b20c07016031d0c2416b3ef9b70",target:"_blank",rel:"noopener noreferrer"}},[e._v("198aee6e1b2cad9b7c3e4cd12962980fbaab0b20c07016031d0c2416b3ef9b70"),t("OutboundLink")],1),e._v(" | "),t("a",{attrs:{href:"http://mempoolhqx4isw62xs7abwphsq7ldayuidyx2v2oethdhhj6mlo2r6ad.onion/tx/198aee6e1b2cad9b7c3e4cd12962980fbaab0b20c07016031d0c2416b3ef9b70",target:"_blank",rel:"noopener noreferrer"}},[e._v(".onion version"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://mempool.space/tx/b77cb1ad9a1c164c868f89927193178ec44f1006ca154f8b97008d14bf2c4a6e",target:"_blank",rel:"noopener noreferrer"}},[e._v("b77cb1ad9a1c164c868f89927193178ec44f1006ca154f8b97008d14bf2c4a6e"),t("OutboundLink")],1),e._v(" | "),t("a",{attrs:{href:"http://mempoolhqx4isw62xs7abwphsq7ldayuidyx2v2oethdhhj6mlo2r6ad.onion/tx/b77cb1ad9a1c164c868f89927193178ec44f1006ca154f8b97008d14bf2c4a6e",target:"_blank",rel:"noopener noreferrer"}},[e._v(".onion version"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://mempool.space/tx/72f4b05845564c59982b4b5ae0d8aa7322d08907198fbcdae48390fbe0538e8d",target:"_blank",rel:"noopener noreferrer"}},[e._v("72f4b05845564c59982b4b5ae0d8aa7322d08907198fbcdae48390fbe0538e8d"),t("OutboundLink")],1),e._v(" | "),t("a",{attrs:{href:"http://mempoolhqx4isw62xs7abwphsq7ldayuidyx2v2oethdhhj6mlo2r6ad.onion/tx/72f4b05845564c59982b4b5ae0d8aa7322d08907198fbcdae48390fbe0538e8d",target:"_blank",rel:"noopener noreferrer"}},[e._v(".onion version"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://mempool.space/tx/063f001403aaa4e44f9f35faf44507f373824657a7ef39907a6907298d9ee56e",target:"_blank",rel:"noopener noreferrer"}},[e._v("063f001403aaa4e44f9f35faf44507f373824657a7ef39907a6907298d9ee56e"),t("OutboundLink")],1),e._v(" | "),t("a",{attrs:{href:"http://mempoolhqx4isw62xs7abwphsq7ldayuidyx2v2oethdhhj6mlo2r6ad.onion/tx/063f001403aaa4e44f9f35faf44507f373824657a7ef39907a6907298d9ee56e",target:"_blank",rel:"noopener noreferrer"}},[e._v(".onion version"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://mempool.space/tx/aabb0a2b43b274c9ae287e3837f9f8a8d8a378ce93153dc52de9978d2bb72cbc",target:"_blank",rel:"noopener noreferrer"}},[e._v("aabb0a2b43b274c9ae287e3837f9f8a8d8a378ce93153dc52de9978d2bb72cbc"),t("OutboundLink")],1),e._v(" | "),t("a",{attrs:{href:"http://mempoolhqx4isw62xs7abwphsq7ldayuidyx2v2oethdhhj6mlo2r6ad.onion/tx/aabb0a2b43b274c9ae287e3837f9f8a8d8a378ce93153dc52de9978d2bb72cbc",target:"_blank",rel:"noopener noreferrer"}},[e._v(".onion version"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=o.exports}}]);