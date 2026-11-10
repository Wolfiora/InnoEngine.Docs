---
title: "EditorKeyboardPolicy"
description: "Reference for EditorKeyboardPolicy in Inno.Editor.Core."
uid: api.inno.editor.core.8db049cf92c63d29
kind: api
owners:
  - Inno.Editor.Core
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-core#lifecycle-and-failure-contracts
---
# `EditorKeyboardPolicy`

This reference describes `EditorKeyboardPolicy` in `Inno.Editor.Core`. Read the [shared contract](../../projects/inno-editor-core.md#lifecycle-and-failure-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-70a17f6286ebeffe) | Method |
| [`primaryModifier`](#api-3d67bc832c8c2830) | Property |
| [`superModifierLabel`](#api-3fee6f0681d812aa) | Property |

## Type declaration

<a id="api-8db049cf92c63d29"></a>
<!-- api: T:Inno.Editor.Core.EditorKeyboardPolicy 600bfcdb407e066a80657dd9afae9bd829c7c135497b229448a521aa4681a38f -->

```csharp
public sealed class Inno.Editor.Core.EditorKeyboardPolicy
```

Supplies immutable keyboard conventions selected by the Editor product composition.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorKeyboardPolicy.cs#L9).

## `#ctor`

<a id="api-70a17f6286ebeffe"></a>
<!-- api: M:Inno.Editor.Core.EditorKeyboardPolicy.#ctor(Inno.Core.Input.KeyModifier,System.String) dfbbb99a5346aa9e30c135826aac305193bb81a71889723a9cdc89cc5fee3edf -->

```csharp
public Inno.Editor.Core.EditorKeyboardPolicy.EditorKeyboardPolicy(Inno.Core.Input.KeyModifier primaryModifier, string superModifierLabel)
```

Defines the primary shortcut modifier and the display name of the Super modifier.

**Parameter `primaryModifier`:** One Control, Super or Alt modifier used by symbolic primary shortcuts.

**Parameter `superModifierLabel`:** The nonempty product-specific name displayed for the Super modifier.

**Throws `System.ArgumentException`:** The modifier is not one supported modifier or the label is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorKeyboardPolicy.cs#L23).

## `primaryModifier`

<a id="api-3d67bc832c8c2830"></a>
<!-- api: P:Inno.Editor.Core.EditorKeyboardPolicy.primaryModifier 6245617538b6b6a679a81fd5d72a2a0162e6e09217020c38543de22c98feb03c -->

```csharp
public Inno.Core.Input.KeyModifier Inno.Editor.Core.EditorKeyboardPolicy.primaryModifier { get; }
```

Gets the modifier used when resolving symbolic primary shortcuts.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorKeyboardPolicy.cs#L37).

## `superModifierLabel`

<a id="api-3fee6f0681d812aa"></a>
<!-- api: P:Inno.Editor.Core.EditorKeyboardPolicy.superModifierLabel a07b9502e437548ec542344200870bb0b353121c5c6a1d71a59eee36b2ece29d -->

```csharp
public string Inno.Editor.Core.EditorKeyboardPolicy.superModifierLabel { get; }
```

Gets the product-selected display name of the Super modifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorKeyboardPolicy.cs#L42).
