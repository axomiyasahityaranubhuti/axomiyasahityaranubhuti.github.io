/* ================================
   ACCORDION SYSTEM
================================ */
document.addEventListener("DOMContentLoaded", function () {

    const items = document.querySelectorAll(".accordion-item");

    items.forEach(item => {
        const header = item.querySelector(".accordion-header");

        header.addEventListener("click", function () {

            items.forEach(other => {
                if (other !== item && other.classList.contains("active")) {
                    other.classList.remove("active");
                }
            });

            item.classList.toggle("active");
        });
    });

});

/* ================================
   OPEN PUBHTML5 FLIPBOOK (MONTH-WISE)
================================ */
function openBook(month) {

    // Month-wise PubHTML5 links (only January is live now)
    const monthLinks = {
        jan: "https://online.pubhtml5.com/idgyg/glsk/",   // YOUR JANUARY LINK

        // Future months (empty now)
        feb: "",
        mar: "",
        apr: "",
        may: "",
        jun: "",
        jul: "",
        aug: "",
        sep: "",
        oct: "",
        nov: "",
        dec: ""
    };

    // If month is not uploaded yet
    if (!monthLinks[month]) {
        alert("এই মাহৰ আলোচনী এতিয়াও প্ৰকাশ কৰা হোৱা নাই। অনুগ্ৰহ কৰি পিছত আকৌ চাওক।");
        return;
    }

    // Open the correct month book
    window.location.href = "flipbook.html?month=" + month;
}
/* ===== FEEDBACK FORM SYSTEM (PRO VERSION) ===== */

const feedbackForm = document.getElementById("feedbackForm");

if (feedbackForm) {

    const loadingMsg = document.getElementById("feedbackLoading");
    const successMsg = document.getElementById("feedbackSuccess");
    const errorMsg = document.getElementById("feedbackError");
    const submitBtn = document.getElementById("feedbackBtn");

    feedbackForm.addEventListener("submit", async function (e) {
        e.preventDefault();

        // Reset messages
        successMsg.style.display = "none";
        errorMsg.style.display = "none";

        // Show loading
        loadingMsg.style.display = "block";
        submitBtn.disabled = true;

        const formData = new FormData(feedbackForm);

        try {
            const response = await fetch(feedbackForm.action, {
                method: "POST",
                body: formData,
                headers: {
                    "Accept": "application/json"
                }
            });

            loadingMsg.style.display = "none";
            submitBtn.disabled = false;

            if (response.ok) {
                successMsg.style.display = "block";
                feedbackForm.reset();

                // Auto hide success after 5 seconds
                setTimeout(() => {
                    successMsg.style.display = "none";
                }, 5000);

            } else {
                errorMsg.style.display = "block";
            }

        } catch (error) {
            loadingMsg.style.display = "none";
            submitBtn.disabled = false;
            errorMsg.style.display = "block";
        }
    });
}

// Smooth scroll for certificate month buttons
document.querySelectorAll('.certificate-grid a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
