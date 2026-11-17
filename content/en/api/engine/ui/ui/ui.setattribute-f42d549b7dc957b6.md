---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.f42d549b7dc957b65fe1c3044c80b486dd9aa5b2e8de91b0aa5a39bd7b387d06
symbol: engine:Inno.UI:M:Inno.UI.UI.SetAttribute(Inno.UI.UiContextHandle,Inno.UI.UiDocumentHandle,System.String,System.String,System.String)
title: UI.SetAttribute
kind: api
owners:
- Inno.UI
apiSurface: source-clr
reviewed: dae1e5074928d9320d9367c087460185db2b7cf0c7ce637044a2f7349e3a6db3
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `context`:** The context that supplies state and services for this operation.

**Parameter `document`:** The document consumed by set attribute; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `elementId`:** The element id text validated by the set attribute operation.

**Parameter `name`:** The human-readable name used for presentation and diagnostics.

**Parameter `value`:** The concrete value read or transformed by this operation.

## Returns

`true` when the operation succeeds or its condition is satisfied; otherwise, `false`.
