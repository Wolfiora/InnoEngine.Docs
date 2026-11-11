---
title: "Assets"
description: "Reference for Assets in Inno.Assets."
uid: api.inno.assets.1f6f83c3e4eac6b0
kind: api
owners:
  - Inno.Assets
apiSurface: source-clr
contracts:
  - project.inno-assets
---
# `Assets`

This reference describes `Assets` in `Inno.Assets`. Read the [shared contract](../../projects/inno-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`AcquireArtifact`](#api-8d361776361f9d58) | Method |
| [```AcquireAsync``1```](#api-36359fc4eef4b75a) | Method |
| [```AcquireAsync``1```](#api-11830605d8580826) | Method |
| [```Load``1```](#api-d1a48e626779f6c6) | Method |
| [```Load``1```](#api-fc63fd1354f7230f) | Method |
| [`LocalPath`](#api-15d09f326a9a4839) | Method |
| [```TryLoad``1```](#api-72efbcd60f7064f4) | Method |
| [```TryLoad``1```](#api-c94970c0bceee50b) | Method |

## Type declaration

<a id="api-1f6f83c3e4eac6b0"></a>
<!-- api: T:Inno.Assets.Assets 7482cd44ade4221eb8b0f3d5d9303d242b980c5a7598417e611762e0ef343c6c -->

```csharp
public static class Inno.Assets.Assets
```

Provides script-facing asset queries through the lookup bound to the current runtime session.

**Constraints:** This façade owns no asset state. Engine and Editor infrastructure should depend on an explicit
`Inno.Assets.IAssetLookup` instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Runtime/Assets.cs#L15).

## `AcquireArtifact`

<a id="api-8d361776361f9d58"></a>
<!-- api: M:Inno.Assets.Assets.AcquireArtifact(System.Guid,System.String) eef5d7fc7914feb8ef43d0c2335320518f1e4b9332ae9ad329c21d46ab594a64 -->

```csharp
public static Inno.Assets.ArtifactLease Inno.Assets.Assets.AcquireArtifact(System.Guid persistentId, string outputName)
```

Acquires one verified immutable artifact output for an explicit lifetime.

**Parameter `persistentId`:** Persistent identity of the artifact owner.

**Parameter `outputName`:** Stable artifact output name.

**Returns:** A lease over verified artifact metadata and bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Runtime/Assets.cs#L201).

## ```AcquireAsync``1```

<a id="api-36359fc4eef4b75a"></a>
<!-- api: M:Inno.Assets.Assets.AcquireAsync``1(Inno.Assets.AssetPath,System.Threading.CancellationToken) 517f13efce9a5ba5e962f7ac34acecbb22793222f4416959654b213e2c761369 -->

```csharp
public static System.Threading.Tasks.ValueTask<Inno.Assets.AssetLease<TAsset>> Inno.Assets.Assets.AcquireAsync<TAsset>(Inno.Assets.AssetPath path, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken)) where TAsset : Inno.Assets.AssetObject
```

Acquires a canonical asset and explicitly retains it until the returned lease is disposed.

**Type parameter `TAsset`:** Required asset contract.

**Parameter `path`:** Mount-qualified logical asset path.

**Parameter `cancellationToken`:** Cancellation for this caller's asynchronous wait.

**Returns:** A lease that owns residency for the canonical asset.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Runtime/Assets.cs#L160).

## ```AcquireAsync``1```

<a id="api-11830605d8580826"></a>
<!-- api: M:Inno.Assets.Assets.AcquireAsync``1(System.Guid,System.Threading.CancellationToken) 767a8878b655d0c41692160e5a08fe894c7ec8898ff4ed542c470b90ddf09239 -->

```csharp
public static System.Threading.Tasks.ValueTask<Inno.Assets.AssetLease<TAsset>> Inno.Assets.Assets.AcquireAsync<TAsset>(System.Guid persistentId, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken)) where TAsset : Inno.Assets.AssetObject
```

Acquires a canonical asset by persistent identity and explicitly retains it.

**Type parameter `TAsset`:** Required asset contract.

**Parameter `persistentId`:** Persistent asset identity.

**Parameter `cancellationToken`:** Cancellation for this caller's asynchronous wait.

**Returns:** A lease that owns residency for the canonical asset.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Runtime/Assets.cs#L182).

## ```Load``1```

<a id="api-d1a48e626779f6c6"></a>
<!-- api: M:Inno.Assets.Assets.Load``1(Inno.Assets.AssetPath) 5b90c85a57895934adb4f02c2032408cb7fa9a84ad6d202d9980f2926bb3c35f -->

```csharp
public static TAsset Inno.Assets.Assets.Load<TAsset>(Inno.Assets.AssetPath path) where TAsset : Inno.Assets.AssetObject
```

Loads the canonical asset at a logical catalog path in the current session.

**Type parameter `TAsset`:** The required asset contract.

**Parameter `path`:** The mount-qualified logical catalog path.

**Returns:** The canonical compatible asset owned by the current lookup.

**Throws `System.InvalidOperationException`:** Thrown when no asset lookup is active, the asset does not exist, or its type is incompatible.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Runtime/Assets.cs#L70).

## ```Load``1```

<a id="api-fc63fd1354f7230f"></a>
<!-- api: M:Inno.Assets.Assets.Load``1(System.Guid) f8f22d776be2393cd0a35243492959fa1ed48a8dd57c4c4321a9330941c92620 -->

```csharp
public static TAsset Inno.Assets.Assets.Load<TAsset>(System.Guid persistentId) where TAsset : Inno.Assets.AssetObject
```

Loads the canonical asset with a persistent identity in the current session.

**Type parameter `TAsset`:** The required asset contract.

**Parameter `persistentId`:** The non-empty persistent asset identity.

**Returns:** The canonical compatible asset owned by the current lookup.

**Throws `System.InvalidOperationException`:** Thrown when no asset lookup is active, the asset does not exist, or its type is incompatible.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Runtime/Assets.cs#L89).

## `LocalPath`

<a id="api-15d09f326a9a4839"></a>
<!-- api: M:Inno.Assets.Assets.LocalPath(System.String,System.String) 45b0f2bd2f52193a93de01dd80b6883939426694b6e2396cca5a7614c5f5e1aa -->

```csharp
public static Inno.Assets.AssetPath Inno.Assets.Assets.LocalPath(string localPath, string sourceFile = "")
```

Creates a path relative to the Asset source that owns the calling script.

**Parameter `localPath`:** The normalized path relative to the caller's Project or installed Plugin Assets root.

**Parameter `sourceFile`:** The compiler-supplied canonical Asset path of the calling source file; callers normally omit it.

**Returns:** A mount-qualified path that follows the script from Project development into an installed Plugin.

**Throws `System.InvalidOperationException`:** The caller does not provide a canonical source location produced by the scripting compiler.

**Throws `System.ArgumentNullException`:** The local path or source location is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Runtime/Assets.cs#L35).

## ```TryLoad``1```

<a id="api-72efbcd60f7064f4"></a>
<!-- api: M:Inno.Assets.Assets.TryLoad``1(Inno.Assets.AssetPath,``0@) 82b64b7e3ab724fade45d7991df214f987a24dad1235603a593084eb7939276a -->

```csharp
public static bool Inno.Assets.Assets.TryLoad<TAsset>(Inno.Assets.AssetPath path, out TAsset? asset) where TAsset : Inno.Assets.AssetObject
```

Tries to load the canonical asset at a logical catalog path in the current session.

**Type parameter `TAsset`:** The required asset contract.

**Parameter `path`:** The mount-qualified logical catalog path.

**Parameter `asset`:** Receives the canonical compatible asset when available.

**Returns:** `true` when the current lookup contains a compatible asset; otherwise,
    `false`.

**Throws `System.InvalidOperationException`:** Thrown when no asset lookup is active for the caller.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Runtime/Assets.cs#L112).

## ```TryLoad``1```

<a id="api-c94970c0bceee50b"></a>
<!-- api: M:Inno.Assets.Assets.TryLoad``1(System.Guid,``0@) 09af33216552bab2cda0c8e6e8d1ca8a6775184f1b062c670792b80851a63e34 -->

```csharp
public static bool Inno.Assets.Assets.TryLoad<TAsset>(System.Guid persistentId, out TAsset? asset) where TAsset : Inno.Assets.AssetObject
```

Tries to load the canonical asset with a persistent identity in the current session.

**Type parameter `TAsset`:** The required asset contract.

**Parameter `persistentId`:** The non-empty persistent asset identity.

**Parameter `asset`:** Receives the canonical compatible asset when available.

**Returns:** `true` when the current lookup contains a compatible asset; otherwise,
    `false`.

**Throws `System.InvalidOperationException`:** Thrown when no asset lookup is active for the caller.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Runtime/Assets.cs#L138).
