---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.b30b35932215cbebadba9d599b9a3fa6f90cf2a34479b6a58f6f275d856e7173
symbol: engine:Inno.Audio:M:Inno.Audio.AudioClipDescriptor.#ctor(Inno.Audio.AudioCodecId,Inno.Audio.AudioClipLoadMode,System.Int32,System.Int32,System.Int64,System.Int64)
title: AudioClipDescriptor.Constructor
kind: api
owners:
- Inno.Audio
apiSurface: source-clr
reviewed: ccf20ac28064cbd9c75121ddfc1e6e43d951bc055c276927c77630eeeb7cf6c1
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
