---
title: "EditorDropAttribute"
description: "Reference for EditorDropAttribute in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.editor-script.c225af89a6f2e62b
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
  - manual.scripting.use-script-api
---
# `EditorDropAttribute`

This reference describes `EditorDropAttribute` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-66f9a9dcf4ee29a6) | Method |
| [`#ctor`](#api-38c5edc33389819c) | Method |
| [`area`](#api-8f4dfb9b08b0c9c4) | Property |
| [`priority`](#api-bf5b67536928c361) | Property |

## Type declaration

<a id="api-c225af89a6f2e62b"></a>
<!-- api: T:InnoEditor.Interactions.EditorDropAttribute 72d6178674c0426fd50d74fecfda03a5a5b2e4a8e3aa7ba586d5adaa037a3047 -->

```csharp
public sealed class InnoEditor.Interactions.EditorDropAttribute : System.Attribute
```

Registers a typed editor drop handler for an optional exact area.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropAttribute.cs#L9).

## `#ctor`

<a id="api-66f9a9dcf4ee29a6"></a>
<!-- api: M:InnoEditor.Interactions.EditorDropAttribute.#ctor(System.Int32) 5956fe2cbb550b2254a52d5fb7b3536cf0ea43118a057be646d6a9059983dba8 -->

```csharp
public InnoEditor.Interactions.EditorDropAttribute.EditorDropAttribute(int priority = 0)
```

Creates a drop registration that can participate on any interaction surface.

**Parameter `priority`:** The tie-breaking priority used after source and target specificity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropAttribute.cs#L17).

## `#ctor`

<a id="api-38c5edc33389819c"></a>
<!-- api: M:InnoEditor.Interactions.EditorDropAttribute.#ctor(System.String,System.Int32) b34e556495d12a571bdaafa0f9d7fe3652596a91d524dad2170e55e325188e1c -->

```csharp
public InnoEditor.Interactions.EditorDropAttribute.EditorDropAttribute(string area, int priority = 0)
```

Creates a drop registration scoped to an exact interaction area.

**Parameter `area`:** The exact target area handled by this registration, or an empty string for any area.

**Parameter `priority`:** The tie-breaking priority used after source and target specificity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropAttribute.cs#L31).

## `area`

<a id="api-8f4dfb9b08b0c9c4"></a>
<!-- api: P:InnoEditor.Interactions.EditorDropAttribute.area 97d6d80568a0150ae63e890571aefdfefe3662e05874bf55e2a8621305a0569a -->

```csharp
public string InnoEditor.Interactions.EditorDropAttribute.area { get; }
```

Gets the optional exact interaction area.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropAttribute.cs#L42).

## `priority`

<a id="api-bf5b67536928c361"></a>
<!-- api: P:InnoEditor.Interactions.EditorDropAttribute.priority bb1ba6caabb4d7e3395d6ba4dac8c03a48279ea9ffac66680464b06831db35f3 -->

```csharp
public int InnoEditor.Interactions.EditorDropAttribute.priority { get; }
```

Gets the tie-breaking priority.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropAttribute.cs#L47).
