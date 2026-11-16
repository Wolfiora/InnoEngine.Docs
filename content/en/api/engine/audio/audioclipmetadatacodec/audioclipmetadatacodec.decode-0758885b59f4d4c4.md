---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.0758885b59f4d4c44851dfddbe5c3c1aa937de56a5768b35770284355cc1e068
symbol: engine:Inno.Audio:M:Inno.Audio.AudioClipMetadataCodec.Decode(System.ReadOnlySpan{System.Byte})
title: AudioClipMetadataCodec.Decode
kind: api
owners:
- Inno.Audio
apiSurface: source-clr
reviewed: f925049899859e158666ac20244433116e72664fa1b1c3e543c41e9b139a79cc
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
