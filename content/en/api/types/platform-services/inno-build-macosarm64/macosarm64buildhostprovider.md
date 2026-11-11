---
title: "MacOSArm64BuildHostProvider"
description: "Reference for MacOSArm64BuildHostProvider in Inno.Build.MacOSArm64."
uid: api.inno.build.macosarm64.55484cd2549bafe8
kind: api
owners:
  - Inno.Build.MacOSArm64
apiSurface: source-clr
contracts:
  - project.inno-build-macosarm64
---
# `MacOSArm64BuildHostProvider`

This reference describes `MacOSArm64BuildHostProvider` in `Inno.Build.MacOSArm64`. Read the [shared contract](../../../projects/inno-build-macosarm64.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Build.Toolchains.IBuildHostProvider`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-857e67470699f735) | Method |
| [`TryCapture`](#api-74370878171eb349) | Method |

## Type declaration

<a id="api-55484cd2549bafe8"></a>
<!-- api: T:Inno.Build.MacOSArm64.MacOSArm64BuildHostProvider 054be74e0158eb8044e30aa662b2197ebd5373b41c2a71fce27aea37cb13e8ec -->

```csharp
public sealed class Inno.Build.MacOSArm64.MacOSArm64BuildHostProvider : Inno.Build.Toolchains.IBuildHostProvider
```

Contributes native Apple Silicon execution capabilities.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/MacOSArm64/build/Inno.Build.MacOSArm64/Host/MacOSArm64BuildHostProvider.cs#L10).

## `#ctor`

<a id="api-857e67470699f735"></a>
<!-- api: M:Inno.Build.MacOSArm64.MacOSArm64BuildHostProvider.#ctor 13ee2c4f5ef4c3bd6cea3116233e7f32e775fc10e0b2e685b5b9b0f6ab104940 -->

```csharp
public Inno.Build.MacOSArm64.MacOSArm64BuildHostProvider.MacOSArm64BuildHostProvider()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/MacOSArm64/build/Inno.Build.MacOSArm64/Host/MacOSArm64BuildHostProvider.cs#L10).

## `TryCapture`

<a id="api-74370878171eb349"></a>
<!-- api: M:Inno.Build.MacOSArm64.MacOSArm64BuildHostProvider.TryCapture 7f0956615fee97c6191b1718600ac069756964899a5cb79437d4a56d875bf0c0 -->

```csharp
public Inno.Build.Toolchains.BuildHostDescriptor? Inno.Build.MacOSArm64.MacOSArm64BuildHostProvider.TryCapture()
```

Captures the current execution machine when this provider supports it.

**Returns:** The immutable host, or null when the current machine is outside this provider's capabilities.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/MacOSArm64/build/Inno.Build.MacOSArm64/Host/MacOSArm64BuildHostProvider.cs#L13).
