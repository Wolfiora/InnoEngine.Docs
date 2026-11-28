---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.ac52e2f8dddecca2d8afb4ba636dfbdfafb20f9d9674a5c03d890a8bbafb0848
symbol: scripting:Inno.Audio:M:InnoEngine.Audio.AudioClipMetadataCodec.Decode(System.ReadOnlySpan{System.Byte})
title: AudioClipMetadataCodec.Decode
kind: api
owners:
- Inno.Audio
apiSurface: editor-script
sourceFingerprint: 2c7401341942d5953a3744cb839ba8a0b1480de7c62afe6a5c0abc106651bff8
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `payload`:** Complete runtime header bytes.

## Returns

Valid imported audio metadata.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown when the header is truncated, corrupt, or semantically invalid.
