$(document).ready(function() {
    // 1. Smooth scrolling for navigation links
    $(".nav-link").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 70
            }, 800);
        }
    });

    // 2. Initialize Bootstrap Tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });

    // 3. Professional Form Submission Logic
    $('#agriContactForm').on('submit', function(e) {
        e.preventDefault(); // Prevent standard page reload

        const userName = $('#senderName').val();
        const submitBtn = $('#submitBtn');

        // Show loading state on button
        submitBtn.html('<span class="spinner-border spinner-border-sm me-2"></span>Processing...');
        submitBtn.prop('disabled', true);

        // Simulate network delay for a professional feel
        setTimeout(function() {
            // Hide form and show success message
            $('#formContent').fadeOut(400, function() {
                $('#successMessage h2').text("Thank You, " + userName + "!");
                $('#successMessage').removeClass('d-none');
            });
        }, 1500);
    });

    // 4. Hover effect for contact info cards
    $('.bg-success.text-white.rounded').hover(
        function() { $(this).css('transform', 'scale(1.1)'); },
        function() { $(this).css('transform', 'scale(1.0)'); }
    );

    console.log("Agri-Hub scripts loaded successfully.");
});