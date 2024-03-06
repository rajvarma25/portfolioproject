document.addEventListener("DOMContentLoaded", function() {
    // Get the resume link element
    var resumeLink = document.getElementById("resume-link");
    
    // Add click event listener to the resume link
    resumeLink.addEventListener("click", function(event) {
        // Prevent the default action of the link
        event.preventDefault();
        
        // Create a hidden link element
        var downloadLink = document.createElement("a");
        
        // Set the href attribute of the download link to the URL of your resume file
        downloadLink.href = "C:\Users\H\Downloads\NetResume.pdf"; // Replace with the actual path to your resume file
        
        // Set the download attribute to force download
        downloadLink.setAttribute("download", "resume.pdf");
        
        // Append the download link to the body
        document.body.appendChild(downloadLink);
        
        // Click the download link programmatically to trigger the download
        downloadLink.click();
        
        // Remove the download link from the DOM
        document.body.removeChild(downloadLink);
    });
});
