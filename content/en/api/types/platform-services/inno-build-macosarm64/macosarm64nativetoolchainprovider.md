---
title: "MacOSArm64NativeToolchainProvider"
description: "Reference for MacOSArm64NativeToolchainProvider in Inno.Build.MacOSArm64."
uid: api.inno.build.macosarm64.4e05fea90467910c
kind: api
owners:
  - Inno.Build.MacOSArm64
apiSurface: source-clr
contracts:
  - project.inno-build-macosarm64
---
# `MacOSArm64NativeToolchainProvider`

This reference describes `MacOSArm64NativeToolchainProvider` in `Inno.Build.MacOSArm64`. Read the [shared contract](../../../projects/inno-build-macosarm64.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Build.Toolchains.INativeToolchainProvider`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-0184dc8ab90c6544) | Method |
| [`ResolveAsync`](#api-fe48d86578398ae9) | Method |

## Type declaration

<a id="api-4e05fea90467910c"></a>
<!-- api: T:Inno.Build.MacOSArm64.MacOSArm64NativeToolchainProvider 16a5766b5d77bccf9a2ac9c84b9793f1d05b4f31f48db2a59c02f951c0602461 -->

```csharp
public sealed class Inno.Build.MacOSArm64.MacOSArm64NativeToolchainProvider : Inno.Build.Toolchains.INativeToolchainProvider
```

Resolves the MacOS SDK for a declared target without deriving publication policy from this process.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/MacOSArm64/build/Inno.Build.MacOSArm64/Toolchain/MacOSArm64NativeToolchainProvider.cs#L14).

## `#ctor`

<a id="api-0184dc8ab90c6544"></a>
<!-- api: M:Inno.Build.MacOSArm64.MacOSArm64NativeToolchainProvider.#ctor(System.String) 40846e41da32e9998c9d9e21c65e00b5ca1a5f68a8cf24690456e8b0996e89dc -->

```csharp
public Inno.Build.MacOSArm64.MacOSArm64NativeToolchainProvider.MacOSArm64NativeToolchainProvider(string dotnetHost)
```

Captures the explicit managed executable used by Native binding generation.

**Parameter `dotnetHost`:** The explicitly selected SDK executable path or command.

**Throws `System.ArgumentException`:** The host command is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/MacOSArm64/build/Inno.Build.MacOSArm64/Toolchain/MacOSArm64NativeToolchainProvider.cs#L27).

## `ResolveAsync`

<a id="api-fe48d86578398ae9"></a>
<!-- api: M:Inno.Build.MacOSArm64.MacOSArm64NativeToolchainProvider.ResolveAsync(Inno.Build.Toolchains.NativeBuildContext,Inno.Build.Toolchains.BuildHostDescriptor,System.String,System.Threading.CancellationToken) 61a0386dbe47bababc0d78f5baa660d60978817204c9daa4016e4234f807855c -->

```csharp
public System.Threading.Tasks.ValueTask<Inno.Build.Toolchains.NativeToolchainSelection> Inno.Build.MacOSArm64.MacOSArm64NativeToolchainProvider.ResolveAsync(Inno.Build.Toolchains.NativeBuildContext context, Inno.Build.Toolchains.BuildHostDescriptor host, string targetId, System.Threading.CancellationToken cancellationToken)
```

Freezes compiler tools, SDK inputs and child environment before a native operation starts.

**Parameter `context`:** The checkout and configuration owned by the requesting operation.

**Parameter `host`:** The explicitly declared execution host, independent of the target.

**Parameter `targetId`:** The exact requested target; unsupported combinations must fail.

**Parameter `cancellationToken`:** Cancels SDK discovery before any product staging.

**Returns:** A complete immutable tool selection for the requested host and target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/MacOSArm64/build/Inno.Build.MacOSArm64/Toolchain/MacOSArm64NativeToolchainProvider.cs#L34).
