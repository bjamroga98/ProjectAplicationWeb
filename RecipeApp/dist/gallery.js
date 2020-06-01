function imageGallery() {
    const galleries = document.querySelector(".galleries");
    const previews = document.querySelectorAll(".preview img");
  
    previews.forEach(preview => {
      preview.addEventListener("click", function() {
        const smallphoto = this.src;
        const bigphoto = smallphoto.replace("small", "big");
        previews.forEach(preview => preview.classList.remove("recipe-active"));
        galleries.src = bigphoto;
        preview.classList.add("recipe-active");
      });
    });
  }
  
  imageGallery();