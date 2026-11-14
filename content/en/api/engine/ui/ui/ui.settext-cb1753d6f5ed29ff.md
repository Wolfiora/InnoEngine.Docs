---
uid: api.cb1753d6f5ed29fff4561be6d5c3af9315d1eb653cdb3208cc06f3ce4e60799d
symbol: "engine:Inno.UI:M:Inno.UI.UI.SetText(Inno.UI.UiContextHandle,Inno.UI.UiDocumentHandle,System.String,System.String)"
source: xml
reviewed: e461443b9f009f6f53395d643dbf503a66d0f22c963af719fa982c1f15bb8c61
title: "UI.SetText"
kind: api
owners: [Inno.UI]
apiSurface: source-clr
---

Replaces an element's children with plain Unicode text.

## Parameters

**Parameter `context`:** The context that supplies state and services for this operation.

**Parameter `document`:** The document consumed by set text; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `elementId`:** The element id text validated by the set text operation.

**Parameter `text`:** The text text validated by the set text operation.

## Returns

`true` when the operation succeeds or its condition is satisfied; otherwise, `false`.
