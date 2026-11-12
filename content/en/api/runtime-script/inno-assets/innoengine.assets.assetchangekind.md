---
title: "AssetChangeKind"
description: "Reference for AssetChangeKind in Inno.Assets."
uid: api.inno.assets.runtime-script.46b881edfcb926ff
kind: api
owners:
  - Inno.Assets
apiSurface: runtime-script
contracts:
  - project.inno-assets
  - manual.scripting.use-script-api
---
# `AssetChangeKind`

This reference describes `AssetChangeKind` in `Inno.Assets`. Read the [shared contract](../../projects/inno-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Added`](#api-a54411a184b2400d) | Field |
| [`Missing`](#api-332374d1918f5208) | Field |
| [`Modified`](#api-9097a878c294ee0e) | Field |
| [`Moved`](#api-e4aa33ff22ab150b) | Field |
| [`Removed`](#api-6702e9727c773fed) | Field |
| [`Replaced`](#api-a8a5005987b52fc7) | Field |
| [`StatusChanged`](#api-4dd53a9a1148be80) | Field |

## Type declaration

<a id="api-46b881edfcb926ff"></a>
<!-- api: T:InnoEngine.Assets.AssetChangeKind 8980d160040cb16fbc59b47fd5d37af40cc88d8fec5db46d860cf728cd12aed9 -->

```csharp
public enum InnoEngine.Assets.AssetChangeKind : int
```

Identifies a committed asset database change.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/Changes/AssetChangeKind.cs#L6).

## `Added`

<a id="api-a54411a184b2400d"></a>
<!-- api: F:InnoEngine.Assets.AssetChangeKind.Added be72d54f85c2e0540215b7012856802f996b41926fd3cf5192577f304f70d9b0 -->

```csharp
InnoEngine.Assets.AssetChangeKind.Added = 0
```

A source was added to the database.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/Changes/AssetChangeKind.cs#L11).

## `Missing`

<a id="api-332374d1918f5208"></a>
<!-- api: F:InnoEngine.Assets.AssetChangeKind.Missing 7c1ab03667f5367ca020bb16d358c2feb04283ffe2752cf39d104b1eca08453d -->

```csharp
InnoEngine.Assets.AssetChangeKind.Missing = 4
```

A source became unavailable while retaining its identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/Changes/AssetChangeKind.cs#L31).

## `Modified`

<a id="api-9097a878c294ee0e"></a>
<!-- api: F:InnoEngine.Assets.AssetChangeKind.Modified 10af290ffdc7b7e98cf29e842766a21dc6062125c4234bdb2c4a58337ffb9edb -->

```csharp
InnoEngine.Assets.AssetChangeKind.Modified = 1
```

An existing source or artifact changed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/Changes/AssetChangeKind.cs#L16).

## `Moved`

<a id="api-e4aa33ff22ab150b"></a>
<!-- api: F:InnoEngine.Assets.AssetChangeKind.Moved a782ad42706d3fcad46c4349abb4a3162db88d41a40a60c565cde46ab4dfaf55 -->

```csharp
InnoEngine.Assets.AssetChangeKind.Moved = 2
```

A source moved while retaining its persistent identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/Changes/AssetChangeKind.cs#L21).

## `Removed`

<a id="api-6702e9727c773fed"></a>
<!-- api: F:InnoEngine.Assets.AssetChangeKind.Removed d0a9989767dd96c7c7b3e720665bf6eecfda6c391a154aa93fd467d0ac36c248 -->

```csharp
InnoEngine.Assets.AssetChangeKind.Removed = 3
```

A source and its persistent metadata were removed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/Changes/AssetChangeKind.cs#L26).

## `Replaced`

<a id="api-a8a5005987b52fc7"></a>
<!-- api: F:InnoEngine.Assets.AssetChangeKind.Replaced efd88229750973d3c0fe7fa1db308614144334e8547054f6615117caa9903c01 -->

```csharp
InnoEngine.Assets.AssetChangeKind.Replaced = 5
```

A canonical runtime object was replaced by an incompatible imported type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/Changes/AssetChangeKind.cs#L36).

## `StatusChanged`

<a id="api-4dd53a9a1148be80"></a>
<!-- api: F:InnoEngine.Assets.AssetChangeKind.StatusChanged 0a77751555136907cb102acf3e9dba55c101db07270b884c178c4963dd6ab9a2 -->

```csharp
InnoEngine.Assets.AssetChangeKind.StatusChanged = 6
```

An import status or diagnostic changed without replacing the source.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/Changes/AssetChangeKind.cs#L41).
