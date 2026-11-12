---
title: "EditorKeyboardPolicy"
description: "Reference for EditorKeyboardPolicy in Inno.Editor.Core."
uid: api.inno.editor.core.editor-script.0d6ab46ad57c450c
kind: api
owners:
  - Inno.Editor.Core
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-core#lifecycle-and-failure-contracts
  - manual.scripting.use-script-api
---
# `EditorKeyboardPolicy`

This reference describes `EditorKeyboardPolicy` in `Inno.Editor.Core`. Read the [shared contract](../../projects/inno-editor-core.md#lifecycle-and-failure-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-20871abd760ba533) | Method |
| [`primaryModifier`](#api-0136bf285afb6793) | Property |
| [`superModifierLabel`](#api-fb9f033326ef08d4) | Property |

## Type declaration

<a id="api-0d6ab46ad57c450c"></a>
<!-- api: T:InnoEditor.Core.EditorKeyboardPolicy 446b8041c3e1e132d98b6c96a534df7d0f50f0a103ec0d9ee379af2e11c89e45 -->

```csharp
public sealed class InnoEditor.Core.EditorKeyboardPolicy
```

Supplies immutable keyboard conventions selected by the Editor product composition.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorKeyboardPolicy.cs#L9).

## `#ctor`

<a id="api-20871abd760ba533"></a>
<!-- api: M:InnoEditor.Core.EditorKeyboardPolicy.#ctor(InnoEngine.Input.KeyModifier,System.String) 37e1f96cb526e7bb90f92bea1fd82f1e1e3219b03f662fc5108348f2e6987a79 -->

```csharp
public InnoEditor.Core.EditorKeyboardPolicy.EditorKeyboardPolicy(InnoEngine.Input.KeyModifier primaryModifier, string superModifierLabel)
```

Defines the primary shortcut modifier and the display name of the Super modifier.

**Parameter `primaryModifier`:** One Control, Super or Alt modifier used by symbolic primary shortcuts.

**Parameter `superModifierLabel`:** The nonempty product-specific name displayed for the Super modifier.

**Throws `System.ArgumentException`:** The modifier is not one supported modifier or the label is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorKeyboardPolicy.cs#L23).

## `primaryModifier`

<a id="api-0136bf285afb6793"></a>
<!-- api: P:InnoEditor.Core.EditorKeyboardPolicy.primaryModifier 5fc346ea78e688a0fb3b5d59c6e5bc5f35c160325089988bd9c710466c546aa4 -->

```csharp
public InnoEngine.Input.KeyModifier InnoEditor.Core.EditorKeyboardPolicy.primaryModifier { get; }
```

Gets the modifier used when resolving symbolic primary shortcuts.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorKeyboardPolicy.cs#L37).

## `superModifierLabel`

<a id="api-fb9f033326ef08d4"></a>
<!-- api: P:InnoEditor.Core.EditorKeyboardPolicy.superModifierLabel 7d629ae53fe36447ae446e23417600d0246f53554b9071020e96bdc5cc6ab941 -->

```csharp
public string InnoEditor.Core.EditorKeyboardPolicy.superModifierLabel { get; }
```

Gets the product-selected display name of the Super modifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorKeyboardPolicy.cs#L42).
