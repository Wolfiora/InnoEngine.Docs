---
title: "EditorStyleMetrics — Method: SetZoom"
description: "Exact Method: SetZoom contracts in EditorStyleMetrics."
uid: api.inno.editor.imgui.470b81429011587e
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.bf7fb9424cd923b9#type-declaration
---
# `EditorStyleMetrics`: Method: SetZoom

Read these exact member contracts together with the [containing type](editorstylemetrics.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetZoom`

<a id="api-f80f62459d311584"></a>
<!-- api: M:Inno.Editor.ImGui.EditorStyleMetrics.SetZoom(System.Single) c8dd49186eaa96f18246409ac62017b13da45cd1682ffbd21d2c2ac66c8259e2 -->

```csharp
public bool Inno.Editor.ImGui.EditorStyleMetrics.SetZoom(float value)
```

Requests a bounded zoom without changing metrics partway through an owned native frame.

**Parameter `value`:** The requested UI zoom multiplier.

**Returns:** `true` when the requested zoom changed; owned drawing applies it at the next frame preparation.

**Throws `System.ArgumentOutOfRangeException`:** Thrown when `value` is not finite.

**Throws `System.ObjectDisposedException`:** The owning session has retired or is no longer available.

**Throws `System.InvalidOperationException`:** The caller is not the owning session's thread.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Styling/EditorStyleMetrics.cs#L106).
