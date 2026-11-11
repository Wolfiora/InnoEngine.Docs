---
title: "AssetChangeSet"
description: "Reference for AssetChangeSet in Inno.Assets."
uid: api.inno.assets.6c37f57fcc2a2c98
kind: api
owners:
  - Inno.Assets
apiSurface: source-clr
contracts:
  - project.inno-assets
---
# `AssetChangeSet`

This reference describes `AssetChangeSet` in `Inno.Assets`. Read the [shared contract](../../projects/inno-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-1d9d1b331b2ab1e6) | Method |
| [`changes`](#api-014756a45d1f5ff2) | Property |
| [`isEmpty`](#api-02ea027a34f8b0de) | Property |
| [`revision`](#api-32c39ed71f79486b) | Property |

## Type declaration

<a id="api-6c37f57fcc2a2c98"></a>
<!-- api: T:Inno.Assets.AssetChangeSet 1dd62c39b4d2feeddfea2bb8bc0307aa3471283a3618015a2f104993cb75bde0 -->

```csharp
public sealed class Inno.Assets.AssetChangeSet
```

Contains one atomically committed asset database revision.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Changes/AssetChangeSet.cs#L9).

## `#ctor`

<a id="api-1d9d1b331b2ab1e6"></a>
<!-- api: M:Inno.Assets.AssetChangeSet.#ctor(System.Int64,System.Collections.Generic.IReadOnlyList{Inno.Assets.AssetChange}) 8e105187fa2df1a0bca569bd09e452288038b9b0c60f428e67fd62ea3b9b6300 -->

```csharp
public Inno.Assets.AssetChangeSet.AssetChangeSet(long revision, System.Collections.Generic.IReadOnlyList<Inno.Assets.AssetChange>? changes)
```

Creates a committed change set.

**Parameter `revision`:** The monotonic database revision assigned to the atomic commit.

**Parameter `changes`:** The ordered changes published by the commit, or `null` for an empty commit.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Changes/AssetChangeSet.cs#L20).

## `changes`

<a id="api-014756a45d1f5ff2"></a>
<!-- api: P:Inno.Assets.AssetChangeSet.changes 73ff694e8418f81a1495280b0825398e4ad19396d26fae2416dd7fa8b9e47d1b -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Assets.AssetChange> Inno.Assets.AssetChangeSet.changes { get; }
```

Gets the changes committed by this revision.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Changes/AssetChangeSet.cs#L36).

## `isEmpty`

<a id="api-02ea027a34f8b0de"></a>
<!-- api: P:Inno.Assets.AssetChangeSet.isEmpty 844acf43dd64272d5170cbecda479704f3d5e6079403dc27ebdbba0490ded237 -->

```csharp
public bool Inno.Assets.AssetChangeSet.isEmpty { get; }
```

Gets whether the change set contains no changes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Changes/AssetChangeSet.cs#L41).

## `revision`

<a id="api-32c39ed71f79486b"></a>
<!-- api: P:Inno.Assets.AssetChangeSet.revision a8293c0f4e6344d3c74a5f20a701437d64b5a634e16ddc0fac59ee0e6d97e06e -->

```csharp
public long Inno.Assets.AssetChangeSet.revision { get; }
```

Gets the monotonically increasing database revision.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Changes/AssetChangeSet.cs#L31).
