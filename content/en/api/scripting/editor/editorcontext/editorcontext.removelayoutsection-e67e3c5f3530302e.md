---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.e67e3c5f3530302e95dcf5caff5ed0d2b2b9757ce5698ddc8cf1fad65c89c59b
symbol: scripting:Inno.Editor.Core:M:InnoEditor.Core.EditorContext.RemoveLayoutSection(System.String)
title: EditorContext.RemoveLayoutSection
kind: api
owners:
- Inno.Editor.Core
apiSurface: editor-script
sourceFingerprint: 778b683c17e41784ed9984d2cb4a130817015f0abae403090721d5ef0fa108c5
apiScope: Editor
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
