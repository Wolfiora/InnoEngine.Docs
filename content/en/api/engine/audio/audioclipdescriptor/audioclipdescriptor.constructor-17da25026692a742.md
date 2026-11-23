---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.17da25026692a742e053ef9ab8ffe83d9712ccd182ab5a01af73fa4cfaeecb9b
symbol: engine:Inno.Audio:M:Inno.Audio.AudioClipDescriptor.#ctor(Inno.Audio.AudioCodecID,Inno.Audio.AudioClipLoadMode,System.Int32,System.Int32,System.Int64,System.Int64)
title: AudioClipDescriptor.Constructor
kind: api
owners:
- Inno.Audio
apiSurface: source-clr
sourceFingerprint: 9e732145a6bacda24669fa6373625b496aff174f989352a664f879c32a0b270e
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `codec`:** Codec protocol used by the artifact.

**Parameter `loadMode`:** Required decoded or streamed storage strategy.

**Parameter `channels`:** Encoded channel count.

**Parameter `sampleRate`:** Encoded sample rate in frames per second.

**Parameter `frameCount`:** Total decoded frame count when known.

**Parameter `encodedByteLength`:** Encoded artifact length in bytes.

## Exceptions

**Exception `T:System.ArgumentOutOfRangeException`:** The load mode is undefined or a channel, rate, frame, or byte count is outside its valid range.
