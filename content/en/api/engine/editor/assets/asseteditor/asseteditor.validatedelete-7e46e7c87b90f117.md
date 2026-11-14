---
uid: api.7e46e7c87b90f117626e344a0c7a546a0875953be952ec90cbecffba242bcd99
symbol: "engine:Inno.Editor.Assets:M:Inno.Editor.Assets.AssetEditor.ValidateDelete(Inno.Editor.Assets.AssetEditorContext)"
source: xml
reviewed: 3b95f81806a288eea677758e7ccb1a2e2d1116c58b68fcf6513345ed1455322b
title: "AssetEditor.ValidateDelete"
kind: api
owners: [Inno.Editor.Assets]
apiSurface: source-clr
---

Validates a requested asset deletion before the AssetPipeline transaction begins.

## Parameters

**Parameter `context`:** The immutable snapshot of the entry that would be deleted.

## Returns

A valid result when the transaction may proceed, or a diagnostic describing the rejection.
