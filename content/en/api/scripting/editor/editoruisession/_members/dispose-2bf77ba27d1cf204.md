---
uid: api.2bf77ba27d1cf204c1ca3c25c903f505e066147b248476630de6b58ee90aac27
symbol: "scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.EditorUiSession.Dispose"
source: xml
reviewed: 5ffd427a0b26a67e18c10f3714d3a0cb801747c64d65d613f21253e7c64e1f05
title: "Dispose"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Releases presentation state after all drawing scopes and domain edit gestures have ended.

**Exception `T:System.InvalidOperationException`:** A drawing scope is active or the caller is not the owner thread.
