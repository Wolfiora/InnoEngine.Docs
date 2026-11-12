---
title: "EditorViewportContributorExtensionAttribute"
description: "Reference for EditorViewportContributorExtensionAttribute in Inno.Editor.Rendering."
uid: api.inno.editor.rendering.editor-script.b0b6d6533287d07c
kind: api
owners:
  - Inno.Editor.Rendering
apiSurface: editor-script
contracts:
  - project.inno-editor-rendering
  - manual.scripting.use-script-api
---
# `EditorViewportContributorExtensionAttribute`

This reference describes `EditorViewportContributorExtensionAttribute` in `Inno.Editor.Rendering`. Read the [shared contract](../../projects/inno-editor-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-b0c1e75a04576430) | Method |
| [`controllerPriority`](#api-84ff4dfd0b1bfec5) | Property |
| [`id`](#api-57147e228d5f9154) | Property |
| [`kind`](#api-09e6cb2e2eee878f) | Property |
| [`order`](#api-80a65e6fe44d14fe) | Property |

## Type declaration

<a id="api-b0b6d6533287d07c"></a>
<!-- api: T:InnoEditor.Rendering.EditorViewportContributorExtensionAttribute 92fcde51352951dcc461fdcdeaca8086e3722839a42d3f4cd03071b58c4e715d -->

```csharp
public sealed class InnoEditor.Rendering.EditorViewportContributorExtensionAttribute : System.Attribute
```

Marks a reloadable rendering-model contributor for one Editor viewport purpose.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L53).

## `#ctor`

<a id="api-b0c1e75a04576430"></a>
<!-- api: M:InnoEditor.Rendering.EditorViewportContributorExtensionAttribute.#ctor(System.String,System.String,System.Int32,System.Int32) 9455df8a3ef186dbb8bcb2ea40324fc3d8120712c8100cd225473de22e057efc -->

```csharp
public InnoEditor.Rendering.EditorViewportContributorExtensionAttribute.EditorViewportContributorExtensionAttribute(string id, string kind, int order = 0, int controllerPriority = 0)
```

Creates a viewport contributor declaration.

**Parameter `id`:** Globally stable contributor identity.

**Parameter `kind`:** Open viewport purpose handled by the contributor.

**Parameter `order`:** Ascending model-composition order within the viewport.

**Parameter `controllerPriority`:** Priority used to select the contributor that owns navigation, tools, and pointer interaction.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L70).

## `controllerPriority`

<a id="api-84ff4dfd0b1bfec5"></a>
<!-- api: P:InnoEditor.Rendering.EditorViewportContributorExtensionAttribute.controllerPriority 2e74530d278621442db8933a08c7f64d969c4833d99c7631144c0a59e708a222 -->

```csharp
public int InnoEditor.Rendering.EditorViewportContributorExtensionAttribute.controllerPriority { get; }
```

Gets the priority used to select the viewport interaction controller.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L102).

## `id`

<a id="api-57147e228d5f9154"></a>
<!-- api: P:InnoEditor.Rendering.EditorViewportContributorExtensionAttribute.id 975143180169107f888539229d610f3fe34ac17af53e6335500f7df186ed90d7 -->

```csharp
public string InnoEditor.Rendering.EditorViewportContributorExtensionAttribute.id { get; }
```

Gets the globally stable contributor identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L87).

## `kind`

<a id="api-09e6cb2e2eee878f"></a>
<!-- api: P:InnoEditor.Rendering.EditorViewportContributorExtensionAttribute.kind 72b1c3343d10475452050a254ae0c26573cd26091e42f04a75854701342d3e00 -->

```csharp
public InnoEditor.Rendering.EditorViewportKindId InnoEditor.Rendering.EditorViewportContributorExtensionAttribute.kind { get; }
```

Gets the open viewport purpose handled by the contributor.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L92).

## `order`

<a id="api-80a65e6fe44d14fe"></a>
<!-- api: P:InnoEditor.Rendering.EditorViewportContributorExtensionAttribute.order 963b0e6d1f12d110d60265381f8dd235a1d87367c0115c2f5ccf7d9eaad01d4d -->

```csharp
public int InnoEditor.Rendering.EditorViewportContributorExtensionAttribute.order { get; }
```

Gets ascending model-composition order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L97).
