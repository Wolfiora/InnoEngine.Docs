---
title: "EditorStyleMetrics — Method: SetCompactMode"
description: "Exact Method: SetCompactMode contracts in EditorStyleMetrics."
uid: api.inno.editor.imgui.editor-script.ac9413d35211dff5
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.933382d010c02cca#type-declaration
---
# `EditorStyleMetrics`: Method: SetCompactMode

Read these exact member contracts together with the [containing type](innoeditor.imgui.editorstylemetrics.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `SetCompactMode`

<a id="api-ab2d1cf272313b4c"></a>
<!-- api: M:InnoEditor.ImGui.EditorStyleMetrics.SetCompactMode(System.Boolean) ca31d5061299e64db886f547221df34ae3eda880a49fbd945d01b57f8545bf8c -->

```csharp
public bool InnoEditor.ImGui.EditorStyleMetrics.SetCompactMode(bool value)
```

Requests comfortable or compact density without changing an active session frame.

**Parameter `value`:** `true` for compact density.

**Returns:** `true` when the requested density changed; owned drawing applies it at the next frame preparation.

**Throws `System.ObjectDisposedException`:** The owning session has retired or is no longer available.

**Throws `System.InvalidOperationException`:** The caller is not the owning session's thread.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Styling/EditorStyleMetrics.cs#L78).
