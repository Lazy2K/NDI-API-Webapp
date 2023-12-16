const ndi_base_url = "http://192.168.0.21";

// Write a comment here
const ndi_sources_request_url = `${ndi_base_url}/v1/sources`;
const ndi_sources_request_headers = { method: "GET" };
const ndi_configuration_request_url = `${ndi_base_url}/v1/configuration`;
const ndi_configuration_request_headers = { method: "POST" };

// Write a comment here
var source_1 = null;
var source_2 = null;

function switch_video_source(source) {
  const request_headers = {
    ...ndi_configuration_request_headers,
    body: JSON.stringify({ version: 1, NDI_source: source }),
  };
  fetch(ndi_configuration_request_url, request_headers).then((response) => {
    return response; // v1/configuration responds in plain text
  });
}

// Write a comment here
document.addEventListener("DOMContentLoaded", () => {
  const video_sources_selector_1 = document.getElementById("video-source-1");
  const video_sources_selector_2 = document.getElementById("video-source-2");
  const source_button_1 = document.getElementById("source-button-1");
  const source_button_2 = document.getElementById("source-button-2");

  fetch(ndi_sources_request_url, ndi_sources_request_headers)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.ndi_sources.forEach((source) => {
        var option_1 = document.createElement("option");
        var option_2 = document.createElement("option");
        option_1.innerHTML = source;
        option_1.value = source;
        option_2.innerHTML = source;
        option_2.value = source;
        video_sources_selector_1.appendChild(option_1);
        video_sources_selector_2.appendChild(option_2);
      });
    });

  // Add a comment here
  video_sources_selector_1.addEventListener("change", () => {
    source_1 = video_sources_selector_1.value;
  });
  video_sources_selector_2.addEventListener("change", () => {
    source_2 = video_sources_selector_2.value;
  });

  // Add a comment here
  source_button_1.addEventListener("click", () => {
    switch_video_source(source_1);
  });
  source_button_2.addEventListener("click", () => {
    switch_video_source(source_2);
  });
});
