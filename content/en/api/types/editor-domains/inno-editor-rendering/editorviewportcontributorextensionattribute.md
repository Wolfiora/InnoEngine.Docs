---
title: "EditorViewportContributorExtensionAttribute"
description: "Reference for EditorViewportContributorExtensionAttribute in Inno.Editor.Rendering."
uid: api.inno.editor.rendering.a5d3df9c41c6e555
kind: api
owners:
  - Inno.Editor.Rendering
apiSurface: source-clr
contracts:
  - project.inno-editor-rendering
---
# `EditorViewportContributorExtensionAttribute`

This reference describes `EditorViewportContributorExtensionAttribute` in `Inno.Editor.Rendering`. Read the [shared contract](../../../projects/inno-editor-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-b80e5fc8d5534a9d) | Method |
| [`controllerPriority`](#api-bcefbabb46d0183b) | Property |
| [`id`](#api-496f1fbb6a533c7b) | Property |
| [`kind`](#api-64bbdd1df042e569) | Property |
| [`order`](#api-017fc0ffe2f4332e) | Property |

## Type declaration

<a id="api-a5d3df9c41c6e555"></a>
<!-- api: T:Inno.Editor.Rendering.EditorViewportContributorExtensionAttribute 4f5fb839d67c2e1d07d4f0ba5237719b3439a3776c257c2640b87dd166129eb8 -->

```csharp
public sealed class Inno.Editor.Rendering.EditorViewportContributorExtensionAttribute : System.Attribute
```

Marks a reloadable rendering-model contributor for one Editor viewport purpose.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L53).

## `#ctor`

<a id="api-b80e5fc8d5534a9d"></a>
<!-- api: M:Inno.Editor.Rendering.EditorViewportContributorExtensionAttribute.#ctor(System.String,System.String,System.Int32,System.Int32) a153130044dffff87548209fdfc177f5ea4e8dd6b6b915d06506df6690c2616b -->

```csharp
public Inno.Editor.Rendering.EditorViewportContributorExtensionAttribute.EditorViewportContributorExtensionAttribute(string id, string kind, int order = 0, int controllerPriority = 0)
```

Creates a viewport contributor declaration.

**Parameter `id`:** Globally stable contributor identity.

**Parameter `kind`:** Open viewport purpose handled by the contributor.

**Parameter `order`:** Ascending model-composition order within the viewport.

**Parameter `controllerPriority`:** Priority used to select the contributor that owns navigation, tools, and pointer interaction.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L70).

## `controllerPriority`

<a id="api-bcefbabb46d0183b"></a>
<!-- api: P:Inno.Editor.Rendering.EditorViewportContributorExtensionAttribute.controllerPriority fc440aa248b653ce86189116a1328a27a2601a04346f802481c6700e924b15c8 -->

```csharp
public int Inno.Editor.Rendering.EditorViewportContributorExtensionAttribute.controllerPriority { get; }
```

Gets the priority used to select the viewport interaction controller.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L102).

## `id`

<a id="api-496f1fbb6a533c7b"></a>
<!-- api: P:Inno.Editor.Rendering.EditorViewportContributorExtensionAttribute.id 106f2e5b2decbd8c2776228aeb1b56d4174990478660f9ba65f0a6cb38b65bc5 -->

```csharp
public string Inno.Editor.Rendering.EditorViewportContributorExtensionAttribute.id { get; }
```

Gets the globally stable contributor identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L87).

## `kind`

<a id="api-64bbdd1df042e569"></a>
<!-- api: P:Inno.Editor.Rendering.EditorViewportContributorExtensionAttribute.kind 9eed37e53d330688cbd867f46b1a79fba9cb206dabc009a1b6f1b59ffffbde49 -->

```csharp
public Inno.Editor.Rendering.EditorViewportKindId Inno.Editor.Rendering.EditorViewportContributorExtensionAttribute.kind { get; }
```

Gets the open viewport purpose handled by the contributor.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L92).

## `order`

<a id="api-017fc0ffe2f4332e"></a>
<!-- api: P:Inno.Editor.Rendering.EditorViewportContributorExtensionAttribute.order 20556fb9e8d753ba8e8d03aa74e8b041898f2bca6af5773e7482e4f42923994f -->

```csharp
public int Inno.Editor.Rendering.EditorViewportContributorExtensionAttribute.order { get; }
```

Gets ascending model-composition order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L97).
