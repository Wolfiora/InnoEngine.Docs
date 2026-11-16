---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.66a0bb86b36c3a2bae6a6951a5bec085391146ecc78702314c37668a4704fde8
symbol: engine:Inno.Editor.Core:M:Inno.Editor.Core.EditorContext.TryGetLayoutSection(System.String,System.Collections.Generic.IReadOnlyDictionary{System.String,System.String}@)
title: EditorContext.TryGetLayoutSection
kind: api
owners:
- Inno.Editor.Core
apiSurface: source-clr
reviewed: 5732f03e9cfe15819fd8ffe78fd759d7d8b2f8622f9a4cd23f688e0248ba45ec
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `sectionName`:** The section name without its INI header syntax.

**Parameter `values`:** The copied values when the section exists.

## Returns

`true` when the requested section exists.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `sectionName` is empty or cannot be represented in the layout.
