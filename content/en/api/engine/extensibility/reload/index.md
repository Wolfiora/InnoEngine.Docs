---
uid: api.directory.engine.extensibility.reload
title: "Reload"
kind: landing
owners: []
---

# Reload

Find types in this project category. Each type links to its exact declarations and member contracts.

## Types

| Type | Purpose |
| --- | --- |
| [AssemblyUnloadBarrier](assemblyunloadbarrier/index.md) | Prevents a generation transition from completing until every retired collectible assembly is reclaimed. |
| [AssemblyUnloadBarrierOptions](assemblyunloadbarrieroptions/index.md) | Configures forced-collection cadence and the retention failure threshold. |
| [AssemblyUnloadBarrierState](assemblyunloadbarrierstate/index.md) | Describes the terminal or waiting state of an assembly unload barrier. |
| [AssemblyUnloadException](assemblyunloadexception/index.md) | Reports retired collectible generations that remained reachable after the unload barrier threshold. |
| [GenerationCoordinator](generationcoordinator/index.md) | Owns generation admission, atomic domain changes, rollback, and non-bypassable weak unload verification. |
| [GenerationState](generationstate/index.md) | Describes the shared admission gate for owner-thread generation transactions. |
| [IAssemblyUnloadProbe](iassemblyunloadprobe/index.md) | Observes one retired collectible generation without retaining its load context. |
| [IGenerationChange](igenerationchange/index.md) | Stages domain-owned state around an atomic generation publication without retaining it after completion. |
| [IGenerationPublication&lt;TProbe&gt;](igenerationpublication/index.md) | Publishes a candidate and supplies a weak retirement monitor at the irreversible commit boundary. |

