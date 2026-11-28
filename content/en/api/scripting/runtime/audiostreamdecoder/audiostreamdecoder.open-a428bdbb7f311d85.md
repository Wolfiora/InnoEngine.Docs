---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.a428bdbb7f311d8534a16ee2eccf80f577c7921ccfb7abb16aabf12f3acca7b2
symbol: scripting:Inno.Audio:M:InnoEngine.Audio.AudioStreamDecoder.Open(System.IO.Stream,InnoEngine.Audio.AudioClipDescriptor)
title: AudioStreamDecoder.Open
kind: api
owners:
- Inno.Audio
apiSurface: editor-script
sourceFingerprint: 459cbe2b8cea3140ca2403ee1ad11d8d76c089e5302ff82295672e797f44d5f5
apiScope: Runtime
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
