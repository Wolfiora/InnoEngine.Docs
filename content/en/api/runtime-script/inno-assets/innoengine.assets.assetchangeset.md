---
title: "AssetChangeSet"
description: "Reference for AssetChangeSet in Inno.Assets."
uid: api.inno.assets.runtime-script.c11df7431017dcaf
kind: api
owners:
  - Inno.Assets
apiSurface: runtime-script
contracts:
  - project.inno-assets
  - manual.scripting.use-script-api
---
# `AssetChangeSet`

This reference describes `AssetChangeSet` in `Inno.Assets`. Read the [shared contract](../../projects/inno-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-dcda40cbe04a75aa) | Method |
| [`changes`](#api-d533fc4329727288) | Property |
| [`isEmpty`](#api-b62eec2fd8c6db2b) | Property |
| [`revision`](#api-a9c67ade150be6c0) | Property |

## Type declaration

<a id="api-c11df7431017dcaf"></a>
<!-- api: T:InnoEngine.Assets.AssetChangeSet 19782efcb933a648120e60ee515b39f429d47f6e2c111c1e6ff46572607dfa40 -->

```csharp
public sealed class InnoEngine.Assets.AssetChangeSet
```

Contains one atomically committed asset database revision.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/Changes/AssetChangeSet.cs#L9).

## `#ctor`

<a id="api-dcda40cbe04a75aa"></a>
<!-- api: M:InnoEngine.Assets.AssetChangeSet.#ctor(System.Int64,System.Collections.Generic.IReadOnlyList{InnoEngine.Assets.AssetChange}) 12eeaca2cd96257852d2b4d276749d890f99c2ed4feb2a227240aa3a69fcbc15 -->

```csharp
public InnoEngine.Assets.AssetChangeSet.AssetChangeSet(long revision, System.Collections.Generic.IReadOnlyList<InnoEngine.Assets.AssetChange>? changes)
```

Creates a committed change set.

**Parameter `revision`:** The monotonic database revision assigned to the atomic commit.

**Parameter `changes`:** The ordered changes published by the commit, or `null` for an empty commit.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/Changes/AssetChangeSet.cs#L20).

## `changes`

<a id="api-d533fc4329727288"></a>
<!-- api: P:InnoEngine.Assets.AssetChangeSet.changes c9f933e23e8214bce152d251bee3f071ccb26fd554471e8754332a4ae978426a -->

```csharp
public System.Collections.Generic.IReadOnlyList<InnoEngine.Assets.AssetChange> InnoEngine.Assets.AssetChangeSet.changes { get; }
```

Gets the changes committed by this revision.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/Changes/AssetChangeSet.cs#L36).

## `isEmpty`

<a id="api-b62eec2fd8c6db2b"></a>
<!-- api: P:InnoEngine.Assets.AssetChangeSet.isEmpty 57e4e989a9fd328b2224f51aaff1a1183af90ce842fb1a517a5a43cf908b29a2 -->

```csharp
public bool InnoEngine.Assets.AssetChangeSet.isEmpty { get; }
```

Gets whether the change set contains no changes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/Changes/AssetChangeSet.cs#L41).

## `revision`

<a id="api-a9c67ade150be6c0"></a>
<!-- api: P:InnoEngine.Assets.AssetChangeSet.revision dc5aeb6d37f35a0928cde87cb3fe1025c523ba61db83c43f307b5870a4aa511a -->

```csharp
public long InnoEngine.Assets.AssetChangeSet.revision { get; }
```

Gets the monotonically increasing database revision.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/Changes/AssetChangeSet.cs#L31).
