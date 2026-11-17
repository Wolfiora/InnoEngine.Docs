---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.3ffb97735c1c3f2c5f3047511370b2124e81e60b6c8d8352f0a94e0a9d623724
symbol: engine:Inno.Editor.Core:M:Inno.Editor.Core.EditorContext.RemoveLayoutSection(System.String)
title: EditorContext.RemoveLayoutSection
kind: api
owners:
- Inno.Editor.Core
apiSurface: source-clr
reviewed: 3711c169061ea4466ffacf2358498bae9efde70e358f0910d7d3a3901b722102
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `sectionName`:** The section name without its INI header syntax.

## Returns

`true` when an existing section was removed.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `sectionName` is empty or cannot be represented in the layout.
