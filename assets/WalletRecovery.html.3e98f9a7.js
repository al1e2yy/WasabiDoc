import{_ as n}from"./AddWalletButton.98ad9c28.js";import{_ as c,a as d,b as h}from"./AddWalletAddPassword.45b736a5.js";import{_ as p,r as l,o as u,c as m,a as e,d as a,w as s,b as t,e as w}from"./app.cb52d670.js";const _="/WalletRecovery.png",b="/WalletRecoveryAdvanced.png",W={},f=e("h1",{id:"recover-a-wallet",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#recover-a-wallet","aria-hidden":"true"},"#"),t(" Recover a Wallet")],-1),y=e("p",null,"There are two different ways that you can recover an already used wallet in Wasabi.",-1),v={class:"table-of-contents"},k=e("h2",{id:"mnemonic-recovery-words-and-password",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#mnemonic-recovery-words-and-password","aria-hidden":"true"},"#"),t(" Mnemonic Recovery Words and Password")],-1),g={href:"https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki",target:"_blank",rel:"noopener noreferrer"},A={href:"https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki",target:"_blank",rel:"noopener noreferrer"},R=e("strong",null,"Both",-1),x=e("strong",null,"and",-1),B={href:"https://github.com/bitcoin/bips/blob/master/bip-0039/english.txt",target:"_blank",rel:"noopener noreferrer"},N=w('<p>To recover a wallet:</p><ol><li>Click on <code>Add Wallet</code> at the bottom left corner of the main view.</li></ol><p><img src="'+n+'" alt="Wasabi Wallet Add Wallet" title="Wasabi Wallet Add Wallet"></p><ol start="2"><li>Click on <code>Recover a wallet</code>.</li></ol><p><img src="'+c+'" alt="Wasabi Wallet Add Wallet" title="Wasabi Wallet Add Wallet"></p><ol start="3"><li>Give the wallet a name for future recognition of the wallet.</li></ol><p><img src="'+d+'" alt="Wasabi Wallet Name Wallet" title="Wasabi Wallet Name Wallet"></p><ol start="4"><li>Type in the Recovery Words in the correct order and click <code>Continue</code>.</li></ol><p><img src="'+_+'" alt="Wasabi Wallet Recover Wallet" title="Wasabi Wallet Recover Wallet"></p><ol start="5"><li>Type in the Password.</li></ol><p><img src="'+h+'" alt="Add Wallet Add Password" title="Add Wallet Add Password"></p><p>Now Wasabi will recover your wallet.</p><p>With this, only the private keys are imported, but not the labels of your addresses.</p><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>At recovery, Wasabi is unable to check if your password is correct or not. If you type a wrong password a completely different wallet will be recovered.</p></div><p>You can also use the <code>Advanced Recovery Options</code> to specify the account key derivation path of the HD wallet structure and the gap limit. The gap limit is about how far Wasabi will check the HD wallet structure for consecutive addresses that have no coins, in some cases, you may want to increase this limit.</p><p><img src="'+b+'" alt="Wasabi Wallet Recovery Advanced" title="Wasabi Wallet Recovery Advanced"></p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>With this method, you can recover a wallet that was generated with any BIP39 compatible software, not just a Wasabi generated wallet.</p></div><h2 id="back-up-wallet-file-and-password" tabindex="-1"><a class="header-anchor" href="#back-up-wallet-file-and-password" aria-hidden="true">#</a> Back up Wallet File and Password</h2>',18),P=e("code",null,"WalletBackups",-1),I=e("code",null,"Add Wallet",-1),T=e("code",null,"Import a wallet",-1),C=e("p",null,[t("Alternitavely: copy the wallet file to the "),e("code",null,"Wallets"),t(" folder, and upon the next restart of Wasabi, it will show this wallet in the "),e("code",null,"NavBar"),t(", from there you can open it as usual.")],-1),E=e("p",null,"Using this method will also backup your address labels and cluster history.",-1),F=e("div",{class:"custom-container warning"},[e("p",{class:"custom-container-title"},"WARNING"),e("p",null,"Make sure to back up your password separately because it is necessary to spend your bitcoin.")],-1);function L(V,D){const r=l("router-link"),o=l("ExternalLinkIcon"),i=l("RouterLink");return u(),m("div",null,[f,y,e("nav",v,[e("ul",null,[e("li",null,[a(r,{to:"#mnemonic-recovery-words-and-password"},{default:s(()=>[t("Mnemonic Recovery Words and Password")]),_:1})]),e("li",null,[a(r,{to:"#back-up-wallet-file-and-password"},{default:s(()=>[t("Back up Wallet File and Password")]),_:1})])])]),k,e("p",null,[t("Wasabi uses the "),e("a",g,[t("BIP 39"),a(o)]),t(" mnemonic code for generating "),e("a",A,[t("BIP 32"),a(o)]),t(" hierarchical deterministic wallets. "),R,t(" your password "),x,t(" the generated 12 mnemonic recovery words are the necessary secrets to recover your wallet. The recovery words are spell checked based on the "),e("a",B,[t("official wordlist"),a(o)]),t(", with the right word shown below the text box.")]),N,e("p",null,[t("Wasabi Wallet creates a backup of your wallet file inside "),P,t(" in your "),a(i,{to:"/FAQ/FAQ-UseWasabi.html#where-can-i-find-the-wasabi-data-folder"},{default:s(()=>[t("Wasabi data folder")]),_:1}),t(". If you have done a backup of this file, then you can import it at "),I,t(", by clicking on "),T,t(".")]),C,E,F])}const Q=p(W,[["render",L],["__file","WalletRecovery.html.vue"]]);export{Q as default};