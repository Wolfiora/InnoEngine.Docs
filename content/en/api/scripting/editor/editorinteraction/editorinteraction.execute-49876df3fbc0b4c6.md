---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.49876df3fbc0b4c656fa24af7ff971e2b4781a174997218ad1f88edd2e1df3bd
symbol: scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorInteraction.Execute(System.String,System.Object)
title: EditorInteraction.Execute
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: editor-script
reviewed: ce25df80535262c691da81ec346ab9289986b6db7bce43f41f865026f2e27d76
apiScope: Editor

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Executes an action for this area and target.

## Parameters

**Parameter `action`:** The stable action name.

**Parameter `argument`:** An optional action argument.

## Returns

`true` when a visible and enabled action executed; otherwise, `false`.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `action` is empty.
