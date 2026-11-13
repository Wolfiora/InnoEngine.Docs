---
uid: api.2bf77ba27d1cf204c1ca3c25c903f505e066147b248476630de6b58ee90aac27
symbol: "scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.EditorUiSession.Dispose"
source: xml
reviewed: 88b369a8640cad461afb3f46c68f2b952f2efab871abd42b9da28ac5b39e754f
title: "Dispose"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Releases presentation state after all drawing scopes and domain edit gestures have ended.

**Exception `T:System.InvalidOperationException`:** A drawing scope is active or the caller is not the owner thread.
