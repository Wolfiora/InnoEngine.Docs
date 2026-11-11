---
title: "WindowsX64NativeToolchainProvider"
description: "Reference for WindowsX64NativeToolchainProvider in Inno.Build.WindowsX64."
uid: api.inno.build.windowsx64.2fc394aae9d7831f
kind: api
owners:
  - Inno.Build.WindowsX64
apiSurface: source-clr
contracts:
  - project.inno-build-windowsx64
---
# `WindowsX64NativeToolchainProvider`

This reference describes `WindowsX64NativeToolchainProvider` in `Inno.Build.WindowsX64`. Read the [shared contract](../../../projects/inno-build-windowsx64.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Build.Toolchains.INativeToolchainProvider`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-603234a40e85419c) | Method |
| [`ResolveAsync`](#api-47d050e201ceb0c9) | Method |

## Type declaration

<a id="api-2fc394aae9d7831f"></a>
<!-- api: T:Inno.Build.WindowsX64.WindowsX64NativeToolchainProvider 060cb355c63c79686d5f449e2ff7a85dee6a2e022fef635282def6b2460157a0 -->

```csharp
public sealed class Inno.Build.WindowsX64.WindowsX64NativeToolchainProvider : Inno.Build.Toolchains.INativeToolchainProvider
```

Resolves the Windows SDK for a declared target without deriving publication policy from this process.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/WindowsX64/build/Inno.Build.WindowsX64/Toolchain/WindowsX64NativeToolchainProvider.cs#L14).

## `#ctor`

<a id="api-603234a40e85419c"></a>
<!-- api: M:Inno.Build.WindowsX64.WindowsX64NativeToolchainProvider.#ctor(System.String) 6f53ffca086f1108676c6a112ab9f3a66f872f5980339a55fb59db07bdf7fd95 -->

```csharp
public Inno.Build.WindowsX64.WindowsX64NativeToolchainProvider.WindowsX64NativeToolchainProvider(string dotnetHost)
```

Captures the explicit managed executable used by Native binding generation.

**Parameter `dotnetHost`:** The explicitly selected SDK executable path or command.

**Throws `System.ArgumentException`:** The host command is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/WindowsX64/build/Inno.Build.WindowsX64/Toolchain/WindowsX64NativeToolchainProvider.cs#L27).

## `ResolveAsync`

<a id="api-47d050e201ceb0c9"></a>
<!-- api: M:Inno.Build.WindowsX64.WindowsX64NativeToolchainProvider.ResolveAsync(Inno.Build.Toolchains.NativeBuildContext,Inno.Build.Toolchains.BuildHostDescriptor,System.String,System.Threading.CancellationToken) 43c9b8ca487ed1d94692485d77badda2ac8cecea455cba0e93015ce4783507e3 -->

```csharp
public System.Threading.Tasks.ValueTask<Inno.Build.Toolchains.NativeToolchainSelection> Inno.Build.WindowsX64.WindowsX64NativeToolchainProvider.ResolveAsync(Inno.Build.Toolchains.NativeBuildContext context, Inno.Build.Toolchains.BuildHostDescriptor host, string targetId, System.Threading.CancellationToken cancellationToken)
```

Freezes compiler tools, SDK inputs and child environment before a native operation starts.

**Parameter `context`:** The checkout and configuration owned by the requesting operation.

**Parameter `host`:** The explicitly declared execution host, independent of the target.

**Parameter `targetId`:** The exact requested target; unsupported combinations must fail.

**Parameter `cancellationToken`:** Cancels SDK discovery before any product staging.

**Returns:** A complete immutable tool selection for the requested host and target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/WindowsX64/build/Inno.Build.WindowsX64/Toolchain/WindowsX64NativeToolchainProvider.cs#L34).
