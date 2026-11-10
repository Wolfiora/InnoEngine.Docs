---
title: "StandardBuildDistribution"
description: "Reference for StandardBuildDistribution in Inno.Build.Distribution.Standard."
uid: api.inno.build.distribution.standard.a86fde7406b2e1bb
kind: api
owners:
  - Inno.Build.Distribution.Standard
apiSurface: source-clr
contracts:
  - project.inno-build-distribution-standard#cache-and-workspace-ownership
---
# `StandardBuildDistribution`

This reference describes `StandardBuildDistribution` in `Inno.Build.Distribution.Standard`. Read the [shared contract](../../projects/inno-build-distribution-standard.md#cache-and-workspace-ownership) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`Create`](#api-bf845cdc31dae974) | Method |
| [`ResolveShaderTarget`](#api-eaf0b5b001274dff) | Method |
| [`build`](#api-2ee139cff662ba02) | Property |

## Type declaration

<a id="api-a86fde7406b2e1bb"></a>
<!-- api: T:Inno.Build.Distribution.Standard.StandardBuildDistribution 30950658a0f6e43303b5fa9aaece0172f155d97f5afa911a82f07da7b2d28a45 -->

```csharp
public sealed class Inno.Build.Distribution.Standard.StandardBuildDistribution
```

Binds platform publication and backend configuration once at the standard distribution boundary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/build/distributions/Inno.Build.Distribution.Standard/StandardBuildDistribution.cs#L23).

## `Create`

<a id="api-bf845cdc31dae974"></a>
<!-- api: M:Inno.Build.Distribution.Standard.StandardBuildDistribution.Create(Inno.Build.Composition.BuildCompositionContext,Inno.Build.Toolchains.Bgfx.Tools.ToolRunner) de68ca30c9323e7a37c0dc06a21517f49fd1bbc2a5a8b6d45e959b9ee9c25300 -->

```csharp
public static Inno.Build.Distribution.Standard.StandardBuildDistribution Inno.Build.Distribution.Standard.StandardBuildDistribution.Create(Inno.Build.Composition.BuildCompositionContext context, Inno.Build.Toolchains.Bgfx.Tools.ToolRunner? tools = null)
```

Composes one explicit binding per implemented platform without resolving tools.

**Parameter `context`:** The explicitly selected SDK and execution host.

**Parameter `tools`:** Borrowed frozen content-compilation tools, or null to consume this application's explicit deployment.

**Returns:** A frozen standard distribution with backend configuration bound to the same platform identities.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/build/distributions/Inno.Build.Distribution.Standard/StandardBuildDistribution.cs#L52).

## `ResolveShaderTarget`

<a id="api-eaf0b5b001274dff"></a>
<!-- api: M:Inno.Build.Distribution.Standard.StandardBuildDistribution.ResolveShaderTarget(Inno.Build.BuildTargetId) a705cc7b662b6cba4b163c0b2fe95802b0bc0202a76fa905edbdf589b31f9ab0 -->

```csharp
public Inno.Build.Toolchains.Bgfx.Tools.BgfxShaderTargetProfile Inno.Build.Distribution.Standard.StandardBuildDistribution.ResolveShaderTarget(Inno.Build.BuildTargetId target)
```

Resolves explicitly registered shader configuration independently of tool execution target.

**Parameter `target`:** The artifact's actual publication target.

**Returns:** The borrowed immutable configuration; unavailable targets fail before native preparation.

**Throws `System.NotSupportedException`:** The distribution has no shader configuration for this target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/build/distributions/Inno.Build.Distribution.Standard/StandardBuildDistribution.cs#L91).

## `build`

<a id="api-2ee139cff662ba02"></a>
<!-- api: P:Inno.Build.Distribution.Standard.StandardBuildDistribution.build ef7c994c8a067a0f2d5e137f23cda77f86bd61400062ca75382c414934f6031c -->

```csharp
public Inno.Build.Composition.BuildDistribution Inno.Build.Distribution.Standard.StandardBuildDistribution.build { get; }
```

Gets the neutral distribution borrowed by product hosts and shared pipeline mechanisms.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/build/distributions/Inno.Build.Distribution.Standard/StandardBuildDistribution.cs#L38).
