---
title: "ProjectSettingsEditor"
description: "Reference for ProjectSettingsEditor in Inno.Editor.Settings."
uid: api.inno.editor.settings.5aab52e5ae248dcc
kind: api
owners:
  - Inno.Editor.Settings
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-settings#identity-and-use-contracts
---
# `ProjectSettingsEditor`

This reference describes `ProjectSettingsEditor` in `Inno.Editor.Settings`. Read the [shared contract](../../projects/inno-editor-settings.md#identity-and-use-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Editor.Core.EditorModule`.

## Members

| Member | Kind |
| --- | --- |
| [`Apply`](#api-c2bb0d4fbdf2e742) | Method |
| [`Get`](#api-92edf19d86251442) | Method |
| [`GetComposedDefault`](#api-19247b24656fc364) | Method |
| [`OnDispose`](#api-aecf45a326edb790) | Method |
| [`catalogRevision`](#api-1f1897c39ac19dd2) | Property |
| [`definitions`](#api-2e9d8426fa521cad) | Property |

## Type declaration

<a id="api-5aab52e5ae248dcc"></a>
<!-- api: T:Inno.Editor.Settings.ProjectSettingsEditor 5561d778856259256d8ddee3ef66ab46be1aad0f81823517d1182bb7602f87ae -->

```csharp
public sealed class Inno.Editor.Settings.ProjectSettingsEditor : Inno.Editor.Core.EditorModule
```

Owns the reloadable Editor presentations and history-aware project override workflow for runtime settings.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Settings/Runtime/ProjectSettingsEditor.cs#L17).

## `Apply`

<a id="api-c2bb0d4fbdf2e742"></a>
<!-- api: M:Inno.Editor.Settings.ProjectSettingsEditor.Apply(System.Collections.Generic.IReadOnlyDictionary{Inno.Core.Settings.ProjectSettingId,Inno.Core.Serialization.ISerializable},System.Collections.Generic.IReadOnlySet{Inno.Core.Settings.ProjectSettingId}) 5e0b024a8ba9a474d7bd2f37050a4a27048e3259b7a889bb364476b6989d27ca -->

```csharp
public bool Inno.Editor.Settings.ProjectSettingsEditor.Apply(System.Collections.Generic.IReadOnlyDictionary<Inno.Core.Settings.ProjectSettingId, Inno.Core.Serialization.ISerializable> values, System.Collections.Generic.IReadOnlySet<Inno.Core.Settings.ProjectSettingId>? resets = null)
```

Atomically applies project-authored overrides and records one stable history entry.

**Parameter `values`:** Staged exact-type values keyed by stable setting identity.

**Parameter `resets`:** Setting identities whose project overrides should be removed.

**Returns:** `true` when the project override document changed.

**Throws `System.ArgumentNullException`:** Thrown when `values` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Settings/Runtime/ProjectSettingsEditor.cs#L137).

## `Get`

<a id="api-92edf19d86251442"></a>
<!-- api: M:Inno.Editor.Settings.ProjectSettingsEditor.Get(Inno.Editor.Settings.ProjectSettingEditor) 9918105a13dee3ee20fc226cc690d2924866d93dac7a2cef57fe65c19ebae50f -->

```csharp
public Inno.Core.Serialization.ISerializable Inno.Editor.Settings.ProjectSettingsEditor.Get(Inno.Editor.Settings.ProjectSettingEditor definition)
```

Creates an isolated editable snapshot for one registered presentation.

**Parameter `definition`:** The active presentation whose runtime protocol is requested.

**Returns:** An isolated current-generation value.

**Throws `System.ArgumentNullException`:** Thrown when `definition` is `null`.

**Throws `System.InvalidOperationException`:** Thrown when the runtime setting definition is unavailable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Settings/Runtime/ProjectSettingsEditor.cs#L81).

## `GetComposedDefault`

<a id="api-19247b24656fc364"></a>
<!-- api: M:Inno.Editor.Settings.ProjectSettingsEditor.GetComposedDefault(Inno.Editor.Settings.ProjectSettingEditor) ed7b720c5bc83075213def8bade6a1fbca676188ba427f715567d38b21363e86 -->

```csharp
public Inno.Core.Serialization.ISerializable Inno.Editor.Settings.ProjectSettingsEditor.GetComposedDefault(Inno.Editor.Settings.ProjectSettingEditor definition)
```

Creates the composed host and Plugin default without the project override.

**Parameter `definition`:** The active presentation whose default is requested.

**Returns:** An isolated composed default value.

**Throws `System.ArgumentNullException`:** Thrown when `definition` is `null`.

**Throws `System.InvalidOperationException`:** Thrown when the runtime setting definition is unavailable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Settings/Runtime/ProjectSettingsEditor.cs#L108).

## `OnDispose`

<a id="api-aecf45a326edb790"></a>
<!-- api: M:Inno.Editor.Settings.ProjectSettingsEditor.OnDispose bdf448a3e122ba2abe9407bb0969668a336c209c6fc2f7c82bafd5734c8f6371 -->

```csharp
protected override void Inno.Editor.Settings.ProjectSettingsEditor.OnDispose()
```

Releases resources retained by this feature after it has stopped.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Settings/Runtime/ProjectSettingsEditor.cs#L162).

## `catalogRevision`

<a id="api-1f1897c39ac19dd2"></a>
<!-- api: P:Inno.Editor.Settings.ProjectSettingsEditor.catalogRevision e7ff202d18f540ab5ca742d372ad7c3078262e8174a72063d2952442d2587cac -->

```csharp
public long Inno.Editor.Settings.ProjectSettingsEditor.catalogRevision { get; }
```

Gets the active project setting Editor catalog revision.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Settings/Runtime/ProjectSettingsEditor.cs#L59).

## `definitions`

<a id="api-2e9d8426fa521cad"></a>
<!-- api: P:Inno.Editor.Settings.ProjectSettingsEditor.definitions 0ea263c513bbb7e748800cca0233dafd404afef0aefaf237b147c5c08cc99273 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Editor.Settings.ProjectSettingEditor> Inno.Editor.Settings.ProjectSettingsEditor.definitions { get; }
```

Gets all active strongly typed project setting presentations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Settings/Runtime/ProjectSettingsEditor.cs#L64).
