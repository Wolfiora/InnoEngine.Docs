---
title: "AssetExecutionContext"
description: "Reference for AssetExecutionContext in Inno.Assets."
uid: api.inno.assets.6f83482cacbfa610
kind: api
owners:
  - Inno.Assets
apiSurface: source-clr
contracts:
  - project.inno-assets
---
# `AssetExecutionContext`

This reference describes `AssetExecutionContext` in `Inno.Assets`. Read the [shared contract](../../projects/inno-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`EnterScope`](#api-3fc2357a73deebb8) | Method |
| [`current`](#api-3333e6d2e9f1a183) | Property |

## Type declaration

<a id="api-6f83482cacbfa610"></a>
<!-- api: T:Inno.Assets.AssetExecutionContext e59cef334a28172d3d34ee7caae79dd3006dacafd4984774147444790c316f3c -->

```csharp
public static class Inno.Assets.AssetExecutionContext
```

Binds one host-owned asset lookup to the current asynchronous script execution context.

**Constraints:** This type is a composition boundary for Editor and Player hosts. Game code should use
`Inno.Assets.Assets` instead of managing execution scopes directly.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Runtime/AssetExecutionContext.cs#L14).

## `EnterScope`

<a id="api-3fc2357a73deebb8"></a>
<!-- api: M:Inno.Assets.AssetExecutionContext.EnterScope(Inno.Assets.IAssetLookup) 34f87744cec7f70bc129360042d3f34bea367b41ec16959898b19b2222e0a67e -->

```csharp
public static System.IDisposable Inno.Assets.AssetExecutionContext.EnterScope(Inno.Assets.IAssetLookup assets)
```

Binds an asset lookup until the returned strict last-in-first-out scope is disposed.

**Parameter `assets`:** The host-owned lookup to expose to script-facing asset operations.

**Returns:** A strict last-in-first-out execution scope owned by the caller.

**Throws `System.ArgumentNullException`:** Thrown when `assets` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Runtime/AssetExecutionContext.cs#L38).

## `current`

<a id="api-3333e6d2e9f1a183"></a>
<!-- api: P:Inno.Assets.AssetExecutionContext.current 866ec2266cc0eb53c8febc8cf0f28116ef62c4b4919067013277c7c4b5832146 -->

```csharp
public static Inno.Assets.IAssetLookup Inno.Assets.AssetExecutionContext.current { get; }
```

Gets the asset lookup bound to the current asynchronous execution context.

**Throws `System.InvalidOperationException`:** Thrown when no asset lookup is active for the caller.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Runtime/AssetExecutionContext.cs#L24).
