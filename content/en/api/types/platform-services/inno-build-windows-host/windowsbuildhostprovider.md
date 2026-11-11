---
title: "WindowsBuildHostProvider"
description: "Reference for WindowsBuildHostProvider in Inno.Build.Windows.Host."
uid: api.inno.build.windows.host.d3ec2a781e4d301c
kind: api
owners:
  - Inno.Build.Windows.Host
apiSurface: source-clr
contracts:
  - project.inno-build-windows-host
---
# `WindowsBuildHostProvider`

This reference describes `WindowsBuildHostProvider` in `Inno.Build.Windows.Host`. Read the [shared contract](../../../projects/inno-build-windows-host.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Build.Toolchains.IBuildHostProvider`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-0ede06c7e9a152d1) | Method |
| [`TryCapture`](#api-6c3527025262e5c3) | Method |

## Type declaration

<a id="api-d3ec2a781e4d301c"></a>
<!-- api: T:Inno.Build.Windows.Host.WindowsBuildHostProvider e3ccd7d16c85eb9436baf315b9f8f82bcef80feb8835c09bc0a521e2d6f71a01 -->

```csharp
public sealed class Inno.Build.Windows.Host.WindowsBuildHostProvider : Inno.Build.Toolchains.IBuildHostProvider
```

Contributes Windows process and filesystem execution capabilities.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/Windows/build/Inno.Build.Windows.Host/WindowsBuildHostProvider.cs#L10).

## `#ctor`

<a id="api-0ede06c7e9a152d1"></a>
<!-- api: M:Inno.Build.Windows.Host.WindowsBuildHostProvider.#ctor 1d7a2df2204e1c99ac2c3aef2dd3a4b60e13283ea8b59c438664f4b84560988d -->

```csharp
public Inno.Build.Windows.Host.WindowsBuildHostProvider.WindowsBuildHostProvider()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/Windows/build/Inno.Build.Windows.Host/WindowsBuildHostProvider.cs#L10).

## `TryCapture`

<a id="api-6c3527025262e5c3"></a>
<!-- api: M:Inno.Build.Windows.Host.WindowsBuildHostProvider.TryCapture c5005bdd7d29850caccec167b45e6016c1aa2bff157f3f935229deeacfb1aee5 -->

```csharp
public Inno.Build.Toolchains.BuildHostDescriptor? Inno.Build.Windows.Host.WindowsBuildHostProvider.TryCapture()
```

Captures the current execution machine when this provider supports it.

**Returns:** The immutable host, or null when the current machine is outside this provider's capabilities.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/Windows/build/Inno.Build.Windows.Host/WindowsBuildHostProvider.cs#L13).
