let cloudName = 'dbsdadme8';
let unSignedPresetUpload = 'ptlicetb';

let fileInput = document.getElementById('fileInputInput');
let gallery = document.getElementById('update');

if (fileInput) {
    fileInput.addEventListener('change', (e) => {
        e.preventDefault();
        let file = e.target.files[0];

        if (!file) return; // Handle case where no file is selected.

        let url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;

        let fd = new FormData();
        fd.append('upload_preset', unSignedPresetUpload);
        fd.append('file', file);

        fetch(url, {
            method: 'POST',
            body: fd,
        })
            .then((response) => response.json())
            .then((data) => {
                let resourceUrl = data.secure_url;

                let transformedUrl = resourceUrl.replace(
                    'upload/',
                    'upload/c_crop,g_face'
                );
                console.log('Uploaded successfully', resourceUrl);

                let img = new Image();
                img.src = transformedUrl;

                gallery.appendChild(img);

                // Update profile
                document
                    .getElementById('update')
                    .addEventListener('click', () => {
                        updateProfile(auth.currentUser, {
                            displayName: 'qazi',
                            photoURL: transformedUrl,
                        })
                            .then(() => {
                                Swal.fire({
                                    input: 'url',
                                    inputLabel: 'URL address',
                                    inputPlaceholder: 'Enter the URL',
                                }).then(({ value: url }) => {
                                    if (url) Swal.fire(`Entered URL: ${url}`);
                                });
                            })
                            .catch((error) => {
                                console.log(error);
                                Swal.fire({
                                    icon: 'error',
                                    title: 'Oops...',
                                    text: 'Something went wrong!',
                                    footer: `Please enter a valid URL path!`,
                                });
                            });
                    });
            })
            .catch((error) => {
                console.error('Error during upload:', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Upload Failed',
                    text: 'Please try again!',
                });
            });
    });
} else {
    console.error('File input element not found.');
}
