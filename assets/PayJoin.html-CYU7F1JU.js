import{_ as c,r as o,o as r,c as l,a as e,d as n,w as i,b as t,e as d}from"./app-CwImt2bI.js";const h="/PayJoinSend.png",p="/PayJoinPreviewTransaction.png",u={},f=e("h1",{id:"payjoin",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#payjoin"},[e("span",null,"PayJoin")])],-1),b={class:"table-of-contents"},y=e("h2",{id:"sending-payjoin-step-by-step",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#sending-payjoin-step-by-step"},[e("span",null,"Sending PayJoin step-by-step")])],-1),v=e("li",null,[e("p",null,[t("Load a wallet and open the "),e("code",null,"Send"),t(" dialog.")])],-1),g={href:"https://github.com/bitcoin/bips/blob/master/bip-0021.mediawiki",target:"_blank",rel:"noopener noreferrer"},m=e("code",null,"pj=",-1),_=e("code",null,"To",-1),P=e("code",null,"Send",-1),k=e("code",null,"bitcoin:tb1q0382a3m2jzvyk5lkea5h5jcht88xa6l0jufgwx?amount=0.00010727&pj=https://payjoin.test.kukks.org/BTC/pj",-1),w=d('<p>Enter the label of the recipient.</p><p><img src="'+h+'" alt="Send Bitcoin PayJoin transaction in Wasabi Wallet" title="Send Bitcoin PayJoin transaction in Wasabi Wallet"></p><ol start="3"><li><p>Click <code>Continue</code>.</p></li><li><p>At <code>Preview Transaction</code>, verify that the information is correct.</p></li></ol><p><img src="'+p+`" alt="PayJoinPreviewTransaction" title="PayJoin Preview Transaction"></p><ol start="5"><li>Click <code>Confirm</code>, and type in the passphrase.</li></ol><div class="custom-container warning"><p class="custom-container-title">The success of a PayJoin transaction is not something that depends on Wasabi.</p><p>It may happen that the transaction is broadcast with success, but that it is not a PayJoin. This can happen for several reasons including:</p><ul><li>The receiver did not have any utxos to contribute towards a PayJoin.</li><li>Your wallet does not use the same address format as the receiver&#39;s.</li><li>The PayJoin server is not available.</li></ul></div><h2 id="the-goal-of-payjoin" tabindex="-1"><a class="header-anchor" href="#the-goal-of-payjoin"><span>The goal of PayJoin</span></a></h2><p>PayJoin is a collaborative transaction between the sender and the receiver of a payment, for example the merchant and the customer. The goal of the protocol is to break the common input ownership heuristic, while making it difficult to fingerprint that the transaction is in fact a CoinJoin. Further, it reduces the transaction fees paid by the merchant due to consolidation of coins.</p><h2 id="coordination" tabindex="-1"><a class="header-anchor" href="#coordination"><span>Coordination</span></a></h2><p>The coordination of this coinjoin is done with the PayToEndPoint [P2EP] concept. The receiver is reachable over the internet, either over a Tor onion service or clearnet IP address. The link is included in a BIP21 Bitcoin URI, and is provided to the sender as the payment invoice. The sender uses this onion service or IP address to connect to the server of the receiver and communicate the further protocol. The coordination is usually done within seconds, and will abort to the fallback transaction after some time if the connection breaks.</p><h2 id="fallback-transaction" tabindex="-1"><a class="header-anchor" href="#fallback-transaction"><span>Fallback transaction</span></a></h2><p>In the very first request to the receiving server, the sender provides a finalized signed transaction which has only the inputs of the sender, like any other Bitcoin transaction. The inputs are only from the sender. The outputs are the address of the receiver, as well as the change address of the sender. For example here, Alice pays Bob <code>0.2 bitcoin</code>.</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Alice input   1 bitcoin   --&gt;   Bob output            0.2 bitcoin
                                Alice change output   0.8 bitcoin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Both the sender and the receiver <em>could</em> broadcast this transaction.</p><h2 id="payjoin-transaction" tabindex="-1"><a class="header-anchor" href="#payjoin-transaction"><span>PayJoin transaction</span></a></h2><p>The receiving server responds to this initial proposal, with a transaction that adds more inputs to the transaction. Thus, the output belonging to the receiver increases in value, above the value that the payment amount is due.</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Alice input   1 bitcoin   --&gt;   Bob output            0.7 bitcoin
Bob input     0.5 bitcoin --&gt;   Alice change output   0.8 bitcoin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>The sender broadcasts this transaction to the Bitcoin network.</p><h2 id="advantages-of-payjoin" tabindex="-1"><a class="header-anchor" href="#advantages-of-payjoin"><span>Advantages of PayJoin</span></a></h2><p>First and foremost, the common input ownership heuristic is broken, meaning that the inputs do not belong to one single entity, but to several of them. This breaks one of the most important assumptions of transaction surveillance companies. Contrarily to other coinjoin implementations, the outputs are not of equal value, so it is not obvious that this transaction is in fact a coinjoin.</p><p>Further, the outputs do not reflect the actual value of the transaction. In our example, the economic transfer is of <code>0.2 bitcoin</code> from Alice to Bob, but the outputs are worth <code>0.7 bitcoin</code> and <code>0.8 bitcoin</code>. This is obfuscating the actual amount payed.</p><p>Finally, the receiver is consolidating his coins, thus saving on future transaction fees. Without the PayJoin, the receiver would have two coins, worth <code>0.2 bitcoin</code> and <code>0.5 bitcoin</code>, and he would have to pay twice the transaction fee to spend these coins. But because of using PayJoin, he only has one coin, worth <code>0.7 bitcoin</code>, thus reducing his future transaction costs when spending this coin.</p>`,22);function J(j,x){const a=o("router-link"),s=o("ExternalLinkIcon");return r(),l("div",null,[f,e("nav",b,[e("ul",null,[e("li",null,[n(a,{to:"#sending-payjoin-step-by-step"},{default:i(()=>[t("Sending PayJoin step-by-step")]),_:1})]),e("li",null,[n(a,{to:"#the-goal-of-payjoin"},{default:i(()=>[t("The goal of PayJoin")]),_:1})]),e("li",null,[n(a,{to:"#coordination"},{default:i(()=>[t("Coordination")]),_:1})]),e("li",null,[n(a,{to:"#fallback-transaction"},{default:i(()=>[t("Fallback transaction")]),_:1})]),e("li",null,[n(a,{to:"#payjoin-transaction"},{default:i(()=>[t("PayJoin transaction")]),_:1})]),e("li",null,[n(a,{to:"#advantages-of-payjoin"},{default:i(()=>[t("Advantages of PayJoin")]),_:1})])])]),y,e("ol",null,[v,e("li",null,[e("p",null,[t("Request from the receiver a "),e("a",g,[t("BIP21 Bitcoin URI"),n(s)]),t(" with the flag "),m,t(" and paste it into the "),_,t(" field of the "),P,t(" dialog. (E.g. "),k,t(")")])])]),w])}const B=c(u,[["render",J],["__file","PayJoin.html.vue"]]),C=JSON.parse(`{"path":"/using-wasabi/PayJoin.html","title":"PayJoin","lang":"en-US","frontmatter":{"title":"PayJoin","description":"A detailed explanation about PayJoin and it's implementation in Wasabi Wallet. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."},"headers":[{"level":2,"title":"Sending PayJoin step-by-step","slug":"sending-payjoin-step-by-step","link":"#sending-payjoin-step-by-step","children":[]},{"level":2,"title":"The goal of PayJoin","slug":"the-goal-of-payjoin","link":"#the-goal-of-payjoin","children":[]},{"level":2,"title":"Coordination","slug":"coordination","link":"#coordination","children":[]},{"level":2,"title":"Fallback transaction","slug":"fallback-transaction","link":"#fallback-transaction","children":[]},{"level":2,"title":"PayJoin transaction","slug":"payjoin-transaction","link":"#payjoin-transaction","children":[]},{"level":2,"title":"Advantages of PayJoin","slug":"advantages-of-payjoin","link":"#advantages-of-payjoin","children":[]}],"git":{"updatedTime":1720425980000},"filePathRelative":"using-wasabi/PayJoin.md"}`);export{B as comp,C as data};