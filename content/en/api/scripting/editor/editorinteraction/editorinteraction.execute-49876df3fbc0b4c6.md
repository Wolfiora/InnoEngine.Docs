---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.49876df3fbc0b4c656fa24af7ff971e2b4781a174997218ad1f88edd2e1df3bd
symbol: scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorInteraction.Execute(System.String,System.Object)
title: EditorInteraction.Execute
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: editor-script
reviewed: 6122142bb3167ae98c4618feab976818d383228c4049bca065b1a4a50f32669b
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `action`:** The stable action name.

**Parameter `argument`:** An optional action argument.

## Returns

`true` when a visible and enabled action executed; otherwise, `false`.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `action` is empty.
