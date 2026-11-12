---
title: "EditorUiInput"
description: "Reference for EditorUiInput in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.editor-script.14e46505d59a9ff5
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
---
# `EditorUiInput`

This reference describes `EditorUiInput` in `Inno.Editor.ImGui`. Read the [shared contract](../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`alt`](#api-c07cd97bf9d48450) | Property |
| [`control`](#api-a220d15a85ff4486) | Property |
| [`deltaTime`](#api-32efbb707a2af22b) | Property |
| [`framebufferScale`](#api-96fa00c721452765) | Property |
| [`mouseDelta`](#api-333951792a4e2bc3) | Property |
| [`shift`](#api-b98ef8458f805ce0) | Property |
| [`super`](#api-83aaec50f214b209) | Property |
| [`wantsText`](#api-84c4959f1841cb00) | Property |
| [`wheel`](#api-e30fda65c0417d1d) | Property |

## Type declaration

<a id="api-14e46505d59a9ff5"></a>
<!-- api: T:InnoEditor.ImGui.EditorUiInput c4a5fa0035ff9aaabf5ab8577700571f5ca7b14b93b00ec7b045ee14d4b9f9f3 -->

```csharp
public readonly struct InnoEditor.ImGui.EditorUiInput
```

Copies frame input facts used by presentation without exposing native input storage.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Runtime/EditorUiInput.cs#L8).

## `alt`

<a id="api-c07cd97bf9d48450"></a>
<!-- api: P:InnoEditor.ImGui.EditorUiInput.alt 368e90765b0cd31473e9d1d15842efdd6faa199ab1ffaa939ebeacc064a882df -->

```csharp
public bool InnoEditor.ImGui.EditorUiInput.alt { get; }
```

Gets whether Alt is held.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Runtime/EditorUiInput.cs#L13).

## `control`

<a id="api-a220d15a85ff4486"></a>
<!-- api: P:InnoEditor.ImGui.EditorUiInput.control c6284e81d3c377450ddaaae0a3e4416965ad5da33c8be273fe11572beb8e86f1 -->

```csharp
public bool InnoEditor.ImGui.EditorUiInput.control { get; }
```

Gets whether the physical Control modifier is held, independently of native shortcut conventions.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Runtime/EditorUiInput.cs#L17).

## `deltaTime`

<a id="api-32efbb707a2af22b"></a>
<!-- api: P:InnoEditor.ImGui.EditorUiInput.deltaTime 3b7ee6b2e24e73f2d348d671b28cff287f49287f0c6e2c48ab568d43253a1ec2 -->

```csharp
public float InnoEditor.ImGui.EditorUiInput.deltaTime { get; }
```

Gets the frame duration in seconds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Runtime/EditorUiInput.cs#L41).

## `framebufferScale`

<a id="api-96fa00c721452765"></a>
<!-- api: P:InnoEditor.ImGui.EditorUiInput.framebufferScale 29ea1df6606d19799fa91110ddf784d395c0bf1fa73fa11daad31205308f245f -->

```csharp
public System.Numerics.Vector2 InnoEditor.ImGui.EditorUiInput.framebufferScale { get; }
```

Gets the drawable pixel scale relative to logical UI coordinates.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Runtime/EditorUiInput.cs#L45).

## `mouseDelta`

<a id="api-333951792a4e2bc3"></a>
<!-- api: P:InnoEditor.ImGui.EditorUiInput.mouseDelta 11857f7a63fd9989376cc20ca15d2cd1bf4e659e25ae70a542a9b6dac82fe810 -->

```csharp
public System.Numerics.Vector2 InnoEditor.ImGui.EditorUiInput.mouseDelta { get; }
```

Gets the current pointer movement in UI units.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Runtime/EditorUiInput.cs#L33).

## `shift`

<a id="api-b98ef8458f805ce0"></a>
<!-- api: P:InnoEditor.ImGui.EditorUiInput.shift b2ea65d628770d14b1a02c8a67cde434df33878047c721cabdf43f7c0883f5b1 -->

```csharp
public bool InnoEditor.ImGui.EditorUiInput.shift { get; }
```

Gets whether Shift is held.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Runtime/EditorUiInput.cs#L21).

## `super`

<a id="api-83aaec50f214b209"></a>
<!-- api: P:InnoEditor.ImGui.EditorUiInput.super 45677f057d9ecfa021adae5cba3e598f9cbcb6a4d7e11cf012c6b76c341a1098 -->

```csharp
public bool InnoEditor.ImGui.EditorUiInput.super { get; }
```

Gets whether the physical Super modifier is held, independently of native shortcut conventions.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Runtime/EditorUiInput.cs#L25).

## `wantsText`

<a id="api-84c4959f1841cb00"></a>
<!-- api: P:InnoEditor.ImGui.EditorUiInput.wantsText b8b3e0f448b55798a5c467f2bb655362a2df28a7d50218477eac9e37a43c5aec -->

```csharp
public bool InnoEditor.ImGui.EditorUiInput.wantsText { get; }
```

Gets whether an active control owns text input.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Runtime/EditorUiInput.cs#L29).

## `wheel`

<a id="api-e30fda65c0417d1d"></a>
<!-- api: P:InnoEditor.ImGui.EditorUiInput.wheel 2da3b7fdbe9fe75e933fe4f7876c9cea38ee145b30d2fa2cdacb9694aa244f1f -->

```csharp
public float InnoEditor.ImGui.EditorUiInput.wheel { get; }
```

Gets the vertical scroll movement.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Runtime/EditorUiInput.cs#L37).
