---
title: "EditorPanelAttribute"
description: "Reference for EditorPanelAttribute in Inno.Editor.Core."
uid: api.inno.editor.core.editor-script.fed94ca014fc184e
kind: api
owners:
  - Inno.Editor.Core
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-core#lifecycle-and-failure-contracts
  - manual.scripting.use-script-api
---
# `EditorPanelAttribute`

This reference describes `EditorPanelAttribute` in `Inno.Editor.Core`. Read the [shared contract](../../projects/inno-editor-core.md#lifecycle-and-failure-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-699c03fa137d21e5) | Method |
| [`defaultOpen`](#api-ac171e74812ae048) | Property |
| [`id`](#api-e1a09da94d7b4994) | Property |
| [`menuPath`](#api-e0e52996ffb883a5) | Property |
| [`order`](#api-c1d9b387a0505a4c) | Property |
| [`separatorBefore`](#api-b3957c708214d1b1) | Property |
| [`title`](#api-d55c54b7ed92ded8) | Property |

## Type declaration

<a id="api-fed94ca014fc184e"></a>
<!-- api: T:InnoEditor.Core.EditorPanelAttribute 6d554853f5bd83b9595a55382abdd34e9e6881802f5e37f7645edb1cbda21115 -->

```csharp
public sealed class InnoEditor.Core.EditorPanelAttribute : System.Attribute
```

Registers an editor panel for automatic discovery.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorPanelAttribute.cs#L9).

## `#ctor`

<a id="api-699c03fa137d21e5"></a>
<!-- api: M:InnoEditor.Core.EditorPanelAttribute.#ctor(System.String,System.String,System.Int32,System.Boolean,System.String,System.Boolean) ec96f36c5ad42ee128111426b56e6eebdc47864ac63c47021ba8f75a223eacc2 -->

```csharp
public InnoEditor.Core.EditorPanelAttribute.EditorPanelAttribute(string id, string title, int order = 0, bool defaultOpen = true, string menuPath = "", bool separatorBefore = false)
```

Creates a dockable panel registration with stable identity and presentation metadata.

**Parameter `id`:** The stable identity used for Panel-menu routing and reload-state retention.

**Parameter `title`:** The visible dockable-window title.

**Parameter `order`:** The stable panel and generated Panel-menu ordering value.

**Parameter `defaultOpen`:** Whether a newly discovered panel is visible before retained state is available.

**Parameter `menuPath`:** The optional slash-delimited category path under the generated `Panel` menu.

**Parameter `separatorBefore`:** Whether the generated toggle is preceded by a separator within its final menu category.

**Throws `System.ArgumentException`:** Thrown when `id` or `title` is empty, or when
`menuPath` contains an empty segment.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorPanelAttribute.cs#L36).

## `defaultOpen`

<a id="api-ac171e74812ae048"></a>
<!-- api: P:InnoEditor.Core.EditorPanelAttribute.defaultOpen 9f79ac7647fbfd215236ce454c262511c36d11b6d2127e23da65d9fe3f0319d6 -->

```csharp
public bool InnoEditor.Core.EditorPanelAttribute.defaultOpen { get; }
```

Gets whether a newly discovered panel is open by default.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorPanelAttribute.cs#L74).

## `id`

<a id="api-e1a09da94d7b4994"></a>
<!-- api: P:InnoEditor.Core.EditorPanelAttribute.id da304da5788117ecab6927c7a02a26942f2fa84ae9fca77188b17c774a929e10 -->

```csharp
public string InnoEditor.Core.EditorPanelAttribute.id { get; }
```

Gets the stable panel identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorPanelAttribute.cs#L59).

## `menuPath`

<a id="api-e0e52996ffb883a5"></a>
<!-- api: P:InnoEditor.Core.EditorPanelAttribute.menuPath e33a0d106a45222bc0ccef5c37aa91c9cdf91210a3a8cb573b46c897b54f2e18 -->

```csharp
public string InnoEditor.Core.EditorPanelAttribute.menuPath { get; }
```

Gets the optional category path under the generated `Panel` menu.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorPanelAttribute.cs#L79).

## `order`

<a id="api-c1d9b387a0505a4c"></a>
<!-- api: P:InnoEditor.Core.EditorPanelAttribute.order 4992f8d7d421fefe6b1179c1d47fc1ecc6ede45336dd3c7c39fbc4f7feef943e -->

```csharp
public int InnoEditor.Core.EditorPanelAttribute.order { get; }
```

Gets the stable panel ordering value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorPanelAttribute.cs#L69).

## `separatorBefore`

<a id="api-b3957c708214d1b1"></a>
<!-- api: P:InnoEditor.Core.EditorPanelAttribute.separatorBefore 30e03ba2abf639996116e5e270e5fcb14b72bb27a62404a8c07477a1b59c57f3 -->

```csharp
public bool InnoEditor.Core.EditorPanelAttribute.separatorBefore { get; }
```

Gets whether the generated panel toggle begins a new visual group.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorPanelAttribute.cs#L84).

## `title`

<a id="api-d55c54b7ed92ded8"></a>
<!-- api: P:InnoEditor.Core.EditorPanelAttribute.title f5f3c41e33403410f3333ed14dbc6b53fb6cb565a095893b6a2d720ca3618984 -->

```csharp
public string InnoEditor.Core.EditorPanelAttribute.title { get; }
```

Gets the visible panel title.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorPanelAttribute.cs#L64).
