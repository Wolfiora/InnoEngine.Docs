---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.9b15cb680c62c56b916570a758b50141d97da02d1d88db83013829d1a6a2965e
symbol: engine:Inno.Audio:M:Inno.Audio.AudioStreamReader.ReadAsync(System.Memory{System.Single},System.Threading.CancellationToken)
title: AudioStreamReader.ReadAsync
kind: api
owners:
- Inno.Audio
apiSurface: source-clr
sourceFingerprint: 22510be641ae39bc7165f5add70cbe60c6e75faedee2ec8c35649cc4f9ac19c6
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
