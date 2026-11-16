---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.c18ac69787547547491625973d6757f254c86bcfb0b2b022001fec031ff85d29
symbol: engine:Inno.Rendering.Assets:M:Inno.Rendering.Assets.GeometryArtifact.Decode(System.ReadOnlySpan{System.Byte})
title: GeometryArtifact.Decode
kind: api
owners:
- Inno.Rendering.Assets
apiSurface: source-clr
reviewed: 2d705b8193d1036d85488df8e332a282db7da98a995352042fb8304be9c63b78
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `bytes`:** The complete artifact payload.

## Returns

The normalized geometry represented by the payload.

## Exceptions

**Exception `T:System.IO.InvalidDataException`:** Thrown when the artifact is empty, corrupt, truncated, or contains invalid ranges.
