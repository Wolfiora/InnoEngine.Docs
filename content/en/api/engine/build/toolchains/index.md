---
uid: api.directory.engine.build.toolchains
title: "Toolchains"
kind: landing
owners: []
---

# Toolchains

Find types in this project category. Each type links to its exact declarations and member contracts.

## Types

| Type | Purpose |
| --- | --- |
| [BuildArtifactCopier](buildartifactcopier/index.md) | Copies filtered native outputs into the engine&#39;s rebuildable dependency store. |
| [BuildArtifactManifest](buildartifactmanifest/index.md) | Validates complete build outputs against their input identity and recorded file hashes. |
| [BuildArtifactOptions](buildartifactoptions/index.md) | Defines the deterministic filter and naming policy used to collect one native product. |
| [BuildArtifactReadLease](buildartifactreadlease/index.md) | Pins a verified immutable build artifact against cooperating repair and retirement operations. |
| [BuildArtifactWriteLease](buildartifactwritelease/index.md) | Coordinates artifact replacement or retirement with every cooperating reader and writer. |
| [BuildCacheArtifactDescriptor](buildcacheartifactdescriptor/index.md) | Freezes one publisher-owned cache entry and the generations it requires. |
| [BuildCacheArtifactRole](buildcacheartifactrole/index.md) | Declares the producer&#39;s file lifetime independently of target identity and directory naming. |
| [BuildCacheCleanupPlan](buildcachecleanupplan/index.md) | Freezes a reviewable retirement proposal for explicitly registered cache owners in one checkout. |
| [BuildCacheCleanupResult](buildcachecleanupresult/index.md) | Reports completed retirement independently from protected, active and failed artifacts. |
| [BuildCacheOwnerCatalog](buildcacheownercatalog/index.md) | Persists explicit publisher registrations for maintenance without loading the production distribution. |
| [BuildCacheOwnerDescriptor](buildcacheownerdescriptor/index.md) | Registers a publisher&#39;s exact cache boundary and its current artifact ownership inventory. |
| [BuildCachePolicy](buildcachepolicy/index.md) | Defines bounded retirement pressure without allowing active or current generations to be removed. |
| [BuildCachePublisher](buildcachepublisher/index.md) | Records exact publisher-owned generations and coordinates them with bounded cache retirement. |
| [BuildHostDescriptor](buildhostdescriptor/index.md) | Identifies the tool execution machine without selecting any product target. |
| [BuildHostServices](buildhostservices/index.md) | Freezes host execution capabilities independently of a product target SDK. |
| [BuildMaintenanceApplication](buildmaintenanceapplication/index.md) | Runs publisher-owned cache maintenance without backend, generator or Editor dependencies. |
| [ComponentNativeProductExecutor](componentnativeproductexecutor/index.md) | Executes portable component producers in their declared dependency order. |
| [DotNetSdkDescriptor](dotnetsdkdescriptor/index.md) | Freezes the host, SDK identity and managed CLI entry selected by one managed entry project. |
| [DotNetSdkEnvironment](dotnetsdkenvironment/index.md) | Isolates a managed tool invocation from the invoking IDE&#39;s SDK and MSBuild process identity. |
| [DotNetSdkResolver](dotnetsdkresolver/index.md) | Resolves the managed SDK using the prepared entry project&#39;s directory and normal global.json rules. |
| [IBuildHostProvider](ibuildhostprovider/index.md) | Discovers one explicitly registered host implementation. |
| [INativeBindingGenerator](inativebindinggenerator/index.md) | Prepares an entire binding closure without coupling native recipes to a generator or build host. |
| [INativeProductExecutor](inativeproductexecutor/index.md) | Executes an explicitly selected native product graph without target discovery. |
| [INativeToolchainProvider](inativetoolchainprovider/index.md) | Resolves one platform&#39;s SDK for an explicit target on a declared tool execution host. |
| [IToolchainWorkspaceProvider](itoolchainworkspaceprovider/index.md) | Owns the relationship between physical build storage and host tool execution paths. |
| [ManagedBuildExecution](managedbuildexecution/index.md) | Owns a reusable, exclusively leased source workspace containing verified copies of an operation&#39;s inputs. |
| [ManagedBuildInputSnapshot](managedbuildinputsnapshot/index.md) | Freezes the selected SDK&#39;s evaluated managed source graph without compiling a product. |
| [ManagedProjectGraphCapture](managedprojectgraphcapture/index.md) | Evaluates repository project inputs in one selected SDK process without executing project targets. |
| [NativeArtifact](nativeartifact/index.md) | Identifies one exact output and its producer-declared role. |
| [NativeArtifactPublisher](nativeartifactpublisher/index.md) | Publishes complete native products by source and toolchain identity under process-shared ownership. |
| [NativeArtifactRole](nativeartifactrole/index.md) | Describes the link or deployment role explicitly assigned by a native producer. |
| [NativeArtifactTransfer](nativeartifacttransfer/index.md) | Transports verified native payloads without copying publisher registrations, leases or writable workspaces. |
| [NativeBindingCompilation](nativebindingcompilation/index.md) | Describes a selected component&#39;s native requirements independently of its source generator. |
| [NativeBindingGenerationDescriptor](nativebindinggenerationdescriptor/index.md) | Describes the complete binding generation selected by one native build request. |
| [NativeBindingGenerationRequest](nativebindinggenerationrequest/index.md) | Freezes the complete binding request before ownership waits or candidate creation. |
| [NativeBindingGenerationResult](nativebindinggenerationresult/index.md) | Owns the reading protection of a complete binding closure until its final compiler consumer finishes. |
| [NativeBindingIncludeDirectory](nativebindingincludedirectory/index.md) | Preserves the order and search semantics of one native include requirement. |
| [NativeBindingOutputMode](nativebindingoutputmode/index.md) | Selects the publication owner of generated sources. |
| [NativeBindingPreparation](nativebindingpreparation/index.md) | Prepares a coherent target closure through the borrowed generator, without invoking MSBuild. |
| [NativeBindingSourceFile](nativebindingsourcefile/index.md) | Identifies exact generated or external bytes needed by a native compilation. |
| [NativeBindingSourceRoot](nativebindingsourceroot/index.md) | Identifies one component-local root without exposing a generator-specific contract. |
| [NativeBuildContext](nativebuildcontext/index.md) | Identifies the checkout, configuration and frozen initial inputs owned by one native build operation. Create a new context for each operation; changes during its lifetime fail stability verification. |
| [NativeBuildFingerprint](nativebuildfingerprint/index.md) | Derives recipe identities from ordered declarations, logical input names and complete source bytes. |
| [NativeBuildInput](nativebuildinput/index.md) | Separates the reproducible identity of an input from its physical reading location. |
| [NativeBuildPhaseStatistics](nativebuildphasestatistics/index.md) | Describes actual full reads and physical read reuse within one explicitly bounded input phase. |
| [NativeBuildProduct](nativebuildproduct/index.md) | Identifies one complete, integrity-checked native artifact and its exact published file closure. |
| [NativeBuildRecipe](nativebuildrecipe/index.md) | Freezes a component&#39;s input closure, ordered tool selection and intermediate owner. |
| [NativeBuildStatistics](nativebuildstatistics/index.md) | Reports actual input reading and compiler process work accumulated by one build context. |
| [NativeCMakeExecutor](nativecmakeexecutor/index.md) | Executes component-owned CMake definitions using an already frozen target SDK selection. |
| [NativeCMakeSource](nativecmakesource/index.md) | Describes copied recipe inputs owned by one cold CMake producer. External SDK locations remain assigned to the frozen toolchain. |
| [NativeCompilerInputs](nativecompilerinputs/index.md) | Freezes SDK-resolved native compiler and header inputs without interpreting environment conventions. |
| [NativeComponentBuildOptions](nativecomponentbuildoptions/index.md) | Freezes product-owned linkage, ordered component definitions and their configuration inputs. |
| [NativeComponentDescriptor](nativecomponentdescriptor/index.md) | Declares the unique source and build owners of a reusable native component. |
| [NativeDeploymentMetadataFactory](nativedeploymentmetadatafactory/index.md) | Creates explicitly selected deployment metadata from a frozen Native closure. |
| [NativeInputMaterializer](nativeinputmaterializer/index.md) | Materializes frozen native inputs without rewriting identical intermediate files. |
| [NativeLibraryKind](nativelibrarykind/index.md) | Specifies the linkage required by a product&#39;s native component operation. |
| [NativeLinkPlan](nativelinkplan/index.md) | Freezes platform library formats and linker configuration independently of component recipes. |
| [NativeStaticBuildDefinition](nativestaticbuilddefinition/index.md) | Declares a backend-owned static-library recipe and its complete checkout input closure. |
| [NativeToolchainPreparation](nativetoolchainpreparation/index.md) | Supplies shared environment isolation and SDK input validation without selecting a platform. |
| [NativeToolchainSelection](nativetoolchainselection/index.md) | Freezes target compiler tools and SDK inputs independently of discovery and platform policy. |
| [PhysicalToolchainWorkspaceProvider](physicaltoolchainworkspaceprovider/index.md) | Executes tools directly in their physical owner directory. |
| [ProductNativeBuildPlan](productnativebuildplan/index.md) | Executes a frozen product closure with one target toolchain and no implicit backend selection. |
| [ProductNativeBuildResult](productnativebuildresult/index.md) | Owns a complete ordered Native product closure and releases its reading leases together. |
| [ProductNativeBuildStep](productnativebuildstep/index.md) | Binds one product component to an owned build operation and explicit deployment layout. |
| [ProductNativeDeployment](productnativedeployment/index.md) | Materializes an explicitly built host-native closure into one application&#39;s deployment directory. |
| [ProductNativePreparation](productnativepreparation/index.md) | Transfers completed native preparation across private task loads using neutral data and independent consumer leases. |
| [ToolchainEnvironment](toolchainenvironment/index.md) | Provides deterministic host-process and workspace operations shared by native dependency toolchains. |
| [ToolchainLayout](toolchainlayout/index.md) | Defines stable repository-relative names shared by native dependency toolchains. |
| [ToolchainWorkingDirectory](toolchainworkingdirectory/index.md) | Retains a provider-owned tool execution path until all dependent processes finish. |

