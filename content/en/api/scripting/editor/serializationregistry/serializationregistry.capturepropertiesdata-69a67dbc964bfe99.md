---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.69a67dbc964bfe99308ad43a1258b4c730056d047ee2c641e0f986dd03dd2e80
symbol: scripting:Inno.Core.Serialization:M:InnoEngine.Serialization.SerializationRegistry.CapturePropertiesData(InnoEngine.Serialization.ISerializable,InnoEngine.Serialization.SerializationContext)
title: SerializationRegistry.CapturePropertiesData
kind: api
owners:
- Inno.Core.Serialization
apiSurface: editor-script
sourceFingerprint: fccd4e2c7770dc8dbd9cc003ddd212f59d49bc480c5aa6781609ff3184948424
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `value`:** The serializable object whose persistent properties should be captured.

**Parameter `context`:** Optional immutable converter context.

## Returns

Strictly validated bytes containing independently encoded property values.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `value` is `null`.

**Exception `T:System.InvalidOperationException`:** Thrown when the manager is not initialized.
