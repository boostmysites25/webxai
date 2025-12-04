export default function ContactPage() {
  return (
    <section className="relative w-full min-h-screen bg-[#05050A] text-white overflow-hidden">

      {/* GLOBAL BACKGROUND — SAME AS OTHER PAGES */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.09) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "85px 85px",
          }}
        />
      </div>

      {/* Vertical neon grid lines */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div className="absolute left-1/4 top-0 w-[2px] h-full bg-gradient-to-b from-purple-400/40 to-transparent blur-sm"></div>
        <div className="absolute left-1/2 top-0 w-[2px] h-full bg-gradient-to-b from-blue-400/40 to-transparent blur-sm"></div>
        <div className="absolute left-[70%] top-0 w-[2px] h-full bg-gradient-to-b from-purple-400/30 to-transparent blur-sm"></div>
      </div>

      {/* Soft glows */}
      <div className="absolute -top-52 left-0 w-[1200px] h-[300px] bg-gradient-to-r from-blue-600/30 to-purple-600/30 blur-[140px]" />
      <div className="absolute bottom-[-240px] right-[-200px] w-[1200px] h-[300px] bg-gradient-to-r from-purple-600/30 to-blue-500/30 blur-[140px]" />

      {/* MAIN WRAPPER */}
      <div className="relative z-10 max-w-[1350px] mx-auto px-6 py-[160px]">

        {/* TITLE */}
        <div className="text-center mb-[120px]">
          <h1 className="text-[70px] md:text-[95px] font-extrabold leading-[1.05] mb-6">
            Contact{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500">
              WebX AI
            </span>
          </h1>

          <p className="text-soft text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Tell us about your project. We’ll turn it into an intelligent, scalable digital system.
          </p>
        </div>

        {/* --------------------- MAIN 2-COLUMN SECTION ---------------------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">

          {/* LEFT — Contact Info + Trust + Explanation */}
          <div>
            <h2 className="text-4xl font-bold mb-8 leading-tight">
              Let’s Build Something<br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                Intelligent Together
              </span>
            </h2>

            <p className="text-soft leading-relaxed text-lg mb-10 opacity-90">
              Whether it's AI development, modern apps, scalable systems, automations or data engineering —
              we work with brands that want engineering clarity and real business outcomes.
            </p>

            {/* CONTACT METHODS */}
            <div className="space-y-6 mb-16">

              <div className="flex items-center gap-4">
                <span className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center border border-white/10 backdrop-blur-md">
                  📞
                </span>
                <p className="text-lg text-soft">+91 7093242788</p>
              </div>

              <div className="flex items-center gap-4">
                <span className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center border border-white/10 backdrop-blur-md">
                  ✉️
                </span>
                <p className="text-lg text-soft">webxdev.ai@gmail.com</p>
              </div>

              <div className="flex items-center gap-4">
                <span className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center border border-white/10 backdrop-blur-md">
                  📍
                </span>
                <p className="text-lg text-soft">India — Remote Worldwide</p>
              </div>
            </div>

            {/* TRUST BADGES */}
            <div className="flex flex-col gap-6">

              <div className="px-10 py-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl text-center">
                <p className="text-2xl font-semibold mb-2">MSME Registered</p>
                <p className="text-soft opacity-80">Government of India UDYAM</p>
              </div>

              <div className="px-10 py-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl text-center">
                <p className="text-2xl font-semibold mb-2">Boostmysites Partner</p>
                <p className="text-soft opacity-80">Official Development Partner</p>
              </div>

            </div>
          </div>

          {/* RIGHT — FORM */}
          <div className="relative">

            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 blur-2xl rounded-3xl" />

            <form
              className="relative p-10 rounded-3xl bg-white/5 border border-white/10 
              backdrop-blur-2xl shadow-[0_0_40px_rgba(0,0,0,0.4)] space-y-6"
            >
              <h3 className="text-3xl font-bold mb-4">Start Your Project</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input className="input" placeholder="Name" />
                <input className="input" placeholder="Email" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                <select className="input md:col-span-1ut">
  <option value=""> + Code</option>

  <option value="+93">🇦🇫 Afghanistan (+93)</option>
  <option value="+355">🇦🇱 Albania (+355)</option>
  <option value="+213">🇩🇿 Algeria (+213)</option>
  <option value="+1-684">🇦🇸 American Samoa (+1-684)</option>
  <option value="+376">🇦🇩 Andorra (+376)</option>
  <option value="+244">🇦🇴 Angola (+244)</option>
  <option value="+1-264">🇦🇮 Anguilla (+1-264)</option>
  <option value="+672">🇦🇶 Antarctica (+672)</option>
  <option value="+1-268">🇦🇬 Antigua and Barbuda (+1-268)</option>
  <option value="+54">🇦🇷 Argentina (+54)</option>
  <option value="+374">🇦🇲 Armenia (+374)</option>
  <option value="+297">🇦🇼 Aruba (+297)</option>
  <option value="+61">🇦🇺 Australia (+61)</option>
  <option value="+43">🇦🇹 Austria (+43)</option>
  <option value="+994">🇦🇿 Azerbaijan (+994)</option>

  <option value="+1-242">🇧🇸 Bahamas (+1-242)</option>
  <option value="+973">🇧🇭 Bahrain (+973)</option>
  <option value="+880">🇧🇩 Bangladesh (+880)</option>
  <option value="+1-246">🇧🇧 Barbados (+1-246)</option>
  <option value="+375">🇧🇾 Belarus (+375)</option>
  <option value="+32">🇧🇪 Belgium (+32)</option>
  <option value="+501">🇧🇿 Belize (+501)</option>
  <option value="+229">🇧🇯 Benin (+229)</option>
  <option value="+1-441">🇧🇲 Bermuda (+1-441)</option>
  <option value="+975">🇧🇹 Bhutan (+975)</option>
  <option value="+591">🇧🇴 Bolivia (+591)</option>
  <option value="+387">🇧🇦 Bosnia and Herzegovina (+387)</option>
  <option value="+267">🇧🇼 Botswana (+267)</option>
  <option value="+55">🇧🇷 Brazil (+55)</option>
  <option value="+246">🇮🇴 British Indian Ocean Territory (+246)</option>
  <option value="+1-284">🇻🇬 British Virgin Islands (+1-284)</option>
  <option value="+673">🇧🇳 Brunei (+673)</option>
  <option value="+359">🇧🇬 Bulgaria (+359)</option>
  <option value="+226">🇧🇫 Burkina Faso (+226)</option>
  <option value="+257">🇧🇮 Burundi (+257)</option>

  <option value="+855">🇰🇭 Cambodia (+855)</option>
  <option value="+237">🇨🇲 Cameroon (+237)</option>
  <option value="+1">🇨🇦 Canada (+1)</option>
  <option value="+238">🇨🇻 Cape Verde (+238)</option>
  <option value="+1-345">🇰🇾 Cayman Islands (+1-345)</option>
  <option value="+236">🇨🇫 Central African Republic (+236)</option>
  <option value="+235">🇹🇩 Chad (+235)</option>
  <option value="+56">🇨🇱 Chile (+56)</option>
  <option value="+86">🇨🇳 China (+86)</option>
  <option value="+61">🇨🇽 Christmas Island (+61)</option>
  <option value="+61">🇨🇨 Cocos Islands (+61)</option>
  <option value="+57">🇨🇴 Colombia (+57)</option>
  <option value="+269">🇰🇲 Comoros (+269)</option>
  <option value="+682">🇨🇰 Cook Islands (+682)</option>
  <option value="+506">🇨🇷 Costa Rica (+506)</option>
  <option value="+385">🇭🇷 Croatia (+385)</option>
  <option value="+53">🇨🇺 Cuba (+53)</option>
  <option value="+599">🇨🇼 Curaçao (+599)</option>
  <option value="+357">🇨🇾 Cyprus (+357)</option>
  <option value="+420">🇨🇿 Czech Republic (+420)</option>

  <option value="+243">🇨🇩 DR Congo (+243)</option>
  <option value="+45">🇩🇰 Denmark (+45)</option>
  <option value="+253">🇩🇯 Djibouti (+253)</option>
  <option value="+1-767">🇩🇲 Dominica (+1-767)</option>
  <option value="+1-809">🇩🇴 Dominican Republic (+1-809)</option>

  <option value="+593">🇪🇨 Ecuador (+593)</option>
  <option value="+20">🇪🇬 Egypt (+20)</option>
  <option value="+503">🇸🇻 El Salvador (+503)</option>
  <option value="+240">🇬🇶 Equatorial Guinea (+240)</option>
  <option value="+291">🇪🇷 Eritrea (+291)</option>
  <option value="+372">🇪🇪 Estonia (+372)</option>
  <option value="+268">🇸🇿 Eswatini (+268)</option>
  <option value="+251">🇪🇹 Ethiopia (+251)</option>

  <option value="+500">🇫🇰 Falkland Islands (+500)</option>
  <option value="+298">🇫🇴 Faroe Islands (+298)</option>
  <option value="+679">🇫🇯 Fiji (+679)</option>
  <option value="+358">🇫🇮 Finland (+358)</option>
  <option value="+33">🇫🇷 France (+33)</option>

  <option value="+689">🇵🇫 French Polynesia (+689)</option>
  <option value="+241">🇬🇦 Gabon (+241)</option>
  <option value="+220">🇬🇲 Gambia (+220)</option>
  <option value="+995">🇬🇪 Georgia (+995)</option>
  <option value="+49">🇩🇪 Germany (+49)</option>
  <option value="+233">🇬🇭 Ghana (+233)</option>
  <option value="+350">🇬🇮 Gibraltar (+350)</option>
  <option value="+30">🇬🇷 Greece (+30)</option>
  <option value="+299">🇬🇱 Greenland (+299)</option>
  <option value="+1-473">🇬🇩 Grenada (+1-473)</option>
  <option value="+1-671">🇬🇺 Guam (+1-671)</option>
  <option value="+502">🇬🇹 Guatemala (+502)</option>
  <option value="+44-1481">🇬🇬 Guernsey (+44-1481)</option>
  <option value="+224">🇬🇳 Guinea (+224)</option>
  <option value="+245">🇬🇼 Guinea-Bissau (+245)</option>
  <option value="+592">🇬🇾 Guyana (+592)</option>

  <option value="+509">🇭🇹 Haiti (+509)</option>
  <option value="+504">🇭🇳 Honduras (+504)</option>
  <option value="+852">🇭🇰 Hong Kong (+852)</option>
  <option value="+36">🇭🇺 Hungary (+36)</option>

  <option value="+354">🇮🇸 Iceland (+354)</option>
  <option value="+91">🇮🇳 India (+91)</option>
  <option value="+62">🇮🇩 Indonesia (+62)</option>
  <option value="+98">🇮🇷 Iran (+98)</option>
  <option value="+964">🇮🇶 Iraq (+964)</option>
  <option value="+353">🇮🇪 Ireland (+353)</option>
  <option value="+44-1624">🇮🇲 Isle of Man (+44-1624)</option>
  <option value="+972">🇮🇱 Israel (+972)</option>
  <option value="+39">🇮🇹 Italy (+39)</option>

  <option value="+1-876">🇯🇲 Jamaica (+1-876)</option>
  <option value="+81">🇯🇵 Japan (+81)</option>
  <option value="+44-1534">🇯🇪 Jersey (+44-1534)</option>
  <option value="+962">🇯🇴 Jordan (+962)</option>

  <option value="+7">🇰🇿 Kazakhstan (+7)</option>
  <option value="+254">🇰🇪 Kenya (+254)</option>
  <option value="+686">🇰🇮 Kiribati (+686)</option>
  <option value="+383">🇽🇰 Kosovo (+383)</option>
  <option value="+965">🇰🇼 Kuwait (+965)</option>
  <option value="+996">🇰🇬 Kyrgyzstan (+996)</option>

  <option value="+856">🇱🇦 Laos (+856)</option>
  <option value="+371">🇱🇻 Latvia (+371)</option>
  <option value="+961">🇱🇧 Lebanon (+961)</option>
  <option value="+266">🇱🇸 Lesotho (+266)</option>
  <option value="+231">🇱🇷 Liberia (+231)</option>
  <option value="+218">🇱🇾 Libya (+218)</option>
  <option value="+423">🇱🇮 Liechtenstein (+423)</option>
  <option value="+370">🇱🇹 Lithuania (+370)</option>
  <option value="+352">🇱🇺 Luxembourg (+352)</option>

  <option value="+853">🇲🇴 Macau (+853)</option>
  <option value="+389">🇲🇰 North Macedonia (+389)</option>
  <option value="+261">🇲🇬 Madagascar (+261)</option>
  <option value="+265">🇲🇼 Malawi (+265)</option>
  <option value="+60">🇲🇾 Malaysia (+60)</option>
  <option value="+960">🇲🇻 Maldives (+960)</option>
  <option value="+223">🇲🇱 Mali (+223)</option>
  <option value="+356">🇲🇹 Malta (+356)</option>
  <option value="+692">🇲🇭 Marshall Islands (+692)</option>
  <option value="+596">🇲🇶 Martinique (+596)</option>
  <option value="+222">🇲🇷 Mauritania (+222)</option>
  <option value="+230">🇲🇺 Mauritius (+230)</option>
  <option value="+262">🇾🇹 Mayotte (+262)</option>
  <option value="+52">🇲🇽 Mexico (+52)</option>
  <option value="+691">🇫🇲 Micronesia (+691)</option>
  <option value="+373">🇲🇩 Moldova (+373)</option>
  <option value="+377">🇲🇨 Monaco (+377)</option>
  <option value="+976">🇲🇳 Mongolia (+976)</option>
  <option value="+382">🇲🇪 Montenegro (+382)</option>
  <option value="+1-664">🇲🇸 Montserrat (+1-664)</option>
  <option value="+212">🇲🇦 Morocco (+212)</option>
  <option value="+258">🇲🇿 Mozambique (+258)</option>
  <option value="+95">🇲🇲 Myanmar (+95)</option>

  <option value="+264">🇳🇦 Namibia (+264)</option>
  <option value="+674">🇳🇷 Nauru (+674)</option>
  <option value="+977">🇳🇵 Nepal (+977)</option>
  <option value="+31">🇳🇱 Netherlands (+31)</option>
  <option value="+687">🇳🇨 New Caledonia (+687)</option>
  <option value="+64">🇳🇿 New Zealand (+64)</option>
  <option value="+505">🇳🇮 Nicaragua (+505)</option>
  <option value="+227">🇳🇪 Niger (+227)</option>
  <option value="+234">🇳🇬 Nigeria (+234)</option>
  <option value="+683">🇳🇺 Niue (+683)</option>
  <option value="+850">🇰🇵 North Korea (+850)</option>
  <option value="+47">🇳🇴 Norway (+47)</option>

  <option value="+968">🇴🇲 Oman (+968)</option>

  <option value="+92">🇵🇰 Pakistan (+92)</option>
  <option value="+680">🇵🇼 Palau (+680)</option>
  <option value="+970">🇵🇸 Palestine (+970)</option>
  <option value="+507">🇵🇦 Panama (+507)</option>
  <option value="+675">🇵🇬 Papua New Guinea (+675)</option>
  <option value="+595">🇵🇾 Paraguay (+595)</option>
  <option value="+51">🇵🇪 Peru (+51)</option>
  <option value="+63">🇵🇭 Philippines (+63)</option>
  <option value="+48">🇵🇱 Poland (+48)</option>
  <option value="+351">🇵🇹 Portugal (+351)</option>

  <option value="+1-787">🇵🇷 Puerto Rico (+1-787)</option>

  <option value="+974">🇶🇦 Qatar (+974)</option>

  <option value="+242">🇨🇬 Republic of the Congo (+242)</option>
  <option value="+40">🇷🇴 Romania (+40)</option>
  <option value="+7">🇷🇺 Russia (+7)</option>
  <option value="+250">🇷🇼 Rwanda (+250)</option>

  <option value="+590">🇧🇱 Saint Barthélemy (+590)</option>
  <option value="+290">🇸🇭 Saint Helena (+290)</option>
  <option value="+1-869">🇰🇳 Saint Kitts (+1-869)</option>
  <option value="+1-758">🇱🇨 Saint Lucia (+1-758)</option>
  <option value="+590">🇲🇫 Saint Martin (+590)</option>
  <option value="+508">🇵🇲 Saint Pierre (+508)</option>
  <option value="+1-784">🇻🇨 Saint Vincent (+1-784)</option>

  <option value="+685">🇼🇸 Samoa (+685)</option>
  <option value="+378">🇸🇲 San Marino (+378)</option>
  <option value="+239">🇸🇹 Sao Tome (+239)</option>
  <option value="+966">🇸🇦 Saudi Arabia (+966)</option>
  <option value="+221">🇸🇳 Senegal (+221)</option>
  <option value="+381">🇷🇸 Serbia (+381)</option>
  <option value="+248">🇸🇨 Seychelles (+248)</option>
  <option value="+232">🇸🇱 Sierra Leone (+232)</option>
  <option value="+65">🇸🇬 Singapore (+65)</option>
  <option value="+421">🇸🇰 Slovakia (+421)</option>
  <option value="+386">🇸🇮 Slovenia (+386)</option>
  <option value="+677">🇸🇧 Solomon Islands (+677)</option>
  <option value="+252">🇸🇴 Somalia (+252)</option>
  <option value="+27">🇿🇦 South Africa (+27)</option>
  <option value="+82">🇰🇷 South Korea (+82)</option>
  <option value="+211">🇸🇸 South Sudan (+211)</option>
  <option value="+34">🇪🇸 Spain (+34)</option>
  <option value="+94">🇱🇰 Sri Lanka (+94)</option>
  <option value="+249">🇸🇩 Sudan (+249)</option>
  <option value="+597">🇸🇷 Suriname (+597)</option>
  <option value="+46">🇸🇪 Sweden (+46)</option>
  <option value="+41">🇨🇭 Switzerland (+41)</option>
  <option value="+963">🇸🇾 Syria (+963)</option>

  <option value="+886">🇹🇼 Taiwan (+886)</option>
  <option value="+992">🇹🇯 Tajikistan (+992)</option>
  <option value="+255">🇹🇿 Tanzania (+255)</option>
  <option value="+66">🇹🇭 Thailand (+66)</option>
  <option value="+670">🇹🇱 Timor-Leste (+670)</option>
  <option value="+228">🇹🇬 Togo (+228)</option>
  <option value="+690">🇹🇰 Tokelau (+690)</option>
  <option value="+676">🇹🇴 Tonga (+676)</option>
  <option value="+1-868">🇹🇹 Trinidad (+1-868)</option>
  <option value="+216">🇹🇳 Tunisia (+216)</option>
  <option value="+90">🇹🇷 Turkey (+90)</option>
  <option value="+993">🇹🇲 Turkmenistan (+993)</option>
  <option value="+1-649">🇹🇨 Turks and Caicos (+1-649)</option>
  <option value="+688">🇹🇻 Tuvalu (+688)</option>

  <option value="+256">🇺🇬 Uganda (+256)</option>
  <option value="+380">🇺🇦 Ukraine (+380)</option>
  <option value="+971">🇦🇪 United Arab Emirates (+971)</option>
  <option value="+44">🇬🇧 United Kingdom (+44)</option>
  <option value="+1">🇺🇸 United States (+1)</option>
  <option value="+598">🇺🇾 Uruguay (+598)</option>
  <option value="+998">🇺🇿 Uzbekistan (+998)</option>

  <option value="+678">🇻🇺 Vanuatu (+678)</option>
  <option value="+379">🇻🇦 Vatican (+379)</option>
  <option value="+58">🇻🇪 Venezuela (+58)</option>
  <option value="+84">🇻🇳 Vietnam (+84)</option>
  <option value="+681">🇼🇫 Wallis and Futuna (+681)</option>
  <option value="+967">🇾🇪 Yemen (+967)</option>
  <option value="+260">🇿🇲 Zambia (+260)</option>
  <option value="+263">🇿🇼 Zimbabwe (+263)</option>
</select>

              {/* Phone Number */}
  <input
    className="input md:col-span-2"
    type="tel"
    placeholder="Phone Number"
  />
              </div>
        {/* Company row */}
<div className="mt-6">
  <input className="input" placeholder="Company (optional)" />
</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <select className="input">
                  <option>Project Type</option>
                  <option>Website</option>
                  <option>Web App</option>
                  <option>Mobile App</option>
                  <option>AI Development</option>
                  <option>Data Engineering</option>
                  <option>Automation System</option>
                  <option>Other</option>
                </select>

                <select className="input">
                  <option>Budget Range</option>
                  <option>20,000 – 50,000</option>
                  <option>50,000 – 1,00,000</option>
                  <option>1L – 3L</option>
                  <option>3L+</option>
                </select>
              </div>

              <select className="input">
                <option>Timeline</option>
                <option>Urgent (1–2 weeks)</option>
                <option>1 month</option>
                <option>2–3 months</option>
                <option>Not decided</option>
              </select>

              <textarea className="input h-32" placeholder="Project Details"></textarea>

              <button
                className="w-full rounded-xl py-4 text-lg font-medium
                bg-gradient-to-r from-blue-600/40 to-purple-600/40
                border border-white/20 backdrop-blur-xl hover:from-blue-600/50 hover:to-purple-600/50 transition"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* GLOBAL INPUT STYLE */
const inputStyles = `
.input {
  @apply w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 
  text-white placeholder-white/40 backdrop-blur-md focus:outline-none 
  focus:border-white/30 transition;
}
`;
