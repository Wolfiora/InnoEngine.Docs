---
title: Scene, prefab and transform tests
description: Verify scene identity, deterministic ordering and recoverable plugin state.
uid: project.inno-scene-tests
kind: project
owners:
  - Inno.Scene.Tests
---
# Scene, prefab and transform tests

`Inno.Scene.Tests` verifies the [Scene contracts](../../../architecture/projects/inno-scene.md) through their public entry points. Use this page to locate relevant assertions; it is not a report that these tests passed for your current change.

## Behavior covered

Scene and prefab round trips preserve canonical identity, hierarchy, state and direct references. Prefab instantiation remaps internal identities independently of a scene. Tests cover system lifecycle and manual order, stable queries after dense removal, project-scoped layer identity, symmetric interaction rules and parent transforms with rotation or nonuniform scale. Removing and restoring a plugin generation preserves its component as Missing state until recovery.

## Environment and execution

The project declares the `contract` validation layer. Use [the shared validation workflow](../../validate-change.md) to select its actual dependencies and environment. Inspect the [pinned project file](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/scene/Inno.Scene.Tests/Inno.Scene.Tests.csproj) for package and project references.

A focused diagnostic from the engine root is:

```powershell
dotnet test tests/scene/Inno.Scene.Tests/Inno.Scene.Tests.csproj --configuration Debug --disable-build-servers -m:1 -nodeReuse:false
```

Use `--filter FullyQualifiedName~MethodName` to investigate one case. A filtered run does not replace the obligations in the validation plan. Restore the declared SDK, packages and any tool/process prerequisites before executing; preserve cancellation, thread and cleanup requirements.

## Scenario reference

These representative methods are preserved from the original reference and checked against the pinned source. The linked files contain all assertions and parameterized cases.

### Engine Asset Integration

[Read the assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/scene/Inno.Scene.Tests/EngineAssetIntegrationTests.cs). Representative entry points:

- `SceneAsset_CaptureSaveLoadInstantiate_PreservesCanonicalIdentity`
- `PrefabAsset_IsSceneIndependentAndRemapsInternalReferences`
- `LoadedScene_InstantiatesConnectedPrefabsDuringUpdate`
- `SceneAsset_DirectAssetReferenceUsesCanonicalInstanceAndDependencyMetadata`

### Game Layer

[Read the assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/scene/Inno.Scene.Tests/GameLayerTests.cs). Representative entry points:

- `GameLayer_ValidatesSupportedSlotRange`
- `GameLayerMask_ComposesAndFiltersLayers`
- `GameLayerCatalog_EnforcesUniqueDefinitionsAndSymmetricInteractions`
- `ProjectScopedIds_FollowProjectIdentityWithoutRewritingDefinitions`

### Game System

[Read the assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/scene/Inno.Scene.Tests/GameSystemTests.cs). Representative entry points:

- `AddResetUniquenessAndMultiplePolicyUsePublicSceneApi`
- `LifecycleDispatchesImmediateActivationAndEditModeRemovalDoesNotDestroy`
- `SceneRoundtripPreservesSystemsStateIdentityOrderAndGraphReferences`
- `ManualSystemOrderIsIndependentFromExecutionPriorityAndBreaksPriorityTies`

### Plugin Scene Reload

[Read the assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/scene/Inno.Scene.Tests/PluginSceneReloadTests.cs). Representative entry points:

- `RemovingAndRestoringAPluginGenerationPreservesItsComponentAsMissingState`

### Scene Facade

[Read the assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/scene/Inno.Scene.Tests/SceneFacadeTests.cs). Representative entry points:

- `CreateObject_StoresDataInSceneStore_AndReturnsFacade`
- `NameAndTagQueriesTrackObjectMetadataChangesInStorageOrder`
- `OrderedSceneQueriesPreserveCreationOrderAfterDenseStorageRemoval`
- `TagRejectsEmptyValuesAndTrimsSurroundingWhitespace`

### Scene Serialization

[Read the assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/scene/Inno.Scene.Tests/SceneSerializationTests.cs). Representative entry points:

- `MissingSceneTypeDiagnosticPreservesStableIdentity`
- `SceneRoundtrip_PreservesHierarchyOrderStateAndDirectReferences`
- `PrefabInstantiation_RemapsIdentitiesAndIsolatesInternalReferences`
- `SceneRoundtripPreservesManualComponentAndSystemOrder`

### Transform

[Read the assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/scene/Inno.Scene.Tests/TransformTests.cs). Representative entry points:

- `SetParent_PreservesWorldTransform_AndComputesLocalWithNonUniformScale`
- `SetParent_WithRotation_PreservesWorldRotation_WithLocalRotationByInverseParent`
- `SetParent_UnparentPreservesWorldTransform`
- `SetParent_RejectsSelfAndDescendantCycle`

## Extend safely

Follow [the shared suite-maintenance guidance](../../validate-change.md#extend-a-suite-safely). Preserve this suite's owner-thread, resource-release and failure assertions when adding cases.
