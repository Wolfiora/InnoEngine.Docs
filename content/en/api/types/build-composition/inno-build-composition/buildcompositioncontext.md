---
title: "BuildCompositionContext"
description: "Reference for BuildCompositionContext in Inno.Build.Composition."
uid: api.inno.build.composition.0062aa326cdf4f6b
kind: api
owners:
  - Inno.Build.Composition
apiSurface: source-clr
contracts:
  - project.inno-build-composition
---
# `BuildCompositionContext`

This reference describes `BuildCompositionContext` in `Inno.Build.Composition`. Read the [shared contract](../../../projects/inno-build-composition.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-67e41c96d623af59) | Method |
| [`applicationDirectory`](#api-bbab17cf216d8b8c) | Property |
| [`dotnetHost`](#api-9469a32a6a2d9ba2) | Property |
| [`host`](#api-14f88865af3ac062) | Property |
| [`toolsTarget`](#api-7d51b7e9a65113b5) | Property |

## Type declaration

<a id="api-0062aa326cdf4f6b"></a>
<!-- api: T:Inno.Build.Composition.BuildCompositionContext ddfa616d6ce0d6008cfd6940196a7b1b48e39e9a80d928efd4c35b428306216d -->

```csharp
public sealed class Inno.Build.Composition.BuildCompositionContext
```

Captures host-owned SDK selection and application location without probing global process state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/composition/Inno.Build.Composition/BuildCompositionContext.cs#L10).

## `#ctor`

<a id="api-67e41c96d623af59"></a>
<!-- api: M:Inno.Build.Composition.BuildCompositionContext.#ctor(System.String,System.String,Inno.Build.Toolchains.BuildHostDescriptor,Inno.Build.BuildTargetId) 82563f897960271c562f02c1b3ea5fc62bd3bcf037bfe2c00e3678bee54139e6 -->

```csharp
public Inno.Build.Composition.BuildCompositionContext.BuildCompositionContext(string dotnetHost, string applicationDirectory, Inno.Build.Toolchains.BuildHostDescriptor host, Inno.Build.BuildTargetId toolsTarget)
```

Captures the host dependencies used by deployment and Support Pack preparation.

**Parameter `dotnetHost`:** The SDK executable selected by the host, either an executable path or a command name.

**Parameter `applicationDirectory`:** The absolute directory from which source-based Support Pack provisioning can be resolved.

**Parameter `host`:** The explicitly declared tool execution machine, independent of any publication target.

**Parameter `toolsTarget`:** The explicit native target of tools executed by this composition, independent of game publication.

**Throws `System.ArgumentException`:** The SDK command is blank or the application directory is not absolute.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/composition/Inno.Build.Composition/BuildCompositionContext.cs#L30).

## `applicationDirectory`

<a id="api-bbab17cf216d8b8c"></a>
<!-- api: P:Inno.Build.Composition.BuildCompositionContext.applicationDirectory 5001204ec8771c0ce709ebecc6a8b9d95e6bc89eaf469cf30101f86446996c55 -->

```csharp
public string Inno.Build.Composition.BuildCompositionContext.applicationDirectory { get; }
```

Gets the host location used for source provisioning discovery.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/composition/Inno.Build.Composition/BuildCompositionContext.cs#L57).

## `dotnetHost`

<a id="api-9469a32a6a2d9ba2"></a>
<!-- api: P:Inno.Build.Composition.BuildCompositionContext.dotnetHost 3b760e14e02f360d825bfa87efcc4079cff517917dce139cef74d779ddb8e482 -->

```csharp
public string Inno.Build.Composition.BuildCompositionContext.dotnetHost { get; }
```

Gets the explicitly selected SDK executable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/composition/Inno.Build.Composition/BuildCompositionContext.cs#L52).

## `host`

<a id="api-14f88865af3ac062"></a>
<!-- api: P:Inno.Build.Composition.BuildCompositionContext.host 123da1cdeecb0904f926f8d63ecad1fd978a494efcca5cf9313e0aa6c6a8d1e0 -->

```csharp
public Inno.Build.Toolchains.BuildHostDescriptor Inno.Build.Composition.BuildCompositionContext.host { get; }
```

Gets the declared execution host without selecting a product target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/composition/Inno.Build.Composition/BuildCompositionContext.cs#L62).

## `toolsTarget`

<a id="api-7d51b7e9a65113b5"></a>
<!-- api: P:Inno.Build.Composition.BuildCompositionContext.toolsTarget 454a492de064383d4da549f83ada547620e72f2b054d9496c27736dd55180411 -->

```csharp
public Inno.Build.BuildTargetId Inno.Build.Composition.BuildCompositionContext.toolsTarget { get; }
```

Gets the independently declared native target of build tools executed by this host.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/composition/Inno.Build.Composition/BuildCompositionContext.cs#L67).
