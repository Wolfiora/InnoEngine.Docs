---
title: "EditorSettings"
description: "Reference for EditorSettings in Inno.Editor.Settings."
uid: api.inno.editor.settings.0c07cf7232992830
kind: api
owners:
  - Inno.Editor.Settings
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-settings#identity-and-use-contracts
---
# `EditorSettings`

This reference describes `EditorSettings` in `Inno.Editor.Settings`. Read the [shared contract](../../projects/inno-editor-settings.md#identity-and-use-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Editor.Core.EditorModule`.

## Members

| Member | Kind |
| --- | --- |
| [`Apply`](#api-835035f6e0741e8e) | Method |
| [`Get`](#api-c059b1bc6fafe3e5) | Method |
| [`ListenChanges`](#api-2cf08b41819578b9) | Method |
| [`OnDispose`](#api-aeb097e55f697350) | Method |
| [`catalogRevision`](#api-3f20f2e2c713f9d7) | Property |
| [`definitions`](#api-7fcfa8938283631d) | Property |

## Type declaration

<a id="api-0c07cf7232992830"></a>
<!-- api: T:Inno.Editor.Settings.EditorSettings c18d3aa06b5ab5b9ee8dceaea94c2595cf1550a990d4a909ccba73195ed7a915 -->

```csharp
public sealed class Inno.Editor.Settings.EditorSettings : Inno.Editor.Core.EditorModule
```

Owns the discovered Settings catalog and the project-root Settings document.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Settings/Runtime/EditorSettings.cs#L16).

## `Apply`

<a id="api-835035f6e0741e8e"></a>
<!-- api: M:Inno.Editor.Settings.EditorSettings.Apply(System.Collections.Generic.IReadOnlyDictionary{System.String,Inno.Editor.Settings.EditorSettingObject},System.Collections.Generic.IReadOnlySet{System.String}) ca3966f1d26f6d9073fcb433170359aed37e62df32293ca1b2a36c02e7f345af -->

```csharp
public bool Inno.Editor.Settings.EditorSettings.Apply(System.Collections.Generic.IReadOnlyDictionary<string, Inno.Editor.Settings.EditorSettingObject> values, System.Collections.Generic.IReadOnlySet<string>? resets = null)
```

Atomically applies staged field objects as one shared Undo and Redo history entry.

**Parameter `values`:** The complete or partial path-addressed objects to apply from the active catalog.

**Parameter `resets`:** Optional paths whose persisted overrides are removed during the same Apply.

**Returns:** `true` when the persisted document changed and one history entry was recorded.

**Throws `System.ArgumentNullException`:** Thrown when `values` is `null` or contains a null object.

**Throws `System.ArgumentException`:** Thrown when a supplied path is invalid, absent, or describes a page.

**Throws `System.IO.IOException`:** Thrown when the project-root document or its history payload cannot be written.

**Throws `System.UnauthorizedAccessException`:** Thrown when the project-root document is inaccessible.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Settings/Runtime/EditorSettings.cs#L154).

## `Get`

<a id="api-c059b1bc6fafe3e5"></a>
<!-- api: M:Inno.Editor.Settings.EditorSettings.Get(System.String) 6b7e6c36fa37ff36f09ff7313035c42221f6d5ad385d4fae84bc19629ebf2a7e -->

```csharp
public Inno.Editor.Settings.EditorSettingObject Inno.Editor.Settings.EditorSettings.Get(string path)
```

Reads an isolated effective object from one complete Settings path.

**Parameter `path`:** The slash-delimited Settings field path.

**Returns:** The stored object, or an isolated copy of the field's default object.

**Throws `System.ArgumentException`:** Thrown when `path` is invalid, missing, or describes a page.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Settings/Runtime/EditorSettings.cs#L121).

## `ListenChanges`

<a id="api-2cf08b41819578b9"></a>
<!-- api: M:Inno.Editor.Settings.EditorSettings.ListenChanges(System.Action{Inno.Editor.Settings.EditorSettings}) 9a4efae314fb7827dff6f507f0230f7484493f8cd6bb65176e968c2dd33b423e -->

```csharp
public System.IDisposable Inno.Editor.Settings.EditorSettings.ListenChanges(System.Action<Inno.Editor.Settings.EditorSettings> observer)
```

Observes committed Apply, Undo and Redo changes through an owned Core Event hub.

**Parameter `observer`:** Synchronous callback reading the current committed settings; observer failures are logged and isolated.

**Returns:** A subscription owner that must be disposed before its feature or extension generation retires.

**Throws `System.ArgumentNullException`:** The observer is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Settings/Runtime/EditorSettings.cs#L80).

## `OnDispose`

<a id="api-aeb097e55f697350"></a>
<!-- api: M:Inno.Editor.Settings.EditorSettings.OnDispose 4a880b4fe8cbcff40b8c4e50ac8b96b0cf84d4c27f2e431576240e888896fa4f -->

```csharp
protected override void Inno.Editor.Settings.EditorSettings.OnDispose()
```

Releases resources retained by this feature after it has stopped.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Settings/Runtime/EditorSettings.cs#L231).

## `catalogRevision`

<a id="api-3f20f2e2c713f9d7"></a>
<!-- api: P:Inno.Editor.Settings.EditorSettings.catalogRevision 16b5073677455f54a3ae28fe3b9750fefdf7dbba6e5f96597b163e215af2c657 -->

```csharp
public long Inno.Editor.Settings.EditorSettings.catalogRevision { get; }
```

Gets the current discovered type-catalog revision.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Settings/Runtime/EditorSettings.cs#L103).

## `definitions`

<a id="api-7fcfa8938283631d"></a>
<!-- api: P:Inno.Editor.Settings.EditorSettings.definitions c0ef5bab917c6ed31f28dde1cccfee57c30023d3816c09ab7c0ff2f47c1efd46 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Editor.Settings.EditorSetting> Inno.Editor.Settings.EditorSettings.definitions { get; }
```

Gets all discovered path definitions in deterministic path order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Settings/Runtime/EditorSettings.cs#L107).
