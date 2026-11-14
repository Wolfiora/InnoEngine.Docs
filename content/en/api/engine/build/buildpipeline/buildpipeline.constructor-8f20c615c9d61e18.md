---
uid: api.8f20c615c9d61e18663ecc3c15aecc5ac6d551042c3408b0b1e729b9d18bb61c
symbol: "engine:Inno.Build:M:Inno.Build.BuildPipeline.#ctor(Inno.Assets.Pipeline.AssetPipeline,Inno.Plugins.Authoring.PluginEnvironment,Inno.Core.Settings.ProjectSettingsStore,Inno.Core.Serialization.SerializationRegistry,Inno.Extensibility.Reload.GenerationCoordinator,Inno.Scripting.Compiler.ScriptCompiler,System.String,System.Collections.Generic.IEnumerable{Inno.Build.GameBuildTargetBinding},Inno.Build.Managed.ManagedDeploymentCatalog,Inno.Build.IPlayerSupportPackProvisioner)"
source: xml
reviewed: 9261b1a6922f11d1f898137042ebbc8e74dc44f05022acb100f3125d9467fb1e
title: "BuildPipeline.Constructor"
kind: api
owners: [Inno.Build]
apiSurface: source-clr
---

Creates a build pipeline from installed Player Support Packs and platform packagers.

**Parameter `supportPackRoot`:** The directory containing one child directory per `T:Inno.Build.BuildTargetId`.

**Parameter `assets`:** The active authoring asset pipeline captured by builds.

**Parameter `generations`:** The host-wide admission gate that remains pinned until the build snapshot is released.

**Parameter `plugins`:** The active Plugin environment captured by builds.

**Parameter `settings`:** The current project settings store captured by builds.

**Parameter `serialization`:** The serialization registry used to pin and encode the build snapshot.

**Parameter `compiler`:** The project compiler used to produce a fresh runtime-only assembly generation for each game build.

**Parameter `gameTargets`:** The complete set of replaceable platform package implementations available to this host.

**Parameter `managedDeployments`:** Explicit managed publishers selected independently of the platform packagers.

**Parameter `supportPackProvisioner`:** Optional build-time provider that checks current source and SDK inputs during explicit pack preparation.

**Exception `T:System.ArgumentException`:** Thrown when the Support Pack root is empty, no target is provided, or a target identity is duplicated.
