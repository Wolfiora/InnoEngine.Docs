---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.cd577d4ad9cdeb24eb2d142d4a662be575adc1ea4dece08762fb8d9b57b7ed28
symbol: scripting:Inno.Editor.Assets:M:InnoEditor.Assets.AssetEditor.ValidateDelete(InnoEditor.Assets.AssetEditorContext)
title: AssetEditor.ValidateDelete
kind: api
owners:
- Inno.Editor.Assets
apiSurface: editor-script
reviewed: 850c1883257646bca5ae75be781359a77b656a7820912563f8e47974c09c9092
apiScope: Editor

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Validates a requested asset deletion before the AssetPipeline transaction begins.

## Parameters

**Parameter `context`:** The immutable snapshot of the entry that would be deleted.

## Returns

A valid result when the transaction may proceed, or a diagnostic describing the rejection.
