---
title: "ProjectSettingsStore"
description: "Reference for ProjectSettingsStore in Inno.Core.Settings."
uid: api.inno.core.settings.4305c3a765b0eada
kind: api
owners:
  - Inno.Core.Settings
apiSurface: source-clr
contracts:
  - project.inno-core-settings#settings-ownership-contract
---
# `ProjectSettingsStore`

This reference describes `ProjectSettingsStore` in `Inno.Core.Settings`. Read the [shared contract](../../projects/inno-core-settings.md#settings-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`, `Inno.Core.Settings.IProjectSettingsLookup`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-310a052b5fd36e54) | Method |
| [`ApplyProjectOverrides`](#api-c6423f071e8ae57e) | Method |
| [`CaptureDocument`](#api-a66f8fde071a031d) | Method |
| [`CreateReloadChange`](#api-95ca754f8cf7e7ce) | Method |
| [`Dispose`](#api-72d1df3aeb586fec) | Method |
| [`EnterExecutionScope`](#api-a16ad823d976c6f4) | Method |
| [```Get``1```](#api-6e0ebe889f4e99cc) | Method |
| [`HasProjectOverride`](#api-71e8582dc877192a) | Method |
| [`QualifyId`](#api-1db8d4a9f9b33b9e) | Method |
| [`Rebuild`](#api-5e8e829d74e16ec6) | Method |
| [`RebuildCurrent`](#api-4ddb72e7c5a0c055) | Method |
| [`RestoreDocument`](#api-78c053e43290ab88) | Method |
| [`SetContributors`](#api-760d35fa39b6b4c2) | Method |
| [`SetProjectOverride`](#api-dcc2a1fc54573fb0) | Method |
| [`TryCapture`](#api-d134bfb051b7a41e) | Method |
| [`TryClone`](#api-0d51f718cd43d35a) | Method |
| [`TryCloneComposedDefault`](#api-a8dfbf69aec0369c) | Method |
| [```TryGet``1```](#api-bb46bd23cf42151f) | Method |
| [`ValidateDocument`](#api-22e62fef2a1f1e91) | Method |
| [`isInitialized`](#api-5d519896a4dd3182) | Property |
| [`ownerId`](#api-9a9f88404866638a) | Property |
| [`projectId`](#api-f53261b65d20c3a1) | Property |
| [`revision`](#api-35f658eaa039cf0a) | Property |
| [`unavailableSettings`](#api-ea8eb1a872e71d50) | Property |

## Type declaration

<a id="api-4305c3a765b0eada"></a>
<!-- api: T:Inno.Core.Settings.ProjectSettingsStore f9089e85f5436eefbfb16a8a0070715bb477b8885558c8f201bba0a90aef2480 -->

```csharp
public sealed class Inno.Core.Settings.ProjectSettingsStore : System.IDisposable, Inno.Core.Settings.IProjectSettingsLookup
```

Owns one project's effective settings, contributors, persistence, and generation revision.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettingsStore.cs#L15).

## `#ctor`

<a id="api-310a052b5fd36e54"></a>
<!-- api: M:Inno.Core.Settings.ProjectSettingsStore.#ctor(Inno.Core.IO.IByteDocumentStore,Inno.Extensibility.Types.TypeCatalog,Inno.Core.Serialization.SerializationRegistry,Inno.Core.Settings.ProjectId,Inno.Core.Serialization.SerializationContext) 5d7dd12b89d1231b20f2f1403df14a3a8e20c3170239ebbbdcc2c459ffd2300f -->

```csharp
public Inno.Core.Settings.ProjectSettingsStore.ProjectSettingsStore(Inno.Core.IO.IByteDocumentStore documentStore, Inno.Extensibility.Types.TypeCatalog types, Inno.Core.Serialization.SerializationRegistry serialization, Inno.Core.Settings.ProjectId defaultProjectId, Inno.Core.Serialization.SerializationContext serializationContext)
```

Creates a project settings store from one type and serialization generation owner.

**Parameter `documentStore`:** The borrowed document boundary; writable authoring and read-only runtime sources use the same protocol.

**Parameter `types`:** The type catalog that owns setting definitions and composers.

**Parameter `serialization`:** The serialization registry used for documents and contribution payloads.

**Parameter `defaultProjectId`:** The project namespace used until an authored identity override is saved.

**Parameter `serializationContext`:** The owner's complete resolver context; settings never construct a partial reference context themselves.

**Throws `System.ArgumentNullException`:** Thrown when a service dependency is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettingsStore.cs#L48).

## `ApplyProjectOverrides`

<a id="api-c6423f071e8ae57e"></a>
<!-- api: M:Inno.Core.Settings.ProjectSettingsStore.ApplyProjectOverrides(System.Collections.Generic.IReadOnlyDictionary{Inno.Core.Settings.ProjectSettingId,Inno.Core.Serialization.ISerializable},System.Collections.Generic.IReadOnlySet{Inno.Core.Settings.ProjectSettingId}) 8efd80b07eb6797fba03710977647f3905a8e18413d8c416e4febf297f588685 -->

```csharp
public bool Inno.Core.Settings.ProjectSettingsStore.ApplyProjectOverrides(System.Collections.Generic.IReadOnlyDictionary<Inno.Core.Settings.ProjectSettingId, Inno.Core.Serialization.ISerializable> values, System.Collections.Generic.IReadOnlySet<Inno.Core.Settings.ProjectSettingId>? resets = null)
```

Applies a native batch of project-authored overrides and removals.

**Parameter `values`:** Setting values keyed by stable protocol identity.

**Parameter `resets`:** Setting identities whose project overrides are removed.

**Returns:** `true` when the native document changed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettingsStore.cs#L424).

## `CaptureDocument`

<a id="api-a66f8fde071a031d"></a>
<!-- api: M:Inno.Core.Settings.ProjectSettingsStore.CaptureDocument 101fec709696b54af4b0f1847bd73b1e3691d656cbd1f65c3b92d8502d0e084b -->

```csharp
public byte[] Inno.Core.Settings.ProjectSettingsStore.CaptureDocument()
```

Captures the current native project override document.

**Returns:** A newly owned native document payload.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettingsStore.cs#L324).

## `CreateReloadChange`

<a id="api-95ca754f8cf7e7ce"></a>
<!-- api: M:Inno.Core.Settings.ProjectSettingsStore.CreateReloadChange 4ba65563e9a344ff2c20a8396326d894d97f5f0f6e90fd34e2555ed1a5ffa681 -->

```csharp
public Inno.Extensibility.Reload.IGenerationChange Inno.Core.Settings.ProjectSettingsStore.CreateReloadChange()
```

Creates a five-phase settings change for the host's shared generation transaction.

**Returns:** An owner-thread change that captures neutral effective values before publication, rebuilds against candidate
types, and restores exact previous values and contributors without writing the project document on rollback.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettingsStore.cs#L85).

## `Dispose`

<a id="api-72d1df3aeb586fec"></a>
<!-- api: M:Inno.Core.Settings.ProjectSettingsStore.Dispose 06b8cbb16472854d95b652fac8b7326a3358aa4eb9068983580eb2a3c7e106c7 -->

```csharp
public void Inno.Core.Settings.ProjectSettingsStore.Dispose()
```

Shuts down settings and releases generation-scoped values.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettingsStore.cs#L467).

## `EnterExecutionScope`

<a id="api-a16ad823d976c6f4"></a>
<!-- api: M:Inno.Core.Settings.ProjectSettingsStore.EnterExecutionScope 842647391234caea187c90786d1171d593077190bce57c3ea59be43aad168bec -->

```csharp
public System.IDisposable Inno.Core.Settings.ProjectSettingsStore.EnterExecutionScope()
```

Binds this settings store to the current asynchronous script execution context.

**Returns:** A strict last-in-first-out execution scope owned by the caller.

**Throws `System.InvalidOperationException`:** Thrown after this settings store has been disposed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettingsStore.cs#L141).

## ```Get``1```

<a id="api-6e0ebe889f4e99cc"></a>
<!-- api: M:Inno.Core.Settings.ProjectSettingsStore.Get``1(Inno.Core.Settings.ProjectSettingId) 6c05a15d0a024dfd5e51ac7c6001a26de34641a9ad3259b02e5063c34aaae329 -->

```csharp
public TSetting Inno.Core.Settings.ProjectSettingsStore.Get<TSetting>(Inno.Core.Settings.ProjectSettingId id) where TSetting : class, Inno.Core.Serialization.ISerializable
```

Gets an isolated effective setting snapshot from the active extension generation.

**Type parameter `TSetting`:** Expected setting contract.

**Parameter `id`:** Stable setting protocol identity.

**Returns:** An independently owned effective setting snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettingsStore.cs#L162).

## `HasProjectOverride`

<a id="api-71e8582dc877192a"></a>
<!-- api: M:Inno.Core.Settings.ProjectSettingsStore.HasProjectOverride(Inno.Core.Settings.ProjectSettingId) 91430752395d6352ceb8298f4d5809d9c593e78dc9f8679e450b718629f18166 -->

```csharp
public bool Inno.Core.Settings.ProjectSettingsStore.HasProjectOverride(Inno.Core.Settings.ProjectSettingId id)
```

Gets whether the active project document explicitly overrides one setting protocol.

**Parameter `id`:** Stable setting protocol identity.

**Returns:** `true` when the project owns an override record.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettingsStore.cs#L211).

## `QualifyId`

<a id="api-1db8d4a9f9b33b9e"></a>
<!-- api: M:Inno.Core.Settings.ProjectSettingsStore.QualifyId(System.String) b45d07c79829a469af83b63cfbf32d936bdfe7125d4d22115b50ea6c12ada48c -->

```csharp
public Inno.Core.Settings.ProjectScopedId Inno.Core.Settings.ProjectSettingsStore.QualifyId(string name)
```

Qualifies one local name under the current project namespace.

**Parameter `name`:** The local display name.

**Returns:** The canonical `projectId.name` identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettingsStore.cs#L101).

## `Rebuild`

<a id="api-5e8e829d74e16ec6"></a>
<!-- api: M:Inno.Core.Settings.ProjectSettingsStore.Rebuild(System.Collections.Generic.IReadOnlyList{Inno.Core.Settings.ProjectSettingsContributor}) 1031b606ab1a2009156594aa77cb45a3ec5d8d7b7e37bc6ac9de7bfc0da7278e -->

```csharp
public void Inno.Core.Settings.ProjectSettingsStore.Rebuild(System.Collections.Generic.IReadOnlyList<Inno.Core.Settings.ProjectSettingsContributor> contributors)
```

Rebuilds settings for one dependency-ordered extension generation.

**Parameter `contributors`:** Host and Plugin default contributions.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettingsStore.cs#L337).

## `RebuildCurrent`

<a id="api-4ddb72e7c5a0c055"></a>
<!-- api: M:Inno.Core.Settings.ProjectSettingsStore.RebuildCurrent(System.Boolean) f5e130d21bcf0e6744b9bd86f26169a849e0d15313b939e5f4143051b6dfdce9 -->

```csharp
public void Inno.Core.Settings.ProjectSettingsStore.RebuildCurrent(bool allowUnresolvedContributions = false)
```

Rebuilds effective settings after the active type catalog changes.

**Parameter `allowUnresolvedContributions`:** Whether Plugin contributions awaiting type activation are skipped.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettingsStore.cs#L375).

## `RestoreDocument`

<a id="api-78c053e43290ab88"></a>
<!-- api: M:Inno.Core.Settings.ProjectSettingsStore.RestoreDocument(System.ReadOnlySpan{System.Byte}) 67a8e5ad4677115cab1956e71c3f9ea78589784ad2ff7014d77eaf82b46cc3a4 -->

```csharp
public void Inno.Core.Settings.ProjectSettingsStore.RestoreDocument(System.ReadOnlySpan<byte> document)
```

Restores a previously captured native project settings document.

**Parameter `document`:** Native project settings bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettingsStore.cs#L445).

## `SetContributors`

<a id="api-760d35fa39b6b4c2"></a>
<!-- api: M:Inno.Core.Settings.ProjectSettingsStore.SetContributors(System.Collections.Generic.IReadOnlyList{Inno.Core.Settings.ProjectSettingsContributor}) 49ab1af6f10e32e13416492761c87b58d4f68d8dbbd3f964533cd826b3b1e626 -->

```csharp
public void Inno.Core.Settings.ProjectSettingsStore.SetContributors(System.Collections.Generic.IReadOnlyList<Inno.Core.Settings.ProjectSettingsContributor> contributors)
```

Publishes dependency-ordered default contributors for the next current-generation rebuild without
constructing setting instances from types that may still be awaiting assembly activation.

**Parameter `contributors`:** Complete dependency-ordered contributor snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettingsStore.cs#L356).

## `SetProjectOverride`

<a id="api-dcc2a1fc54573fb0"></a>
<!-- api: M:Inno.Core.Settings.ProjectSettingsStore.SetProjectOverride(Inno.Core.Settings.ProjectSettingId,Inno.Core.Serialization.ISerializable,System.Collections.Generic.IReadOnlyList{Inno.Core.Settings.ProjectSettingsContributor}) 9fa30946a461da4ab985adbc87910e804249d4dbd470d2478d0f249d4f4a5146 -->

```csharp
public void Inno.Core.Settings.ProjectSettingsStore.SetProjectOverride(Inno.Core.Settings.ProjectSettingId id, Inno.Core.Serialization.ISerializable value, System.Collections.Generic.IReadOnlyList<Inno.Core.Settings.ProjectSettingsContributor> contributors)
```

Persists one project-authored override through the native settings document.

**Parameter `id`:** Stable setting protocol identity.

**Parameter `value`:** Current generation setting value.

**Parameter `contributors`:** Current dependency-ordered default contributions.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettingsStore.cs#L397).

## `TryCapture`

<a id="api-d134bfb051b7a41e"></a>
<!-- api: M:Inno.Core.Settings.ProjectSettingsStore.TryCapture(Inno.Core.Settings.ProjectSettingId,System.String,System.Collections.Generic.IReadOnlySet{System.String},System.Collections.Generic.IReadOnlySet{System.String},Inno.Core.Settings.ProjectSettingRecord@) 950d167e2a16e0b11f3912be3ae24e1876e81b8f37543cda28af2ddc1242a09b -->

```csharp
public bool Inno.Core.Settings.ProjectSettingsStore.TryCapture(Inno.Core.Settings.ProjectSettingId id, string contributorId, System.Collections.Generic.IReadOnlySet<string> declaredDependencies, System.Collections.Generic.IReadOnlySet<string> declaredOverrides, out Inno.Core.Settings.ProjectSettingRecord record)
```

Captures one normalized Plugin setting contribution from the project-authored delta.

**Parameter `id`:** Stable setting protocol identity.

**Parameter `contributorId`:** Stable identity of the Plugin being exported.

**Parameter `declaredDependencies`:** Direct dependency Plugin IDs declared by the exported Plugin.

**Parameter `declaredOverrides`:** Dependency Plugin IDs whose owned values may be replaced.

**Parameter `record`:** Receives the normalized semantic contribution payload.

**Returns:** `true` when the project document contains an effective semantic delta.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettingsStore.cs#L239).

## `TryClone`

<a id="api-0d51f718cd43d35a"></a>
<!-- api: M:Inno.Core.Settings.ProjectSettingsStore.TryClone(Inno.Core.Settings.ProjectSettingId,Inno.Core.Serialization.ISerializable@) 591ac7d4cbafbdcdce73e2485a81f58daedf98b668230a1279d55e1b4c33ef87 -->

```csharp
public bool Inno.Core.Settings.ProjectSettingsStore.TryClone(Inno.Core.Settings.ProjectSettingId id, out Inno.Core.Serialization.ISerializable? setting)
```

Creates an isolated editable copy of one effective setting.

**Parameter `id`:** Stable setting protocol identity.

**Parameter `setting`:** Receives an isolated native setting object.

**Returns:** `true` when the setting is defined.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettingsStore.cs#L274).

## `TryCloneComposedDefault`

<a id="api-a8dfbf69aec0369c"></a>
<!-- api: M:Inno.Core.Settings.ProjectSettingsStore.TryCloneComposedDefault(Inno.Core.Settings.ProjectSettingId,Inno.Core.Serialization.ISerializable@) 547725d0a041b90c651c4c69086fad3d63c4a451351beea7feb9895989b5edaf -->

```csharp
public bool Inno.Core.Settings.ProjectSettingsStore.TryCloneComposedDefault(Inno.Core.Settings.ProjectSettingId id, out Inno.Core.Serialization.ISerializable? setting)
```

Creates an isolated setting value without the project-authored override.

**Parameter `id`:** Stable setting protocol identity.

**Parameter `setting`:** Receives the composed host and Plugin default value.

**Returns:** `true` when the setting is defined.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettingsStore.cs#L302).

## ```TryGet``1```

<a id="api-bb46bd23cf42151f"></a>
<!-- api: M:Inno.Core.Settings.ProjectSettingsStore.TryGet``1(Inno.Core.Settings.ProjectSettingId,``0@) 50d9c24d78924dd27c451deba13d7bdd951ad14e5e335e051a7aeb7a3a891f20 -->

```csharp
public bool Inno.Core.Settings.ProjectSettingsStore.TryGet<TSetting>(Inno.Core.Settings.ProjectSettingId id, out TSetting? setting) where TSetting : class, Inno.Core.Serialization.ISerializable
```

Tries to get an isolated effective setting snapshot from the active extension generation.

**Type parameter `TSetting`:** Expected setting contract.

**Parameter `id`:** Stable setting protocol identity.

**Parameter `setting`:** Receives an independently owned effective snapshot when available.

**Returns:** `true` when a compatible setting exists.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettingsStore.cs#L184).

## `ValidateDocument`

<a id="api-22e62fef2a1f1e91"></a>
<!-- api: M:Inno.Core.Settings.ProjectSettingsStore.ValidateDocument(System.ReadOnlySpan{System.Byte}) 6317ced952de6c39da7a2c7c27fe7df6520b438c9879ce61e6e9f528bd944ca4 -->

```csharp
public void Inno.Core.Settings.ProjectSettingsStore.ValidateDocument(System.ReadOnlySpan<byte> document)
```

Validates one native project settings document without changing active state.

**Parameter `document`:** Native project settings bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettingsStore.cs#L461).

## `isInitialized`

<a id="api-5d519896a4dd3182"></a>
<!-- api: P:Inno.Core.Settings.ProjectSettingsStore.isInitialized ec2937865f9df0bf4ccc6f5bfdf73f71c0781221ada75b72b3bbdab65a89026f -->

```csharp
public bool Inno.Core.Settings.ProjectSettingsStore.isInitialized { get; }
```

Gets whether project settings are initialized.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettingsStore.cs#L106).

## `ownerId`

<a id="api-9a9f88404866638a"></a>
<!-- api: P:Inno.Core.Settings.ProjectSettingsStore.ownerId 8c4df5e98b80b5e1acc7df766f8c408a5a3810c9a8b9999c78973a4248294410 -->

```csharp
public System.Guid Inno.Core.Settings.ProjectSettingsStore.ownerId { get; }
```

Gets the unique, non-persistent lifetime identity used with the effective snapshot revision.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettingsStore.cs#L25).

## `projectId`

<a id="api-f53261b65d20c3a1"></a>
<!-- api: P:Inno.Core.Settings.ProjectSettingsStore.projectId 26900f272bcbff69d674f33939b0e040b5524287d92f131802bc41cd75e32f7e -->

```csharp
public Inno.Core.Settings.ProjectId Inno.Core.Settings.ProjectSettingsStore.projectId { get; }
```

Gets the current project namespace.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettingsStore.cs#L90).

## `revision`

<a id="api-35f658eaa039cf0a"></a>
<!-- api: P:Inno.Core.Settings.ProjectSettingsStore.revision b68fd633a233aa2e4f879ebd0502833cdb6d57fafff7f5bb0648c6d4383c8e19 -->

```csharp
public long Inno.Core.Settings.ProjectSettingsStore.revision { get; }
```

Gets the revision of the active effective settings snapshot.
Runtime extensions may compare this value without registering reload-unsafe static delegates.

**Constraints:** Pair this value with ownerId. Successful updates advance the revision; a failed generation transaction
restores the previous revision with its effective values. Candidate revisions are not durable identities.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettingsStore.cs#L123).

## `unavailableSettings`

<a id="api-ea8eb1a872e71d50"></a>
<!-- api: P:Inno.Core.Settings.ProjectSettingsStore.unavailableSettings 57e933ca6b956b6c3983f20d05a05757e435374861f4d99c4e0f2675bfd998b0 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Core.Settings.ProjectSettingRecord> Inno.Core.Settings.ProjectSettingsStore.unavailableSettings { get; }
```

Gets detached neutral contributions whose setting definitions are currently Missing.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettingsStore.cs#L68).
