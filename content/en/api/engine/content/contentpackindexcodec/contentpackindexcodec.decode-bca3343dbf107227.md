---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.bca3343dbf1072272a50b9f663bd3e1a8e1ed4b2f34ad6369528df65c2c27af0
symbol: engine:Inno.Content:M:Inno.Content.ContentPackIndexCodec.Decode(System.ReadOnlySpan{System.Byte},Inno.Core.Serialization.SerializationGeneration)
title: ContentPackIndexCodec.Decode
kind: api
owners:
- Inno.Content
apiSurface: source-clr
reviewed: 5e162c712b45e712c6587cd5ae6057204dd9fc89aab3848c31e5239ed0b34d70
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `data`:** The complete structured index bytes.

**Parameter `serialization`:** The borrowed converter generation pinned by the enclosing preparation operation.

## Returns

A newly owned immutable inventory with no duplicate or ambiguous identities.

## Exceptions

**Exception `T:System.IO.InvalidDataException`:** The bytes or inventory are malformed; no partial index is returned.
