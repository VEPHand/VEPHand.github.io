import { initDemoViewer } from "./static/js/demo-arxiv.js";

async function initViewer() {
  const response = await fetch("./assets/site_data.json");
  const siteData = await response.json();

  initDemoViewer({
    containerId: "arxiv-viewer",
    galleryId: "arxiv-thumbnail-gallery",
    thumbnailList: siteData.viewerSequences,
  });
}

initViewer().catch((err) => {
  console.error("Failed to initialize VEPHand viewer on Arxiv paper site.", err);
});
