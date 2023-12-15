const ndi_base_url = "http://192.168.0.21";

// Write a comment here
const ndi_sources_request_url = `${ndi_base_url}/v1/sources`;
const ndi_sources_request_headers = { method: "GET" };
const ndi_configuration_request_url = `${ndi_base_url}/v1/configuration`;
const ndi_configuration_request_headers = { method: "POST" };

// Write a comment here
document.addEventListener("DOMContentLoaded", () => {
  fetch(ndi_sources_request_url, ndi_sources_request_headers)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // Code for what to do with the sources goes in here
    });
});
