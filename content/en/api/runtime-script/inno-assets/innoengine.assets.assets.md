---
title: "Assets"
description: "Reference for Assets in Inno.Assets."
uid: api.inno.assets.runtime-script.433349d519d9b2ae
kind: api
owners:
  - Inno.Assets
apiSurface: runtime-script
contracts:
  - project.inno-assets
  - manual.scripting.use-script-api
---
# `Assets`

This reference describes `Assets` in `Inno.Assets`. Read the [shared contract](../../projects/inno-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`AcquireArtifact`](#api-9a51c2148a32038a) | Method |
| [```AcquireAsync``1```](#api-9df2bcd0a535ff2e) | Method |
| [```AcquireAsync``1```](#api-5d1e0152b159f3fa) | Method |
| [```Load``1```](#api-3d5291f7d1741286) | Method |
| [```Load``1```](#api-a78bde6af289a27e) | Method |
| [`LocalPath`](#api-8b948d947f55b5b0) | Method |
| [```TryLoad``1```](#api-6bfa8fdfedc2fad4) | Method |
| [```TryLoad``1```](#api-b92b0935c6993bd4) | Method |

## Type declaration

<a id="api-433349d519d9b2ae"></a>
<!-- api: T:InnoEngine.Assets.Assets 36cafadba2f4ccbc42ff98e58c906034d3741cd728353ab2956d6bbf7d40554f -->

```csharp
public static class InnoEngine.Assets.Assets
```

Provides script-facing asset queries through the lookup bound to the current runtime session.

**Constraints:** This façade owns no asset state. Engine and Editor infrastructure should depend on an explicit
`InnoEngine.Assets.IAssetLookup` instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/Runtime/Assets.cs#L15).

## `AcquireArtifact`

<a id="api-9a51c2148a32038a"></a>
<!-- api: M:InnoEngine.Assets.Assets.AcquireArtifact(System.Guid,System.String) d75444c0437cdf68263b2ca408d4c0c04748d75635bba784216fed8a215c197c -->

```csharp
public static InnoEngine.Assets.ArtifactLease InnoEngine.Assets.Assets.AcquireArtifact(System.Guid persistentId, string outputName)
```

Acquires one verified immutable artifact output for an explicit lifetime.

**Parameter `persistentId`:** Persistent identity of the artifact owner.

**Parameter `outputName`:** Stable artifact output name.

**Returns:** A lease over verified artifact metadata and bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/Runtime/Assets.cs#L201).

## ```AcquireAsync``1```

<a id="api-9df2bcd0a535ff2e"></a>
<!-- api: M:InnoEngine.Assets.Assets.AcquireAsync``1(InnoEngine.Assets.AssetPath,System.Threading.CancellationToken) 78ccb5af5aaab84a1987b31ac5a764adf08af9f0a12d203acde97b229381c8c5 -->

```csharp
public static System.Threading.Tasks.ValueTask<InnoEngine.Assets.AssetLease<TAsset>> InnoEngine.Assets.Assets.AcquireAsync<TAsset>(InnoEngine.Assets.AssetPath path, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken)) where TAsset : InnoEngine.Assets.AssetObject
```

Acquires a canonical asset and explicitly retains it until the returned lease is disposed.

**Type parameter `TAsset`:** Required asset contract.

**Parameter `path`:** Mount-qualified logical asset path.

**Parameter `cancellationToken`:** Cancellation for this caller's asynchronous wait.

**Returns:** A lease that owns residency for the canonical asset.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/Runtime/Assets.cs#L160).

## ```AcquireAsync``1```

<a id="api-5d1e0152b159f3fa"></a>
<!-- api: M:InnoEngine.Assets.Assets.AcquireAsync``1(System.Guid,System.Threading.CancellationToken) 647cd3b48b5f1da498e2a15153cdc99ac56ec7854969fb42d432d83d9e66333d -->

```csharp
public static System.Threading.Tasks.ValueTask<InnoEngine.Assets.AssetLease<TAsset>> InnoEngine.Assets.Assets.AcquireAsync<TAsset>(System.Guid persistentId, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken)) where TAsset : InnoEngine.Assets.AssetObject
```

Acquires a canonical asset by persistent identity and explicitly retains it.

**Type parameter `TAsset`:** Required asset contract.

**Parameter `persistentId`:** Persistent asset identity.

**Parameter `cancellationToken`:** Cancellation for this caller's asynchronous wait.

**Returns:** A lease that owns residency for the canonical asset.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/Runtime/Assets.cs#L182).

## ```Load``1```

<a id="api-3d5291f7d1741286"></a>
<!-- api: M:InnoEngine.Assets.Assets.Load``1(InnoEngine.Assets.AssetPath) a9106f620d1d978b056b560cac41320314682042c9c4234ebeb1040e1a412e7d -->

```csharp
public static TAsset InnoEngine.Assets.Assets.Load<TAsset>(InnoEngine.Assets.AssetPath path) where TAsset : InnoEngine.Assets.AssetObject
```

Loads the canonical asset at a logical catalog path in the current session.

**Type parameter `TAsset`:** The required asset contract.

**Parameter `path`:** The mount-qualified logical catalog path.

**Returns:** The canonical compatible asset owned by the current lookup.

**Throws `System.InvalidOperationException`:** Thrown when no asset lookup is active, the asset does not exist, or its type is incompatible.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/Runtime/Assets.cs#L70).

## ```Load``1```

<a id="api-a78bde6af289a27e"></a>
<!-- api: M:InnoEngine.Assets.Assets.Load``1(System.Guid) 5dddd6d03a88e21350e2f075d70d7507b8d8764b084e7bf866763012ede778c6 -->

```csharp
public static TAsset InnoEngine.Assets.Assets.Load<TAsset>(System.Guid persistentId) where TAsset : InnoEngine.Assets.AssetObject
```

Loads the canonical asset with a persistent identity in the current session.

**Type parameter `TAsset`:** The required asset contract.

**Parameter `persistentId`:** The non-empty persistent asset identity.

**Returns:** The canonical compatible asset owned by the current lookup.

**Throws `System.InvalidOperationException`:** Thrown when no asset lookup is active, the asset does not exist, or its type is incompatible.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/Runtime/Assets.cs#L89).

## `LocalPath`

<a id="api-8b948d947f55b5b0"></a>
<!-- api: M:InnoEngine.Assets.Assets.LocalPath(System.String,System.String) 5d5b56a1c35f2a0fc1f8d8d27d81ac487d5751d8243b61f658bf7a8dd8b1cdc9 -->

```csharp
public static InnoEngine.Assets.AssetPath InnoEngine.Assets.Assets.LocalPath(string localPath, string sourceFile = "")
```

Creates a path relative to the Asset source that owns the calling script.

**Parameter `localPath`:** The normalized path relative to the caller's Project or installed Plugin Assets root.

**Parameter `sourceFile`:** The compiler-supplied canonical Asset path of the calling source file; callers normally omit it.

**Returns:** A mount-qualified path that follows the script from Project development into an installed Plugin.

**Throws `System.InvalidOperationException`:** The caller does not provide a canonical source location produced by the scripting compiler.

**Throws `System.ArgumentNullException`:** The local path or source location is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/Runtime/Assets.cs#L35).

## ```TryLoad``1```

<a id="api-6bfa8fdfedc2fad4"></a>
<!-- api: M:InnoEngine.Assets.Assets.TryLoad``1(InnoEngine.Assets.AssetPath,``0@) 1801faedcae99217969d5816aecb625342a39d586b04e5718d15cfe2b0730aab -->

```csharp
public static bool InnoEngine.Assets.Assets.TryLoad<TAsset>(InnoEngine.Assets.AssetPath path, out TAsset? asset) where TAsset : InnoEngine.Assets.AssetObject
```

Tries to load the canonical asset at a logical catalog path in the current session.

**Type parameter `TAsset`:** The required asset contract.

**Parameter `path`:** The mount-qualified logical catalog path.

**Parameter `asset`:** Receives the canonical compatible asset when available.

**Returns:** `true` when the current lookup contains a compatible asset; otherwise,
            `false`.

**Throws `System.InvalidOperationException`:** Thrown when no asset lookup is active for the caller.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/Runtime/Assets.cs#L112).

## ```TryLoad``1```

<a id="api-b92b0935c6993bd4"></a>
<!-- api: M:InnoEngine.Assets.Assets.TryLoad``1(System.Guid,``0@) 3019f7787c793ae03c4fdeeed5e6060365c035bd8f1042df060e39eeb5eddf6a -->

```csharp
public static bool InnoEngine.Assets.Assets.TryLoad<TAsset>(System.Guid persistentId, out TAsset? asset) where TAsset : InnoEngine.Assets.AssetObject
```

Tries to load the canonical asset with a persistent identity in the current session.

**Type parameter `TAsset`:** The required asset contract.

**Parameter `persistentId`:** The non-empty persistent asset identity.

**Parameter `asset`:** Receives the canonical compatible asset when available.

**Returns:** `true` when the current lookup contains a compatible asset; otherwise,
            `false`.

**Throws `System.InvalidOperationException`:** Thrown when no asset lookup is active for the caller.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/Runtime/Assets.cs#L138).
