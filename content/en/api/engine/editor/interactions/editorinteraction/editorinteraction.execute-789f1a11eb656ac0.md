---
uid: api.789f1a11eb656ac0716b9479e692ac9faddf390b60fc7c136827615400251558
symbol: "engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorInteraction.Execute(System.String,System.Object)"
source: xml
reviewed: c3980777c7cecb132f1d324fda53692babca2bfd994cc579f235b5db7d37a005
title: "EditorInteraction.Execute"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: source-clr
---

Executes an action for this area and target.

## Parameters

**Parameter `action`:** The stable action name.

**Parameter `argument`:** An optional action argument.

## Returns

`true` when a visible and enabled action executed; otherwise, `false`.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `action` is empty.
