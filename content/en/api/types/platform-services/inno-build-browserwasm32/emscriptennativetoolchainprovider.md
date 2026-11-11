---
title: "EmscriptenNativeToolchainProvider"
description: "Reference for EmscriptenNativeToolchainProvider in Inno.Build.BrowserWasm32."
uid: api.inno.build.browserwasm32.55638965ef22457a
kind: api
owners:
  - Inno.Build.BrowserWasm32
apiSurface: source-clr
contracts:
  - project.inno-build-browserwasm32
---
# `EmscriptenNativeToolchainProvider`

This reference describes `EmscriptenNativeToolchainProvider` in `Inno.Build.BrowserWasm32`. Read the [shared contract](../../../projects/inno-build-browserwasm32.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Build.Toolchains.INativeToolchainProvider`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-670b71f38e8a0d81) | Method |
| [`ResolveAsync`](#api-9dd16345cb14e2df) | Method |

## Type declaration

<a id="api-55638965ef22457a"></a>
<!-- api: T:Inno.Build.BrowserWasm32.EmscriptenNativeToolchainProvider 978bf965c4378a3c2f5478c2817055fa856d998d7a420ff2eaee9a9f90588306 -->

```csharp
public sealed class Inno.Build.BrowserWasm32.EmscriptenNativeToolchainProvider : Inno.Build.Toolchains.INativeToolchainProvider
```

Selects Emscripten from the Browser product's actual SDK workload for an explicit wasm32 target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/BrowserWasm32/build/Inno.Build.BrowserWasm32/Toolchain/EmscriptenNativeToolchainProvider.cs#L13).

## `#ctor`

<a id="api-670b71f38e8a0d81"></a>
<!-- api: M:Inno.Build.BrowserWasm32.EmscriptenNativeToolchainProvider.#ctor(System.String) 3cd3343acdeb4e3a5cb214b4ce4b4eba5c5d27220b90a555ea54d009b0502f42 -->

```csharp
public Inno.Build.BrowserWasm32.EmscriptenNativeToolchainProvider.EmscriptenNativeToolchainProvider(string dotnetHost)
```

Captures the SDK executable selected by the build host without probing installed SDK versions.

**Parameter `dotnetHost`:** The host-selected SDK executable or explicit command.

**Throws `System.ArgumentException`:** The SDK command is blank.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/BrowserWasm32/build/Inno.Build.BrowserWasm32/Toolchain/EmscriptenNativeToolchainProvider.cs#L26).

## `ResolveAsync`

<a id="api-9dd16345cb14e2df"></a>
<!-- api: M:Inno.Build.BrowserWasm32.EmscriptenNativeToolchainProvider.ResolveAsync(Inno.Build.Toolchains.NativeBuildContext,Inno.Build.Toolchains.BuildHostDescriptor,System.String,System.Threading.CancellationToken) dc82888c43fafdf932cb555b78503b47fc5ec360cc8770011d3624f61979fd91 -->

```csharp
public System.Threading.Tasks.ValueTask<Inno.Build.Toolchains.NativeToolchainSelection> Inno.Build.BrowserWasm32.EmscriptenNativeToolchainProvider.ResolveAsync(Inno.Build.Toolchains.NativeBuildContext context, Inno.Build.Toolchains.BuildHostDescriptor host, string targetId, System.Threading.CancellationToken cancellationToken)
```

Freezes compiler tools, SDK inputs and child environment before a native operation starts.

**Parameter `context`:** The checkout and configuration owned by the requesting operation.

**Parameter `host`:** The explicitly declared execution host, independent of the target.

**Parameter `targetId`:** The exact requested target; unsupported combinations must fail.

**Parameter `cancellationToken`:** Cancels SDK discovery before any product staging.

**Returns:** A complete immutable tool selection for the requested host and target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/BrowserWasm32/build/Inno.Build.BrowserWasm32/Toolchain/EmscriptenNativeToolchainProvider.cs#L33).
