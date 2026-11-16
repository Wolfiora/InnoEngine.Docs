---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.ed79c7a17c250a30e750f6b66b245c8d871433d9393ee90918113c1a0bcd9bc3
symbol: scripting:Inno.Editor.Core:M:InnoEditor.Core.EditorContext.GetLayoutSectionNames(System.String)
title: EditorContext.GetLayoutSectionNames
kind: api
owners:
- Inno.Editor.Core
apiSurface: editor-script
reviewed: 0c783e055dde95655bc7c016a8ab8cd130aff9884dbd48c6ef41db993a373a1d
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `prefix`:** The prefix to match, or an empty string for every section.

## Returns

A stable sorted snapshot of matching section names.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `prefix` is `null`.
