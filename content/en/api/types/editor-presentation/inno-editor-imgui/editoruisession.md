---
title: "EditorUiSession"
description: "Reference for EditorUiSession in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.5631f1a630084297
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
---
# `EditorUiSession`

This reference describes `EditorUiSession` in `Inno.Editor.ImGui`. Read the [shared contract](../../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-e2aee707dc73fd0f) | Method |
| [`Dispose`](#api-1dc224a6133546b4) | Method |
| [`Enter`](#api-8a65e7ac78373018) | Method |
| [`current`](#api-e10d1e393ba90065) | Property |
| [`isDisposed`](#api-afe88fb78785ca4a) | Property |
| [`menus`](#api-e7cebf3c87d21a36) | Property |
| [`widgets`](#api-627a4b1d765cdcf2) | Property |

## Type declaration

<a id="api-5631f1a630084297"></a>
<!-- api: T:Inno.Editor.ImGui.EditorUiSession 1c46cad076c41a7c2e7716e13d6c89b1924b34554525699ed0d4f3a6738c0548 -->

```csharp
public sealed class Inno.Editor.ImGui.EditorUiSession : System.IDisposable
```

Owns editor controls and transient presentation state for one host, independently from other ImGui contexts.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Runtime/EditorUiSession.cs#L12).

## `#ctor`

<a id="api-e2aee707dc73fd0f"></a>
<!-- api: M:Inno.Editor.ImGui.EditorUiSession.#ctor 38b85e5a39b2e25486d69084ff70e394dad269acbbd6d45a3ae02fd5b2b60c0a -->

```csharp
public Inno.Editor.ImGui.EditorUiSession.EditorUiSession()
```

Creates independent controls and style state; the presentation backend retains its native context ownership.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Runtime/EditorUiSession.cs#L27).

## `Dispose`

<a id="api-1dc224a6133546b4"></a>
<!-- api: M:Inno.Editor.ImGui.EditorUiSession.Dispose 04c5c8999fd85dec9cf3a240296e04131b7cd236f4b3730173459d3e4170e8f7 -->

```csharp
public void Inno.Editor.ImGui.EditorUiSession.Dispose()
```

Releases presentation state after all drawing scopes and domain edit gestures have ended.

**Throws `System.InvalidOperationException`:** A drawing scope is active or the caller is not the owner thread.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Runtime/EditorUiSession.cs#L97).

## `Enter`

<a id="api-8a65e7ac78373018"></a>
<!-- api: M:Inno.Editor.ImGui.EditorUiSession.Enter 5236ae12d87f6ea2bfad28c2d14b0030ccaab1866766eb8c4cfc638bb6c386d4 -->

```csharp
public System.IDisposable Inno.Editor.ImGui.EditorUiSession.Enter()
```

Activates this session for a synchronous callback while preserving the enclosing scope.

**Returns:** An owner-thread scope that must be released in reverse activation order.

**Throws `System.ObjectDisposedException`:** The session has retired.

**Throws `System.InvalidOperationException`:** The caller is not the owner thread.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Runtime/EditorUiSession.cs#L81).

## `current`

<a id="api-e10d1e393ba90065"></a>
<!-- api: P:Inno.Editor.ImGui.EditorUiSession.current fa51e8c79210e19905dbf70d1a9536146ed2ffbcc4e086354d314448a73dfa41 -->

```csharp
public static Inno.Editor.ImGui.EditorUiSession Inno.Editor.ImGui.EditorUiSession.current { get; }
```

Gets the current synchronous drawing scope; this accessor never creates or owns a session.

**Throws `System.InvalidOperationException`:** No UI drawing scope is active on the calling thread.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Runtime/EditorUiSession.cs#L39).

## `isDisposed`

<a id="api-afe88fb78785ca4a"></a>
<!-- api: P:Inno.Editor.ImGui.EditorUiSession.isDisposed bac019bdce80659bb2f8e8149bb87369c53eac2e16e31bac41fb0c64049e97ea -->

```csharp
public bool Inno.Editor.ImGui.EditorUiSession.isDisposed { get; }
```

Gets whether this session has successfully retired its presentation state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Runtime/EditorUiSession.cs#L53).

## `menus`

<a id="api-e7cebf3c87d21a36"></a>
<!-- api: P:Inno.Editor.ImGui.EditorUiSession.menus 0c4356b1ad35f1f38f1fcd721e1a0cd518ea72bbf5ee5877e9bee8bc25f342c2 -->

```csharp
public Inno.Editor.ImGui.EditorMenuRenderer Inno.Editor.ImGui.EditorUiSession.menus { get; }
```

Gets the menu presenter whose search state belongs exclusively to this session.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Runtime/EditorUiSession.cs#L49).

## `widgets`

<a id="api-627a4b1d765cdcf2"></a>
<!-- api: P:Inno.Editor.ImGui.EditorUiSession.widgets be3ebc66e15449ac86f12dbc4ee8761f8cf516441ccd858e2d7ca132f2e73991 -->

```csharp
public Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget Inno.Editor.ImGui.EditorUiSession.widgets { get; }
```

Gets the controls whose transient state belongs exclusively to this session.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Runtime/EditorUiSession.cs#L43).
