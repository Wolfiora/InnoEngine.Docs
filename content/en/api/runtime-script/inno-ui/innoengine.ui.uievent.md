---
title: "UiEvent"
description: "Reference for UiEvent in Inno.UI."
uid: api.inno.ui.runtime-script.819f7e55766abb72
kind: api
owners:
  - Inno.UI
apiSurface: runtime-script
contracts:
  - project.inno-ui#document-and-frame-contract
  - manual.scripting.use-script-api
---
# `UiEvent`

This reference describes `UiEvent` in `Inno.UI`. Read the [shared contract](../../projects/inno-ui.md#document-and-frame-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `InnoEngine.Events.Event`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-f2a34526b4009fd3) | Method |
| [`document`](#api-af96c0e5039b7795) | Property |
| [`targetId`](#api-30f38435f361a267) | Property |
| [`type`](#api-21251b163a564e96) | Property |

## Type declaration

<a id="api-819f7e55766abb72"></a>
<!-- api: T:InnoEngine.UI.UiEvent c60b6e3b328d127f9dd6f446eee80ef619ad6667bd4e01c473372f72351e7894 -->

```csharp
public sealed class InnoEngine.UI.UiEvent : InnoEngine.Events.Event
```

Describes one queued document event after a context update.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiTypes.cs#L229).

## `#ctor`

<a id="api-f2a34526b4009fd3"></a>
<!-- api: M:InnoEngine.UI.UiEvent.#ctor(InnoEngine.UI.UiEventType,InnoEngine.UI.UiDocumentHandle,System.String) 962519405a0324149ac7e56d72e7df42039465d2f0acb3d2bd0987b1927aa856 -->

```csharp
public InnoEngine.UI.UiEvent.UiEvent(InnoEngine.UI.UiEventType type, InnoEngine.UI.UiDocumentHandle document, string targetId)
```

Creates a document event with its source document and target element.

**Parameter `type`:** The kind of document interaction.

**Parameter `document`:** The document that produced the event.

**Parameter `targetId`:** The target element identifier, which can be empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiTypes.cs#L243).

## `document`

<a id="api-af96c0e5039b7795"></a>
<!-- api: P:InnoEngine.UI.UiEvent.document 8b59658b13ce3686605c54fcc54c66a30d4103f8e4adc38e51d3a79015aabb4d -->

```csharp
public InnoEngine.UI.UiDocumentHandle InnoEngine.UI.UiEvent.document { get; }
```

Gets the source document.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiTypes.cs#L261).

## `targetId`

<a id="api-30f38435f361a267"></a>
<!-- api: P:InnoEngine.UI.UiEvent.targetId dea37d439ab5f540940670d4eb0edeb8c6edd7979b5a9a9dcaff2780bf1fdde0 -->

```csharp
public string InnoEngine.UI.UiEvent.targetId { get; }
```

Gets the target element identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiTypes.cs#L266).

## `type`

<a id="api-21251b163a564e96"></a>
<!-- api: P:InnoEngine.UI.UiEvent.type 23587f022d6dd07e800823d6670bab09d45a26d19807de8889a14ead8d1989e4 -->

```csharp
public InnoEngine.UI.UiEventType InnoEngine.UI.UiEvent.type { get; }
```

Gets the kind of document interaction.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiTypes.cs#L256).
