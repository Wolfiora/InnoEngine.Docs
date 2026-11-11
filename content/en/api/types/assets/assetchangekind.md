---
title: "AssetChangeKind"
description: "Reference for AssetChangeKind in Inno.Assets."
uid: api.inno.assets.38372437d89ce571
kind: api
owners:
  - Inno.Assets
apiSurface: source-clr
contracts:
  - project.inno-assets
---
# `AssetChangeKind`

This reference describes `AssetChangeKind` in `Inno.Assets`. Read the [shared contract](../../projects/inno-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Added`](#api-637875542e22ce3d) | Field |
| [`Missing`](#api-1af23b90045b2c0f) | Field |
| [`Modified`](#api-f5bf6c98964b25ce) | Field |
| [`Moved`](#api-8b1e7d240c3a11f1) | Field |
| [`Removed`](#api-ecbd46dc8db8a373) | Field |
| [`Replaced`](#api-05e0c84481ce7ce5) | Field |
| [`StatusChanged`](#api-e5a27106547c1c48) | Field |

## Type declaration

<a id="api-38372437d89ce571"></a>
<!-- api: T:Inno.Assets.AssetChangeKind 68d44db85e9c8b14e1f389c7c7003ad92858138c5454422393bc4cd1a60e3a36 -->

```csharp
public enum Inno.Assets.AssetChangeKind : int
```

Identifies a committed asset database change.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Changes/AssetChangeKind.cs#L6).

## `Added`

<a id="api-637875542e22ce3d"></a>
<!-- api: F:Inno.Assets.AssetChangeKind.Added b10d5a98e100fc719184fb1d10f3988089a5eed6523a6a371e0d0f6bbc24e85d -->

```csharp
Inno.Assets.AssetChangeKind.Added = 0
```

A source was added to the database.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Changes/AssetChangeKind.cs#L11).

## `Missing`

<a id="api-1af23b90045b2c0f"></a>
<!-- api: F:Inno.Assets.AssetChangeKind.Missing 95f9cf6bb31c650fafeb99f204bb064e016e1b3d521d1713248ea76c32f054b1 -->

```csharp
Inno.Assets.AssetChangeKind.Missing = 4
```

A source became unavailable while retaining its identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Changes/AssetChangeKind.cs#L31).

## `Modified`

<a id="api-f5bf6c98964b25ce"></a>
<!-- api: F:Inno.Assets.AssetChangeKind.Modified 15c7ee41afc11bf48d8fae32d63c0b751868076e7649a56448401373845aca93 -->

```csharp
Inno.Assets.AssetChangeKind.Modified = 1
```

An existing source or artifact changed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Changes/AssetChangeKind.cs#L16).

## `Moved`

<a id="api-8b1e7d240c3a11f1"></a>
<!-- api: F:Inno.Assets.AssetChangeKind.Moved 2f7d7c1bbd645d9e7eea82674bb05cb47508d0b5a69afbea4704df114ac1fb07 -->

```csharp
Inno.Assets.AssetChangeKind.Moved = 2
```

A source moved while retaining its persistent identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Changes/AssetChangeKind.cs#L21).

## `Removed`

<a id="api-ecbd46dc8db8a373"></a>
<!-- api: F:Inno.Assets.AssetChangeKind.Removed 24d435711c5ba253b7fa16fe192ad39b1f0892b4290858a6d1f677caf8b1de0c -->

```csharp
Inno.Assets.AssetChangeKind.Removed = 3
```

A source and its persistent metadata were removed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Changes/AssetChangeKind.cs#L26).

## `Replaced`

<a id="api-05e0c84481ce7ce5"></a>
<!-- api: F:Inno.Assets.AssetChangeKind.Replaced ab2155c420bc14ced8ae651c48ea7f6ef0190c0424f86ab54a1b7a17eb818500 -->

```csharp
Inno.Assets.AssetChangeKind.Replaced = 5
```

A canonical runtime object was replaced by an incompatible imported type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Changes/AssetChangeKind.cs#L36).

## `StatusChanged`

<a id="api-e5a27106547c1c48"></a>
<!-- api: F:Inno.Assets.AssetChangeKind.StatusChanged fe211c82b1dd068a6efc5d5c42cffd51e9c18666dab90a3797a8d8c8271d4492 -->

```csharp
Inno.Assets.AssetChangeKind.StatusChanged = 6
```

An import status or diagnostic changed without replacing the source.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Changes/AssetChangeKind.cs#L41).
