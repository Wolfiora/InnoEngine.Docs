---
uid: api.7c0a51f8062e2da52a0c5e7c2074e5a877fe24041f25b5fc62b65f86bf14f6d1
symbol: "engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorInteraction.IsActive(System.String)"
source: xml
reviewed: cb74866a9de5fef2dae49a338e1adffc0f8cb43cc00084765467e799450d94ab
title: "IsActive"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: source-clr
---

Gets whether an action owns an active multi-frame operation for this target.

**Parameter `action`:** The stable action name.

**Returns:** `true` when the action is active for this exact target; otherwise, `false`.

**Exception `T:System.ArgumentException`:** Thrown when `action` is empty.
