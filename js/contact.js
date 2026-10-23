document.getElementById("contact-form").addEventListener("submit", function (event) {
                event.preventDefault();
                const formData = new FormData(this);
                const subject = encodeURIComponent(formData.get("Subject"));
                const body = encodeURIComponent(formData.get("Message"));
                window.location.href = `${this.action}?subject=${subject}&body=${body}`;
            });