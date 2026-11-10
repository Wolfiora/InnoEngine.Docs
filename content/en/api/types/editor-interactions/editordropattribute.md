---
title: "EditorDropAttribute"
description: "Reference for EditorDropAttribute in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.cd14be88f6eaa498
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
---
# `EditorDropAttribute`

This reference describes `EditorDropAttribute` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-0490f5d30f3e6597) | Method |
| [`#ctor`](#api-03cd360a7f80d184) | Method |
| [`area`](#api-7eeafe1881f998db) | Property |
| [`priority`](#api-b2bc5f641957a7bd) | Property |

## Type declaration

<a id="api-cd14be88f6eaa498"></a>
<!-- api: T:Inno.Editor.Interactions.EditorDropAttribute 519e8c2e5273401fb733c020e914e99acd247483b0ad428eeff18d3c75a6ca76 -->

```csharp
public sealed class Inno.Editor.Interactions.EditorDropAttribute : System.Attribute
```

Registers a typed editor drop handler for an optional exact area.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropAttribute.cs#L9).

## `#ctor`

<a id="api-0490f5d30f3e6597"></a>
<!-- api: M:Inno.Editor.Interactions.EditorDropAttribute.#ctor(System.Int32) 5fa7e5720177e9629a1e4252451d49aeaf8c3d0256d0e84fc0719c2f8c615c64 -->

```csharp
public Inno.Editor.Interactions.EditorDropAttribute.EditorDropAttribute(int priority = 0)
```

Creates a drop registration that can participate on any interaction surface.

**Parameter `priority`:** The tie-breaking priority used after source and target specificity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropAttribute.cs#L17).

## `#ctor`

<a id="api-03cd360a7f80d184"></a>
<!-- api: M:Inno.Editor.Interactions.EditorDropAttribute.#ctor(System.String,System.Int32) 29f3ca4fe1d9b2ad0b0003a9a2c25c045450c11a02d2e933d491a0de9955243a -->

```csharp
public Inno.Editor.Interactions.EditorDropAttribute.EditorDropAttribute(string area, int priority = 0)
```

Creates a drop registration scoped to an exact interaction area.

**Parameter `area`:** The exact target area handled by this registration, or an empty string for any area.

**Parameter `priority`:** The tie-breaking priority used after source and target specificity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropAttribute.cs#L31).

## `area`

<a id="api-7eeafe1881f998db"></a>
<!-- api: P:Inno.Editor.Interactions.EditorDropAttribute.area 46fe0c71b8591384de1cfaea261d3a0c15a193735abc5325693c07e61c549c3d -->

```csharp
public string Inno.Editor.Interactions.EditorDropAttribute.area { get; }
```

Gets the optional exact interaction area.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropAttribute.cs#L42).

## `priority`

<a id="api-b2bc5f641957a7bd"></a>
<!-- api: P:Inno.Editor.Interactions.EditorDropAttribute.priority 4a4f1a33027ff4adf76fc89baea5efad8a7a73ec6bbaa51ac7bc9a08c7b31f7a -->

```csharp
public int Inno.Editor.Interactions.EditorDropAttribute.priority { get; }
```

Gets the tie-breaking priority.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropAttribute.cs#L47).
