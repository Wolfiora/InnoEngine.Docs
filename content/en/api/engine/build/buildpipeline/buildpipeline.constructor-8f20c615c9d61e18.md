---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.8f20c615c9d61e18663ecc3c15aecc5ac6d551042c3408b0b1e729b9d18bb61c
symbol: engine:Inno.Build:M:Inno.Build.BuildPipeline.#ctor(Inno.Assets.Pipeline.AssetPipeline,Inno.Plugins.Authoring.PluginEnvironment,Inno.Core.Settings.ProjectSettingsStore,Inno.Core.Serialization.SerializationRegistry,Inno.Extensibility.Reload.GenerationCoordinator,Inno.Scripting.Compiler.ScriptCompiler,System.String,System.Collections.Generic.IEnumerable{Inno.Build.GameBuildTargetBinding},Inno.Build.Managed.ManagedDeploymentCatalog,Inno.Build.IPlayerSupportPackProvisioner)
title: BuildPipeline.Constructor
kind: api
owners:
- Inno.Build
apiSurface: source-clr
sourceFingerprint: 4b1b0e83ca243ed6c85e57766ca38786bea9f1d97ed7813d91f7665d3c364f9c
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `assets`:** The active authoring asset pipeline captured by builds.

**Parameter `plugins`:** The active Plugin environment captured by builds.

**Parameter `settings`:** The current project settings store captured by builds.

**Parameter `serialization`:** The serialization registry used to pin and encode the build snapshot.

**Parameter `generations`:** The host-wide admission gate that remains pinned until the build snapshot is released.

**Parameter `compiler`:** The project compiler used to produce a fresh runtime-only assembly generation for each game build.

**Parameter `supportPackRoot`:** The directory containing one child directory per `T:Inno.Build.BuildTargetID`.

**Parameter `gameTargets`:** The complete set of replaceable platform package implementations available to this host.

**Parameter `managedDeployments`:** Explicit managed publishers selected independently of the platform packagers.

**Parameter `supportPackProvisioner`:** Optional build-time provider that checks current source and SDK inputs during explicit pack preparation.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when the Support Pack root is empty, no target is provided, or a target identity is duplicated.
