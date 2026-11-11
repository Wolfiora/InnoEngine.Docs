---
title: "ImGuiFocusedFlags"
description: "Reference for ImGuiFocusedFlags in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.6409672600fbcc77
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
---
# `ImGuiFocusedFlags`

This reference describes `ImGuiFocusedFlags` in `Inno.Editor.ImGui`. Read the [shared contract](../../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`AnyWindow`](#api-ad8c8a1ce4df6a50) | Field |
| [`ChildWindows`](#api-dfd654a0b69134eb) | Field |
| [`DockHierarchy`](#api-3b29a230e9eb1b2b) | Field |
| [`None`](#api-defede031d1199e0) | Field |
| [`NoPopupHierarchy`](#api-8d36201cd1e8d5b8) | Field |
| [`RootAndChildWindows`](#api-9391e7f0e292d164) | Field |
| [`RootWindow`](#api-e6ea4166e67aab4e) | Field |

## Type declaration

<a id="api-6409672600fbcc77"></a>
<!-- api: T:Inno.Editor.ImGui.ImGuiFocusedFlags 196eb2ed75d0d3155a7158443e558fb128c6aa16e8b5c1bba0df921abea9a4c7 -->

```csharp
public enum Inno.Editor.ImGui.ImGuiFocusedFlags : int
```

Defines the supported focused flags choices at the Editor presentation boundary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiFocusedFlags.cs#L8).

## `AnyWindow`

<a id="api-ad8c8a1ce4df6a50"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiFocusedFlags.AnyWindow 4cc49ef85ca33a41e7dc17ed61130a85c809738e1346bedbd678ae2fc9b10450 -->

```csharp
Inno.Editor.ImGui.ImGuiFocusedFlags.AnyWindow = 4
```

Return true if any window is focused. Important: If you are trying to tell how to dispatch your low-level inputs, do NOT use this. Use 'io.WantCaptureMouse' instead! Please read the FAQ!


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiFocusedFlags.cs#L25).

## `ChildWindows`

<a id="api-dfd654a0b69134eb"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiFocusedFlags.ChildWindows 33097d2b2a432e7e02eefe4f818f20a4d89c6b25ae998c7bba47ed3275d297ba -->

```csharp
Inno.Editor.ImGui.ImGuiFocusedFlags.ChildWindows = 1
```

Return true if any children of the window is focused


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiFocusedFlags.cs#L17).

## `DockHierarchy`

<a id="api-3b29a230e9eb1b2b"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiFocusedFlags.DockHierarchy 57444607743823eb95f34b7147e9b6a287c80c8ae2b65dd5f71973509c79be11 -->

```csharp
Inno.Editor.ImGui.ImGuiFocusedFlags.DockHierarchy = 16
```

Consider docking hierarchy (treat dockspace host as parent of docked window) (when used with _ChildWindows or _RootWindow)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiFocusedFlags.cs#L33).

## `None`

<a id="api-defede031d1199e0"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiFocusedFlags.None 4094564c847367b4c3f32db57012c0283a70c94be6338b7a7d9dafa6dc870c60 -->

```csharp
Inno.Editor.ImGui.ImGuiFocusedFlags.None = 0
```

Uses the ordinary behavior without additional options.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiFocusedFlags.cs#L13).

## `NoPopupHierarchy`

<a id="api-8d36201cd1e8d5b8"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiFocusedFlags.NoPopupHierarchy c2ff8cc44ce5716500ee2ae477746207f359c94ea8449bf57103321c21d944e2 -->

```csharp
Inno.Editor.ImGui.ImGuiFocusedFlags.NoPopupHierarchy = 8
```

Do not consider popup hierarchy (do not treat popup emitter as parent of popup) (when used with _ChildWindows or _RootWindow)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiFocusedFlags.cs#L29).

## `RootAndChildWindows`

<a id="api-9391e7f0e292d164"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiFocusedFlags.RootAndChildWindows fb4a93e4d6158dc1232e63a29e4e9eb65880b30a07332ba1ef74316cc1b65a66 -->

```csharp
Inno.Editor.ImGui.ImGuiFocusedFlags.RootAndChildWindows = Inno.Editor.ImGui.ImGuiFocusedFlags.ChildWindows | Inno.Editor.ImGui.ImGuiFocusedFlags.RootWindow
```

Selects the root and child windows presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiFocusedFlags.cs#L37).

## `RootWindow`

<a id="api-e6ea4166e67aab4e"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiFocusedFlags.RootWindow 52fc16f7112c14acfd88ae0e5faeec829f89627883e32b5ce977def20ed8314e -->

```csharp
Inno.Editor.ImGui.ImGuiFocusedFlags.RootWindow = 2
```

Test from root window (top most parent of the current hierarchy)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiFocusedFlags.cs#L21).
