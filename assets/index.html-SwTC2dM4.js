import{_ as r,r as l,o as c,c as u,a as t,d as a,w as o,b as e,e as d}from"./app-kbeZ_xm-.js";const h={},p=t("h1",{id:"getting-started",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#getting-started"},[t("span",null,"Getting Started")])],-1),w=t("p",null,"This is a short comprehensive guide on how to get started using Wasabi.",-1),b=t("p",null,"Please refer to the rest of the documentation for detailed explanations and best practices.",-1),f={class:"table-of-contents"},m=t("h2",{id:"download-wasabi",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#download-wasabi"},[t("span",null,"Download Wasabi")])],-1),g={href:"https://wasabiwallet.io",target:"_blank",rel:"noopener noreferrer"},v={href:"http://wasabiukrxmkdgve5kynjztuovbg43uxcbcxn6y2okcrsg7gb6jdmbad.onion",target:"_blank",rel:"noopener noreferrer"},_=t("h2",{id:"verify-the-download",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#verify-the-download"},[t("span",null,"Verify the Download")])],-1),y=t("p",null,"Optionally, but highly recommended is to verify the downloaded package. This needs to be done in order to make sure that the just downloaded package is the authentic one and not a malicious one (replaced by a hacker etc...).",-1),k=t("h2",{id:"install-wasabi",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#install-wasabi"},[t("span",null,"Install Wasabi")])],-1),x=t("p",null,"The downloaded Wasabi package needs to be installed on the computer so the application can be used.",-1),W=d('<h2 id="welcome-screen" tabindex="-1"><a class="header-anchor" href="#welcome-screen"><span>Welcome Screen</span></a></h2><p>The first time that you start Wasabi, you will be welcomed with information about the app. Read it and continue.</p><h2 id="add-wallet" tabindex="-1"><a class="header-anchor" href="#add-wallet"><span>Add Wallet</span></a></h2><p>You will be asked what kind of wallet you want to add. There are 4 options:</p><ul><li>Create a new wallet</li><li>Connect hardware wallet</li><li>Import a wallet</li><li>Recover a wallet</li></ul><p>Select <em>Create a new wallet</em>.</p><p>Now follow the next few steps/dialogs:</p><ul><li>Write down the recovery words. (do not share these with anyone!)</li><li>Add a password. (do not forget it and also write it down on a separate place from the recovery words, without your password you cannot open your wallet and send your bitcoin!)</li><li>Select the coinjoin strategy: we select the default one <code>Maximize Speed</code>.</li></ul><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>The Recovery words can never be shown again.</p></div><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>The password cannot be changed later on. If you lose your password you lose your bitcoin.</p></div><h2 id="receive-bitcoin" tabindex="-1"><a class="header-anchor" href="#receive-bitcoin"><span>Receive bitcoin</span></a></h2>',11),j=t("code",null,"Receive",-1),I=d('<h2 id="coinjoin" tabindex="-1"><a class="header-anchor" href="#coinjoin"><span>Coinjoin</span></a></h2><p>After you have received some bitcoin, Wasabi will automatically coinjoin the bitcoin for you.</p><p>Coinjoin will automatically start after the incoming funds are confirmed. You need to manually press the play button in the musicbox (at the bottom of the wallet) if you received less than 0.01 BTC.</p><p>You know that your wallet is coinjoining if you see the stop button in the musicbox and the spectrum (&quot;waving&quot; color animation) at the bottom of the wallet.</p><p>Now wait while you leave Wasabi running so it can do some coinjoins. You might need to wait for (a couple of) hour(s) (sometimes less or sometimes more) to get successful coinjoins and to see your privacy percentage reach 100%.</p><h2 id="funds-100-private" tabindex="-1"><a class="header-anchor" href="#funds-100-private"><span>Funds 100% private</span></a></h2><p>After one or more coinjoins your funds should be made private as you can see in the <em>Privacy Progress</em> tile at the top. All your funds are private if it displays 100%. In the history you will see a shield icon(s), which indicates that you successfully participated in a coinjoin round(s).</p><h2 id="use-the-private-bitcoin" tabindex="-1"><a class="header-anchor" href="#use-the-private-bitcoin"><span>Use the private bitcoin</span></a></h2><p>Now that all your bitcoin is private you can use your bitcoin to:</p><ul><li>Make a payment.</li><li>Send it to cold storage.</li></ul><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Congratulations you are now using Wasabi!</p></div>',11);function S(R,T){const i=l("router-link"),s=l("ExternalLinkIcon"),n=l("RouteLink");return c(),u("div",null,[p,w,b,t("nav",f,[t("ul",null,[t("li",null,[a(i,{to:"#download-wasabi"},{default:o(()=>[e("Download Wasabi")]),_:1})]),t("li",null,[a(i,{to:"#verify-the-download"},{default:o(()=>[e("Verify the Download")]),_:1})]),t("li",null,[a(i,{to:"#install-wasabi"},{default:o(()=>[e("Install Wasabi")]),_:1})]),t("li",null,[a(i,{to:"#welcome-screen"},{default:o(()=>[e("Welcome Screen")]),_:1})]),t("li",null,[a(i,{to:"#add-wallet"},{default:o(()=>[e("Add Wallet")]),_:1})]),t("li",null,[a(i,{to:"#receive-bitcoin"},{default:o(()=>[e("Receive bitcoin")]),_:1})]),t("li",null,[a(i,{to:"#coinjoin"},{default:o(()=>[e("Coinjoin")]),_:1})]),t("li",null,[a(i,{to:"#funds-100-private"},{default:o(()=>[e("Funds 100% private")]),_:1})]),t("li",null,[a(i,{to:"#use-the-private-bitcoin"},{default:o(()=>[e("Use the private bitcoin")]),_:1})])])]),m,t("p",null,[e("Download Wasabi from the official website "),t("a",g,[e("wasabiwallet.io"),a(s)]),e(" or "),t("a",v,[e("wasabiukrxmkdgve5kynjztuovbg43uxcbcxn6y2okcrsg7gb6jdmbad.onion"),a(s)]),e(" if you're using the Tor Browser.")]),_,y,t("p",null,[e("How to do this depends on the desktop operating system, the detailed guides can be found here: "),a(n,{to:"/using-wasabi/InstallPackage.html#windows"},{default:o(()=>[e("Windows")]),_:1}),e(", "),a(n,{to:"/using-wasabi/InstallPackage.html#debian-and-ubuntu"},{default:o(()=>[e("Debian/Ubuntu")]),_:1}),e(", "),a(n,{to:"/using-wasabi/InstallPackage.html#other-linux"},{default:o(()=>[e("Other Linux")]),_:1}),e(", "),a(n,{to:"/using-wasabi/InstallPackage.html#macos"},{default:o(()=>[e("macOS")]),_:1})]),k,x,t("p",null,[e("How to do this depends on the desktop operating system, the detailed guides can be found here: "),a(n,{to:"/using-wasabi/InstallPackage.html#windows"},{default:o(()=>[e("Windows")]),_:1}),e(", "),a(n,{to:"/using-wasabi/InstallPackage.html#debian-and-ubuntu"},{default:o(()=>[e("Debian/Ubuntu")]),_:1}),e(", "),a(n,{to:"/using-wasabi/InstallPackage.html#other-linux"},{default:o(()=>[e("Other Linux")]),_:1}),e(", "),a(n,{to:"/using-wasabi/InstallPackage.html#macos"},{default:o(()=>[e("macOS")]),_:1})]),W,t("p",null,[e("As you can see, the new wallet is empty as it has 0.00000000 BTC. Click on "),j,e(" at the top right to "),a(n,{to:"/using-wasabi/Receive.html"},{default:o(()=>[e("receive")]),_:1}),e(" some bitcoin to this new wallet.")]),I])}const P=r(h,[["render",S],["__file","index.html.vue"]]),A=JSON.parse('{"path":"/getting-started/","title":"Getting Started","lang":"en-US","frontmatter":{"title":"Getting Started","description":"An easy and short guide on how to get started using Wasabi Wallet. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."},"headers":[{"level":2,"title":"Download Wasabi","slug":"download-wasabi","link":"#download-wasabi","children":[]},{"level":2,"title":"Verify the Download","slug":"verify-the-download","link":"#verify-the-download","children":[]},{"level":2,"title":"Install Wasabi","slug":"install-wasabi","link":"#install-wasabi","children":[]},{"level":2,"title":"Welcome Screen","slug":"welcome-screen","link":"#welcome-screen","children":[]},{"level":2,"title":"Add Wallet","slug":"add-wallet","link":"#add-wallet","children":[]},{"level":2,"title":"Receive bitcoin","slug":"receive-bitcoin","link":"#receive-bitcoin","children":[]},{"level":2,"title":"Coinjoin","slug":"coinjoin","link":"#coinjoin","children":[]},{"level":2,"title":"Funds 100% private","slug":"funds-100-private","link":"#funds-100-private","children":[]},{"level":2,"title":"Use the private bitcoin","slug":"use-the-private-bitcoin","link":"#use-the-private-bitcoin","children":[]}],"git":{"updatedTime":1706179181000},"filePathRelative":"getting-started/README.md"}');export{P as comp,A as data};
