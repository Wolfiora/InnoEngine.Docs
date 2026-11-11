---
title: "AssetReferenceKind"
description: "Reference for AssetReferenceKind in Inno.Assets."
uid: api.inno.assets.9876cd335660f59a
kind: api
owners:
  - Inno.Assets
apiSurface: source-clr
contracts:
  - project.inno-assets
---
# `AssetReferenceKind`

This reference describes `AssetReferenceKind` in `Inno.Assets`. Read the [shared contract](../../projects/inno-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`AssetDependency`](#api-8b5cd4c345d0a8ca) | Field |
| [`Editor`](#api-f76a78fb42d55a12) | Field |
| [`PrefabSource`](#api-f391f9eba41edc53) | Field |
| [`RuntimeSubsystem`](#api-30501d59781f8e59) | Field |
| [`SceneResource`](#api-802c9730bd8b8945) | Field |
| [`SerializedProperty`](#api-34f38e2211c17ec9) | Field |

## Type declaration

<a id="api-9876cd335660f59a"></a>
<!-- api: T:Inno.Assets.AssetReferenceKind 5a40fd4cbe1a7aa8d971cb82491648e8ce21e2e7ceaaa9364e14f591f19c12fc -->

```csharp
public enum Inno.Assets.AssetReferenceKind : int
```

Identifies a reference source known to the asset pipeline.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/AssetReferenceKind.cs#L7).

## `AssetDependency`

<a id="api-8b5cd4c345d0a8ca"></a>
<!-- api: F:Inno.Assets.AssetReferenceKind.AssetDependency 1d7cf1556899ae83b7625dd80608b71162f06d5afeefa6f7ba9e303f07db0ad4 -->

```csharp
Inno.Assets.AssetReferenceKind.AssetDependency = 0
```

The reference originates from another asset's runtime dependencies.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/AssetReferenceKind.cs#L12).

## `Editor`

<a id="api-f76a78fb42d55a12"></a>
<!-- api: F:Inno.Assets.AssetReferenceKind.Editor 866bef820a5d06fbdc5d20fbd43978857c29f926a9ae9bbef202563a640fe298 -->

```csharp
Inno.Assets.AssetReferenceKind.Editor = 4
```

The reference originates from an editor-only view or selection.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/AssetReferenceKind.cs#L28).

## `PrefabSource`

<a id="api-f391f9eba41edc53"></a>
<!-- api: F:Inno.Assets.AssetReferenceKind.PrefabSource b183027d1fb3f192c84697dc67904d4454195955f6cdb75535bab57847831004 -->

```csharp
Inno.Assets.AssetReferenceKind.PrefabSource = 3
```

The reference originates from a prefab source.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/AssetReferenceKind.cs#L24).

## `RuntimeSubsystem`

<a id="api-30501d59781f8e59"></a>
<!-- api: F:Inno.Assets.AssetReferenceKind.RuntimeSubsystem 1a146fab941ce0d118dc410acfe38c393b7aa54e0efcc5f84e8c3882b685d84f -->

```csharp
Inno.Assets.AssetReferenceKind.RuntimeSubsystem = 5
```

The reference originates from a runtime subsystem.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/AssetReferenceKind.cs#L32).

## `SceneResource`

<a id="api-802c9730bd8b8945"></a>
<!-- api: F:Inno.Assets.AssetReferenceKind.SceneResource c0972a5a5a4f5e5fca25771b1b8fccd9cc6adbdf0d8c84aea719758d450b7855 -->

```csharp
Inno.Assets.AssetReferenceKind.SceneResource = 2
```

The reference originates from a scene resource.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/AssetReferenceKind.cs#L20).

## `SerializedProperty`

<a id="api-34f38e2211c17ec9"></a>
<!-- api: F:Inno.Assets.AssetReferenceKind.SerializedProperty e655ad443612abc2a69efa6b3c0689aad8b3533c2bb9004c36afab6c877e080b -->

```csharp
Inno.Assets.AssetReferenceKind.SerializedProperty = 1
```

The reference originates from a serialized property.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/AssetReferenceKind.cs#L16).
