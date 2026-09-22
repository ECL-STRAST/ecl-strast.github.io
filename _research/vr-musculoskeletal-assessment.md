---
title: Musculoskeletal assessment with virtual reality
order: 1
summary: Turning consumer VR headsets and controllers into reliable, low-cost instruments for measuring range of motion and neck function.
image: /web-pubs/entries/2025-santos-paz-cervical-rom/image.webp
image_caption: Cervical range of motion assessed with three VR setups of different price ranges.
publications:
  - 2026-costa-upper-limb-fov
  - 2025-santos-paz-cervical-rom
  - 2025-santos-paz-neck-function-vr
  - 2022-santos-paz-crom-app
  - 2022-rojo-elbow-rom-accuracy
---
Measuring how a joint moves is the first step in diagnosing a
musculoskeletal problem and in following a patient through treatment. The
usual tools (goniometers, inertial sensors, optical motion capture labs)
are either imprecise, operator-dependent or expensive and tied to a
laboratory. VR headsets already track the head and hands continuously and
with high precision, cost a fraction of a lab, and can be used at home.

Our question is simple: can they be trusted as clinical instruments?

## Cervical range of motion

Neck pain affects over 200 million people worldwide. We built a VR
application that guides the user through the flexion-extension, rotation
and lateral-flexion movements of a cervical range of motion (CROM)
assessment, and detects compensatory trunk movements that inflate the
result. It showed good to excellent intra- and inter-rater reliability in
asymptomatic adults, and later work compared high-end, mid-range and
low-end headsets (HTC Vive Pro Eye, HP Reverb G2, Meta Quest 2): all were
reliable, and the cheaper devices were not worse.

{% include video.html youtube="QTs-b04VzLQ" caption="The CROM assessment application." %}

## Function, not only range

Maximal range of motion does not always reflect how a patient copes with
daily life. We simulate activities of daily living, such as harvesting
apples, and analyse the head kinematics recorded during the task. People
with neck pain move their head more slowly, and spectral analysis of the
movement separates them from pain-free participants.

## How accurate is the tracking?

We benchmark VR tracking against validated references: the Oculus Touch v2
controller against an inertial sensor for elbow flexion, and the Meta Quest
2 against a Vicon optical system for upper-limb trajectories, including
what happens when the hands leave the headset's field of view.

<!-- Add more subsections, figures or videos here. See the README. -->
