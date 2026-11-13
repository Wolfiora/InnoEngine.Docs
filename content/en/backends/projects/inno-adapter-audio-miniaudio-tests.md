---
title: MiniAudio adapter tests
description: Real native graph, mixer, voice completion and asynchronous encoded-content preparation tests.
uid: project.inno-adapter-audio-miniaudio-tests
kind: project
owners:
  - Inno.Adapter.Audio.MiniAudio.Tests
---
# MiniAudio adapter tests

`Inno.Adapter.Audio.MiniAudio.Tests` verifies the managed adapter against the real MiniAudio graph. It declares the `player` native product. Headless execution removes the output-device requirement for these scenarios, not the native dependency.

## Behavior covered

`MiniAudioDeviceTests` checks admission including undelivered completions, reopening capacity after draining, rejection of invalid inputs without poisoning existing playback, headless graph advancement, standard processors, scheduled controls and overlap between mixer generations until old voices release their graph.

`EncodedContentTests` verifies shared clips use one asynchronous encoding preparation, cancellation drains its source and permits a later attempt, and invalid encoding identity fails without leaking the source. Fixtures retain actual encoded-content ownership rather than replacing it with a successful no-op.

These assertions do not certify a sound card, audible output or every supported platform. Read [MiniAudio integration](../miniaudio.md) for the distinction between a muted device and a headless graph.

## Prepare and run

Use [native validation](../../contributing/validate-change.md#native-and-process-requirements) to prepare and deploy the exact product closure. The suite consumes its deployment index; it does not search another Editor output for a convenient DLL. Missing deployment or tools prevent a valid pass.

Keep native voice, graph, content and callback lifetime checks in their original order. Fixtures own the devices and sources they create; test discovery methods are not product API.

[Browse the scenarios, encoded source fixture and project references](https://github.com/Wolfiora/InnoEngine/tree/80fbbb550f0de634b04605b31abc4d96b3d526f6/backends/MiniAudio/tests/Inno.Adapter.Audio.MiniAudio.Tests).
