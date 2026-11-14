---
uid: api.0758885b59f4d4c44851dfddbe5c3c1aa937de56a5768b35770284355cc1e068
symbol: "engine:Inno.Audio:M:Inno.Audio.AudioClipMetadataCodec.Decode(System.ReadOnlySpan{System.Byte})"
source: xml
reviewed: 12039158a6ce1174c6c1ce2a7f5896e4553531dce464ca0e6370ed525281e683
title: "AudioClipMetadataCodec.Decode"
kind: api
owners: [Inno.Audio]
apiSurface: source-clr
---

Decodes and validates one compact audio runtime header.

## Parameters

**Parameter `payload`:** Complete runtime header bytes.

## Returns

Valid imported audio metadata.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown when the header is truncated, corrupt, or semantically invalid.
