  // List of killed / discontinued Samsung services with source links embedded in header
    const killedServicesRaw = [
		{
            name: "Samsung Max VPN",
            yearClosed: 2026,
            yearsActive: "2015–2026",
            category: "Network",
            description: "VPN, ad blocking and user data protection service.",
            reason: "High operational costs and low user monetization.",
            sourceUrl: "https://play.google.com/store/apps/details?id=com.opera.max.global&hl=en",
            sourceTitle: "Google Play"
        },
        {
            name: "Samsung Milk Music",
            yearClosed: 2016,
            yearsActive: "2014–2016",
            category: "Music / Streaming",
            description: "Personalized radio streaming service with a unique dial interface. Launched in 2014 exclusively for Galaxy devices in the US, offering 200+ stations and 13M+ songs.",
            reason: "High operational costs and low user monetization. Samsung announced closure in August 2016, with service ending September 22, 2016. Users were redirected to Slacker Radio.",
            sourceUrl: "https://en.wikipedia.org/wiki/Milk_Music",
            sourceTitle: "Wikipedia"
        },
        {
            name: "Samsung ChatOn",
            yearClosed: 2015,
            yearsActive: "2011–2015",
            category: "Messenger",
            description: "Cross-platform instant messaging service supporting 62 languages across 120+ countries. Available on Android, iOS, BlackBerry, Windows Phone, and Bada.",
            reason: "Unable to compete with WhatsApp, LINE, and KakaoTalk. Service was discontinued worldwide on March 31, 2015.",
            sourceUrl: "https://en.wikipedia.org/wiki/ChatON",
            sourceTitle: "Wikipedia"
        },
        {
            name: "Samsung Bada OS",
            yearClosed: 2013,
            yearsActive: "2010–2013",
            category: "Operating System",
            description: "Proprietary mobile OS for smartphones, branded as Samsung Wave. Featured TouchWiz UI and Samsung Apps store.",
            reason: "Failed to compete with Android and iOS. On February 25, 2013, Samsung announced it would stop Bada development and merge it into the Tizen project.",
            sourceUrl: "https://en.wikipedia.org/wiki/Bada_(operating_system)",
            sourceTitle: "Wikipedia"
        },
        {
            name: "Samsung Gear VR (Original)",
            yearClosed: 2020,
            yearsActive: "2015–2020",
            category: "VR / Platform",
            description: "Virtual reality headset developed with Oculus VR. Required a compatible Galaxy phone as the display and processor.",
            reason: "Partnership with Oculus ended; low demand for mobile VR. Newer Galaxy models (Note10 and later) dropped support.",
            sourceUrl: "https://en.wikipedia.org/wiki/Samsung_Gear_VR",
            sourceTitle: "Wikipedia"
        },
        {
            name: "Samsung Music Hub",
            yearClosed: 2014,
            yearsActive: "2012–2014",
            category: "Music Store",
            description: "Cloud-based music streaming and download service. Launched with Galaxy S III and Note II in select European markets.",
            reason: "Samsung shut down the service on July 1, 2014, due to intense competition from Google, Amazon, and Spotify.",
            sourceUrl: "https://en.wikipedia.org/wiki/Samsung_Music_Hub",
            sourceTitle: "Wikipedia"
        },
        {
            name: "Samsung Cloud (Unlimited Photo Storage)",
            yearClosed: 2021,
            yearsActive: "2016–2021",
            category: "Cloud Storage",
            description: "Originally provided unlimited storage for photos and backups to Galaxy device owners.",
            reason: "High infrastructure costs. Samsung transitioned to a Microsoft OneDrive partnership, ending the unlimited plan.",
            sourceUrl: "https://news.samsung.com/us/samsung-microsoft-partnership-onedrive-storage-galaxy/",
            sourceTitle: "Samsung Newsroom"
        },
        {
            name: "Samsung Family Hub 1.0 Marketplace",
            yearClosed: 2019,
            yearsActive: "2016–2019",
            category: "IoT / Refrigerators",
            description: "App marketplace inside Family Hub refrigerators for grocery ordering and entertainment.",
            reason: "Low user engagement; integrations were simplified to core functions and the marketplace was phased out.",
            sourceUrl: "https://news.samsung.com/global/samsung-reinvents-family-hub",
            sourceTitle: "Samsung Newsroom"
        },
        {
            name: "Samsung Link / AllShare",
            yearClosed: 2016,
            yearsActive: "2012–2016",
            category: "Media sharing / DLNA",
            description: "DLNA-based technology for streaming media between Samsung devices (phones, TVs, PCs).",
            reason: "Evolved into Samsung Flow and SmartThings; the original brand and service were discontinued.",
            sourceUrl: "https://www.samsung.com/us/support/owners/app/samsung-link",
            sourceTitle: "Samsung Support"
        },
        {
            name: "Samsung Wallet (original pre-2022)",
            yearClosed: 2022,
            yearsActive: "2019–2022",
            category: "Payments / Tickets",
            description: "Original app for loyalty cards, boarding passes, and coupons.",
            reason: "Rebranded and merged with Samsung Pay to create the new unified Samsung Wallet experience.",
            sourceUrl: "https://news.samsung.com/global/samsung-wallet-combining-samsung-pay-and-samsung-pass",
            sourceTitle: "Samsung Newsroom"
        },
        {
            name: "Samsung S Suggest",
            yearClosed: 2015,
            yearsActive: "2012–2015",
            category: "App Recommendations",
            description: "Personalized app recommendation store with exclusive rewards for Galaxy users.",
            reason: "Low user activity; Google Play Store dominated the market.",
            sourceUrl: "https://www.androidauthority.com/samsung-s-suggest-discontinued-570936/",
            sourceTitle: "Android Authority"
        },
        {
            name: "Samsung WatchON",
            yearClosed: 2017,
            yearsActive: "2013–2017",
            category: "TV Remote & Guide",
            description: "Universal TV remote control with EPG guide and show recommendations using IR blaster.",
            reason: "Features moved to Samsung TV Plus and SmartThings; the standalone app was removed from Galaxy Store.",
            sourceUrl: "https://r2.community.samsung.com/t5/Galaxy-S8/Samsung-WatchON/td-p/1793915",
            sourceTitle: "Samsung Community"
        },
        {
            name: "Samsung Scrapbook",
            yearClosed: 2016,
            yearsActive: "2013–2016",
            category: "Notes / Content Clipping",
            description: "Digital notebook service for saving web content, images, and ideas.",
            reason: "Absorbed into Samsung Notes. Core features were migrated, then the independent app was discontinued.",
            sourceUrl: "https://r2.community.samsung.com/t5/Galaxy-S-Notes/Scrapbook-missing-in-Nougat/td-p/1644856",
            sourceTitle: "Samsung Community"
        },
        {
            name: "Samsung AdHub (Legacy)",
            yearClosed: 2019,
            yearsActive: "2011–2019",
            category: "Ad Platform",
            description: "Advertising network for Galaxy Store app developers to monetize their creations.",
            reason: "Reorganized into Samsung Ads; the legacy AdHub platform was shut down for strategic reasons.",
            sourceUrl: "https://developer.samsung.com/adhub",
            sourceTitle: "Samsung Developers"
        },
        {
            name: "Samsung Video Library",
            yearClosed: 2017,
            yearsActive: "2014–2017",
            category: "Video / Media",
            description: "App for cataloging and watching personal videos with TV casting support.",
            reason: "Merged into Samsung Gallery due to duplicate functionality.",
            sourceUrl: "https://www.samsung.com/us/support/owners/app/video-library",
            sourceTitle: "Samsung Support"
        },
        {
            name: "Samsung Email (Cloud Sync Version)",
            yearClosed: 2017,
            yearsActive: "2013–2017",
            category: "Email Client",
            description: "Advanced email client with Exchange integration and Samsung Cloud sync for messages.",
            reason: "Simplified to a standard client; cloud email sync was removed due to security risks and redundancy.",
            sourceUrl: "https://www.xda-developers.com/samsung-cloud-removing-email-sync-gallery-sync-drive-storage/",
            sourceTitle: "XDA Developers"
        }
    ];

    // Sort services by yearClosed descending (most recent first)
    const killedServices = [...killedServicesRaw].sort((a, b) => b.yearClosed - a.yearClosed);

    let currentFilter = "";

    function filterServices() {
        const searchTerm = document.getElementById("searchInput").value.toLowerCase().trim();
        currentFilter = searchTerm;
        let filtered = killedServices.filter(service => {
            if (searchTerm === "") return true;
            const yearStr = service.yearClosed.toString();
            const yearsActiveStr = service.yearsActive.toString();
            const inName = service.name.toLowerCase().includes(searchTerm);
            const inCategory = service.category.toLowerCase().includes(searchTerm);
            const inDesc = service.description.toLowerCase().includes(searchTerm);
            const inReason = service.reason.toLowerCase().includes(searchTerm);
            const inYear = yearStr.includes(searchTerm);
            const inYearsActive = yearsActiveStr.includes(searchTerm);
            return inName || inCategory || inDesc || inReason || inYear || inYearsActive;
        });
        
        renderProjects(filtered);
        document.getElementById("visibleCount").innerText = filtered.length;
        document.getElementById("totalCount").innerText = killedServices.length;
    }

    function renderProjects(servicesArray) {
        const container = document.getElementById("projectsContainer");
        if (!servicesArray.length) {
            container.innerHTML = `
                <div class="no-results">
                    <h3>💀 Nothing found</h3>
                    <p>No discontinued services match "${escapeHtml(currentFilter)}". Try another keyword.</p>
                    <p style="margin-top: 0.7rem; font-size:0.85rem;">Examples: "messenger", "music", "2017", "cloud", "VR"</p>
                </div>
            `;
            return;
        }

        container.innerHTML = servicesArray.map(service => `
            <div class="card">
                <div class="card-header">
                    <div>
                        <span class="service-name">
                            <a href="${escapeHtml(service.sourceUrl)}" target="_blank" rel="noopener noreferrer" title="Read more about ${escapeHtml(service.name)}">
                                ${escapeHtml(service.name)}
                            </a>
                            <span class="closure-badge">⚰️ closed</span>
                        </span>
                    </div>
                    <div class="meta">
                        <span class="year">📅 Closed: ${service.yearClosed}</span>
                        <span class="years-active">⏱️ Active: ${escapeHtml(service.yearsActive)}</span>
                        <span class="category">📂 ${escapeHtml(service.category)}</span>
                    </div>
                </div>
                <div class="card-body">
                    <div class="description">${escapeHtml(service.description)}</div>
                    <div class="reason"><strong>📌 Shutdown reason:</strong> ${escapeHtml(service.reason)}</div>
                </div>
                <div class="card-footer">
                    <span class="memorial">🕯️ Service discontinued</span>
                </div>
            </div>
        `).join('');
    }

    function escapeHtml(str) {
        if (!str) return '';
        return str
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    function init() {
        renderProjects(killedServices);
        document.getElementById("visibleCount").innerText = killedServices.length;
        document.getElementById("totalCount").innerText = killedServices.length;
        const searchInput = document.getElementById("searchInput");
        searchInput.addEventListener("input", filterServices);
        searchInput.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                searchInput.value = "";
                filterServices();
            }
        });
    }

    init();
