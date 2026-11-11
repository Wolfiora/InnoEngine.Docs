---
title: "PlayerSupportPackLease"
description: "Reference for PlayerSupportPackLease in Inno.Build."
uid: api.inno.build.f4a5dace3737bf4c
kind: api
owners:
  - Inno.Build
apiSurface: source-clr
contracts:
  - project.inno-build
---
# `PlayerSupportPackLease`

This reference describes `PlayerSupportPackLease` in `Inno.Build`. Read the [shared contract](../../../projects/inno-build.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`Dispose`](#api-df4fa2275a380476) | Method |
| [`directory`](#api-e091e78c9c6d7a0f) | Property |

## Type declaration

<a id="api-f4a5dace3737bf4c"></a>
<!-- api: T:Inno.Build.PlayerSupportPackLease 405903513eb880ceef5e9d7272309bddb8c0529698c26c83c2fe129078d7cdf9 -->

```csharp
public sealed class Inno.Build.PlayerSupportPackLease : System.IDisposable
```

Keeps verified Player compilation and linker inputs alive until their consumer finishes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/Player/PlayerSupportPackLease.cs#L10).

## `Dispose`

<a id="api-df4fa2275a380476"></a>
<!-- api: M:Inno.Build.PlayerSupportPackLease.Dispose b368ec6ccacad21998f623fee936080915c24e30c8049d7912182a0faee6cf00 -->

```csharp
public void Inno.Build.PlayerSupportPackLease.Dispose()
```

Releases reading rights after all compilation, copying and linking have completed.
Repeated disposal has no effect.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/Player/PlayerSupportPackLease.cs#L42).

## `directory`

<a id="api-e091e78c9c6d7a0f"></a>
<!-- api: P:Inno.Build.PlayerSupportPackLease.directory 59d88b8cb5d000ef28dc5fe4337d69ddf112489071fb766c4d4f3c77b148122d -->

```csharp
public string Inno.Build.PlayerSupportPackLease.directory { get; }
```

Gets the verified absolute directory while this lease owns reading rights.

**Throws `System.ObjectDisposedException`:** The consumer has already released its reading rights.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/Player/PlayerSupportPackLease.cs#L29).
