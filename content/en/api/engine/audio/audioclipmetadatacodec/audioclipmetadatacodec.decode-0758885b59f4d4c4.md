---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.0758885b59f4d4c44851dfddbe5c3c1aa937de56a5768b35770284355cc1e068
symbol: engine:Inno.Audio:M:Inno.Audio.AudioClipMetadataCodec.Decode(System.ReadOnlySpan{System.Byte})
title: AudioClipMetadataCodec.Decode
kind: api
owners:
- Inno.Audio
apiSurface: source-clr
sourceFingerprint: 85fdd29d9dfe76bdaafb150ffc070c5a44798aadf941bbf9f34ec58a6a4e1763
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
