---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.20ef235d8adeb250720fe8c18054e0dfdf4e294a0ff79d1f1b926773f0625f11
symbol: scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorInteraction.IsActive(System.String)
title: EditorInteraction.IsActive
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: editor-script
reviewed: 0566064dd1dba93edf1f69213d1db674ae54a70b60aee2c96a554528d588de68
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `action`:** The stable action name.

## Returns

`true` when the action is active for this exact target; otherwise, `false`.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `action` is empty.
