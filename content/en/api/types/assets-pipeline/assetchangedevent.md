---
title: "AssetChangedEvent"
description: "Reference for AssetChangedEvent in Inno.Assets.Pipeline."
uid: api.inno.assets.pipeline.4e1acfd7a3aeb378
kind: api
owners:
  - Inno.Assets.Pipeline
apiSurface: source-clr
contracts:
  - project.inno-assets-pipeline
---
# `AssetChangedEvent`

This reference describes `AssetChangedEvent` in `Inno.Assets.Pipeline`. Read the [shared contract](../../projects/inno-assets-pipeline.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-d3b75f465dc50285) | Method |
| [`changeType`](#api-13acc617ed6b290d) | Property |
| [`oldRelativePath`](#api-dcfebe67b3c57d1e) | Property |
| [`relativePath`](#api-8f231b7666cafc44) | Property |

## Type declaration

<a id="api-4e1acfd7a3aeb378"></a>
<!-- api: T:Inno.Assets.Pipeline.AssetChangedEvent d08d18d143386c82377ca11699f142c059bbd25f181488400f3b1b9e2570a493 -->

```csharp
public readonly struct Inno.Assets.Pipeline.AssetChangedEvent
```

Batched file-system change event for asset source files.

**Parameter `relativePath`:** Changed path relative to watched root.

**Parameter `changeType`:** File-system change type.

**Parameter `oldRelativePath`:** Old path for rename operations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Sources/AssetChangedEvent.cs#L17).

## `#ctor`

<a id="api-d3b75f465dc50285"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetChangedEvent.#ctor(System.String,System.IO.WatcherChangeTypes,System.String) 6e3f4b6382fd851b7884353f9e2d1033cbe760e9f7053aa9b8ce443341f79810 -->

```csharp
public Inno.Assets.Pipeline.AssetChangedEvent.AssetChangedEvent(string relativePath, System.IO.WatcherChangeTypes changeType, string oldRelativePath = "")
```

Batched file-system change event for asset source files.

**Parameter `relativePath`:** Changed path relative to watched root.

**Parameter `changeType`:** File-system change type.

**Parameter `oldRelativePath`:** Old path for rename operations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Sources/AssetChangedEvent.cs#L17).

## `changeType`

<a id="api-13acc617ed6b290d"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetChangedEvent.changeType 8c43977aec11a786fb919d28dc7a46d9ded76bca2fc32e2761a4785626965abc -->

```csharp
public System.IO.WatcherChangeTypes Inno.Assets.Pipeline.AssetChangedEvent.changeType { get; }
```

Underlying file-system change type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Sources/AssetChangedEvent.cs#L30).

## `oldRelativePath`

<a id="api-dcfebe67b3c57d1e"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetChangedEvent.oldRelativePath 62fd55f6e325fcd63b51dc8c71a3754298b10b93bdd3ade356a28bb89355fcfd -->

```csharp
public string Inno.Assets.Pipeline.AssetChangedEvent.oldRelativePath { get; }
```

Old path relative to watched root for rename operations.
Empty for non-rename changes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Sources/AssetChangedEvent.cs#L36).

## `relativePath`

<a id="api-8f231b7666cafc44"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetChangedEvent.relativePath a2ddab756c5397afc8603cd6c5394f884ccadc9be5a0b2d77e49af4010c0bf02 -->

```csharp
public string Inno.Assets.Pipeline.AssetChangedEvent.relativePath { get; }
```

Changed path relative to watched root.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Sources/AssetChangedEvent.cs#L25).
