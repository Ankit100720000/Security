document.addEventListener('DOMContentLoaded', () => {
    // Initialize Plyr video player
    const player = new Plyr('#player', {
        controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'fullscreen'],
        youtube: { noCookie: true, rel: 0, showinfo: 0, iv_load_policy: 3, modestbranding: 1 }
    });

    loadFooter();
});

function loadFooter() {
    const footerHTML = `
        <div class="container px-0">
            <div class="row align-items-center py-2">
                <!-- Left Logo -->
                <div class="col-md-4 text-center text-md-start mb-4 mb-md-0 d-flex gap-3 align-items-center">
                    <div class="footer-logo">
                        <a href="https://bimabachat.in/" target="_blank">
                            <img src="logo/new/Security_logo-06.png" width="100px" alt="Security Insurance Brokers">
                        </a>
                    </div>
                    <div>
                        <div class="text-white-50" style="font-size: 13px; line-height: 1.5;">
                            SECURITY INSURANCE BROKERS<br>
                            (INDIA) PRIVATE LIMITED<br>
                            Category: Direct Broker (Life & General)
                        </div>
                        <div class="mt-2">
                            <a href="https://www.facebook.com/bimabachat.in#" target="_blank" class="text-white me-2 fs-5"><i class="fa-brands fa-facebook"></i></a>
                            <a href="https://www.instagram.com/securityinsurancebrokers/" target="_blank" class="text-white me-2 fs-5"><i class="fa-brands fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/company/securityinsurancebrokers/posts/?feedView=all" target="_blank" class="text-white fs-5"><i class="fa-brands fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>
                <!-- Middle Logo -->
                <div class="col-md-4 text-center text-md-start mb-4 mb-md-0 d-flex gap-3 align-items-center">
                    <div class="footer-logo">
                        <a href="https://securityinvestments.in/" target="_blank"><img src="logo/new/Security_logo-08.png" width="100px" alt="Security Investments Limited"></a>
                    </div>
                    <div>
                        <div class="text-white-50" style="font-size: 13px; line-height: 1.5;">
                            Security Investments Limited<br>
                            AMFI-Registered Mutual Fund Distributor<br>
                            ARN-1435
                        </div>
                        <div class="mt-2">
                            <a href="https://www.facebook.com/TheBestInvestments/" target="_blank" class="text-white me-2 fs-5"><i class="fa-brands fa-facebook"></i></a>
                            <a href="https://www.instagram.com/securityinvestmentsltd/" target="_blank" class="text-white me-2 fs-5"><i class="fa-brands fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/company/security-investments-limited/posts/?feedView=all" target="_blank" class="text-white fs-5"><i class="fa-brands fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>

                <!-- Right Links -->
                <div class="col-md-4">
                    <div class="row g-1 medium small text-white-50" style="font-size: 1rem; font-weight: 400;">
                        <div class="col-4"><a href="january.html" class="text-white-50 text-decoration-none">January</a></div>
                        <div class="col-4"><a href="may.html" class="text-white-50 text-decoration-none">May</a></div>
                        <div class="col-4"><a href="september.html" class="text-white-50 text-decoration-none">September</a></div>
                        <div class="col-4"><a href="february.html" class="text-white-50 text-decoration-none">February</a></div>
                        <div class="col-4"><a href="june.html" class="text-white-50 text-decoration-none">June</a></div>
                        <div class="col-4"><a href="october.html" class="text-white-50 text-decoration-none">October</a></div>
                        <div class="col-4"><a href="march.html" class="text-white-50 text-decoration-none">March</a></div>
                        <div class="col-4"><a href="july.html" class="text-white-50 text-decoration-none">July</a></div>
                        <div class="col-4"><a href="november.html" class="text-white-50 text-decoration-none">November</a></div>
                        <div class="col-4"><a href="april.html" class="text-white-50 text-decoration-none">April</a></div>
                        <div class="col-4"><a href="august.html" class="text-white-50 text-decoration-none">August</a></div>
                        <div class="col-4"><a href="december.html" class="text-white-50 text-decoration-none">December</a></div>
                    </div>
                </div>
                
                <!-- Credits -->
                <div class="col-md-12 text-center text-white-50 mt-4">
                    <p class="small mb-0">Designed by Multichrome Studios</p>
                </div>
            </div>
        </div>
    `;

    const footerElement = document.querySelector('footer');
    if (footerElement) {
        footerElement.innerHTML = footerHTML;
        // Ensure class consistency if needed, though most styling is inner or utility.
        if (!footerElement.classList.contains('footer-section')) {
            footerElement.classList.add('footer-section');
        }
        // Add padding classes if missing (based on index.html preferred style)
        if (!footerElement.classList.contains('pt-3')) footerElement.classList.add('pt-3');
        if (!footerElement.classList.contains('pb-2')) footerElement.classList.add('pb-2');
    }
}
