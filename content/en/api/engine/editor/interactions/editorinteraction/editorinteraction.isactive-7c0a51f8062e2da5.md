---
uid: api.7c0a51f8062e2da52a0c5e7c2074e5a877fe24041f25b5fc62b65f86bf14f6d1
symbol: "engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorInteraction.IsActive(System.String)"
source: xml
reviewed: 118bd29134e761b97fb42707fd6603833992e40e341c44e0ede07a681c539d6b
title: "EditorInteraction.IsActive"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: source-clr
---

Gets whether an action owns an active multi-frame operation for this target.

## Parameters

**Parameter `action`:** The stable action name.

## Returns

`true` when the action is active for this exact target; otherwise, `false`.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `action` is empty.
