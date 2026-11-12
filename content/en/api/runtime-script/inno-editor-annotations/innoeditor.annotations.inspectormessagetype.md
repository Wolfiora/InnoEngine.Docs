---
title: "InspectorMessageType"
description: "Reference for InspectorMessageType in Inno.Editor.Annotations."
uid: api.inno.editor.annotations.runtime-script.2527c89ee8f9f17c
kind: api
owners:
  - Inno.Editor.Annotations
apiSurface: runtime-script
contracts:
  - api.projects.inno-editor-annotations#loading-and-script-availability
  - manual.scripting.use-script-api
---
# `InspectorMessageType`

This reference describes `InspectorMessageType` in `Inno.Editor.Annotations`. Read the [shared contract](../../projects/inno-editor-annotations.md#loading-and-script-availability) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Error`](#api-16ec6613180fc67b) | Field |
| [`Info`](#api-f9a9ff1534fbc0a5) | Field |
| [`Warning`](#api-fbb71b9ed3d0ff84) | Field |

## Type declaration

<a id="api-2527c89ee8f9f17c"></a>
<!-- api: T:InnoEditor.Annotations.InspectorMessageType 87644a337edc16991e7d2f6c4e6adcd8f85d7e6704396c99731343b78d48f2f5 -->

```csharp
public enum InnoEditor.Annotations.InspectorMessageType : int
```

Selects the visual severity of an Inspector help message.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L405).

## `Error`

<a id="api-16ec6613180fc67b"></a>
<!-- api: F:InnoEditor.Annotations.InspectorMessageType.Error 336a19fad9926d1de84bc6458aa26587a16a3a789a623b2295258ae3677812ca -->

```csharp
InnoEditor.Annotations.InspectorMessageType.Error = 2
```

An invalid or unusable configuration.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L420).

## `Info`

<a id="api-f9a9ff1534fbc0a5"></a>
<!-- api: F:InnoEditor.Annotations.InspectorMessageType.Info cadde9150b1a25abad09e14b5a194d974dd2ec510936a3b5a9a7ffc39bccace6 -->

```csharp
InnoEditor.Annotations.InspectorMessageType.Info = 0
```

Neutral explanatory information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L410).

## `Warning`

<a id="api-fbb71b9ed3d0ff84"></a>
<!-- api: F:InnoEditor.Annotations.InspectorMessageType.Warning 7527be865f4474d3d924929d04a296d8f43a3016b5fca772651f43a9f681fdcb -->

```csharp
InnoEditor.Annotations.InspectorMessageType.Warning = 1
```

A non-blocking configuration warning.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L415).
