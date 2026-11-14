---
uid: api.directory.engine.extensibility.modules
title: "Modules"
kind: landing
owners: []
---

# Modules

Find types in this project category. Each type links to its exact declarations and member contracts.

## Types

| Type | Purpose |
| --- | --- |
| [AssemblyCatalogSnapshot](assemblycatalogsnapshot/index.md) | Represents an immutable view of the assemblies participating in one catalog generation. |
| [AssemblyDomain](assemblydomain/index.md) | Identifies the ownership and reload boundary of a managed assembly. |
| [AssemblyExtensions](assemblyextensions/index.md) | Provides ownership and scope metadata helpers for assemblies participating in the Inno runtime. |
| [AssemblyModuleHandle](assemblymodulehandle/index.md) | Identifies a logical assembly module without retaining its runtime assemblies. |
| [AssemblyModuleInfo](assemblymoduleinfo/index.md) | Provides non-owning diagnostic information about an active assembly module. |
| [AssemblyModuleStatus](assemblymodulestatus/index.md) | Describes the catalog state of a published assembly module generation. |
| [AssemblyReloadContext](assemblyreloadcontext/index.md) | Provides assembly catalogs and participant-specific state during a reload transaction. |
| [AssemblyReloadSession](assemblyreloadsession/index.md) | Controls activation, completion, and rollback of one prepared module generation. |
| [AssemblyScope](assemblyscope/index.md) | Identifies whether an assembly can participate in runtime or editor-only dependency graphs. |
| [IAssemblyCatalogParticipant](iassemblycatalogparticipant/index.md) | Builds transactional derived state for an assembly catalog generation. |
| [IAssemblyCatalogSource](iassemblycatalogsource/index.md) | Owns the host assembly source independently of any module loading implementation. |
| [IAssemblyCatalogTransaction](iassemblycatalogtransaction/index.md) | Controls one participant&#39;s prepared state during an assembly catalog transaction. |
| [IModuleLifetime](imodulelifetime/index.md) | Owns implementation-specific resources acquired for one unpublished or active module generation. |
| [IModuleSource](imodulesource/index.md) | Prepares one module generation without publishing it to the owning catalog. |
| [ModuleAssemblyDescriptor](moduleassemblydescriptor/index.md) | Describes the ownership classification of one planned assembly without loading its code. |
| [ModuleCatalogContribution](modulecatalogcontribution/index.md) | Freezes the assemblies, classification and lifetime of one acquired module generation. |
| [ModuleHost](modulehost/index.md) | Owns the active managed assembly catalog and transactional module generations. |
| [ModuleHostOptions](modulehostoptions/index.md) | Selects the isolated host catalog without prescribing storage for contributed module sources. |
| [ModuleSourceContext](modulesourcecontext/index.md) | Supplies a source with the frozen dependencies and retirement boundary of one candidate generation. |

