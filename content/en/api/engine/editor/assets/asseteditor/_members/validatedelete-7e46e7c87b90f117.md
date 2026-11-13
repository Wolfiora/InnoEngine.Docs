---
uid: api.7e46e7c87b90f117626e344a0c7a546a0875953be952ec90cbecffba242bcd99
symbol: "engine:Inno.Editor.Assets:M:Inno.Editor.Assets.AssetEditor.ValidateDelete(Inno.Editor.Assets.AssetEditorContext)"
source: xml
reviewed: a06ad4f233396da3233c911e325cf6e6bb423fe4c62468b4f6dba5a4d62a0fc4
title: "ValidateDelete"
kind: api
owners: [Inno.Editor.Assets]
apiSurface: source-clr
---

Validates a requested asset deletion before the AssetPipeline transaction begins.

**Parameter `context`:** The immutable snapshot of the entry that would be deleted.

**Returns:** A valid result when the transaction may proceed, or a diagnostic describing the rejection.
