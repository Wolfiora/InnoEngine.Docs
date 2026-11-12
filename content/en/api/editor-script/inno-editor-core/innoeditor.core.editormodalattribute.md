---
title: "EditorModalAttribute"
description: "Reference for EditorModalAttribute in Inno.Editor.Core."
uid: api.inno.editor.core.editor-script.8c1fb241dc036991
kind: api
owners:
  - Inno.Editor.Core
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-core#lifecycle-and-failure-contracts
  - manual.scripting.use-script-api
---
# `EditorModalAttribute`

This reference describes `EditorModalAttribute` in `Inno.Editor.Core`. Read the [shared contract](../../projects/inno-editor-core.md#lifecycle-and-failure-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-2fc8893139b99c15) | Method |
| [`id`](#api-71bda2d4b4025a6b) | Property |
| [`order`](#api-60eb0ea1e4384b66) | Property |
| [`title`](#api-f30e014377a45570) | Property |

## Type declaration

<a id="api-8c1fb241dc036991"></a>
<!-- api: T:InnoEditor.Core.EditorModalAttribute ef659e03886834aed60446043cc19108359c46313cbe8137354de2765a2ca6f6 -->

```csharp
public sealed class InnoEditor.Core.EditorModalAttribute : System.Attribute
```

Registers a centered editor modal for automatic discovery.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorModalAttribute.cs#L9).

## `#ctor`

<a id="api-2fc8893139b99c15"></a>
<!-- api: M:InnoEditor.Core.EditorModalAttribute.#ctor(System.String,System.String,System.Int32) dbfc562e3e3f65a9c6cee08dda575f1c3869d8cb8c9a71f3d4ad5bffe37dc494 -->

```csharp
public InnoEditor.Core.EditorModalAttribute.EditorModalAttribute(string id, string title, int order = 0)
```

Creates a centered modal registration with a stable identity and draw order.

**Parameter `id`:** The stable identity used to retain modal transition state across refreshes.

**Parameter `title`:** The visible title rendered by the modal host.

**Parameter `order`:** The stable ordering value when multiple modals are visible.

**Throws `System.ArgumentException`:** Thrown when `id` or `title` is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorModalAttribute.cs#L26).

## `id`

<a id="api-71bda2d4b4025a6b"></a>
<!-- api: P:InnoEditor.Core.EditorModalAttribute.id 375936b0a42e872bd270516cfaf0a39f23c65ac540029c5581365b61c458e0c7 -->

```csharp
public string InnoEditor.Core.EditorModalAttribute.id { get; }
```

Gets the stable modal identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorModalAttribute.cs#L43).

## `order`

<a id="api-60eb0ea1e4384b66"></a>
<!-- api: P:InnoEditor.Core.EditorModalAttribute.order 6178c5b7724a5abebd880c5e8808bd2f21ed6223f3a233adb71f1d42e825ea0a -->

```csharp
public int InnoEditor.Core.EditorModalAttribute.order { get; }
```

Gets the stable draw order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorModalAttribute.cs#L53).

## `title`

<a id="api-f30e014377a45570"></a>
<!-- api: P:InnoEditor.Core.EditorModalAttribute.title cf0086892e5715c72d16871cf030db7ec2500780a45c90964e28832fccfdfa02 -->

```csharp
public string InnoEditor.Core.EditorModalAttribute.title { get; }
```

Gets the visible modal title.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorModalAttribute.cs#L48).
