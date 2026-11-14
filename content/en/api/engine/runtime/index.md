---
uid: api.directory.engine.runtime
title: "Runtime"
kind: landing
owners: []
---

# Runtime

Find types in this project category. Each type links to its exact declarations and member contracts.

## Categories

| Category | Purpose |
| --- | --- |
| [Contracts](contracts/index.md) | Neutral subsystem lifecycle, finite frame phases and owned retirement protocols. |
| [Generators](generators/index.md) | Compile-time subsystem, module and factory catalogs with explicit metadata access. |

## Types

| Type | Purpose |
| --- | --- |
| [EngineHost](enginehost/index.md) | Owns application-level engine services and creates isolated runtime sessions. |
| [EngineHostBuilder](enginehostbuilder/index.md) | Collects application-level runtime services before creating an T:Inno.Runtime.EngineHost. |
| [GameCodeAssembly](gamecodeassembly/index.md) | Identifies one immutable code input independently of its physical deployment representation. |
| [GameCodeDeployment](gamecodedeployment/index.md) | Owns a validated, immutable and dependency-ordered logical game code closure. |
| [GameCodeModule](gamecodemodule/index.md) | Freezes the code ownership, ordered assembly identities and dependencies of one logical module. |
| [GamePresentationSettings](gamepresentationsettings/index.md) | Defines the project-wide game presentation area shared by Editor previews and deployed Players. |
| [GamePresentationViewport](gamepresentationviewport/index.md) | Stores one centered game-content region within a presentation surface. |
| [GameRuntimeAssembly](gameruntimeassembly/index.md) | Records a logical assembly identity and the content fingerprint of its build input. |
| [GameRuntimeManifest](gameruntimemanifest/index.md) | Stores the immutable startup contract consumed by a deployed game Player. |
| [GameRuntimeModule](gameruntimemodule/index.md) | Describes one dependency-ordered managed module in a frozen Player generation. |
| [GameRuntimePlugin](gameruntimeplugin/index.md) | Stores one Plugin&#39;s runtime-only project setting contribution. |
| [RuntimeContentCatalog](runtimecontentcatalog/index.md) | Describes the single immutable content pack deployed with a Player build. |
| [RuntimeJobExecutionMode](runtimejobexecutionmode/index.md) | Selects how one runtime session executes its frame jobs. |
| [RuntimeManifestEnvelope](runtimemanifestenvelope/index.md) | Frames the serialized runtime manifest with the application identity required before engine startup. |
| [RuntimeSession](runtimesession/index.md) | Owns all mutable simulation, identity, asset, scheduling, and logging state for one isolated execution session. |
| [RuntimeSessionKind](runtimesessionkind/index.md) | Identifies the ownership and lifecycle semantics of an isolated runtime session. |
| [RuntimeSessionOptions](runtimesessionoptions/index.md) | Defines storage, scheduling, and timing policy for one runtime session. |
| [RuntimeSubsystemPipeline](runtimesubsystempipeline/index.md) | Owns the dependency-ordered runtime subsystem generation for one Host or Session scope. |
| [StaticAssemblyCatalogSource](staticassemblycatalogsource/index.md) | Supplies an explicit linked host closure without runtime assembly probing or dynamic loading. |
| [StaticModuleSource](staticmodulesource/index.md) | Contributes statically linked module code to the same catalog transactions used by authoring hosts. |
| [StaticTypeCatalogSource](statictypecatalogsource/index.md) | Resolves type metadata and factories from linked registrations without runtime type discovery. |
| [Time](time/index.md) | Provides Unity-style timing values for the runtime session bound to the current execution context. |

