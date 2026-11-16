---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.1ecad2f163baf3f8eed074991dd37423136fc17c1c985e53fd9c84af76021f0e
symbol: scripting:Inno.UI:M:InnoEngine.UI.UI.SetClass(InnoEngine.UI.UiContextHandle,InnoEngine.UI.UiDocumentHandle,System.String,System.String,System.Boolean)
title: UI.SetClass
kind: api
owners:
- Inno.UI
apiSurface: editor-script
reviewed: 42c211217fd06d22dd43d05e0f7bc994cadf0ad018958cedf739cc9fcb8c75cd
apiScope: Runtime
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `context`:** The context that supplies state and services for this operation.

**Parameter `document`:** The document consumed by set class; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `elementId`:** The element id text validated by the set class operation.

**Parameter `className`:** The class name text validated by the set class operation.

**Parameter `active`:** Whether active behavior is enabled while set class executes.

## Returns

`true` when the operation succeeds or its condition is satisfied; otherwise, `false`.
