---
title: "NativeProjectPanelHost"
description: "Reference for NativeProjectPanelHost in Inno.Testing.Editor.Native."
uid: api.inno.testing.editor.native.3164d1b2258d9cfe
kind: api
owners:
  - Inno.Testing.Editor.Native
apiSurface: source-clr
contracts:
  - project.inno-testing-editor-native
---
# `NativeProjectPanelHost`

This reference describes `NativeProjectPanelHost` in `Inno.Testing.Editor.Native`. Read the [shared contract](../../../../contributing/testing/support/inno-testing-editor-native.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-ea8e251a8b74daa1) | Method |
| [`CreateScene`](#api-f990f5d3cb0e1a13) | Method |
| [`Dispose`](#api-4ac1484016497872) | Method |
| [`RefreshTypes`](#api-37503fa11a96b8fe) | Method |
| [`assets`](#api-b6e55b0b68bdfb98) | Property |
| [`edits`](#api-56d3d67bc79dc5ac) | Property |
| [`graphs`](#api-6af3a06c6c45c27c) | Property |
| [`native`](#api-bb40ea239adc5108) | Property |
| [`projectRoot`](#api-0d288d521354b6d8) | Property |
| [`projectSettings`](#api-0b5d9c6048617773) | Property |
| [`reloads`](#api-7869886bbd157be9) | Property |
| [`runtime`](#api-3e4e9615f80b00bb) | Property |
| [`serialization`](#api-e9b2f3633fa473e8) | Property |
| [`workspace`](#api-a6d47e04cd993397) | Property |

## Type declaration

<a id="api-3164d1b2258d9cfe"></a>
<!-- api: T:Inno.Testing.Editor.Native.NativeProjectPanelHost f0287968df1db41b52e8c31642eff463c3dba114618969990e63ad1207789482 -->

```csharp
public sealed class Inno.Testing.Editor.Native.NativeProjectPanelHost : System.IDisposable
```

Owns a temporary project, authoring services and real native panels for contract and performance acceptance.

**Constraints:** Use and dispose the complete fixture on one thread. Returned services remain owned by this fixture.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9a86549b9ed57ef77d3bcbb8fa78e745cc48ff6b/tests/editor/fixtures/Inno.Testing.Editor.Native/NativeProjectPanelHost.cs#L33).

## `#ctor`

<a id="api-ea8e251a8b74daa1"></a>
<!-- api: M:Inno.Testing.Editor.Native.NativeProjectPanelHost.#ctor(System.Reflection.Assembly,System.Boolean,System.Boolean,Inno.Core.IO.IByteDocumentStore) d075e65dccdde97d11b9519706f748c81d2581c6f6c5306987a2f2375e18f1f3 -->

```csharp
public Inno.Testing.Editor.Native.NativeProjectPanelHost.NativeProjectPanelHost(System.Reflection.Assembly composition, bool supportsVertexOffsets = false, bool includeSettings = false, Inno.Core.IO.IByteDocumentStore? settingsDocument = null)
```

Creates the explicit test composition and its isolated project resources.

**Parameter `composition`:** The calling test assembly declaring all discovered modules and serialized test types.

**Parameter `supportsVertexOffsets`:** Whether to advertise and validate native vertex offsets.

**Parameter `includeSettings`:** Whether to compose real project and build settings services.

**Parameter `settingsDocument`:** An optional public document-store boundary for settings persistence.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9a86549b9ed57ef77d3bcbb8fa78e745cc48ff6b/tests/editor/fixtures/Inno.Testing.Editor.Native/NativeProjectPanelHost.cs#L50).

## `CreateScene`

<a id="api-f990f5d3cb0e1a13"></a>
<!-- api: M:Inno.Testing.Editor.Native.NativeProjectPanelHost.CreateScene 03bedeb83182bc4a3006ad6ad33fb6868d4998f00e57e7002b7b169d4e785de7 -->

```csharp
public Inno.Scene.GameScene Inno.Testing.Editor.Native.NativeProjectPanelHost.CreateScene()
```

Creates and loads an additive scene in the owned Edit session.

**Returns:** The scene owned by this fixture's session.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9a86549b9ed57ef77d3bcbb8fa78e745cc48ff6b/tests/editor/fixtures/Inno.Testing.Editor.Native/NativeProjectPanelHost.cs#L155).

## `Dispose`

<a id="api-4ac1484016497872"></a>
<!-- api: M:Inno.Testing.Editor.Native.NativeProjectPanelHost.Dispose 8050ec925afbb0abe1b3e44f4df35ee854e5675431aa5f14db5acc8a540361b4 -->

```csharp
public void Inno.Testing.Editor.Native.NativeProjectPanelHost.Dispose()
```

Releases authoring, native and session resources before removing the owned temporary project.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9a86549b9ed57ef77d3bcbb8fa78e745cc48ff6b/tests/editor/fixtures/Inno.Testing.Editor.Native/NativeProjectPanelHost.cs#L164).

## `RefreshTypes`

<a id="api-37503fa11a96b8fe"></a>
<!-- api: M:Inno.Testing.Editor.Native.NativeProjectPanelHost.RefreshTypes 79e11ec0d279666899b5f82b8af1cb6f8ae3e1d4695495d85794e373e13c1103 -->

```csharp
public void Inno.Testing.Editor.Native.NativeProjectPanelHost.RefreshTypes()
```

Rebuilds the actual type catalog after a declared discovery change.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9a86549b9ed57ef77d3bcbb8fa78e745cc48ff6b/tests/editor/fixtures/Inno.Testing.Editor.Native/NativeProjectPanelHost.cs#L159).

## `assets`

<a id="api-b6e55b0b68bdfb98"></a>
<!-- api: P:Inno.Testing.Editor.Native.NativeProjectPanelHost.assets fa56d21dc3da51c2baf603858e157f719b10a87c467f27b8146c95e741199394 -->

```csharp
public Inno.Assets.Pipeline.AssetPipeline Inno.Testing.Editor.Native.NativeProjectPanelHost.assets { get; }
```

Gets the borrowed authoring asset pipeline.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9a86549b9ed57ef77d3bcbb8fa78e745cc48ff6b/tests/editor/fixtures/Inno.Testing.Editor.Native/NativeProjectPanelHost.cs#L121).

## `edits`

<a id="api-56d3d67bc79dc5ac"></a>
<!-- api: P:Inno.Testing.Editor.Native.NativeProjectPanelHost.edits a98b8ce0588b332c7208cd84bdd8a29252aea12a9d10b3da9ac03bc59da9376f -->

```csharp
public Inno.Editor.Scene.SceneEdits Inno.Testing.Editor.Native.NativeProjectPanelHost.edits { get; }
```

Gets the borrowed scene editing service.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9a86549b9ed57ef77d3bcbb8fa78e745cc48ff6b/tests/editor/fixtures/Inno.Testing.Editor.Native/NativeProjectPanelHost.cs#L145).

## `graphs`

<a id="api-6af3a06c6c45c27c"></a>
<!-- api: P:Inno.Testing.Editor.Native.NativeProjectPanelHost.graphs 2fdc949993b375692cc8e14f31962dfcb54172c768904f901a86829bee59f964 -->

```csharp
public Inno.Editor.Graph.GraphEditorModule Inno.Testing.Editor.Native.NativeProjectPanelHost.graphs { get; }
```

Gets the borrowed graph editor module.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9a86549b9ed57ef77d3bcbb8fa78e745cc48ff6b/tests/editor/fixtures/Inno.Testing.Editor.Native/NativeProjectPanelHost.cs#L141).

## `native`

<a id="api-bb40ea239adc5108"></a>
<!-- api: P:Inno.Testing.Editor.Native.NativeProjectPanelHost.native 3c07794544e0f01879b833fb615acf48d8435274cec86abd95bcd1f965347be3 -->

```csharp
public Inno.Testing.Editor.Native.NativePanelHost Inno.Testing.Editor.Native.NativeProjectPanelHost.native { get; }
```

Gets the borrowed native panel host.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9a86549b9ed57ef77d3bcbb8fa78e745cc48ff6b/tests/editor/fixtures/Inno.Testing.Editor.Native/NativeProjectPanelHost.cs#L149).

## `projectRoot`

<a id="api-0d288d521354b6d8"></a>
<!-- api: P:Inno.Testing.Editor.Native.NativeProjectPanelHost.projectRoot 1839590838600586fb90e336033cca589c400a2c91a7e496757c33e0fafcdf2a -->

```csharp
public string Inno.Testing.Editor.Native.NativeProjectPanelHost.projectRoot { get; }
```

Gets the absolute temporary project directory removed during disposal.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9a86549b9ed57ef77d3bcbb8fa78e745cc48ff6b/tests/editor/fixtures/Inno.Testing.Editor.Native/NativeProjectPanelHost.cs#L129).

## `projectSettings`

<a id="api-0b5d9c6048617773"></a>
<!-- api: P:Inno.Testing.Editor.Native.NativeProjectPanelHost.projectSettings 20049b791098f5bd09ab6092ddfa3eef81510e40b45a7869209652bd2e791c9a -->

```csharp
public Inno.Core.Settings.ProjectSettingsStore Inno.Testing.Editor.Native.NativeProjectPanelHost.projectSettings { get; }
```

Gets the borrowed project settings store.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9a86549b9ed57ef77d3bcbb8fa78e745cc48ff6b/tests/editor/fixtures/Inno.Testing.Editor.Native/NativeProjectPanelHost.cs#L117).

## `reloads`

<a id="api-7869886bbd157be9"></a>
<!-- api: P:Inno.Testing.Editor.Native.NativeProjectPanelHost.reloads 09575358e8a3a3f749d9daff134f68314ebf5354bf37fddd009c3a623b84745c -->

```csharp
public Inno.Editor.Core.EditorReloadCoordinator Inno.Testing.Editor.Native.NativeProjectPanelHost.reloads { get; }
```

Gets the borrowed reload coordinator.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9a86549b9ed57ef77d3bcbb8fa78e745cc48ff6b/tests/editor/fixtures/Inno.Testing.Editor.Native/NativeProjectPanelHost.cs#L113).

## `runtime`

<a id="api-3e4e9615f80b00bb"></a>
<!-- api: P:Inno.Testing.Editor.Native.NativeProjectPanelHost.runtime c9a3195d28fa50e3c2ccd6cc1fdeeafecd7d8008ab3b717bedc1874dc2d435d1 -->

```csharp
public Inno.Editor.Interactions.EditorInteractionRuntime Inno.Testing.Editor.Native.NativeProjectPanelHost.runtime { get; }
```

Gets the borrowed interaction runtime.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9a86549b9ed57ef77d3bcbb8fa78e745cc48ff6b/tests/editor/fixtures/Inno.Testing.Editor.Native/NativeProjectPanelHost.cs#L133).

## `serialization`

<a id="api-e9b2f3633fa473e8"></a>
<!-- api: P:Inno.Testing.Editor.Native.NativeProjectPanelHost.serialization 290cd010b07d3d43feb1bb663d6a8f06fd4cc4ba9642c629c5f235c212bc7e34 -->

```csharp
public Inno.Core.Serialization.SerializationRegistry Inno.Testing.Editor.Native.NativeProjectPanelHost.serialization { get; }
```

Gets the borrowed engine serialization registry.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9a86549b9ed57ef77d3bcbb8fa78e745cc48ff6b/tests/editor/fixtures/Inno.Testing.Editor.Native/NativeProjectPanelHost.cs#L125).

## `workspace`

<a id="api-a6d47e04cd993397"></a>
<!-- api: P:Inno.Testing.Editor.Native.NativeProjectPanelHost.workspace 3dc7b70cc4c4465d59c0e473cfd652857f47542965708069ae85e24043a891fd -->

```csharp
public Inno.Editor.Scene.IEditorSceneWorkspace Inno.Testing.Editor.Native.NativeProjectPanelHost.workspace { get; }
```

Gets the borrowed scene workspace resolved through normal module composition.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9a86549b9ed57ef77d3bcbb8fa78e745cc48ff6b/tests/editor/fixtures/Inno.Testing.Editor.Native/NativeProjectPanelHost.cs#L137).
