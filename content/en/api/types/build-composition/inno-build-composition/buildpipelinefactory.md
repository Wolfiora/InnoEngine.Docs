---
title: "BuildPipelineFactory"
description: "Reference for BuildPipelineFactory in Inno.Build.Composition."
uid: api.inno.build.composition.93b45356aa16263c
kind: api
owners:
  - Inno.Build.Composition
apiSurface: source-clr
contracts:
  - project.inno-build-composition
---
# `BuildPipelineFactory`

This reference describes `BuildPipelineFactory` in `Inno.Build.Composition`. Read the [shared contract](../../../projects/inno-build-composition.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`Create`](#api-709f5830a832fada) | Method |

## Type declaration

<a id="api-93b45356aa16263c"></a>
<!-- api: T:Inno.Build.Composition.BuildPipelineFactory e5b8297ea65c27399b6a37c477d86ef44956c6f46c47ceed7d499c7baa156152 -->

```csharp
public static class Inno.Build.Composition.BuildPipelineFactory
```

Creates common build pipelines from a single distribution and explicitly borrowed authoring owners.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/composition/Inno.Build.Composition/BuildPipelineFactory.cs#L15).

## `Create`

<a id="api-709f5830a832fada"></a>
<!-- api: M:Inno.Build.Composition.BuildPipelineFactory.Create(Inno.Build.Composition.BuildCompositionContext,Inno.Build.Composition.BuildDistribution,Inno.Runtime.EngineHost,Inno.Assets.Pipeline.AssetPipeline,Inno.Plugins.Authoring.PluginEnvironment,Inno.Core.Settings.ProjectSettingsStore,Inno.Scripting.Compiler.ScriptCompiler,System.String) f89da029c21a6694d858d40b3930be8d0fc205114bb3596a3448c6e830770a39 -->

```csharp
public static Inno.Build.BuildPipeline Inno.Build.Composition.BuildPipelineFactory.Create(Inno.Build.Composition.BuildCompositionContext context, Inno.Build.Composition.BuildDistribution distribution, Inno.Runtime.EngineHost engine, Inno.Assets.Pipeline.AssetPipeline assets, Inno.Plugins.Authoring.PluginEnvironment plugins, Inno.Core.Settings.ProjectSettingsStore settings, Inno.Scripting.Compiler.ScriptCompiler compiler, string supportPackRoot)
```

Validates and binds the distribution to one authoring host without starting a build.

**Parameter `context`:** The SDK selection and host location used for optional source provisioning.

**Parameter `distribution`:** The frozen platform and deployment registrations shared by all entry points.

**Parameter `engine`:** The borrowed engine owning type, serialization, and generation transactions.

**Parameter `assets`:** The borrowed active authoring assets.

**Parameter `plugins`:** The borrowed active plugin generation.

**Parameter `settings`:** The borrowed project settings owner.

**Parameter `compiler`:** The borrowed compiler that freezes project code for each publication.

**Parameter `supportPackRoot`:** The host's installed Support Pack location.

**Returns:** A pipeline retaining the supplied owners without taking responsibility for their disposal.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/composition/Inno.Build.Composition/BuildPipelineFactory.cs#L47).
