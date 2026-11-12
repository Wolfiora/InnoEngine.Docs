---
title: "EditorContext"
description: "Reference for EditorContext in Inno.Editor.Core."
uid: api.inno.editor.core.editor-script.c145833d557961e2
kind: api
owners:
  - Inno.Editor.Core
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-core#lifecycle-and-failure-contracts
  - manual.scripting.use-script-api
---
# `EditorContext`

This reference describes `EditorContext` in `Inno.Editor.Core`. Read the [shared contract](../../projects/inno-editor-core.md#lifecycle-and-failure-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-c9b359c3f9d01aa2) | Method |
| [`GetLayoutSectionNames`](#api-223253623e74e175) | Method |
| [`RemoveLayoutSection`](#api-c323a00026b794e6) | Method |
| [`SaveLayout`](#api-2cd0161b0a30bcc5) | Method |
| [`SaveLayoutIfChanged`](#api-5b4a02c1e8678db8) | Method |
| [`SetImGuiLayout`](#api-a38098bc3ee3d335) | Method |
| [`SetLayoutSection`](#api-f001d9ff160681e1) | Method |
| [`TryGetLayoutSection`](#api-3da6dd1583d434fc) | Method |
| [`frame`](#api-1b508876fc85d06a) | Property |
| [`imguiLayout`](#api-8fc469c22fbd73b8) | Property |
| [`isFocused`](#api-5d0c260e57810512) | Property |
| [`keyboard`](#api-dc9eccf2120ae4eb) | Property |
| [`layoutPath`](#api-082ce98176d42395) | Property |
| [`projectDirectory`](#api-4e97cc5ad601b6e7) | Property |
| [`statistics`](#api-6d3797445655da20) | Property |

## Type declaration

<a id="api-c145833d557961e2"></a>
<!-- api: T:InnoEditor.Core.EditorContext bdc2b8fc29a143188357a60140b2cbee5a4933de6a34ef580070a2740faaa971 -->

```csharp
public sealed class InnoEditor.Core.EditorContext
```

Provides passive project and frame state shared by editor extensions.
Interaction routing is supplied separately by Inno.Editor.Interactions.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorContext.cs#L13).

## `#ctor`

<a id="api-c9b359c3f9d01aa2"></a>
<!-- api: M:InnoEditor.Core.EditorContext.#ctor(System.String,InnoEditor.Core.EditorKeyboardPolicy,System.String) 5178a750fa90389fc36c0aa4f6cc287ebd89a04c4fb4cece6650f2d1365127b2 -->

```csharp
public InnoEditor.Core.EditorContext.EditorContext(string projectDirectory, InnoEditor.Core.EditorKeyboardPolicy keyboard, string? initialLayoutDocument = null)
```

Creates a passive editor context for one project.

**Parameter `projectDirectory`:** The project root containing Assets and Library.

**Parameter `keyboard`:** The explicit immutable conventions selected by product composition.

**Parameter `initialLayoutDocument`:** An optional host-owned initial settings document, installed atomically only when
`editor.ini` does not exist. Existing documents, including empty files, are preserved.

**Throws `System.ArgumentNullException`:** The keyboard policy is null.

**Throws `System.ArgumentException`:** Thrown when `projectDirectory` is empty.

**Throws `System.IO.IOException`:** The current document cannot be read or its initial document cannot be installed.

**Throws `System.UnauthorizedAccessException`:** The caller cannot access or initialize the project settings document.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorContext.cs#L41).

## `GetLayoutSectionNames`

<a id="api-223253623e74e175"></a>
<!-- api: M:InnoEditor.Core.EditorContext.GetLayoutSectionNames(System.String) 8f4e7137e9847e4ff91f6b4b6d36d4a3d546d427a5099e2c3cb1230cc28049bf -->

```csharp
public System.Collections.Generic.IReadOnlyList<string> InnoEditor.Core.EditorContext.GetLayoutSectionNames(string prefix = "")
```

Gets layout section names matching an ordinal prefix.

**Parameter `prefix`:** The prefix to match, or an empty string for every section.

**Returns:** A stable sorted snapshot of matching section names.

**Throws `System.ArgumentNullException`:** Thrown when `prefix` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorContext.cs#L97).

## `RemoveLayoutSection`

<a id="api-c323a00026b794e6"></a>
<!-- api: M:InnoEditor.Core.EditorContext.RemoveLayoutSection(System.String) 6b40096e22a08c6dff2eec417ba4770e94616ea285e8c43bf5dc0fc04227ecf5 -->

```csharp
public bool InnoEditor.Core.EditorContext.RemoveLayoutSection(string sectionName)
```

Removes one editor layout section from the in-memory document.

**Parameter `sectionName`:** The section name without its INI header syntax.

**Returns:** `true` when an existing section was removed.

**Throws `System.ArgumentException`:** Thrown when `sectionName` is empty or cannot be represented in the layout.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorContext.cs#L156).

## `SaveLayout`

<a id="api-2cd0161b0a30bcc5"></a>
<!-- api: M:InnoEditor.Core.EditorContext.SaveLayout 228113050c7baa38fda63ba033ef10bb99000d90ca895e745f4b609a2142b0eb -->

```csharp
public void InnoEditor.Core.EditorContext.SaveLayout()
```

Atomically rewrites the complete project editor layout document.

**Throws `System.IO.IOException`:** Thrown when the layout document cannot be written atomically.

**Throws `System.UnauthorizedAccessException`:** Thrown when the layout document is inaccessible.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorContext.cs#L192).

## `SaveLayoutIfChanged`

<a id="api-5b4a02c1e8678db8"></a>
<!-- api: M:InnoEditor.Core.EditorContext.SaveLayoutIfChanged ff360216f8f7863f5ad52a8d7c36c3b02f637dd529fb45fd8e0921b4966f0257 -->

```csharp
public bool InnoEditor.Core.EditorContext.SaveLayoutIfChanged()
```

Atomically saves the project editor layout when it changed.

**Returns:** `true` when a changed document was written.

**Throws `System.IO.IOException`:** Thrown when the layout document cannot be written atomically.

**Throws `System.UnauthorizedAccessException`:** Thrown when the layout document is inaccessible.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorContext.cs#L180).

## `SetImGuiLayout`

<a id="api-a38098bc3ee3d335"></a>
<!-- api: M:InnoEditor.Core.EditorContext.SetImGuiLayout(System.String) 0f875a60e414934ae7215ef5fce34e58000a4ccbfa0d051900f668d34a5f2089 -->

```csharp
public void InnoEditor.Core.EditorContext.SetImGuiLayout(string? value)
```

Replaces the Dear ImGui layout while retaining editor module and panel state sections.

**Parameter `value`:** The complete layout text returned by Dear ImGui.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorContext.cs#L165).

## `SetLayoutSection`

<a id="api-f001d9ff160681e1"></a>
<!-- api: M:InnoEditor.Core.EditorContext.SetLayoutSection(System.String,System.Collections.Generic.IEnumerable{System.Collections.Generic.KeyValuePair{System.String,System.String}}) ed4b162d0f00e046d8880e44fa138bea03c47e1664d7753a36d96234207830f1 -->

```csharp
public void InnoEditor.Core.EditorContext.SetLayoutSection(string sectionName, System.Collections.Generic.IEnumerable<System.Collections.Generic.KeyValuePair<string, string>> values)
```

Adds or replaces one human-readable editor layout section in memory.

**Parameter `sectionName`:** The section name without its INI header syntax.

**Parameter `values`:** The complete scalar or JSON-formatted values.

**Throws `System.ArgumentNullException`:** Thrown when `values` is `null`.

**Throws `System.ArgumentException`:** Thrown when a section name, key, or value cannot be represented in the layout.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorContext.cs#L137).

## `TryGetLayoutSection`

<a id="api-3da6dd1583d434fc"></a>
<!-- api: M:InnoEditor.Core.EditorContext.TryGetLayoutSection(System.String,System.Collections.Generic.IReadOnlyDictionary{System.String,System.String}@) 4d0461ab8324d018b8e902098678a2af84ad6b71e0be20006ae266e837e27f57 -->

```csharp
public bool InnoEditor.Core.EditorContext.TryGetLayoutSection(string sectionName, out System.Collections.Generic.IReadOnlyDictionary<string, string> values)
```

Tries to read one independent editor layout section snapshot.

**Parameter `sectionName`:** The section name without its INI header syntax.

**Parameter `values`:** The copied values when the section exists.

**Returns:** `true` when the requested section exists.

**Throws `System.ArgumentException`:** Thrown when `sectionName` is empty or cannot be represented in the layout.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorContext.cs#L115).

## `frame`

<a id="api-1b508876fc85d06a"></a>
<!-- api: P:InnoEditor.Core.EditorContext.frame 19b14256b735d1c54650e2c61c7be195798ef3d7c3ff369092af60288828ff3a -->

```csharp
public InnoEditor.Core.EditorFrame InnoEditor.Core.EditorContext.frame { get; }
```

Gets the latest immutable editor frame snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorContext.cs#L197).

## `imguiLayout`

<a id="api-8fc469c22fbd73b8"></a>
<!-- api: P:InnoEditor.Core.EditorContext.imguiLayout df26bdfe425c67ed525f78ba5bc77a07d5edccee6bfccb84df67308c033f2d9a -->

```csharp
public string InnoEditor.Core.EditorContext.imguiLayout { get; }
```

Gets the Dear ImGui layout text without editor module or panel state sections.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorContext.cs#L80).

## `isFocused`

<a id="api-5d0c260e57810512"></a>
<!-- api: P:InnoEditor.Core.EditorContext.isFocused 6096a3bd31d971545c71130462897da6b08f6fcd8d9da8c3d3def40263cf897e -->

```csharp
public bool InnoEditor.Core.EditorContext.isFocused { get; }
```

Gets whether any editor viewport currently owns application focus.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorContext.cs#L202).

## `keyboard`

<a id="api-dc9eccf2120ae4eb"></a>
<!-- api: P:InnoEditor.Core.EditorContext.keyboard 73930d4cf9d92b9b7f8b2a41d890dfe323ece0e2d3736f83bfe859ccfb4cd5d8 -->

```csharp
public InnoEditor.Core.EditorKeyboardPolicy InnoEditor.Core.EditorContext.keyboard { get; }
```

Gets the immutable keyboard conventions shared by discovery, dispatch and presentation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorContext.cs#L63).

## `layoutPath`

<a id="api-082ce98176d42395"></a>
<!-- api: P:InnoEditor.Core.EditorContext.layoutPath c39a977eebc06cf29ffc6de82dce30f00270f9f7f61b93cd85b5bef28a738155 -->

```csharp
public string InnoEditor.Core.EditorContext.layoutPath { get; }
```

Gets the absolute path of the project editor layout document.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorContext.cs#L74).

## `projectDirectory`

<a id="api-4e97cc5ad601b6e7"></a>
<!-- api: P:InnoEditor.Core.EditorContext.projectDirectory 84f2e64e8bd971933ff08887790ec39e7ec0dedbab87202189d5f77cc63ee29d -->

```csharp
public string InnoEditor.Core.EditorContext.projectDirectory { get; }
```

Gets the normalized project root directory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorContext.cs#L58).

## `statistics`

<a id="api-6d3797445655da20"></a>
<!-- api: P:InnoEditor.Core.EditorContext.statistics 22eea8b73daaf710212162b7575ac4ed794b166830065683c090957fb32290da -->

```csharp
public InnoEditor.Core.EditorStatistics InnoEditor.Core.EditorContext.statistics { get; }
```

Gets the frame-scoped statistics exchange used by independent editor features and viewers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorContext.cs#L68).
