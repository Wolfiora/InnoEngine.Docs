---
# Identity metadata. Set once; other pages reference uid through contracts.
uid: project.inno-native-miniaudio
kind: project

# Relation metadata. Name actual engine projects and page identities; validation rejects unknown values.
owners:
  - Inno.Native.MiniAudio

# Authoring metadata. Edit these fields and the text below.
title: MiniAudio implementation boundary
description: The native implementation behind the engine's managed audio services.
---
# MiniAudio implementation boundary

Inno.Native.MiniAudio supports the engine's MiniAudio adapter. Game code uses [Inno.Audio](../../architecture/projects/inno-audio.md); host composition uses the [managed MiniAudio adapter](inno-adapter-audio-miniaudio.md). Start with [playing audio](../../manual/audio/play-audio.md) or [backend integration](../miniaudio.md).

## Native lifetime contract

The managed adapter owns initialization, processing, callback storage and native resource retirement. Stop dependent work before releasing its audio engine/device and keep the selected module alive through cleanup. Audio callbacks cannot retain arbitrary Editor or plugin generation objects or throw across the native boundary.

Product preparation must select matching source, generated bindings and deployed library inputs. Static and dynamic products retain their own explicit configuration. Source declaration presence is not runtime or device certification.

## Documentation scope

Third-party miniaudio functions, structures, constants, pointer wrappers and raw binding examples are outside this documentation. The engine's [audio ownership explanation](../../architecture/audio-lifetime.md) remains the authority for engine consumers. Original legal notices and implementation tests remain with their owners.
