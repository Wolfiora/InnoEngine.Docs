---
title: "EditorStyleMetrics — Method: SetZoom"
description: "Exact Method: SetZoom contracts in EditorStyleMetrics."
uid: api.inno.editor.imgui.editor-script.efc66d57c36ee456
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.933382d010c02cca#type-declaration
---
# `EditorStyleMetrics`: Method: SetZoom

Read these exact member contracts together with the [containing type](innoeditor.imgui.editorstylemetrics.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `SetZoom`

<a id="api-0e53510265e78f8f"></a>
<!-- api: M:InnoEditor.ImGui.EditorStyleMetrics.SetZoom(System.Single) b18f8544d27f420ab826cf4d8f02da07731552fe5a1a961a049c19e6eaed8b9f -->

```csharp
public bool InnoEditor.ImGui.EditorStyleMetrics.SetZoom(float value)
```

Requests a bounded zoom without changing metrics partway through an owned native frame.

**Parameter `value`:** The requested UI zoom multiplier.

**Returns:** `true` when the requested zoom changed; owned drawing applies it at the next frame preparation.

**Throws `System.ArgumentOutOfRangeException`:** Thrown when `value` is not finite.

**Throws `System.ObjectDisposedException`:** The owning session has retired or is no longer available.

**Throws `System.InvalidOperationException`:** The caller is not the owning session's thread.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Styling/EditorStyleMetrics.cs#L106).
