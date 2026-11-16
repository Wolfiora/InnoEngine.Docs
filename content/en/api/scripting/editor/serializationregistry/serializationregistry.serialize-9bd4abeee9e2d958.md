---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.9bd4abeee9e2d958d0eb8083f1f9035f3983603521096d58edee38008e048d46
symbol: scripting:Inno.Core.Serialization:M:InnoEngine.Serialization.SerializationRegistry.Serialize``1(``0,InnoEngine.Serialization.SerializationContext)
title: SerializationRegistry.Serialize
kind: api
owners:
- Inno.Core.Serialization
apiSurface: editor-script
reviewed: a3ea6c281dc71329a50623b8c45bebab69a40f7cb8606d4da70c5484fc95edff
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Type parameters

**Type parameter `T`:** The declared concrete root type.

## Parameters

**Parameter `value`:** The root object to serialize.

**Parameter `context`:** Optional immutable converter context.

## Returns

The encoded bytes.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `value` is null.

**Exception `T:System.InvalidOperationException`:** Thrown when the manager is not initialized.
