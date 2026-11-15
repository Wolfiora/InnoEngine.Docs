---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.3fef740b7516d0e06d030f61db46506b5305ab1dab39891d25e3c21e57f48874
symbol: engine:Inno.Extensibility.Types:M:Inno.Extensibility.Types.TypeCacheSnapshot.GetAttribute``1(Inno.Extensibility.Types.TypeRef,System.Boolean)
title: TypeCacheSnapshot.GetAttribute
kind: api
owners:
- Inno.Extensibility.Types
apiSurface: source-clr
reviewed: a44c5f9d50942610ccb54ff6f8d6c89e4ace55eb998dabd37b486d1a8003a531

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Reads a single extension attribute without requiring runtime reflection.

## Type parameters

**Type parameter `TAttribute`:** The attribute contract requested by the caller.

## Parameters

**Parameter `type`:** A declaration in this snapshot.

**Parameter `inherit`:** Whether effective inherited attributes participate.

## Returns

The matching attribute, or null when absent; duplicate singleton attributes throw.
