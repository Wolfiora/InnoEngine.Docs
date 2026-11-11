---
title: "ProjectSettings"
description: "Reference for ProjectSettings in Inno.Core.Settings."
uid: api.inno.core.settings.318292fbf4f76738
kind: api
owners:
  - Inno.Core.Settings
apiSurface: source-clr
contracts:
  - project.inno-core-settings#settings-ownership-contract
---
# `ProjectSettings`

This reference describes `ProjectSettings` in `Inno.Core.Settings`. Read the [shared contract](../../projects/inno-core-settings.md#settings-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-3f807e0d1f2663f8) | Method |
| [`ApplyProjectOverrides`](#api-934ba0481d6db3b4) | Method |
| [`CaptureDocument`](#api-83c2035d34fe1a82) | Method |
| [`Dispose`](#api-f124fe9a80720d3b) | Method |
| [```Get``1```](#api-dd4088548d239caf) | Method |
| [`HasProjectOverride`](#api-be4d5b5cc28a151a) | Method |
| [`Rebuild`](#api-10cd86bf6346ae7b) | Method |
| [`RestoreDocument`](#api-c3c61b34ff87d77c) | Method |
| [`SetProjectOverride`](#api-de89a361b308ac3f) | Method |
| [`TryCapture`](#api-3b839f008d4b74b6) | Method |
| [`TryClone`](#api-332b4fce7fbdc4f7) | Method |
| [`TryCloneComposedDefault`](#api-c156868d54ee7c46) | Method |
| [```TryGet``1```](#api-d859ad1685969898) | Method |

## Type declaration

<a id="api-318292fbf4f76738"></a>
<!-- api: T:Inno.Core.Settings.ProjectSettings 728873b8a48811e3ff51f59a459578243dc7659f39ad03a4d882318d772cae3f -->

```csharp
public sealed class Inno.Core.Settings.ProjectSettings : System.IDisposable
```

Composes setting defaults, Plugin contributions, and project overrides atomically.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettings.cs#L16).

## `#ctor`

<a id="api-3f807e0d1f2663f8"></a>
<!-- api: M:Inno.Core.Settings.ProjectSettings.#ctor(Inno.Core.IO.IByteDocumentStore,Inno.Extensibility.Types.TypeCatalog,Inno.Core.Serialization.SerializationRegistry,Inno.Core.Settings.ProjectId,Inno.Core.Serialization.SerializationContext,System.Collections.Generic.IReadOnlyList{Inno.Core.Settings.ProjectSettingsContributor}) 456ea40019e5fb63a8cded2412e6f12388da371da33298e050b89dc94a5b89dc -->

```csharp
public Inno.Core.Settings.ProjectSettings.ProjectSettings(Inno.Core.IO.IByteDocumentStore documentStore, Inno.Extensibility.Types.TypeCatalog types, Inno.Core.Serialization.SerializationRegistry serialization, Inno.Core.Settings.ProjectId defaultProjectId, Inno.Core.Serialization.SerializationContext serializationContext, System.Collections.Generic.IReadOnlyList<Inno.Core.Settings.ProjectSettingsContributor>? contributors = null)
```

Loads one project settings document and builds the initial effective snapshot.

**Parameter `documentStore`:** The project document source; read-only deployments cannot persist project overrides.

**Parameter `types`:** The type catalog that owns project setting definitions and composers.

**Parameter `serialization`:** The serialization registry used for settings documents and contribution payloads.

**Parameter `defaultProjectId`:** The project namespace used when the document has no authored identity override.

**Parameter `contributors`:** Dependency-ordered default contributors.

**Parameter `serializationContext`:** The owner's complete reference resolver context, used for defaults, contributions and returned snapshots.

**Throws `System.ArgumentNullException`:** A required service or the owner's serialization context is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettings.cs#L51).

## `ApplyProjectOverrides`

<a id="api-934ba0481d6db3b4"></a>
<!-- api: M:Inno.Core.Settings.ProjectSettings.ApplyProjectOverrides(System.Collections.Generic.IReadOnlyDictionary{Inno.Core.Settings.ProjectSettingId,Inno.Core.Serialization.ISerializable},System.Collections.Generic.IReadOnlySet{Inno.Core.Settings.ProjectSettingId},System.Collections.Generic.IReadOnlyList{Inno.Core.Settings.ProjectSettingsContributor}) 859bd7d5583fff52161b04a4135ac87b21bc32962d59ac464f1dee17ed475527 -->

```csharp
public bool Inno.Core.Settings.ProjectSettings.ApplyProjectOverrides(System.Collections.Generic.IReadOnlyDictionary<Inno.Core.Settings.ProjectSettingId, Inno.Core.Serialization.ISerializable> values, System.Collections.Generic.IReadOnlySet<Inno.Core.Settings.ProjectSettingId>? resets, System.Collections.Generic.IReadOnlyList<Inno.Core.Settings.ProjectSettingsContributor> contributors)
```

Applies multiple project contributions and removals as one atomic document update.

**Parameter `values`:** Complete authored values keyed by stable setting identity.

**Parameter `resets`:** Setting identities whose project-authored contributions are removed.

**Parameter `contributors`:** Dependency-ordered defaults used to rebuild effective values.

**Returns:** `true` when the project document changed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettings.cs#L417).

## `CaptureDocument`

<a id="api-83c2035d34fe1a82"></a>
<!-- api: M:Inno.Core.Settings.ProjectSettings.CaptureDocument 472e6dafd5828bbe895996098823e3bb5e6b2004d6dfc4d018d0b7d41a6ed067 -->

```csharp
public byte[] Inno.Core.Settings.ProjectSettings.CaptureDocument()
```

Captures the native project contribution document.

**Returns:** A newly owned native document payload.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettings.cs#L308).

## `Dispose`

<a id="api-f124fe9a80720d3b"></a>
<!-- api: M:Inno.Core.Settings.ProjectSettings.Dispose 267f35d74b54db4f39e35297dbe1e8cf1f612c58b4f72887f074c7c02a10e874 -->

```csharp
public void Inno.Core.Settings.ProjectSettings.Dispose()
```

Releases registry snapshots and generation-local setting objects.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettings.cs#L494).

## ```Get``1```

<a id="api-dd4088548d239caf"></a>
<!-- api: M:Inno.Core.Settings.ProjectSettings.Get``1(Inno.Core.Settings.ProjectSettingId) 5d194741c7130cc868a477a042c3188787126fbabfcc953f556954cbf936ec23 -->

```csharp
public TSetting Inno.Core.Settings.ProjectSettings.Get<TSetting>(Inno.Core.Settings.ProjectSettingId id) where TSetting : class, Inno.Core.Serialization.ISerializable
```

Gets an isolated snapshot of a current-generation setting.

**Type parameter `TSetting`:** Expected settings contract.

**Parameter `id`:** Stable setting identifier.

**Returns:** An independently owned snapshot of the effective current-generation value.

**Throws `System.Collections.Generic.KeyNotFoundException`:** Thrown when no definition exists.

**Throws `System.InvalidCastException`:** Thrown when the definition does not implement the requested contract.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettings.cs#L96).

## `HasProjectOverride`

<a id="api-be4d5b5cc28a151a"></a>
<!-- api: M:Inno.Core.Settings.ProjectSettings.HasProjectOverride(Inno.Core.Settings.ProjectSettingId) 8230232f33185c9f78328f471063a87f7f7331dae1132f43db70c432324ff95f -->

```csharp
public bool Inno.Core.Settings.ProjectSettings.HasProjectOverride(Inno.Core.Settings.ProjectSettingId id)
```

Gets whether the project document explicitly contributes to one setting protocol.

**Parameter `id`:** Stable setting identifier.

**Returns:** `true` when a project contribution record exists.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettings.cs#L235).

## `Rebuild`

<a id="api-10cd86bf6346ae7b"></a>
<!-- api: M:Inno.Core.Settings.ProjectSettings.Rebuild(System.Collections.Generic.IReadOnlyList{Inno.Core.Settings.ProjectSettingsContributor},System.Boolean) ee0003ec45c3d92093c31a288b0794182b3457d23e716105b199d0a7a6f5e1f9 -->

```csharp
public void Inno.Core.Settings.ProjectSettings.Rebuild(System.Collections.Generic.IReadOnlyList<Inno.Core.Settings.ProjectSettingsContributor> contributors, bool allowUnresolvedContributions = false)
```

Atomically rebuilds effective settings for a new extension generation.

**Parameter `contributors`:** Dependency-ordered default contributors.

**Parameter `allowUnresolvedContributions`:** Whether contributions awaiting Plugin type activation are retained but skipped.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettings.cs#L323).

## `RestoreDocument`

<a id="api-c3c61b34ff87d77c"></a>
<!-- api: M:Inno.Core.Settings.ProjectSettings.RestoreDocument(System.ReadOnlySpan{System.Byte},System.Collections.Generic.IReadOnlyList{Inno.Core.Settings.ProjectSettingsContributor}) ac0548890874dc345cb8c176c1dd040d46c7e82c7fbe0ccf38e1c0decbc7cdc3 -->

```csharp
public void Inno.Core.Settings.ProjectSettings.RestoreDocument(System.ReadOnlySpan<byte> document, System.Collections.Generic.IReadOnlyList<Inno.Core.Settings.ProjectSettingsContributor> contributors)
```

Atomically restores a native project settings document.

**Parameter `document`:** Native document bytes.

**Parameter `contributors`:** Dependency-ordered defaults used to rebuild effective values.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettings.cs#L481).

## `SetProjectOverride`

<a id="api-de89a361b308ac3f"></a>
<!-- api: M:Inno.Core.Settings.ProjectSettings.SetProjectOverride(Inno.Core.Settings.ProjectSettingId,Inno.Core.Serialization.ISerializable,System.Collections.Generic.IReadOnlyList{Inno.Core.Settings.ProjectSettingsContributor}) b9b155eee744c67ba97c10b08f9f45999d9e3ec3a4c2a8d2a32742ee97ea4704 -->

```csharp
public void Inno.Core.Settings.ProjectSettings.SetProjectOverride(Inno.Core.Settings.ProjectSettingId id, Inno.Core.Serialization.ISerializable value, System.Collections.Generic.IReadOnlyList<Inno.Core.Settings.ProjectSettingsContributor> contributors)
```

Persists one project-authored semantic contribution and rebuilds the effective value.

**Parameter `id`:** Stable setting identifier.

**Parameter `value`:** Current generation setting value.

**Parameter `contributors`:** Dependency-ordered defaults used to rebuild.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettings.cs#L391).

## `TryCapture`

<a id="api-3b839f008d4b74b6"></a>
<!-- api: M:Inno.Core.Settings.ProjectSettings.TryCapture(Inno.Core.Settings.ProjectSettingId,System.String,System.Collections.Generic.IReadOnlySet{System.String},System.Collections.Generic.IReadOnlySet{System.String},System.Collections.Generic.IReadOnlyList{Inno.Core.Settings.ProjectSettingsContributor},Inno.Core.Settings.ProjectSettingRecord@) 0af63d4bfe430ddf4062487006aa3e7760f23354bc92a98f2c1ccdf9fabe5141 -->

```csharp
public bool Inno.Core.Settings.ProjectSettings.TryCapture(Inno.Core.Settings.ProjectSettingId id, string contributorId, System.Collections.Generic.IReadOnlySet<string> declaredDependencies, System.Collections.Generic.IReadOnlySet<string> declaredOverrides, System.Collections.Generic.IReadOnlyList<Inno.Core.Settings.ProjectSettingsContributor> contributors, out Inno.Core.Settings.ProjectSettingRecord record)
```

Captures and validates the project-authored delta as one prospective Plugin contribution.

**Parameter `id`:** Stable setting identifier.

**Parameter `contributorId`:** Stable identity of the Plugin being exported.

**Parameter `declaredDependencies`:** Direct dependency Plugin IDs declared by the exported Plugin.

**Parameter `declaredOverrides`:** Dependency Plugin IDs whose owned values may be replaced.

**Parameter `contributors`:** All currently active dependency-ordered contributors.

**Parameter `record`:** Receives the normalized semantic Plugin contribution.

**Returns:** `true` when the project document contains an effective semantic delta.

**Throws `System.InvalidOperationException`:** Thrown when a replacement setting depends on an undeclared contributor, or when the authored delta is not
permitted by the declared dependency and override ownership.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettings.cs#L164).

## `TryClone`

<a id="api-332b4fce7fbdc4f7"></a>
<!-- api: M:Inno.Core.Settings.ProjectSettings.TryClone(Inno.Core.Settings.ProjectSettingId,Inno.Core.Serialization.ISerializable@) cf8654586e69f89d29c450885d0dd45d27794fe0dc21850f6d4d7026b7008580 -->

```csharp
public bool Inno.Core.Settings.ProjectSettings.TryClone(Inno.Core.Settings.ProjectSettingId id, out Inno.Core.Serialization.ISerializable? setting)
```

Creates an isolated editable copy of one effective setting.

**Parameter `id`:** Stable setting identifier.

**Parameter `setting`:** Receives a generation-local editable copy.

**Returns:** `true` when the setting is defined.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettings.cs#L253).

## `TryCloneComposedDefault`

<a id="api-c156868d54ee7c46"></a>
<!-- api: M:Inno.Core.Settings.ProjectSettings.TryCloneComposedDefault(Inno.Core.Settings.ProjectSettingId,System.Collections.Generic.IReadOnlyList{Inno.Core.Settings.ProjectSettingsContributor},Inno.Core.Serialization.ISerializable@) 8bdf0301b729dd8bdbe6a41b52ecb2f9e416eb4626379e4651c231240996338a -->

```csharp
public bool Inno.Core.Settings.ProjectSettings.TryCloneComposedDefault(Inno.Core.Settings.ProjectSettingId id, System.Collections.Generic.IReadOnlyList<Inno.Core.Settings.ProjectSettingsContributor> contributors, out Inno.Core.Serialization.ISerializable? setting)
```

Creates an isolated copy composed without the project-authored contribution.

**Parameter `id`:** Stable setting identifier.

**Parameter `contributors`:** Dependency-ordered Plugin default contributors.

**Parameter `setting`:** Receives the composed default value.

**Returns:** `true` when the setting is defined.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettings.cs#L285).

## ```TryGet``1```

<a id="api-d859ad1685969898"></a>
<!-- api: M:Inno.Core.Settings.ProjectSettings.TryGet``1(Inno.Core.Settings.ProjectSettingId,``0@) 5c61561e9f6f7014621179ba9e7b58e7e022c80a49561b4b255ccc2479a9d114 -->

```csharp
public bool Inno.Core.Settings.ProjectSettings.TryGet<TSetting>(Inno.Core.Settings.ProjectSettingId id, out TSetting? setting) where TSetting : class, Inno.Core.Serialization.ISerializable
```

Tries to get an isolated snapshot of a current-generation setting.

**Type parameter `TSetting`:** Expected settings contract.

**Parameter `id`:** Stable setting identifier.

**Parameter `setting`:** Receives an independently owned effective snapshot.

**Returns:** `true` when a compatible definition exists.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettings.cs#L120).
