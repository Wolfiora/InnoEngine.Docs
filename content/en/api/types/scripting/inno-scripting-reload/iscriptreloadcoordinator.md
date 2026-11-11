---
title: "IScriptReloadCoordinator"
description: "Reference for IScriptReloadCoordinator in Inno.Scripting.Reload."
uid: api.inno.scripting.reload.19c466a403b1e0eb
kind: api
owners:
  - Inno.Scripting.Reload
apiSurface: source-clr
contracts:
  - project.inno-scripting-reload
---
# `IScriptReloadCoordinator`

This reference describes `IScriptReloadCoordinator` in `Inno.Scripting.Reload`. Read the [shared contract](../../../projects/inno-scripting-reload.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`Execute`](#api-8a4e6337911d127a) | Method |
| [`RefreshDiagnostics`](#api-9b4acdb72dc1fb4c) | Method |

## Type declaration

<a id="api-19c466a403b1e0eb"></a>
<!-- api: T:Inno.Scripting.Reload.IScriptReloadCoordinator 62df8dadeb67a0243ab07966dd023f072d1a3aa4de96b2471b3b66fa50ca9081 -->

```csharp
public interface Inno.Scripting.Reload.IScriptReloadCoordinator
```

Coordinates host-owned state with an atomic script assembly generation transition.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Reload/IScriptReloadCoordinator.cs#L10).

## `Execute`

<a id="api-8a4e6337911d127a"></a>
<!-- api: M:Inno.Scripting.Reload.IScriptReloadCoordinator.Execute(Inno.Extensibility.Modules.AssemblyReloadSession,Inno.Extensibility.Reload.IGenerationChange) 9f0acebffa5543c959ecc39b64cc72869fef94b27559bd1b3c4c9e7f363b9f8d -->

```csharp
Inno.Extensibility.Reload.IAssemblyUnloadProbe Inno.Scripting.Reload.IScriptReloadCoordinator.Execute(Inno.Extensibility.Modules.AssemblyReloadSession reload, Inno.Extensibility.Reload.IGenerationChange? externalChange = null)
```

Commits a prepared assembly reload together with dependent host state.

**Parameter `reload`:** The prepared assembly reload session to activate and complete.

**Parameter `externalChange`:** Optional five-phase content change; captured before publication and restored before domain property recovery.

**Returns:** A monitor observing cooperative unload of assemblies retired by the committed generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Reload/IScriptReloadCoordinator.cs#L24).

## `RefreshDiagnostics`

<a id="api-9b4acdb72dc1fb4c"></a>
<!-- api: M:Inno.Scripting.Reload.IScriptReloadCoordinator.RefreshDiagnostics 6188f45a72e9dcd8c7640b31630ecd7636febf4fe549e2e3ba330a6159fcbad6 -->

```csharp
void Inno.Scripting.Reload.IScriptReloadCoordinator.RefreshDiagnostics()
```

Requests diagnostics derived from the active host generation to be republished.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Reload/IScriptReloadCoordinator.cs#L32).
