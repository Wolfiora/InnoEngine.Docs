---
title: "EditorGameInputCapture"
description: "Reference for EditorGameInputCapture in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.c8a06618f33a1b4a
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
---
# `EditorGameInputCapture`

This reference describes `EditorGameInputCapture` in `Inno.Editor.ImGui`. Read the [shared contract](../../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-f3335459f0eff76d) | Method |
| [`BeginFrame`](#api-0aea14b968f8ff59) | Method |
| [`CompleteFrame`](#api-bea4aaf356517319) | Method |
| [`Report`](#api-29629a41b8ad9e11) | Method |
| [`Route`](#api-e4090f732f902c17) | Method |

## Type declaration

<a id="api-c8a06618f33a1b4a"></a>
<!-- api: T:Inno.Editor.ImGui.EditorGameInputCapture 8f80e4ab3f4204714e9450e120384dc14d4d19744080ef2cca9b9ebf8d157291 -->

```csharp
public sealed class Inno.Editor.ImGui.EditorGameInputCapture
```

Routes platform input to the Play session only while the visible Game View owns focus.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Runtime/EditorGameInputCapture.cs#L13).

## `#ctor`

<a id="api-f3335459f0eff76d"></a>
<!-- api: M:Inno.Editor.ImGui.EditorGameInputCapture.#ctor(System.Func{System.UInt32,System.Nullable{System.UInt32}}) 82e386fdd28933030530c90f2dee165779049b522415524e3b601dbc611721dd -->

```csharp
public Inno.Editor.ImGui.EditorGameInputCapture.EditorGameInputCapture(System.Func<uint, uint?> resolveWindow)
```

Creates a capture policy using a presentation viewport to platform window resolver.

**Parameter `resolveWindow`:** Returns a live window ID for a viewport, or null when absent.

**Throws `System.ArgumentNullException`:** Thrown when the resolver is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Runtime/EditorGameInputCapture.cs#L35).

## `BeginFrame`

<a id="api-0aea14b968f8ff59"></a>
<!-- api: M:Inno.Editor.ImGui.EditorGameInputCapture.BeginFrame 85a907ad9085dfed3edec79d10acf89fd378c106db65e77f61ee09da68d30180 -->

```csharp
public void Inno.Editor.ImGui.EditorGameInputCapture.BeginFrame()
```

Starts a presentation pass in which the visible Game View must report its current bounds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Runtime/EditorGameInputCapture.cs#L43).

## `CompleteFrame`

<a id="api-bea4aaf356517319"></a>
<!-- api: M:Inno.Editor.ImGui.EditorGameInputCapture.CompleteFrame 0e83002af4f0bb12564f4348255e07ffe7742c203edab2ebb2193bb5c3ef35ec -->

```csharp
public uint Inno.Editor.ImGui.EditorGameInputCapture.CompleteFrame()
```

Ends a presentation pass and identifies input that must be released after focus loss.

**Returns:** The former platform window ID to reset, or zero if no reset is needed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Runtime/EditorGameInputCapture.cs#L89).

## `Report`

<a id="api-29629a41b8ad9e11"></a>
<!-- api: M:Inno.Editor.ImGui.EditorGameInputCapture.Report(System.UInt32,System.Numerics.Vector2,System.Numerics.Vector2,System.Boolean,System.Boolean) a9d0538be5d79bcbb2beadf0b8c2c7d67f355a3f2438318a807a77a897ef3b92 -->

```csharp
public bool Inno.Editor.ImGui.EditorGameInputCapture.Report(uint viewportId, System.Numerics.Vector2 origin, System.Numerics.Vector2 size, bool focused, bool hovered)
```

Reports the Game View image in coordinates local to its platform window.

**Parameter `viewportId`:** The presentation viewport containing the Game View.

**Parameter `origin`:** The image's upper-left corner relative to that window.

**Parameter `size`:** The visible image size in logical pixels.

**Parameter `focused`:** Whether the Game View is selected and its platform window has focus.

**Parameter `hovered`:** Whether the image is inside the frontmost hovered ImGui window.

**Returns:** `true` when the Game View and its platform window both own focus.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Runtime/EditorGameInputCapture.cs#L66).

## `Route`

<a id="api-e4090f732f902c17"></a>
<!-- api: M:Inno.Editor.ImGui.EditorGameInputCapture.Route(Inno.Core.Events.Event) 14a70e9e7eeab8945e2a05e806ed6157ce1ed5acaebc7d76f3b29a82b8230e1d -->

```csharp
public Inno.Core.Events.Event? Inno.Editor.ImGui.EditorGameInputCapture.Route(Inno.Core.Events.Event evnt)
```

Filters an engine event through the current Game View focus and pointer bounds.

**Parameter `evnt`:** The original backend-neutral platform event.

**Returns:** A routed event or a synthetic focus reset, or null when the Game View must not receive input.

**Constraints:** A globally consumed key, button, focus or close release is not replayed to the game.
It returns a new focus-reset event so previously held input is released before simulation.
Consumed pointer movement still updates hit-test bounds without reaching the game backend.

**Throws `System.ArgumentNullException`:** Thrown when the event is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Runtime/EditorGameInputCapture.cs#L126).
