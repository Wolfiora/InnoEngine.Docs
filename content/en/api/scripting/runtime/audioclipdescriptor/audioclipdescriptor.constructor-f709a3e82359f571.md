---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.f709a3e82359f5714ef5ec798fdbac9d29b9301d87aaf0085496c054f2bd1d74
symbol: scripting:Inno.Audio:M:InnoEngine.Audio.AudioClipDescriptor.#ctor(InnoEngine.Audio.AudioCodecID,InnoEngine.Audio.AudioClipLoadMode,System.Int32,System.Int32,System.Int64,System.Int64)
title: AudioClipDescriptor.Constructor
kind: api
owners:
- Inno.Audio
apiSurface: editor-script
sourceFingerprint: 937c51f2caddab67a935e71628faed265f12151e70ee1e8dcf427b1676a4e177
apiScope: Runtime
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
