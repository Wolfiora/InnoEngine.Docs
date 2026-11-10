---
title: "EditorHistoryOptions"
description: "Reference for EditorHistoryOptions in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.6ce72d94ee27a552
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
---
# `EditorHistoryOptions`

This reference describes `EditorHistoryOptions` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-e7e7ffc29630181f) | Method |
| [`cacheDirectory`](#api-2644972cb5c3c5b6) | Property |
| [`inlinePayloadThreshold`](#api-062ff79fd88264b8) | Property |
| [`maxDiskBytes`](#api-00f8eebd7b0926ee) | Property |
| [`maxEntries`](#api-5cc42335aaef37fb) | Property |
| [`maxResidentBytes`](#api-72d0f9599ef2ac1c) | Property |

## Type declaration

<a id="api-6ce72d94ee27a552"></a>
<!-- api: T:Inno.Editor.Interactions.EditorHistoryOptions fc19ccd2b4d9bd6f996b3317db9b8e2e185b57a9a495fea01facdf0697f5fe10 -->

```csharp
public sealed class Inno.Editor.Interactions.EditorHistoryOptions
```

Configures retention and payload storage for one editor history.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryOptions.cs#L8).

## `#ctor`

<a id="api-e7e7ffc29630181f"></a>
<!-- api: M:Inno.Editor.Interactions.EditorHistoryOptions.#ctor 927f80b351e80a18fb95edddb8600784559b0f33bfb18575e41ebf193d6ab2f8 -->

```csharp
public Inno.Editor.Interactions.EditorHistoryOptions.EditorHistoryOptions()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryOptions.cs#L8).

## `cacheDirectory`

<a id="api-2644972cb5c3c5b6"></a>
<!-- api: P:Inno.Editor.Interactions.EditorHistoryOptions.cacheDirectory 90064892fba6120254899cca9159732521ca159e94b3e6c6cc9f53cd7965e737 -->

```csharp
public string? Inno.Editor.Interactions.EditorHistoryOptions.cacheDirectory { get; init; }
```

Gets or initializes the optional directory that owns temporary history payloads for this editor session.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryOptions.cs#L33).

## `inlinePayloadThreshold`

<a id="api-062ff79fd88264b8"></a>
<!-- api: P:Inno.Editor.Interactions.EditorHistoryOptions.inlinePayloadThreshold 91496d473c453cad4cc57ea0ec4d5e02f48b5e1c8910b1308a11946fbf2ced67 -->

```csharp
public int Inno.Editor.Interactions.EditorHistoryOptions.inlinePayloadThreshold { get; init; }
```

Gets or initializes the payload size at which immutable bytes are moved to the temporary disk store.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryOptions.cs#L28).

## `maxDiskBytes`

<a id="api-00f8eebd7b0926ee"></a>
<!-- api: P:Inno.Editor.Interactions.EditorHistoryOptions.maxDiskBytes c57d351da946273dafa971d2e2987750634695900844359f526992d24c8845f4 -->

```csharp
public long Inno.Editor.Interactions.EditorHistoryOptions.maxDiskBytes { get; init; }
```

Gets or initializes the maximum payload bytes retained in the temporary disk store.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryOptions.cs#L23).

## `maxEntries`

<a id="api-5cc42335aaef37fb"></a>
<!-- api: P:Inno.Editor.Interactions.EditorHistoryOptions.maxEntries 3b4ed59640504070b9396f090a1ca484c7b1936c43c92242bf2a126226db1356 -->

```csharp
public int Inno.Editor.Interactions.EditorHistoryOptions.maxEntries { get; init; }
```

Gets or initializes the maximum number of committed top-level entries retained in memory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryOptions.cs#L13).

## `maxResidentBytes`

<a id="api-72d0f9599ef2ac1c"></a>
<!-- api: P:Inno.Editor.Interactions.EditorHistoryOptions.maxResidentBytes 435e76cc3cd5b6feeafc3d66f65c11d962549689138656a7a7b622fbd47c6d6c -->

```csharp
public long Inno.Editor.Interactions.EditorHistoryOptions.maxResidentBytes { get; init; }
```

Gets or initializes the maximum estimated resident payload bytes retained by the history.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryOptions.cs#L18).
