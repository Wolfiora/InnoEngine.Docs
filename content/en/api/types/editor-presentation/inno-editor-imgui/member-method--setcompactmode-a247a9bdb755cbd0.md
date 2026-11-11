---
title: "EditorStyleMetrics — Method: SetCompactMode"
description: "Exact Method: SetCompactMode contracts in EditorStyleMetrics."
uid: api.inno.editor.imgui.a247a9bdb755cbd0
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.bf7fb9424cd923b9#type-declaration
---
# `EditorStyleMetrics`: Method: SetCompactMode

Read these exact member contracts together with the [containing type](editorstylemetrics.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetCompactMode`

<a id="api-6570a8cb1882148b"></a>
<!-- api: M:Inno.Editor.ImGui.EditorStyleMetrics.SetCompactMode(System.Boolean) f190935622d1d76bcd8fe4e42cc923316777114b35521df07058ff8549d4b78d -->

```csharp
public bool Inno.Editor.ImGui.EditorStyleMetrics.SetCompactMode(bool value)
```

Requests comfortable or compact density without changing an active session frame.

**Parameter `value`:** `true` for compact density.

**Returns:** `true` when the requested density changed; owned drawing applies it at the next frame preparation.

**Throws `System.ObjectDisposedException`:** The owning session has retired or is no longer available.

**Throws `System.InvalidOperationException`:** The caller is not the owning session's thread.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Styling/EditorStyleMetrics.cs#L78).
