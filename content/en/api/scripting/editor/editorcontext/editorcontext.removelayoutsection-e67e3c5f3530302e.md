---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.e67e3c5f3530302e95dcf5caff5ed0d2b2b9757ce5698ddc8cf1fad65c89c59b
symbol: scripting:Inno.Editor.Core:M:InnoEditor.Core.EditorContext.RemoveLayoutSection(System.String)
title: EditorContext.RemoveLayoutSection
kind: api
owners:
- Inno.Editor.Core
apiSurface: editor-script
reviewed: dfba94e10027d761e1e11e565c1f90287f416b8c6aba390206b25066e255980b
apiScope: Editor

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Removes one editor layout section from the in-memory document.

## Parameters

**Parameter `sectionName`:** The section name without its INI header syntax.

## Returns

`true` when an existing section was removed.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `sectionName` is empty or cannot be represented in the layout.
