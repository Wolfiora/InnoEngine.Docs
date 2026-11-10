---
title: "EditorHistoryHandlerAttribute"
description: "Reference for EditorHistoryHandlerAttribute in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.8d4ce9d2bdb341f4
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
---
# `EditorHistoryHandlerAttribute`

This reference describes `EditorHistoryHandlerAttribute` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-b9a0a8ea4f77523d) | Method |
| [`kind`](#api-1835ef7501eeef8f) | Property |

## Type declaration

<a id="api-8d4ce9d2bdb341f4"></a>
<!-- api: T:Inno.Editor.Interactions.EditorHistoryHandlerAttribute afc816dd856bff0f042d72c0b023d0d90ddbd15397bcfa1fa7f956e0a66fe679 -->

```csharp
public sealed class Inno.Editor.Interactions.EditorHistoryHandlerAttribute : System.Attribute
```

Registers a stateless editor history handler for one stable change protocol.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryHandlerAttribute.cs#L9).

## `#ctor`

<a id="api-b9a0a8ea4f77523d"></a>
<!-- api: M:Inno.Editor.Interactions.EditorHistoryHandlerAttribute.#ctor(System.String) f455e3556376f1c62c3aa778dafbc2dbc5db6683ab6bed2e9b0a10479060ca3a -->

```csharp
public Inno.Editor.Interactions.EditorHistoryHandlerAttribute.EditorHistoryHandlerAttribute(string kind)
```

Creates a history handler registration.

**Parameter `kind`:** The stable globally unique change protocol identifier.

**Throws `System.ArgumentException`:** Thrown when `kind` is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryHandlerAttribute.cs#L20).

## `kind`

<a id="api-1835ef7501eeef8f"></a>
<!-- api: P:Inno.Editor.Interactions.EditorHistoryHandlerAttribute.kind c5bd3866e1d7f64fe6d4c3645cfb7b601086390dc6140e0eca71909aac069521 -->

```csharp
public string Inno.Editor.Interactions.EditorHistoryHandlerAttribute.kind { get; }
```

Gets the stable globally unique change protocol identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryHandlerAttribute.cs#L29).
