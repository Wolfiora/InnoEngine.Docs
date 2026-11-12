---
title: "EditorSettings"
description: "Reference for EditorSettings in Inno.Editor.Settings."
uid: api.inno.editor.settings.editor-script.fe6ae72b922ff404
kind: api
owners:
  - Inno.Editor.Settings
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-settings#identity-and-use-contracts
  - manual.scripting.use-script-api
---
# `EditorSettings`

This reference describes `EditorSettings` in `Inno.Editor.Settings`. Read the [shared contract](../../projects/inno-editor-settings.md#identity-and-use-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `InnoEditor.Core.EditorModule`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-a90d19b938fad888) | Method |
| [`Apply`](#api-8a4fb31fabf6e29c) | Method |
| [`Get`](#api-6d988468346a45c7) | Method |
| [`ListenChanges`](#api-23977f649e0fd062) | Method |
| [`OnDispose`](#api-2812c7e55c51fd8a) | Method |
| [`catalogRevision`](#api-fc35aec0cccdf7f6) | Property |
| [`definitions`](#api-881f0d910410ca76) | Property |

## Type declaration

<a id="api-fe6ae72b922ff404"></a>
<!-- api: T:InnoEditor.Settings.EditorSettings e4a84ee0a6156dd484cc7bdb73ebea97799a6bf86ed72cdf5e4ac168adc37e32 -->

```csharp
public sealed class InnoEditor.Settings.EditorSettings : InnoEditor.Core.EditorModule
```

Owns the discovered Settings catalog and the project-root Settings document.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Settings/Runtime/EditorSettings.cs#L16).

## `#ctor`

<a id="api-a90d19b938fad888"></a>
<!-- api: M:InnoEditor.Settings.EditorSettings.#ctor 1e2d9e8f6687cacbb8c5e20abb18953dafe8ff65745fca08bb61ac4813d12f2c -->

```csharp
public InnoEditor.Settings.EditorSettings.EditorSettings()
```

Appears in the generated script reference without a matching public or protected engine constructor.

**Constraints:** This is an IDE projection artifact, not a supported construction path. Do not call this constructor from scripts; obtain the instance through the containing type's documented owner or factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Settings/Runtime/EditorSettings.cs#L16).

## `Apply`

<a id="api-8a4fb31fabf6e29c"></a>
<!-- api: M:InnoEditor.Settings.EditorSettings.Apply(System.Collections.Generic.IReadOnlyDictionary{System.String,InnoEditor.Settings.EditorSettingObject},System.Collections.Generic.IReadOnlySet{System.String}) 93bd21752dee8604878a53f9fd809a834728b7bc082a4e34df04015528996d8a -->

```csharp
public bool InnoEditor.Settings.EditorSettings.Apply(System.Collections.Generic.IReadOnlyDictionary<string, InnoEditor.Settings.EditorSettingObject> values, System.Collections.Generic.IReadOnlySet<string>? resets = null)
```

Atomically applies staged field objects as one shared Undo and Redo history entry.

**Parameter `values`:** The complete or partial path-addressed objects to apply from the active catalog.

**Parameter `resets`:** Optional paths whose persisted overrides are removed during the same Apply.

**Returns:** `true` when the persisted document changed and one history entry was recorded.

**Throws `System.ArgumentNullException`:** Thrown when `values` is `null` or contains a null object.

**Throws `System.ArgumentException`:** Thrown when a supplied path is invalid, absent, or describes a page.

**Throws `System.IO.IOException`:** Thrown when the project-root document or its history payload cannot be written.

**Throws `System.UnauthorizedAccessException`:** Thrown when the project-root document is inaccessible.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Settings/Runtime/EditorSettings.cs#L154).

## `Get`

<a id="api-6d988468346a45c7"></a>
<!-- api: M:InnoEditor.Settings.EditorSettings.Get(System.String) 9851d7dbc60263d8561b3c3e2e42c065e9abfd5cff10a3ff5018081f3aab94eb -->

```csharp
public InnoEditor.Settings.EditorSettingObject InnoEditor.Settings.EditorSettings.Get(string path)
```

Reads an isolated effective object from one complete Settings path.

**Parameter `path`:** The slash-delimited Settings field path.

**Returns:** The stored object, or an isolated copy of the field's default object.

**Throws `System.ArgumentException`:** Thrown when `path` is invalid, missing, or describes a page.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Settings/Runtime/EditorSettings.cs#L121).

## `ListenChanges`

<a id="api-23977f649e0fd062"></a>
<!-- api: M:InnoEditor.Settings.EditorSettings.ListenChanges(System.Action{InnoEditor.Settings.EditorSettings}) 40cbb5d0c752241fdff56b7c79c3e229921a5f02d2f69b9e8c1e7e32c075efdf -->

```csharp
public System.IDisposable InnoEditor.Settings.EditorSettings.ListenChanges(System.Action<InnoEditor.Settings.EditorSettings> observer)
```

Observes committed Apply, Undo and Redo changes through an owned Core Event hub.

**Parameter `observer`:** Synchronous callback reading the current committed settings; observer failures are logged and isolated.

**Returns:** A subscription owner that must be disposed before its feature or extension generation retires.

**Throws `System.ArgumentNullException`:** The observer is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Settings/Runtime/EditorSettings.cs#L80).

## `OnDispose`

<a id="api-2812c7e55c51fd8a"></a>
<!-- api: M:InnoEditor.Settings.EditorSettings.OnDispose bb7568a5b00a977bfb93af67c862fb41ae4a6d6cdc73f3efc615c558f721f707 -->

```csharp
protected override void InnoEditor.Settings.EditorSettings.OnDispose()
```

Releases resources retained by this feature after it has stopped.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Settings/Runtime/EditorSettings.cs#L231).

## `catalogRevision`

<a id="api-fc35aec0cccdf7f6"></a>
<!-- api: P:InnoEditor.Settings.EditorSettings.catalogRevision 34fb6558516e1a07127d3efb7df667b9da8c9fefff8be00231243673a3c6fdc5 -->

```csharp
public long InnoEditor.Settings.EditorSettings.catalogRevision { get; }
```

Gets the current discovered type-catalog revision.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Settings/Runtime/EditorSettings.cs#L103).

## `definitions`

<a id="api-881f0d910410ca76"></a>
<!-- api: P:InnoEditor.Settings.EditorSettings.definitions a711a7e7a68c36eb3977bece261e65309b9dae92043cb13029eee0707732a082 -->

```csharp
public System.Collections.Generic.IReadOnlyList<InnoEditor.Settings.EditorSetting> InnoEditor.Settings.EditorSettings.definitions { get; }
```

Gets all discovered path definitions in deterministic path order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Settings/Runtime/EditorSettings.cs#L107).
