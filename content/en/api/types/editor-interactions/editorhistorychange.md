---
title: "EditorHistoryChange"
description: "Reference for EditorHistoryChange in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.209cf03422f12410
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
---
# `EditorHistoryChange`

This reference describes `EditorHistoryChange` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-44bf62f494911288) | Method |
| [`Dispose`](#api-ae448dff97791093) | Method |
| [`kind`](#api-19deab77d90edf12) | Property |
| [`mergeKey`](#api-f5a4fd4bd9c11416) | Property |
| [`payload`](#api-e36a375b043c50de) | Property |

## Type declaration

<a id="api-209cf03422f12410"></a>
<!-- api: T:Inno.Editor.Interactions.EditorHistoryChange c186770f067bcb1c5036bd06c8c45308eb10266bcc5865be925e8558155dc7f5 -->

```csharp
public sealed class Inno.Editor.Interactions.EditorHistoryChange : System.IDisposable
```

Describes one neutral reload-safe mutation interpreted by an attribute-discovered history handler.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryChange.cs#L8).

## `#ctor`

<a id="api-44bf62f494911288"></a>
<!-- api: M:Inno.Editor.Interactions.EditorHistoryChange.#ctor(System.String,Inno.Editor.Interactions.EditorHistoryPayload,System.String) 4ea2f0440fcf6cc6a83fac2a16860bbe2545bb4a5015abaea73e6ccc1d678c19 -->

```csharp
public Inno.Editor.Interactions.EditorHistoryChange.EditorHistoryChange(string kind, Inno.Editor.Interactions.EditorHistoryPayload payload, string? mergeKey = null)
```

Creates a neutral history change.

**Parameter `kind`:** The stable globally unique handler protocol identifier.

**Parameter `payload`:** The immutable neutral payload interpreted by the handler.

**Parameter `mergeKey`:** An optional stable key used by the handler to merge adjacent changes.

**Throws `System.ArgumentException`:** Thrown when `kind` is empty.

**Throws `System.ArgumentNullException`:** Thrown when `payload` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryChange.cs#L30).

## `Dispose`

<a id="api-ae448dff97791093"></a>
<!-- api: M:Inno.Editor.Interactions.EditorHistoryChange.Dispose 066916c210f554e4f2ee1eb405ff51c37c3bab4996fd23dcee946b03ba75f0b3 -->

```csharp
public void Inno.Editor.Interactions.EditorHistoryChange.Dispose()
```

Releases the payload storage owned by this history change.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryChange.cs#L73).

## `kind`

<a id="api-19deab77d90edf12"></a>
<!-- api: P:Inno.Editor.Interactions.EditorHistoryChange.kind d374961b87593399da7f4c58772a26c4c689e725e9fe3abf76bb25c05f69a3f0 -->

```csharp
public string Inno.Editor.Interactions.EditorHistoryChange.kind { get; }
```

Gets the stable globally unique handler protocol identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryChange.cs#L44).

## `mergeKey`

<a id="api-f5a4fd4bd9c11416"></a>
<!-- api: P:Inno.Editor.Interactions.EditorHistoryChange.mergeKey 2c8b0820fc118ccb5999d761dbbba18a5145be586c84b446bee129bd96550e9c -->

```csharp
public string? Inno.Editor.Interactions.EditorHistoryChange.mergeKey { get; }
```

Gets the optional stable key used to merge adjacent changes to the same logical value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryChange.cs#L54).

## `payload`

<a id="api-e36a375b043c50de"></a>
<!-- api: P:Inno.Editor.Interactions.EditorHistoryChange.payload 19a86f44cd0f9707eeb0022b898e26442ced87a3e34f854a79b2ce597dd19696 -->

```csharp
public Inno.Editor.Interactions.EditorHistoryPayload Inno.Editor.Interactions.EditorHistoryChange.payload { get; }
```

Gets the immutable neutral payload interpreted by the active handler generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryChange.cs#L49).
