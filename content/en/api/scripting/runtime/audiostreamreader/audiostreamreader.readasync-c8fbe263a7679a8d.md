---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.c8fbe263a7679a8dfe3fb41a159d67d026961fc10f953e2cfbc359f9da395827
symbol: scripting:Inno.Audio:M:InnoEngine.Audio.AudioStreamReader.ReadAsync(System.Memory{System.Single},System.Threading.CancellationToken)
title: AudioStreamReader.ReadAsync
kind: api
owners:
- Inno.Audio
apiSurface: editor-script
sourceFingerprint: 8a4defe0a9fc9344a6265b29ba912a7b4f4a70e53e8540e2288afd5cd7eb8052
apiScope: Runtime
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `samples`:** Writable storage in the declared channel layout and rate, borrowed until the returned operation completes.

**Parameter `cancellationToken`:** Cancellation requested when playback stops or the decoder generation retires. Propagate it to pending IO.

## Returns

The number of complete frames produced. Short reads are valid. Zero signifies end of stream.
