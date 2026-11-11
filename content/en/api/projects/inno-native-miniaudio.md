---
title: MiniAudio implementation boundary
description: The native implementation behind the engine's managed audio services.
uid: project.inno-native-miniaudio
kind: project
owners:
  - Inno.Native.MiniAudio
---
# MiniAudio implementation boundary

Inno.Native.MiniAudio supports the engine's MiniAudio adapter. Game code uses [Inno.Audio](inno-audio.md); host composition uses the [managed MiniAudio adapter](inno-adapter-audio-miniaudio.md). Start with [playing audio](../../manual/audio/play-audio.md) or [backend integration](../../backends/miniaudio.md).

## Native lifetime contract

The managed adapter owns initialization, processing, callback storage and native resource retirement. Stop dependent work before releasing its audio engine/device and keep the selected module alive through cleanup. Audio callbacks cannot retain arbitrary Editor or plugin generation objects or throw across the native boundary.

Product preparation must select matching source, generated bindings and deployed library inputs. Static and dynamic products retain their own explicit configuration. Source declaration presence is not runtime or device certification.

## Documentation scope

Third-party miniaudio functions, structures, constants, pointer wrappers and raw binding examples are outside this documentation. The engine's [audio ownership explanation](../../architecture/audio-lifetime.md) remains the authority for engine consumers. Original legal notices and implementation tests remain with their owners.
