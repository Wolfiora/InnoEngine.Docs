---
title: "EditorUiSession"
description: "Reference for EditorUiSession in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.editor-script.3451ec0f11577781
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
---
# `EditorUiSession`

This reference describes `EditorUiSession` in `Inno.Editor.ImGui`. Read the [shared contract](../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-80afaee572bc6048) | Method |
| [`Dispose`](#api-e08ee333eb15a5f1) | Method |
| [`Enter`](#api-2b0270ab50108d95) | Method |
| [`current`](#api-cc2c46a450c2c48b) | Property |
| [`isDisposed`](#api-2f1b9325ebb2034c) | Property |
| [`widgets`](#api-7c7191bc7e5a0853) | Property |

## Type declaration

<a id="api-3451ec0f11577781"></a>
<!-- api: T:InnoEditor.ImGui.EditorUiSession 6a15fd39a3966518463af1565be2ad8f47a052a2c9f94ae2efa395091fb57bda -->

```csharp
public sealed class InnoEditor.ImGui.EditorUiSession : System.IDisposable
```

Owns editor controls and transient presentation state for one host, independently from other ImGui contexts.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Runtime/EditorUiSession.cs#L12).

## `#ctor`

<a id="api-80afaee572bc6048"></a>
<!-- api: M:InnoEditor.ImGui.EditorUiSession.#ctor 45273a89ff8827032c143a953cfbd984eb7ee63ef22e89a8a865ac4abcd4890a -->

```csharp
public InnoEditor.ImGui.EditorUiSession.EditorUiSession()
```

Creates independent controls and style state; the presentation backend retains its native context ownership.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Runtime/EditorUiSession.cs#L27).

## `Dispose`

<a id="api-e08ee333eb15a5f1"></a>
<!-- api: M:InnoEditor.ImGui.EditorUiSession.Dispose b15b474b9b7cd66c736549fcb927141817b569a3294043be5c481fc630e4c401 -->

```csharp
public void InnoEditor.ImGui.EditorUiSession.Dispose()
```

Releases presentation state after all drawing scopes and domain edit gestures have ended.

**Throws `System.InvalidOperationException`:** A drawing scope is active or the caller is not the owner thread.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Runtime/EditorUiSession.cs#L97).

## `Enter`

<a id="api-2b0270ab50108d95"></a>
<!-- api: M:InnoEditor.ImGui.EditorUiSession.Enter b712ff115a7b90ec6433c6ac937c8a4e244225cc0ef53c30e16ec3537fa59163 -->

```csharp
public System.IDisposable InnoEditor.ImGui.EditorUiSession.Enter()
```

Activates this session for a synchronous callback while preserving the enclosing scope.

**Returns:** An owner-thread scope that must be released in reverse activation order.

**Throws `System.ObjectDisposedException`:** The session has retired.

**Throws `System.InvalidOperationException`:** The caller is not the owner thread.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Runtime/EditorUiSession.cs#L81).

## `current`

<a id="api-cc2c46a450c2c48b"></a>
<!-- api: P:InnoEditor.ImGui.EditorUiSession.current 9a010b7bf2246d1a8644bba944bcf252b08742a4a374009dd6eb161cd575e2cf -->

```csharp
public static InnoEditor.ImGui.EditorUiSession InnoEditor.ImGui.EditorUiSession.current { get; }
```

Gets the current synchronous drawing scope; this accessor never creates or owns a session.

**Throws `System.InvalidOperationException`:** No UI drawing scope is active on the calling thread.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Runtime/EditorUiSession.cs#L39).

## `isDisposed`

<a id="api-2f1b9325ebb2034c"></a>
<!-- api: P:InnoEditor.ImGui.EditorUiSession.isDisposed 64dfed681a8cbd42ae23540fb24d49bafb887f5dac010d3c8af19cfdfd253022 -->

```csharp
public bool InnoEditor.ImGui.EditorUiSession.isDisposed { get; }
```

Gets whether this session has successfully retired its presentation state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Runtime/EditorUiSession.cs#L53).

## `widgets`

<a id="api-7c7191bc7e5a0853"></a>
<!-- api: P:InnoEditor.ImGui.EditorUiSession.widgets 4712d6cacba808b3560e0297acb4a3e5a7151103975b38f5d74785effb542035 -->

```csharp
public InnoEditor.ImGui.ImGuiWidget InnoEditor.ImGui.EditorUiSession.widgets { get; }
```

Gets the controls whose transient state belongs exclusively to this session.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Runtime/EditorUiSession.cs#L43).
