---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.fb3cb2f1f9e35fc61ef7ecfc270881c4c757569c5634368ae24cd20b5a0dbfaa
symbol: scripting:Inno.Core.Serialization:M:InnoEngine.Serialization.SerializationRegistry.Encode(System.Action{InnoEngine.Serialization.SerializationWriter},InnoEngine.Serialization.SerializationContext)
title: SerializationRegistry.Encode
kind: api
owners:
- Inno.Core.Serialization
apiSurface: editor-script
reviewed: 9aa9c0e05f15f32b4e1ed1dc581fdb34c639712874a3a8ad37c63f3984cd5bca
apiScope: Editor

# Authoring metadata. Edit these fields and the explanation below.
source: xml
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
