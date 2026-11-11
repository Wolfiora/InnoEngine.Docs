---
title: "EditorGizmoFrame"
description: "Reference for EditorGizmoFrame in Inno.Editor.Rendering."
uid: api.inno.editor.rendering.ca4ab01ad76476c1
kind: api
owners:
  - Inno.Editor.Rendering
apiSurface: source-clr
contracts:
  - project.inno-editor-rendering
---
# `EditorGizmoFrame`

This reference describes `EditorGizmoFrame` in `Inno.Editor.Rendering`. Read the [shared contract](../../../projects/inno-editor-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Editor.Rendering.IEditorGizmoSink`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-0ffa6f64b1983361) | Method |
| [`Icon`](#api-bf7848296f1bdb3f) | Method |
| [`Line`](#api-cbfdecb2f7368dca) | Method |
| [`icons`](#api-2382123cf06447bb) | Property |
| [`lines`](#api-e40b866b27a1a7c3) | Property |

## Type declaration

<a id="api-ca4ab01ad76476c1"></a>
<!-- api: T:Inno.Editor.Rendering.EditorGizmoFrame bccedbb7fcd05664340bb565b32055448f17fb5aa1abbb0db330373314e6f9c6 -->

```csharp
public sealed class Inno.Editor.Rendering.EditorGizmoFrame : Inno.Editor.Rendering.IEditorGizmoSink
```

Holds the transient gizmo primitives for one Scene viewport frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorGizmoProvider.cs#L176).

## `#ctor`

<a id="api-0ffa6f64b1983361"></a>
<!-- api: M:Inno.Editor.Rendering.EditorGizmoFrame.#ctor e0cc59f082bbae63a1c3924bd991ff5040fc1ff599028843c56b7df57f876a92 -->

```csharp
public Inno.Editor.Rendering.EditorGizmoFrame.EditorGizmoFrame()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorGizmoProvider.cs#L176).

## `Icon`

<a id="api-bf7848296f1bdb3f"></a>
<!-- api: M:Inno.Editor.Rendering.EditorGizmoFrame.Icon(Inno.Core.Identity.Identity,Inno.Core.Mathematics.Vector3,System.String) 46be354a9961db9406c8de4cc70b5685755bcdcba224f314b0bee6730847c082 -->

```csharp
public void Inno.Editor.Rendering.EditorGizmoFrame.Icon(Inno.Core.Identity.Identity owner, Inno.Core.Mathematics.Vector3 position, string iconId)
```

Appends a selectable scene icon to the current gizmo frame.

**Parameter `owner`:** The object that owns the resulting lifetime and state.

**Parameter `position`:** The position consumed by icon; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `iconId`:** The stable icon identity resolved by the Scene View.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorGizmoProvider.cs#L202).

## `Line`

<a id="api-cbfdecb2f7368dca"></a>
<!-- api: M:Inno.Editor.Rendering.EditorGizmoFrame.Line(Inno.Core.Mathematics.Vector3,Inno.Core.Mathematics.Vector3) f083046faeeddc35aca17e8330bcbd7e2249a5abbcaffa3e371505d589ab0c4e -->

```csharp
public void Inno.Editor.Rendering.EditorGizmoFrame.Line(Inno.Core.Mathematics.Vector3 start, Inno.Core.Mathematics.Vector3 end)
```

Appends a world space line to the current gizmo frame.

**Parameter `start`:** The start consumed by line; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `end`:** The end consumed by line; ownership remains with the caller unless explicitly stated otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorGizmoProvider.cs#L220).

## `icons`

<a id="api-2382123cf06447bb"></a>
<!-- api: P:Inno.Editor.Rendering.EditorGizmoFrame.icons 6e86d87040eef8c370c5d5a512e603ae04a649bd100ed6655b96070ceef9dba8 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Editor.Rendering.EditorGizmoIcon> Inno.Editor.Rendering.EditorGizmoFrame.icons { get; }
```

Gets the ordered selectable icons.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorGizmoProvider.cs#L184).

## `lines`

<a id="api-e40b866b27a1a7c3"></a>
<!-- api: P:Inno.Editor.Rendering.EditorGizmoFrame.lines 25e74814a7a6cd23f53bcfadbfeec60642b7ef087ec393adb83a13205b487d4b -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Editor.Rendering.EditorGizmoLine> Inno.Editor.Rendering.EditorGizmoFrame.lines { get; }
```

Gets the ordered non-interactive lines.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorGizmoProvider.cs#L188).
