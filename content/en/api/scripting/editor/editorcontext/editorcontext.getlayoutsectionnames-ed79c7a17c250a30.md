---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.ed79c7a17c250a30e750f6b66b245c8d871433d9393ee90918113c1a0bcd9bc3
symbol: scripting:Inno.Editor.Core:M:InnoEditor.Core.EditorContext.GetLayoutSectionNames(System.String)
title: EditorContext.GetLayoutSectionNames
kind: api
owners:
- Inno.Editor.Core
apiSurface: editor-script
sourceFingerprint: 97c78b5544ec76226fef9ef80dea370a2b67bf8aefa0f7b59d89e55d1f66ea13
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
