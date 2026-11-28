---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.6ca30e4aa5c91dc32a3a469fa60e88b1543bb0e85fa5603a48d6ba187eeef596
symbol: engine:Inno.Audio:M:Inno.Audio.AudioStreamDecoder.Open(System.IO.Stream,Inno.Audio.AudioClipDescriptor)
title: AudioStreamDecoder.Open
kind: api
owners:
- Inno.Audio
apiSurface: source-clr
sourceFingerprint: f699d4dd1416501390edd039889b494ce3675f7b78a217de8854876bae01049e
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `encoded`:** An engine-owned reader positioned at the start. It remains open until the cursor retires.

**Parameter `descriptor`:** Imported format, channel count and sample rate for the decoded frames.

## Returns

A new cursor. Throw InvalidDataException for a corrupt or mismatched header.
