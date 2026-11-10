---
title: "EditorModalExtension"
description: "Reference for EditorModalExtension in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.edcec1edcce291e9
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
---
# `EditorModalExtension`

This reference describes `EditorModalExtension` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Nested types

- [`EditorModalExtension.Presentation`](editormodalextension.presentation.md)

## Members

| Member | Kind |
| --- | --- |
| [`Draw`](#api-9f5c0aaf09d1411f) | Method |
| [`TryGetPresentation`](#api-4339db7f35a986ce) | Method |
| [`TryPrepare`](#api-f2389ac375ea79a5) | Method |
| [`id`](#api-0a3ed40e0c313c3a) | Property |
| [`order`](#api-7f0f79bb6e5be032) | Property |
| [`title`](#api-009f3c0dfb8ac1a7) | Property |

## Type declaration

<a id="api-edcec1edcce291e9"></a>
<!-- api: T:Inno.Editor.Interactions.EditorModalExtension cc7404c6561944ef39f5d5860b2e33d2c9ab32e4089a57fe210ae27a37f77320 -->

```csharp
public sealed class Inno.Editor.Interactions.EditorModalExtension
```

Describes one active modal extension.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorModalExtension.cs#L11).

## `Draw`

<a id="api-9f5c0aaf09d1411f"></a>
<!-- api: M:Inno.Editor.Interactions.EditorModalExtension.Draw(Inno.Editor.Core.EditorContext) afd0236ef40286459d277c43a8f3104cef046aef6f64f0e5d3d7de70a1f74638 -->

```csharp
public bool Inno.Editor.Interactions.EditorModalExtension.Draw(Inno.Editor.Core.EditorContext context)
```

Safely draws the modal body and quarantines a failing extension instance.

**Parameter `context`:** The active editor context supplied by the presentation backend.

**Returns:** `true` when the modal completed drawing without being quarantined.

**Throws `System.ArgumentNullException`:** Thrown when `context` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorModalExtension.cs#L150).

## `TryGetPresentation`

<a id="api-4339db7f35a986ce"></a>
<!-- api: M:Inno.Editor.Interactions.EditorModalExtension.TryGetPresentation(Inno.Editor.Interactions.EditorModalExtension.Presentation@) d9aa9a1da7e633f4658f0f1f07417510d93ab18810367e26ea127a18e60181e2 -->

```csharp
public bool Inno.Editor.Interactions.EditorModalExtension.TryGetPresentation(out Inno.Editor.Interactions.EditorModalExtension.Presentation presentation)
```

Safely captures generation-local modal presentation values.

**Parameter `presentation`:** The captured immutable presentation, or its default value when the modal is quarantined.

**Returns:** `true` when every presentation value was read successfully.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorModalExtension.cs#L105).

## `TryPrepare`

<a id="api-f2389ac375ea79a5"></a>
<!-- api: M:Inno.Editor.Interactions.EditorModalExtension.TryPrepare(Inno.Editor.Core.EditorContext,Inno.Editor.Interactions.EditorModalExtension.Presentation,System.Numerics.Vector2,System.Nullable{System.Numerics.Vector2}@) 193c7eefb0215c349e3fb52cdc6e23b031b65b8af89986b3de1b3d21ecda22f0 -->

```csharp
public bool Inno.Editor.Interactions.EditorModalExtension.TryPrepare(Inno.Editor.Core.EditorContext context, Inno.Editor.Interactions.EditorModalExtension.Presentation presentation, System.Numerics.Vector2 availableContentSize, out System.Numerics.Vector2? contentSize)
```

Prepares one presentation frame and quarantines callback failures within its owning presentation boundary.

**Parameter `context`:** The active owner-thread context.

**Parameter `presentation`:** The window policy already captured for this presentation attempt.

**Parameter `availableContentSize`:** The bounded content size in current presentation coordinates.

**Parameter `contentSize`:** The measured extent, or null for explicit sizing or failed preparation.

**Returns:** True when preparation succeeded; false when this extension is quarantined.

**Throws `System.ArgumentNullException`:** The context is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorModalExtension.cs#L67).

## `id`

<a id="api-0a3ed40e0c313c3a"></a>
<!-- api: P:Inno.Editor.Interactions.EditorModalExtension.id 9122a760e1dab27b676e4cf96d89876eea90c0662015fdd8e1527233e0b5519b -->

```csharp
public string Inno.Editor.Interactions.EditorModalExtension.id { get; }
```

Gets the stable modal identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorModalExtension.cs#L34).

## `order`

<a id="api-7f0f79bb6e5be032"></a>
<!-- api: P:Inno.Editor.Interactions.EditorModalExtension.order 6400e1a7717efedc01cf3d080b0b1e426558eaa267a8a7ae8abf465f35c9173f -->

```csharp
public int Inno.Editor.Interactions.EditorModalExtension.order { get; }
```

Gets the stable modal ordering value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorModalExtension.cs#L44).

## `title`

<a id="api-009f3c0dfb8ac1a7"></a>
<!-- api: P:Inno.Editor.Interactions.EditorModalExtension.title 0a8dea569564adabed3bb74afde68c249d67cb8aa3be77ba70931933908f4e79 -->

```csharp
public string Inno.Editor.Interactions.EditorModalExtension.title { get; }
```

Gets the visible modal title.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorModalExtension.cs#L39).
