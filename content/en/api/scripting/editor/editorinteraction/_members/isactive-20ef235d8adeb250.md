---
uid: api.20ef235d8adeb250720fe8c18054e0dfdf4e294a0ff79d1f1b926773f0625f11
symbol: "scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorInteraction.IsActive(System.String)"
source: xml
reviewed: 2d383af64f510c0dae83f0dab8b33ed27b68e497cd6cd90ff72ed8b1f324bf69
title: "IsActive"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: editor-script
apiScope: Editor
---

Gets whether an action owns an active multi-frame operation for this target.

**Parameter `action`:** The stable action name.

**Returns:** `true` when the action is active for this exact target; otherwise, `false`.

**Exception `T:System.ArgumentException`:** Thrown when `action` is empty.
