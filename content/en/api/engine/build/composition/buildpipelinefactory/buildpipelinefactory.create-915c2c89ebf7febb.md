---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.915c2c89ebf7febb703f1d7fecd52c4f66b45fb5af73a143c7eba9d12f5add98
symbol: engine:Inno.Build.Composition:M:Inno.Build.Composition.BuildPipelineFactory.Create(Inno.Build.Composition.BuildCompositionContext,Inno.Build.Composition.BuildDistribution,Inno.Runtime.EngineHost,Inno.Assets.Pipeline.AssetPipeline,Inno.Plugins.Authoring.PluginEnvironment,Inno.Core.Settings.ProjectSettingsStore,Inno.Scripting.Compiler.ScriptCompiler,System.String)
title: BuildPipelineFactory.Create
kind: api
owners:
- Inno.Build.Composition
apiSurface: source-clr
sourceFingerprint: c2a03570f8216da379eb26394f827c9961e813bcd93b838d5a0ff6d05d0affe5
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `context`:** The SDK selection and host location used for optional source provisioning.

**Parameter `distribution`:** The frozen platform and deployment registrations shared by all entry points.

**Parameter `engine`:** The borrowed engine owning type, serialization, and generation transactions.

**Parameter `assets`:** The borrowed active authoring assets.

**Parameter `plugins`:** The borrowed active plugin generation.

**Parameter `settings`:** The borrowed project settings owner.

**Parameter `compiler`:** The borrowed compiler that freezes project code for each publication.

**Parameter `supportPackRoot`:** The host's installed Support Pack location.

## Returns

A pipeline retaining the supplied owners without taking responsibility for their disposal.
