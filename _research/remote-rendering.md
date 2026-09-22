---
title: Remote rendering for VR
order: 6
summary: Streaming PC-grade virtual reality from the cloud or the edge to commodity hardware, with gaze-aware low-latency encoding.
image: /web-pubs/entries/2025-santos-paz-najvr-rendering/image.webp
image_caption: The NajVR remote rendering architecture.
publications:
  - 2025-santos-paz-najvr-rendering
---
Tethered VR setups look better than standalone headsets but need
expensive, high-performance computers, which limits where they can be
used, including in clinics and at patients' homes. Rendering the
experience on shared cloud or edge resources is cheaper and more
portable, if the latency is low enough.

## NajVR

NajVR is a plug-and-play remote rendering architecture that needs only
commodity hardware on the client and no changes to the VR application or
its runtime. The client captures poses and events from the VR hardware; a
server-side driver presents them as if the hardware were connected
locally, then captures, encodes and streams the frames back. It uses LHE,
a low-latency codec resistant to packet loss that exploits the user's gaze
to improve encoding.
