---
uid: api.3fef740b7516d0e06d030f61db46506b5305ab1dab39891d25e3c21e57f48874
symbol: "engine:Inno.Extensibility.Types:M:Inno.Extensibility.Types.TypeCacheSnapshot.GetAttribute\u0060\u00601(Inno.Extensibility.Types.TypeRef,System.Boolean)"
source: xml
reviewed: f5d6653ceca79f11b5f38c9188c28093a7070997a16b987404d4ee01a1012d87
title: "GetAttribute"
kind: api
owners: [Inno.Extensibility.Types]
apiSurface: source-clr
---

Reads a single extension attribute without requiring runtime reflection.

**Type parameter `TAttribute`:** The attribute contract requested by the caller.

**Parameter `type`:** A declaration in this snapshot.

**Parameter `inherit`:** Whether effective inherited attributes participate.

**Returns:** The matching attribute, or null when absent; duplicate singleton attributes throw.
