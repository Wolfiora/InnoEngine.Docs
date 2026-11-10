---
title: "EditorContext"
description: "Reference for EditorContext in Inno.Editor.Core."
uid: api.inno.editor.core.34fe6aefc4b257f3
kind: api
owners:
  - Inno.Editor.Core
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-core#lifecycle-and-failure-contracts
---
# `EditorContext`

This reference describes `EditorContext` in `Inno.Editor.Core`. Read the [shared contract](../../projects/inno-editor-core.md#lifecycle-and-failure-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-aa570c1991f51ef2) | Method |
| [`GetLayoutSectionNames`](#api-7b8718c401fb7094) | Method |
| [`RemoveLayoutSection`](#api-885b681ef7923882) | Method |
| [`SaveLayout`](#api-557494db2acd998e) | Method |
| [`SaveLayoutIfChanged`](#api-41aff91a14b50bfc) | Method |
| [`SetImGuiLayout`](#api-41518e0ff8a33d3a) | Method |
| [`SetLayoutSection`](#api-9d8d869bb3aebbaa) | Method |
| [`TryGetLayoutSection`](#api-883f09ae900dca9f) | Method |
| [`frame`](#api-3f23ac3ab6a67183) | Property |
| [`imguiLayout`](#api-383eaf0ea93542e4) | Property |
| [`isFocused`](#api-9004d9bbf0274e21) | Property |
| [`keyboard`](#api-b4ea832b3b012b54) | Property |
| [`layoutPath`](#api-27672bc5e6d79e29) | Property |
| [`projectDirectory`](#api-357bc4fe3ec63570) | Property |
| [`statistics`](#api-b42b3d2d9d9be9b6) | Property |

## Type declaration

<a id="api-34fe6aefc4b257f3"></a>
<!-- api: T:Inno.Editor.Core.EditorContext 2ab755a33912446f2a8ce3d84771ede1755d46f9cddc7f8cd6eb189b485ec517 -->

```csharp
public sealed class Inno.Editor.Core.EditorContext
```

Provides passive project and frame state shared by editor extensions.
Interaction routing is supplied separately by Inno.Editor.Interactions.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorContext.cs#L13).

## `#ctor`

<a id="api-aa570c1991f51ef2"></a>
<!-- api: M:Inno.Editor.Core.EditorContext.#ctor(System.String,Inno.Editor.Core.EditorKeyboardPolicy,System.String) 8a7575b093c02f1b667fddb42a2a655221e3c1bc97ba768ee2532b954cd040bd -->

```csharp
public Inno.Editor.Core.EditorContext.EditorContext(string projectDirectory, Inno.Editor.Core.EditorKeyboardPolicy keyboard, string? initialLayoutDocument = null)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorContext.cs#L41).

## `GetLayoutSectionNames`

<a id="api-7b8718c401fb7094"></a>
<!-- api: M:Inno.Editor.Core.EditorContext.GetLayoutSectionNames(System.String) 3d18e7da136bf4e059fa3ac9d060cae15b9ec350c79abe4075c1f7674352c3ab -->

```csharp
public System.Collections.Generic.IReadOnlyList<string> Inno.Editor.Core.EditorContext.GetLayoutSectionNames(string prefix = "")
```

Gets layout section names matching an ordinal prefix.

**Parameter `prefix`:** The prefix to match, or an empty string for every section.

**Returns:** A stable sorted snapshot of matching section names.

**Throws `System.ArgumentNullException`:** Thrown when `prefix` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorContext.cs#L97).

## `RemoveLayoutSection`

<a id="api-885b681ef7923882"></a>
<!-- api: M:Inno.Editor.Core.EditorContext.RemoveLayoutSection(System.String) efaab9e10b1345cf13d4446942343a9fd4811a2ae87bb493d83f83283f7cb56b -->

```csharp
public bool Inno.Editor.Core.EditorContext.RemoveLayoutSection(string sectionName)
```

Removes one editor layout section from the in-memory document.

**Parameter `sectionName`:** The section name without its INI header syntax.

**Returns:** `true` when an existing section was removed.

**Throws `System.ArgumentException`:** Thrown when `sectionName` is empty or cannot be represented in the layout.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorContext.cs#L156).

## `SaveLayout`

<a id="api-557494db2acd998e"></a>
<!-- api: M:Inno.Editor.Core.EditorContext.SaveLayout e9ac474b3c3ef26d6280cb45a0851f8a7eed35ef602f19c1c00c280b18fc28cf -->

```csharp
public void Inno.Editor.Core.EditorContext.SaveLayout()
```

Atomically rewrites the complete project editor layout document.

**Throws `System.IO.IOException`:** Thrown when the layout document cannot be written atomically.

**Throws `System.UnauthorizedAccessException`:** Thrown when the layout document is inaccessible.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorContext.cs#L192).

## `SaveLayoutIfChanged`

<a id="api-41aff91a14b50bfc"></a>
<!-- api: M:Inno.Editor.Core.EditorContext.SaveLayoutIfChanged 2098883faea2849abaea3ea79e6b75f150697e77892c3d8645d21ad92b3218f6 -->

```csharp
public bool Inno.Editor.Core.EditorContext.SaveLayoutIfChanged()
```

Atomically saves the project editor layout when it changed.

**Returns:** `true` when a changed document was written.

**Throws `System.IO.IOException`:** Thrown when the layout document cannot be written atomically.

**Throws `System.UnauthorizedAccessException`:** Thrown when the layout document is inaccessible.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorContext.cs#L180).

## `SetImGuiLayout`

<a id="api-41518e0ff8a33d3a"></a>
<!-- api: M:Inno.Editor.Core.EditorContext.SetImGuiLayout(System.String) 82d910fb612194b742ecc4d1a60774360f70210fff1b3c3a996bc82030513bd9 -->

```csharp
public void Inno.Editor.Core.EditorContext.SetImGuiLayout(string? value)
```

Replaces the Dear ImGui layout while retaining editor module and panel state sections.

**Parameter `value`:** The complete layout text returned by Dear ImGui.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorContext.cs#L165).

## `SetLayoutSection`

<a id="api-9d8d869bb3aebbaa"></a>
<!-- api: M:Inno.Editor.Core.EditorContext.SetLayoutSection(System.String,System.Collections.Generic.IEnumerable{System.Collections.Generic.KeyValuePair{System.String,System.String}}) 1030f7fb77e1af88e975736482acb3a1d30a1c6fbe3a1ebfff3c9b1cb691ac00 -->

```csharp
public void Inno.Editor.Core.EditorContext.SetLayoutSection(string sectionName, System.Collections.Generic.IEnumerable<System.Collections.Generic.KeyValuePair<string, string>> values)
```

Adds or replaces one human-readable editor layout section in memory.

**Parameter `sectionName`:** The section name without its INI header syntax.

**Parameter `values`:** The complete scalar or JSON-formatted values.

**Throws `System.ArgumentNullException`:** Thrown when `values` is `null`.

**Throws `System.ArgumentException`:** Thrown when a section name, key, or value cannot be represented in the layout.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorContext.cs#L137).

## `TryGetLayoutSection`

<a id="api-883f09ae900dca9f"></a>
<!-- api: M:Inno.Editor.Core.EditorContext.TryGetLayoutSection(System.String,System.Collections.Generic.IReadOnlyDictionary{System.String,System.String}@) e090d585eb5f639b6edd99f6459b8eef6f20766227bfbfd57b3027e53e40279a -->

```csharp
public bool Inno.Editor.Core.EditorContext.TryGetLayoutSection(string sectionName, out System.Collections.Generic.IReadOnlyDictionary<string, string> values)
```

Tries to read one independent editor layout section snapshot.

**Parameter `sectionName`:** The section name without its INI header syntax.

**Parameter `values`:** The copied values when the section exists.

**Returns:** `true` when the requested section exists.

**Throws `System.ArgumentException`:** Thrown when `sectionName` is empty or cannot be represented in the layout.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorContext.cs#L115).

## `frame`

<a id="api-3f23ac3ab6a67183"></a>
<!-- api: P:Inno.Editor.Core.EditorContext.frame 24fe3f41524d6813fc6b4e27b2f94cbad72c72ccc6b0591907a6d41ae42f799c -->

```csharp
public Inno.Editor.Core.EditorFrame Inno.Editor.Core.EditorContext.frame { get; internal set; }
```

Gets the latest immutable editor frame snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorContext.cs#L197).

## `imguiLayout`

<a id="api-383eaf0ea93542e4"></a>
<!-- api: P:Inno.Editor.Core.EditorContext.imguiLayout f51cf25ff507f4a4d5ad64272b164d4de1be46191d10b4c0fd4e7095fdcd2254 -->

```csharp
public string Inno.Editor.Core.EditorContext.imguiLayout { get; }
```

Gets the Dear ImGui layout text without editor module or panel state sections.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorContext.cs#L80).

## `isFocused`

<a id="api-9004d9bbf0274e21"></a>
<!-- api: P:Inno.Editor.Core.EditorContext.isFocused 4a724009884d87769c555cd94ce0856e6f074e8710e2e773157cd9c13527476b -->

```csharp
public bool Inno.Editor.Core.EditorContext.isFocused { get; }
```

Gets whether any editor viewport currently owns application focus.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorContext.cs#L202).

## `keyboard`

<a id="api-b4ea832b3b012b54"></a>
<!-- api: P:Inno.Editor.Core.EditorContext.keyboard e05c2786e601cf36e8a5b9195251f7d8a8b40bf88555ff8ca53a4647aa9b755a -->

```csharp
public Inno.Editor.Core.EditorKeyboardPolicy Inno.Editor.Core.EditorContext.keyboard { get; }
```

Gets the immutable keyboard conventions shared by discovery, dispatch and presentation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorContext.cs#L63).

## `layoutPath`

<a id="api-27672bc5e6d79e29"></a>
<!-- api: P:Inno.Editor.Core.EditorContext.layoutPath a925c5f662b399c088a81bd0d7f68668242bc69b3f14572a6d00c338be327421 -->

```csharp
public string Inno.Editor.Core.EditorContext.layoutPath { get; }
```

Gets the absolute path of the project editor layout document.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorContext.cs#L74).

## `projectDirectory`

<a id="api-357bc4fe3ec63570"></a>
<!-- api: P:Inno.Editor.Core.EditorContext.projectDirectory 0e4a7d632f8da73e02ef47aff686d69bb379251a227f9e4434c1001227dc778b -->

```csharp
public string Inno.Editor.Core.EditorContext.projectDirectory { get; }
```

Gets the normalized project root directory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorContext.cs#L58).

## `statistics`

<a id="api-b42b3d2d9d9be9b6"></a>
<!-- api: P:Inno.Editor.Core.EditorContext.statistics c0b2ae92df07f8a75a39c9b46f3df2d7879192b44ed47fdc60440774ae633a06 -->

```csharp
public Inno.Editor.Core.EditorStatistics Inno.Editor.Core.EditorContext.statistics { get; }
```

Gets the frame-scoped statistics exchange used by independent editor features and viewers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorContext.cs#L68).
