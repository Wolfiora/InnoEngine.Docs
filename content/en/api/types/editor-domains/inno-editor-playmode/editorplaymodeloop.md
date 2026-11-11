---
title: "EditorPlayModeLoop"
description: "Reference for EditorPlayModeLoop in Inno.Editor.PlayMode."
uid: api.inno.editor.playmode.d5a8d006ea1cf669
kind: api
owners:
  - Inno.Editor.PlayMode
apiSurface: source-clr
contracts:
  - project.inno-editor-playmode
---
# `EditorPlayModeLoop`

This reference describes `EditorPlayModeLoop` in `Inno.Editor.PlayMode`. Read the [shared contract](../../../projects/inno-editor-playmode.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-9ae4b4d3b23ada13) | Method |
| [`EnterPresentationScope`](#api-1608ab01cea48f6e) | Method |
| [`Quiesce`](#api-fd48f78305f6ab6f) | Method |
| [`Tick`](#api-de0d21db86662da1) | Method |

## Type declaration

<a id="api-d5a8d006ea1cf669"></a>
<!-- api: T:Inno.Editor.PlayMode.EditorPlayModeLoop 4268cc2db0e09e0dcb97f2606ba854160f772e4e7028404e9a8e3cd6109cbc2b -->

```csharp
public sealed class Inno.Editor.PlayMode.EditorPlayModeLoop
```

Bridges the editor host frame clock to the active Play Mode session.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.PlayMode/Runtime/EditorPlayModeLoop.cs#L8).

## `#ctor`

<a id="api-9ae4b4d3b23ada13"></a>
<!-- api: M:Inno.Editor.PlayMode.EditorPlayModeLoop.#ctor a9727bfc98b0320dfd26c89600b8cf7c2122422d40a9e09491c5c83f0b4cd501 -->

```csharp
public Inno.Editor.PlayMode.EditorPlayModeLoop.EditorPlayModeLoop()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.PlayMode/Runtime/EditorPlayModeLoop.cs#L8).

## `EnterPresentationScope`

<a id="api-1608ab01cea48f6e"></a>
<!-- api: M:Inno.Editor.PlayMode.EditorPlayModeLoop.EnterPresentationScope 5b6f48948503b80d20b04a20ee94032b1020240fc8da312c07dfaf46be0cc014 -->

```csharp
public System.IDisposable Inno.Editor.PlayMode.EditorPlayModeLoop.EnterPresentationScope()
```

Binds editor presentation and interaction work to the isolated Play session while simulation is
active, or returns an inert scope while the editor is not presenting runtime copies.

**Returns:** A scope that must be disposed after the current editor presentation phase completes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.PlayMode/Runtime/EditorPlayModeLoop.cs#L29).

## `Quiesce`

<a id="api-fd48f78305f6ab6f"></a>
<!-- api: M:Inno.Editor.PlayMode.EditorPlayModeLoop.Quiesce ce69521273a1cab820ee5b65bcff770f435223ee8723b900403b0ec74616873d -->

```csharp
public void Inno.Editor.PlayMode.EditorPlayModeLoop.Quiesce()
```

Drains the active Play session before the product tears down editor modules, history or presentation.

**Throws `System.InvalidOperationException`:** The session cannot retire within its deadline; the host is faulted and its dependencies must remain alive.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.PlayMode/Runtime/EditorPlayModeLoop.cs#L37).

## `Tick`

<a id="api-de0d21db86662da1"></a>
<!-- api: M:Inno.Editor.PlayMode.EditorPlayModeLoop.Tick(System.Single) e43e91aaa084a0607925ed8b8dd45c7e061ba39e93b1a93e5a16dcfdebfa3fb4 -->

```csharp
public void Inno.Editor.PlayMode.EditorPlayModeLoop.Tick(float deltaTime)
```

Advances the active simulation by one complete frame when Play Mode is running.

**Parameter `deltaTime`:** The elapsed frame time in seconds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.PlayMode/Runtime/EditorPlayModeLoop.cs#L20).
