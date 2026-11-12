---
title: "EditorHistoryHandlerAttribute"
description: "Reference for EditorHistoryHandlerAttribute in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.editor-script.c02ae08fe8c1b780
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
  - manual.scripting.use-script-api
---
# `EditorHistoryHandlerAttribute`

This reference describes `EditorHistoryHandlerAttribute` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-ebae6c922743d1a4) | Method |
| [`kind`](#api-701f2f78f1c30b7d) | Property |

## Type declaration

<a id="api-c02ae08fe8c1b780"></a>
<!-- api: T:InnoEditor.Interactions.EditorHistoryHandlerAttribute e2ddf1c34757826c1fc10ea568195fbb008118a61dfc0b6dce1782353a0d61c6 -->

```csharp
public sealed class InnoEditor.Interactions.EditorHistoryHandlerAttribute : System.Attribute
```

Registers a stateless editor history handler for one stable change protocol.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryHandlerAttribute.cs#L9).

## `#ctor`

<a id="api-ebae6c922743d1a4"></a>
<!-- api: M:InnoEditor.Interactions.EditorHistoryHandlerAttribute.#ctor(System.String) d7201341fc2dc9a79c1d25f7e5ab359e4ecfbbeadd85f27ebb7a20ab2072623c -->

```csharp
public InnoEditor.Interactions.EditorHistoryHandlerAttribute.EditorHistoryHandlerAttribute(string kind)
```

Creates a history handler registration.

**Parameter `kind`:** The stable globally unique change protocol identifier.

**Throws `System.ArgumentException`:** Thrown when `kind` is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryHandlerAttribute.cs#L20).

## `kind`

<a id="api-701f2f78f1c30b7d"></a>
<!-- api: P:InnoEditor.Interactions.EditorHistoryHandlerAttribute.kind 8aa7278d9222ec6c0f05fe91c8ea322461144252bf568859fb05420be7c5b9cd -->

```csharp
public string InnoEditor.Interactions.EditorHistoryHandlerAttribute.kind { get; }
```

Gets the stable globally unique change protocol identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryHandlerAttribute.cs#L29).
