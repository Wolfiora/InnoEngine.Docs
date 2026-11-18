---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.fb3cb2f1f9e35fc61ef7ecfc270881c4c757569c5634368ae24cd20b5a0dbfaa
symbol: scripting:Inno.Core.Serialization:M:InnoEngine.Serialization.SerializationRegistry.Encode(System.Action{InnoEngine.Serialization.SerializationWriter},InnoEngine.Serialization.SerializationContext)
title: SerializationRegistry.Encode
kind: api
owners:
- Inno.Core.Serialization
apiSurface: editor-script
sourceFingerprint: 9b54d646c8414dbbfc7445b01fcdc854f6d0985e57da2e2fb8c7c302c9c2fb72
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `write`:** The callback that writes the root object.

**Parameter `context`:** Optional immutable converter context.

## Returns

The encoded bytes.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `write` is null.

**Exception `T:System.InvalidOperationException`:** Thrown when the manager is not initialized.
