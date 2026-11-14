---
uid: api.directory.engine.scene
title: "Scene"
kind: landing
owners: []
---

# Scene

Find types in this project category. Each type links to its exact declarations and member contracts.

## Types

| Type | Purpose |
| --- | --- |
| [AllowMultipleComponentAttribute](allowmultiplecomponentattribute/index.md) | Allows multiple instances of a concrete component type on one game object. |
| [AllowMultipleSystemAttribute](allowmultiplesystemattribute/index.md) | Allows multiple instances of a concrete T:Inno.Scene.GameSystem type in one scene. |
| [EngineAssetContent](engineassetcontent/index.md) | Carries immutable scene or prefab runtime content across the runtime-to-authoring asset boundary. |
| [EngineObject](engineobject/index.md) | Provides identity and destruction state shared by all managed scene objects. |
| [GameBehavior](gamebehavior/index.md) | Base component for independently enabled scene functionality with frame lifecycle callbacks. |
| [GameComponent](gamecomponent/index.md) | Base type for data and behavior objects attached to a T:Inno.Scene.GameObject. |
| [GameLayer](gamelayer/index.md) | Identifies one of the thirty-two runtime layers available to scene objects. |
| [GameLayerCatalog](gamelayercatalog/index.md) | Stores the named layer catalog and symmetric layer-interaction matrix used by a project. |
| [GameLayerDefinition](gamelayerdefinition/index.md) | Describes one named layer slot in a T:Inno.Scene.Layers.GameLayerCatalog snapshot. |
| [GameLayerId](gamelayerid/index.md) | Identifies one project-scoped game layer independently from its compact runtime slot. |
| [GameLayerMask](gamelayermask/index.md) | Stores a compact set of scene layers for rendering, physics, and query filtering. |
| [GameObject](gameobject/index.md) | Represents a scene-owned object and exposes its component-oriented API. |
| [GameScene](gamescene/index.md) | Owns a runtime scene, including its objects, components, hierarchy, and systems. |
| [GameSystem](gamesystem/index.md) | Base type for serializable, ordered scene-level behaviors. |
| [GameTagCatalog](gametagcatalog/index.md) | Stores the project-wide tag definitions used to author and validate scene object assignments. |
| [ISceneReloadStateTransfer](iscenereloadstatetransfer/index.md) | Represents a staged scene object state transfer associated with one assembly reload transaction. |
| [MissingGameComponent](missinggamecomponent/index.md) | Preserves the identity, order, and serialized state of a component whose managed type is unavailable. |
| [MissingGameSystem](missinggamesystem/index.md) | Preserves the identity, order, and serialized state of a scene system whose managed type is unavailable. |
| [PrefabAsset](prefabasset/index.md) | Stores a persistent game object subtree that can be instantiated repeatedly. |
| [PrefabInstanceInfo](prefabinstanceinfo/index.md) | Describes the read-only source connection retained by one prefab instance object. |
| [SceneAsset](sceneasset/index.md) | Stores imported scene source that can create independent runtime scenes. |
| [SceneContentSource](scenecontentsource/index.md) | Projects loaded scenes into the shared content protocol without depending on a rendering or audio model. |
| [SceneElementSerialization](sceneelementserialization/index.md) | Recreates individual scene components and systems from stable type and object identities. |
| [SceneManager](scenemanager/index.md) | Provides Unity-style scene operations by resolving the world in the current runtime execution context. |
| [ScenePropertySerialization](scenepropertyserialization/index.md) | Captures and restores individual scene-object properties while preserving scene reference identities. |
| [SceneReloadDiagnostic](scenereloaddiagnostic/index.md) | Describes a non-fatal issue encountered while migrating scene state to a new assembly generation. |
| [SceneReloadService](scenereloadservice/index.md) | Creates scene state-transfer transactions for assembly generation changes. |
| [SceneSubtreeSerialization](scenesubtreeserialization/index.md) | Captures and restores one GameObject subtree with its persistent object and component identities. |
| [SceneTypeResolutionException](scenetyperesolutionexception/index.md) | Reports that a serialized scene element cannot be created because its stable type is not present in the active type catalog. |
| [SceneWorld](sceneworld/index.md) | Owns the loaded scene set and lifecycle state for one isolated runtime session. |
| [Transform](transform/index.md) | Stores local transform data and exposes the scene hierarchy relationship. |

