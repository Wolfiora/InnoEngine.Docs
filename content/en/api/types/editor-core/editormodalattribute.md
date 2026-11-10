---
title: "EditorModalAttribute"
description: "Reference for EditorModalAttribute in Inno.Editor.Core."
uid: api.inno.editor.core.ddf389a816fd560d
kind: api
owners:
  - Inno.Editor.Core
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-core#lifecycle-and-failure-contracts
---
# `EditorModalAttribute`

This reference describes `EditorModalAttribute` in `Inno.Editor.Core`. Read the [shared contract](../../projects/inno-editor-core.md#lifecycle-and-failure-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-b17e68547d365dcf) | Method |
| [`id`](#api-aea42db76177d0fb) | Property |
| [`order`](#api-773022be1873d0af) | Property |
| [`title`](#api-a129dd8705482597) | Property |

## Type declaration

<a id="api-ddf389a816fd560d"></a>
<!-- api: T:Inno.Editor.Core.EditorModalAttribute d02c51f431fd3a38ab5c9872a4d576bde801d3695533b6b55a664017895e5b70 -->

```csharp
public sealed class Inno.Editor.Core.EditorModalAttribute : System.Attribute
```

Registers a centered editor modal for automatic discovery.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorModalAttribute.cs#L9).

## `#ctor`

<a id="api-b17e68547d365dcf"></a>
<!-- api: M:Inno.Editor.Core.EditorModalAttribute.#ctor(System.String,System.String,System.Int32) d617764bf5186d39e28663fafd2bb4c2d5722152ea0a93db94f1896cbb1ceebf -->

```csharp
public Inno.Editor.Core.EditorModalAttribute.EditorModalAttribute(string id, string title, int order = 0)
```

Creates a centered modal registration with a stable identity and draw order.

**Parameter `id`:** The stable identity used to retain modal transition state across refreshes.

**Parameter `title`:** The visible title rendered by the modal host.

**Parameter `order`:** The stable ordering value when multiple modals are visible.

**Throws `System.ArgumentException`:** Thrown when `id` or `title` is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorModalAttribute.cs#L26).

## `id`

<a id="api-aea42db76177d0fb"></a>
<!-- api: P:Inno.Editor.Core.EditorModalAttribute.id 1d322a019d3056d7c1715557c6fa9102e95be4559543ef2d7fa7b42c6d27d319 -->

```csharp
public string Inno.Editor.Core.EditorModalAttribute.id { get; }
```

Gets the stable modal identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorModalAttribute.cs#L43).

## `order`

<a id="api-773022be1873d0af"></a>
<!-- api: P:Inno.Editor.Core.EditorModalAttribute.order 6dba366007ed926143da78d18cea15cb459167cdf011cac05b6b1c3964876d3d -->

```csharp
public int Inno.Editor.Core.EditorModalAttribute.order { get; }
```

Gets the stable draw order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorModalAttribute.cs#L53).

## `title`

<a id="api-a129dd8705482597"></a>
<!-- api: P:Inno.Editor.Core.EditorModalAttribute.title 90af8e83fb50e2ed06534a726ba62ebcd3cc707d3f1d849dbf8ce53a56c33f85 -->

```csharp
public string Inno.Editor.Core.EditorModalAttribute.title { get; }
```

Gets the visible modal title.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorModalAttribute.cs#L48).
